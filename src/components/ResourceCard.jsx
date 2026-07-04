import { ArrowRight, FileText, PlayCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { formatPostDate, getImagePosition, getVideoEmbed } from '../content/posts';

export default function ResourceCard({ post }) {
  const isVideo = post.type === 'video';
  const Icon = isVideo ? PlayCircle : FileText;
  const youtubeId = getVideoEmbed(post.video_url).split('/').pop();
  const image = post.image || (isVideo && youtubeId ? `https://i.ytimg.com/vi/${youtubeId}/hqdefault.jpg` : '');
  return <article className="resource-card">
    <Link className={`resource-card-media ${image ? '' : 'resource-card-placeholder'}`} to={`/resources/${post.slug}`} aria-label={`Open ${post.title}`}>
      {image ? <img src={image} alt="" loading="lazy" style={{ objectPosition: getImagePosition(post) }} /> : <Icon aria-hidden="true" />}
      <span>{isVideo ? 'Watch' : 'Read'}</span>
    </Link>
    <div className="resource-card-body">
      <div className="resource-card-meta"><span>{post.category || (isVideo ? 'Video' : 'Article')}</span><time dateTime={post.date}>{formatPostDate(post.date)}</time></div>
      <h3><Link to={`/resources/${post.slug}`}>{post.title}</Link></h3>
      <p>{post.excerpt}</p>
      <Link className="resource-card-link" to={`/resources/${post.slug}`}>{isVideo ? 'Watch video' : 'Read article'}<ArrowRight size={17} /></Link>
    </div>
  </article>;
}
