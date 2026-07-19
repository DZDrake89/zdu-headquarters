export const ZDU_CONTENT_KEY = 'zdu-site-content-v2';

export const defaultSiteContent = {
  hero: {
    image: '/uploads/zdu-hero/optimized/zacc-hero-direct.jpeg',
    scale: 1.24,
    x: 100,
    y: 40
  },
  heroVideo: {
    url: '',
    enabled: false,
    label: 'Watch the introduction'
  },
  videos: [
    { title: 'Stop Waiting To Feel Ready', url: '/resources/interrupt-the-overthinking-loop', type: 'link' },
    { title: 'Why Confidence Needs Evidence', url: '/resources/confidence-is-built-not-found', type: 'link' },
    { title: 'The Truth About Self-Trust', url: '/workbook', type: 'link' },
    { title: 'How To Move With Calm Authority', url: '/coaching', type: 'link' }
  ]
};

function mergeContent(value) {
  return {
    ...defaultSiteContent,
    ...(value || {}),
    hero: { ...defaultSiteContent.hero, ...(value?.hero || {}) },
    heroVideo: { ...defaultSiteContent.heroVideo, ...(value?.heroVideo || {}) },
    videos: Array.isArray(value?.videos) && value.videos.length
      ? value.videos.map((video, index) => ({
        ...defaultSiteContent.videos[index % defaultSiteContent.videos.length],
        ...video
      }))
      : defaultSiteContent.videos
  };
}

export function loadSiteContent() {
  if (typeof window === 'undefined') return defaultSiteContent;
  try {
    const stored = JSON.parse(window.localStorage.getItem(ZDU_CONTENT_KEY));
    if (stored) return mergeContent(stored);

    // Keep the existing owner crop from the first editor version.
    const legacy = JSON.parse(window.localStorage.getItem('zdu-hero-preferences-v1'));
    if (legacy?.image) return mergeContent({ hero: legacy });
  } catch {
    // Fall back to the built-in content when storage is unavailable/corrupt.
  }
  return defaultSiteContent;
}

export function saveSiteContent(value) {
  const next = mergeContent(value);
  if (typeof window !== 'undefined') {
    window.localStorage.setItem(ZDU_CONTENT_KEY, JSON.stringify(next));
    window.dispatchEvent(new CustomEvent('zdu-content-updated', { detail: next }));
  }
  return next;
}

export function resetSiteContent() {
  if (typeof window !== 'undefined') {
    window.localStorage.removeItem(ZDU_CONTENT_KEY);
    window.localStorage.removeItem('zdu-hero-preferences-v1');
    window.dispatchEvent(new CustomEvent('zdu-content-updated', { detail: defaultSiteContent }));
  }
  return defaultSiteContent;
}

export function isVideoEmbed(value) {
  return /(?:youtube\.com|youtu\.be|vimeo\.com)/i.test(value || '');
}

