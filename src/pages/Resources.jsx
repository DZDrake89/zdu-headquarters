import { useState } from 'react';
import { Download } from 'lucide-react';
import SEO from '../components/SEO';
import HeroSection from '../components/HeroSection';
import SectionHeader from '../components/SectionHeader';
import CTAButton from '../components/CTAButton';
import ResourceCard from '../components/ResourceCard';
import { posts } from '../content/posts';

export default function Resources() {
  const [filter, setFilter] = useState('all');
  const visiblePosts = filter === 'all' ? posts : posts.filter((post) => post.type === filter);
  const openScorecard = () => window.dispatchEvent(new Event('open-scorecard'));
  return <>
    <SEO title="Free Confidence Resources | Zacc Drake Unlimited" description="Explore confidence articles, videos, tools, guides, and the free ZDU Confidence Scorecard." />
    <HeroSection compact eyebrow="Tools for your next chapter" title="Learn. Reflect. <em>Take action.</em>" description="Free resources to help you understand anxiety, build self-trust, strengthen emotional resilience, and move forward with intention." primary={{label:'Take the Free Scorecard',onClick:openScorecard}} media={<div className="resource-hero-card"><img src="/assets/confidence-scorecard.png" alt="Confidence Scorecard"/><Download/></div>} />
    <section className="section"><div className="container"><SectionHeader eyebrow="Resource library" title="Practical insights for <em>real life.</em>" description="Articles and video teachings to help you build calm confidence, emotional resilience, self-trust, and courageous action."/><div className="resource-filters" aria-label="Filter resources"><button className={filter === 'all' ? 'active' : ''} onClick={()=>setFilter('all')} type="button">All</button><button className={filter === 'article' ? 'active' : ''} onClick={()=>setFilter('article')} type="button">Articles</button><button className={filter === 'video' ? 'active' : ''} onClick={()=>setFilter('video')} type="button">Videos</button></div>{visiblePosts.length ? <div className="resource-grid">{visiblePosts.map((post)=><ResourceCard post={post} key={post.slug}/>)}</div> : <div className="resource-empty"><h3>New content is on the way.</h3><p>Check back soon for the next ZDU {filter === 'video' ? 'video teaching' : 'resource'}.</p></div>}</div></section>
    <section className="section optin-callout"><div className="container"><div><p className="eyebrow"><span/>Start with clarity</p><h2>Your confidence score is a starting point—not a label.</h2><p>Use the free scorecard to see what is strong, what needs focus, and where one intentional action can create momentum.</p></div><CTAButton onClick={openScorecard}>Take the Free Scorecard</CTAButton></div></section>
  </>;
}
