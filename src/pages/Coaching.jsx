import { CalendarCheck, Check, MessageCircle, Rocket, ShieldCheck, Target } from 'lucide-react';
import SEO from '../components/SEO';
import HeroSection from '../components/HeroSection';
import SectionHeader from '../components/SectionHeader';
import FeatureGrid from '../components/FeatureGrid';
import CTAButton from '../components/CTAButton';
import { links } from '../config/links';

export default function Coaching() {
  const outcomes = [
    {title:'Less Anxiety',description:'Reduce internal chaos and create space for calm, focused decisions.'},
    {title:'Stronger Self-Trust',description:'Build evidence by keeping promises and following through.'},
    {title:'Emotional Control',description:'Regulate pressure without sacrificing ambition or performance.'},
    {title:'Bold Action',description:'Stop waiting for certainty and create momentum through courage.'},
    {title:'Consistent Focus',description:'Replace all-or-nothing cycles with sustainable habits.'},
    {title:'Purposeful Leadership',description:'Lead yourself and others with greater clarity and confidence.'}
  ];
  return <>
    <SEO title="Confidence Coaching | Zacc Drake Unlimited" description="Build confidence with personal guidance through the Free Confidence Breakthrough Call and Calm Confidence Accelerator." />
    <HeroSection eyebrow="Private confidence coaching" title="Build confidence with <em>personal guidance.</em>" description="Identify where anxiety, overthinking, and self-doubt are holding you back, then create a clear next step toward calm confidence." primary={{label:'Book Your Free Call',href:links.calendly,external:true}} secondary={{label:'Explore the Accelerator',href:'#accelerator'}} media={<img className="coaching-hero-image" src="/assets/accelerator-thumbnail.png" alt="Calm Confidence Accelerator"/>} />
    <section className="section breakthrough-section"><div className="container split-layout"><SectionHeader eyebrow="Free Confidence Breakthrough Call" title="A focused 30 minutes.<br/><em>One clear next step.</em>" description="This is a strategy conversation, not a high-pressure sales call. We will look at what is keeping you stuck and identify the most valuable move forward."/><div className="call-steps"><div><Target/><span>01</span><h3>Identify</h3><p>Clarify the pattern creating the most internal pressure.</p></div><div><MessageCircle/><span>02</span><h3>Explore</h3><p>Understand what has and has not worked so far.</p></div><div><Rocket/><span>03</span><h3>Move</h3><p>Leave with a practical next step you can act on.</p></div></div></div></section>
    <section className="section framework-section" id="accelerator"><div className="container"><SectionHeader eyebrow="8-week coaching program" title="The Calm Confidence <em>Accelerator.</em>" description="A transformational coaching experience for high-performing professionals who are ready to eliminate internal chaos and build consistent action." align="center" light/><div className="coaching-breakdown-layout"><img src="/assets/coaching-breakdown.png" alt="Calm Confidence Accelerator coaching breakdown"/><div className="included-list"><h3>What’s included</h3>{['Weekly 60-minute coaching sessions','Personalized action plans','Accountability and support','The ZDU Framework and practical tools','Email and voice support between sessions'].map(item=><p key={item}><Check/>{item}</p>)}<CTAButton href={links.calendly} external>Apply / Book a Discovery Call</CTAButton></div></div></div></section>
    <section className="section"><div className="container"><SectionHeader eyebrow="The results" title="You will not just think differently.<br/><em>You will live differently.</em>" align="center"/><FeatureGrid items={outcomes}/></div></section>
    <section className="section application-section"><div className="container application-card"><ShieldCheck/><div><p className="eyebrow"><span/>Your next move</p><h2>Ready for a breakthrough?</h2><p>Book a free call and see whether the Calm Confidence Accelerator is the right next step.</p></div><CTAButton href={links.calendly} external>Book a Free Call</CTAButton></div></section>
  </>;
}
