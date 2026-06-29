import SEO from '../components/SEO';
import HeroSection from '../components/HeroSection';
import SectionHeader from '../components/SectionHeader';
import FeatureGrid from '../components/FeatureGrid';
import OptInForm from '../components/OptInForm';

export default function Scorecard() {
  const categories = [
    { title: 'Mental Clarity', description: 'See how confidently you think, decide, and move through uncertainty.' },
    { title: 'Emotional Control', description: 'Understand how well you regulate pressure without losing your ambition.' },
    { title: 'Self-Trust', description: 'Measure the evidence you have built by keeping promises to yourself.' },
    { title: 'Courageous Action', description: 'Identify whether fear is informing your choices or controlling them.' },
    { title: 'Self-Image', description: 'Explore how strongly you see yourself as capable, worthy, and powerful.' },
    { title: 'Consistency', description: 'Evaluate your ability to follow through on the habits that matter.' },
    { title: 'Relationships', description: 'Assess your confidence in communication, boundaries, and connection.' },
    { title: 'Purpose & Fulfillment', description: 'Clarify how aligned you feel with your future, values, and direction.' }
  ];

  return <>
    <SEO title="Free Confidence Scorecard | Zacc Drake Unlimited" description="Discover your confidence score and identify the habits, beliefs, and patterns holding you back with the free ZDU Confidence Scorecard." />
    <HeroSection eyebrow="Free confidence assessment" title="Know where you stand.<br/><em>Know what to build next.</em>" description="A focused eight-category scorecard for high performers who are tired of looking capable on the outside while fighting anxiety, overthinking, and self-doubt internally." primary={{label:'Take the Free Scorecard',href:'#get-scorecard'}} secondary={{label:'Explore All Products',href:'/products'}} media={<div className="resource-hero-card"><img src="/assets/confidence-scorecard.png" alt="ZDU Confidence Scorecard"/></div>} />
    <section className="section framework-section"><div className="container"><SectionHeader eyebrow="Eight areas. One clear picture." title="Confidence is not one trait.<br/><em>It is a system.</em>" description="Rate yourself honestly, discover the areas creating the most internal friction, and choose your clearest next action." align="center" light/><FeatureGrid items={categories} numbered/></div></section>
    <section className="section"><div className="container split-layout"><SectionHeader eyebrow="What you will discover" title="Clarity before <em>change.</em>" description="The scorecard helps you separate a temporary feeling from the specific confidence skills that can be strengthened through intentional action."/><div className="call-steps"><div><span>01</span><h3>Review</h3><p>Rate yourself honestly across eight confidence categories.</p></div><div><span>02</span><h3>Choose</h3><p>Select the one or two areas that deserve your focus now.</p></div><div><span>03</span><h3>Act</h3><p>Turn awareness into one practical, courageous next step.</p></div></div></div></section>
    <section className="section optin-section" id="get-scorecard"><div className="container"><OptInForm/></div></section>
  </>;
}
