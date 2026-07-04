const rawPosts = import.meta.glob('./posts/*.md', {
  eager: true,
  query: '?raw',
  import: 'default'
});

const unquote = (value) => {
  const trimmed = value.trim();
  if ((trimmed.startsWith('"') && trimmed.endsWith('"')) || (trimmed.startsWith("'") && trimmed.endsWith("'"))) {
    return trimmed.slice(1, -1).replace(/\\"/g, '"').replace(/\\'/g, "'");
  }
  if (trimmed === 'true') return true;
  if (trimmed === 'false') return false;
  return trimmed;
};

const parsePost = (raw, source) => {
  const match = raw.match(/^---\s*\n([\s\S]*?)\n---\s*\n?([\s\S]*)$/);
  if (!match) return null;
  const metadata = {};
  match[1].split('\n').forEach((line) => {
    const separator = line.indexOf(':');
    if (separator < 0) return;
    const key = line.slice(0, separator).trim();
    metadata[key] = unquote(line.slice(separator + 1));
  });
  return {
    ...metadata,
    body: match[2].trim(),
    source,
    type: metadata.type || 'article',
    author: metadata.author || 'Zacc Drake',
    published: metadata.published !== false,
    featured: metadata.featured === true
  };
};

export const posts = Object.entries(rawPosts)
  .map(([source, raw]) => parsePost(raw, source))
  .filter((post) => post?.published)
  .sort((a, b) => new Date(b.date) - new Date(a.date));

export const getPost = (slug) => posts.find((post) => post.slug === slug);

export const formatPostDate = (date) => new Intl.DateTimeFormat('en-US', {
  month: 'long', day: 'numeric', year: 'numeric'
}).format(new Date(`${date}T12:00:00`));

const imagePositions = {
  center: 'center center',
  top: 'center top',
  bottom: 'center bottom',
  left: 'left center',
  right: 'right center',
  'top-left': 'left top',
  'top-right': 'right top',
  'bottom-left': 'left bottom',
  'bottom-right': 'right bottom'
};

const imageCrops = new Set(['landscape', 'wide', 'square', 'portrait', 'original']);

export const getImagePosition = (post) => imagePositions[post.image_position] || imagePositions.center;
export const getImageCropClass = (post) => `image-crop-${imageCrops.has(post.image_crop) ? post.image_crop : 'landscape'}`;

export const getVideoEmbed = (url = '') => {
  try {
    const parsed = new URL(url);
    if (parsed.hostname.includes('youtu.be')) return `https://www.youtube.com/embed/${parsed.pathname.slice(1)}`;
    if (parsed.hostname.includes('youtube.com')) {
      const id = parsed.searchParams.get('v') || parsed.pathname.split('/').filter(Boolean).pop();
      return id ? `https://www.youtube.com/embed/${id}` : '';
    }
    if (parsed.hostname.includes('vimeo.com')) {
      const id = parsed.pathname.split('/').filter(Boolean).pop();
      return id ? `https://player.vimeo.com/video/${id}` : '';
    }
  } catch { return ''; }
  return '';
};

const escapeHtml = (value) => value
  .replace(/&/g, '&amp;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;')
  .replace(/'/g, '&#039;');

const inlineMarkdown = (value) => escapeHtml(value)
  .replace(/\[([^\]]+)\]\((https?:\/\/[^\s)]+|mailto:[^\s)]+)\)/g, '<a href="$2" target="_blank" rel="noreferrer">$1</a>')
  .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
  .replace(/\*([^*]+)\*/g, '<em>$1</em>');

export const markdownToHtml = (markdown = '') => {
  const output = [];
  let paragraph = [];
  let list = null;
  const flushParagraph = () => {
    if (!paragraph.length) return;
    output.push(`<p>${inlineMarkdown(paragraph.join(' '))}</p>`);
    paragraph = [];
  };
  const closeList = () => {
    if (!list) return;
    output.push(`</${list}>`);
    list = null;
  };
  markdown.split('\n').forEach((line) => {
    const trimmed = line.trim();
    if (!trimmed) { flushParagraph(); closeList(); return; }
    const heading = trimmed.match(/^(#{1,3})\s+(.+)$/);
    if (heading) {
      flushParagraph(); closeList();
      const level = Math.min(3, heading[1].length + 1);
      output.push(`<h${level}>${inlineMarkdown(heading[2])}</h${level}>`);
      return;
    }
    if (trimmed.startsWith('> ')) {
      flushParagraph(); closeList();
      output.push(`<blockquote>${inlineMarkdown(trimmed.slice(2))}</blockquote>`);
      return;
    }
    const unordered = trimmed.match(/^[-*]\s+(.+)$/);
    const ordered = trimmed.match(/^\d+\.\s+(.+)$/);
    if (unordered || ordered) {
      flushParagraph();
      const target = ordered ? 'ol' : 'ul';
      if (list !== target) { closeList(); output.push(`<${target}>`); list = target; }
      output.push(`<li>${inlineMarkdown((unordered || ordered)[1])}</li>`);
      return;
    }
    paragraph.push(trimmed);
  });
  flushParagraph(); closeList();
  return output.join('');
};
