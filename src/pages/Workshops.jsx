import SEO from '../components/SEO';
import HeroSection from '../components/HeroSection';
import SectionHeader from '../components/SectionHeader';
import FeatureGrid from '../components/FeatureGrid';
import ContactForm from '../components/ContactForm';

export default function Workshops() {
  const workshops = [
    {title:'Confidence Building',description:'Practical systems for self-trust, courageous action, and consistent follow-through.'},
    {title:'Anxiety & Emotional Resilience',description:'Tools to understand pressure, regulate emotion, and recover more effectively.'},
    {title:'Leadership Development',description:'Lead with clarity, courage, accountability, and calm under pressure.'},
    {title:'High-Performance Mindset',description:'Build sustainable performance without burnout or internal chaos.'},
    {title:'Faith-Friendly Growth',description:'Explore purpose, identity, and action in a welcoming, non-preachy format.'},
    {title:'Corporate & Team Wellness',description:'Strengthen communication, confidence, and resilience across the organization.'}
  ];
  return <>
    <SEO title="Confidence, Anxiety & Leadership Workshops | ZDU" description="Book Zacc Drake for confidence, anxiety, emotional resilience, leadership, high-performance, and corporate wellness workshops." />
    <HeroSection compact eyebrow="Workshops · Speaking · Corporate Programs" title="Confidence, anxiety, and <em>leadership workshops.</em>" description="Practical, high-impact experiences that help professionals and teams build calm confidence, emotional resilience, and sustainable performance." media={<div className="workshop-visual"><span>LIVE</span><strong>Confidence<br/>in action.</strong><p>Interactive · Practical · Memorable</p></div>} />
    <section className="section framework-section"><div className="container"><SectionHeader eyebrow="Workshop topics" title="Built for people who carry <em>real pressure.</em>" align="center" light/><FeatureGrid items={workshops}/></div></section>
    <section className="section workshop-form-section"><div className="container form-layout"><SectionHeader eyebrow="Bring ZDU to your organization" title="Request workshop <em>information.</em>" description="Tell us about your team, audience, and desired outcome. We will recommend the best workshop format and next step."/><ContactForm type="workshop"/></div></section>
  </>;
}
