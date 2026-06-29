import { Compass, Cross, Flame, HeartHandshake, Mountain, ShieldCheck } from 'lucide-react';
import SEO from '../components/SEO';
import HeroSection from '../components/HeroSection';
import FounderSection from '../components/FounderSection';
import SectionHeader from '../components/SectionHeader';
import CTAButton from '../components/CTAButton';
import { brand } from '../config/brand';

export default function About() {
  const values = [
    { icon: ShieldCheck, title: 'Self-Trust', text: 'Confidence begins when your word to yourself means something.' },
    { icon: Flame, title: 'Courageous Action', text: 'Action is the bridge between the life you imagine and the life you build.' },
    { icon: Compass, title: 'Purpose', text: 'Growth becomes sustainable when it is connected to something deeper.' },
    { icon: HeartHandshake, title: 'Service', text: 'Transformation matters because it changes the way you lead and love others.' },
    { icon: Cross, title: 'Faith-Friendly Growth', text: 'Faith can inform identity and purpose without becoming pressure or performance.' },
    { icon: Mountain, title: 'Resilience', text: 'Your past may explain your patterns, but it does not get to define your future.' }
  ];
  return <>
    <SEO title="Meet Zacc Drake | Zacc Drake Unlimited" description="Meet Zacc Drake and discover the lived experience, faith, systems, and mission behind Zacc Drake Unlimited." />
    <HeroSection compact eyebrow="Founder · Coach · Mentor" title="Meet <em>Zacc Drake.</em>" description="I do not teach confidence from theory. I teach it from lived experience, systems, faith, and transformation." media={<div className="founder-hero-photo"><img src="/assets/zacc-drake-founder.jpg" alt="Zacc Drake, confidence coach and founder of Zacc Drake Unlimited" /></div>} />
    <FounderSection full />
    <section className="section timeline-section"><div className="container"><SectionHeader eyebrow="The journey" title="Pain became a <em>purpose.</em>" description="The ZDU mission was built through decades of challenge, learning, rebuilding, and choosing a different future." align="center" />
      <div className="story-timeline">
        <article><span>01</span><h3>The internal battle</h3><p>Anxiety, trauma, fear, self-doubt, and the pressure to look strong while struggling silently.</p></article>
        <article><span>02</span><h3>The missing explanation</h3><p>Undiagnosed ADHD and dystonia made life feel harder without a clear reason why.</p></article>
        <article><span>03</span><h3>The turning point</h3><p>Motivation was not the answer. Keeping small promises created self-trust and real evidence.</p></article>
        <article><span>04</span><h3>The mission</h3><p>Turn lived experience into practical tools that help others build confidence from the inside out.</p></article>
      </div>
    </div></section>
    <section className="section values-section"><div className="container"><SectionHeader eyebrow="What guides the work" title="Values with <em>weight.</em>" align="center" light/><div className="values-grid">{values.map(({icon:Icon,title,text})=><article key={title}><Icon/><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
    <section className="section mission-section"><div className="container mission-card"><p className="eyebrow"><span/>Why ZDU exists</p><h2>{brand.mission}</h2><CTAButton href="/products">Explore the ZDU Ecosystem</CTAButton></div></section>
  </>;
}
