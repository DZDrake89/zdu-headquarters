import { BookOpen, Download, FileText, PlayCircle, Wrench } from 'lucide-react';
import SEO from '../components/SEO';
import HeroSection from '../components/HeroSection';
import SectionHeader from '../components/SectionHeader';
import CTAButton from '../components/CTAButton';

export default function Resources() {
  const resources = [
    {icon:FileText,label:'Article',title:'Why Confidence Is Built, Not Found',text:'A practical look at the evidence, promises, and actions that create real self-trust.'},
    {icon:PlayCircle,label:'Video',title:'How to Interrupt the Overthinking Loop',text:'A short teaching on moving from analysis paralysis to one courageous next step.'},
    {icon:BookOpen,label:'Guide',title:'The ADHD–Anxiety Connection',text:'Understand why pressure, judgment, and executive-function challenges often overlap.'},
    {icon:Wrench,label:'Tool',title:'The Confidence Loop',text:'A simple framework for converting action into evidence and evidence into identity.'}
  ];
  const openScorecard = () => window.dispatchEvent(new Event('open-scorecard'));
  return <>
    <SEO title="Free Confidence Resources | Zacc Drake Unlimited" description="Explore confidence articles, videos, tools, guides, and the free ZDU Confidence Scorecard." />
    <HeroSection compact eyebrow="Tools for your next chapter" title="Learn. Reflect. <em>Take action.</em>" description="Free resources to help you understand anxiety, build self-trust, strengthen emotional resilience, and move forward with intention." primary={{label:'Take the Free Scorecard',onClick:openScorecard}} media={<div className="resource-hero-card"><img src="/assets/confidence-scorecard.png" alt="Confidence Scorecard"/><Download/></div>} />
    <section className="section"><div className="container"><SectionHeader eyebrow="Resource library" title="Practical insights for <em>real life.</em>" description="This library is ready to grow into articles, videos, podcast episodes, downloads, and course content."/><div className="resource-grid">{resources.map(({icon:Icon,label,title,text})=><article key={title}><Icon/><span>{label}</span><h3>{title}</h3><p>{text}</p><button type="button">Coming soon</button></article>)}</div></div></section>
    <section className="section optin-callout"><div className="container"><div><p className="eyebrow"><span/>Start with clarity</p><h2>Your confidence score is a starting point—not a label.</h2><p>Use the free scorecard to see what is strong, what needs focus, and where one intentional action can create momentum.</p></div><CTAButton onClick={openScorecard}>Take the Free Scorecard</CTAButton></div></section>
  </>;
}
