import { Check, ShieldCheck } from 'lucide-react';
import SEO from '../components/SEO';
import HeroSection from '../components/HeroSection';
import SectionHeader from '../components/SectionHeader';
import FeatureGrid from '../components/FeatureGrid';
import CTAButton from '../components/CTAButton';
import { links } from '../config/links';

export default function Accelerator() {
  const framework = [
    { title: 'Awareness', description: 'Identify the pressure, beliefs, and patterns that are actually keeping you stuck.' },
    { title: 'Regulation', description: 'Learn practical tools to calm internal chaos and manage emotional overwhelm.' },
    { title: 'Self-Trust', description: 'Rebuild confidence by keeping meaningful promises to yourself.' },
    { title: 'Action', description: 'Create momentum through practical, consistent, courageous action.' },
    { title: 'Review', description: 'Measure progress, refine your strategy, and keep growing intentionally.' }
  ];
  const outcomes = [
    { title: 'A Calmer Mind', description: 'Overthink less and make clearer decisions under pressure.' },
    { title: 'Stronger Self-Trust', description: 'Trust yourself because your actions consistently support your intentions.' },
    { title: 'Bold Action', description: 'Move through fear and uncertainty without waiting to feel perfectly ready.' },
    { title: 'Consistent Momentum', description: 'Replace all-or-nothing cycles with habits that create real progress.' },
    { title: 'Emotional Resilience', description: 'Recover faster, manage pressure, and lead your life with greater calm.' }
  ];
  const included = ['Eight weekly 60-minute coaching sessions','Personalized action plans','Accountability and support','The complete ZDU Framework','Practical confidence-building tools','Email and voice support between sessions'];

  return <>
    <SEO title="Calm Confidence Accelerator | 8-Week Coaching Program" description="Build a calmer mind, stronger self-trust, emotional resilience, and consistent courageous action through the 8-week Calm Confidence Accelerator." />
    <HeroSection eyebrow="8-week private coaching program" title="Build calm. Build confidence.<br/><em>Build your life.</em>" description="A transformational coaching experience for high-performing professionals, entrepreneurs, and leaders ready to stop fighting themselves internally and create lasting confidence." primary={{label:'Book a Free Confidence Call',href:links.calendly,external:true}} secondary={{label:'See the Program',href:'#program'}} media={<img className="coaching-hero-image" src="/assets/accelerator-thumbnail.png" alt="Calm Confidence Accelerator 8-week coaching program"/>} />
    <section className="section"><div className="container"><SectionHeader eyebrow="The ZDU Framework" title="Lasting change from the <em>inside out.</em>" description="A practical five-step process that turns awareness into emotional control, self-trust, and consistent action." align="center"/><FeatureGrid items={framework} numbered/></div></section>
    <section className="section framework-section"><div className="container"><SectionHeader eyebrow="The transformation" title="You will not just think differently.<br/><em>You will live differently.</em>" align="center" light/><FeatureGrid items={outcomes}/></div></section>
    <section className="section" id="program"><div className="container"><SectionHeader eyebrow="What is included" title="Eight weeks of focused<br/><em>personal guidance.</em>" description="Get the structure, feedback, accountability, and support to create a calmer mind and a more confident way of living."/><div className="coaching-breakdown-layout"><img src="/assets/coaching-breakdown.png" alt="Calm Confidence Accelerator program breakdown"/><div className="included-list"><h3>Your coaching experience</h3>{included.map(item=><p key={item}><Check/>{item}</p>)}<CTAButton href={links.calendly} external>Apply / Book a Discovery Call</CTAButton></div></div></div></section>
    <section className="section application-section"><div className="container application-card"><ShieldCheck/><div><p className="eyebrow"><span/>Your next move</p><h2>Ready for your breakthrough?</h2><p>Book a free conversation and see whether the Calm Confidence Accelerator is the right fit for your goals.</p></div><CTAButton href={links.calendly} external>Book a Free Call</CTAButton></div></section>
  </>;
}
