import { ArrowLeft, ExternalLink } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import SEO from '../components/SEO';
import ResourceCard from '../components/ResourceCard';
import { formatPostDate, getImageCropClass, getImagePosition, getPost, getVideoEmbed, markdownToHtml, posts } from '../content/posts';
import NotFound from './NotFound';

export default function ResourcePost() {
  const { slug } = useParams();
  const post = getPost(slug);
  if (!post) return <NotFound />;
  const embedUrl = getVideoEmbed(post.video_url);
  const related = posts.filter((item) => item.slug !== post.slug).slice(0, 2);
  return <>
    <SEO title={`${post.title} | Zacc Drake Unlimited`} description={post.excerpt} />
    <article className="resource-post">
      <header className="resource-post-hero">
        <div className="container resource-post-heading">
          <Link className="resource-back-link" to="/resources"><ArrowLeft size={17}/>All resources</Link>
          <p className="eyebrow"><span/>{post.type === 'video' ? 'Video teaching' : post.category || 'Article'}</p>
          <h1>{post.title}</h1>
          <p className="resource-post-excerpt">{post.excerpt}</p>
          <div className="resource-post-meta"><span>By {post.author}</span><time dateTime={post.date}>{formatPostDate(post.date)}</time></div>
        </div>
      </header>
      <div className="container resource-post-content">
        {post.type === 'video' && embedUrl && <div className="video-embed"><iframe src={embedUrl} title={post.title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen /></div>}
        {post.type === 'video' && !embedUrl && post.video_url && <a className="button button-primary external-video-link" href={post.video_url} target="_blank" rel="noreferrer">Watch the video<ExternalLink size={17}/></a>}
        {post.image && post.type !== 'video' && <img className={`resource-post-cover ${getImageCropClass(post)}`} src={post.image} alt="" style={{ objectPosition: getImagePosition(post) }} />}
        <div className="article-body" dangerouslySetInnerHTML={{ __html: markdownToHtml(post.body) }} />
      </div>
    </article>
    {related.length > 0 && <section className="section related-resources"><div className="container"><p className="eyebrow"><span/>Keep building</p><h2>Continue your <em>next chapter.</em></h2><div className="resource-grid">{related.map((item)=><ResourceCard post={item} key={item.slug}/>)}</div></div></section>}
  </>;
}
