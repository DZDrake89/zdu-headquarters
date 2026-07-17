import { BadgeCheck, Brush, Check, MonitorSmartphone, PanelsTopLeft, Rocket, Sparkles } from 'lucide-react';
import SEO from '../components/SEO';
import HeroSection from '../components/HeroSection';
import SectionHeader from '../components/SectionHeader';
import CTAButton from '../components/CTAButton';

const services = [
  {
    icon: MonitorSmartphone,
    title: 'Vision Sites',
    description: 'Real, polished web experiences that make the brand, offer, and buyer path feel tangible enough to share, pitch, and sell.'
  },
  {
    icon: Brush,
    title: 'Brand Direction',
    description: 'Visual language, messaging angles, offer positioning, and digital identity systems that make the client look as capable as they are.'
  },
  {
    icon: PanelsTopLeft,
    title: 'Launch Assets',
    description: 'Social graphics, product mockups, lead magnets, content prompts, and presentation assets that help the offer leave the group chat and enter the market.'
  },
  {
    icon: Rocket,
    title: 'Conversion Systems',
    description: 'Clear calls-to-action, forms, booking paths, content flow, and buyer journeys that remove friction from the next step.'
  }
];

const process = [
  'Find the real confidence gap: unclear offer, weak presentation, missing assets, or no launch path.',
  'Shape the story, offer, visuals, and buyer journey so the brand feels credible before a conversation starts.',
  'Build a real working preview with copy, images, CTAs, product mockups, and conversion structure.',
  'Polish desktop and mobile, deploy the preview, and give the client something they can confidently send today.'
];

export default function ZDUDigital() {
  return <>
    <SEO
      title="ZDU Digital | Vision Sites, Brand Systems & Launch Assets"
      description="ZDU Digital creates premium Vision Sites, brand systems, product mockups, and launch assets for founders, creators, coaches, and service businesses that need confidence in how they show up online."
    />
    <HeroSection
      eyebrow="ZDU Digital"
      title="Confidence<br/>is also<br/>how you<br/><em>show up<br/>online.</em>"
      description="Sometimes the missing confidence is not emotional. It is not knowing what to build, what to say, what to send people to, or how to launch your offer without looking thrown together. ZDU Digital gives your brand the tools, presentation, and path to move."
      primary={{ label: 'Talk About a Digital Build', href: '/contact?interest=digital' }}
      secondary={{ label: 'Explore the Process', href: '#digital-process' }}
      media={<div className="digital-hero-system" aria-label="ZDU Digital preview system">
        <div className="digital-browser-card">
          <span />
          <span />
          <span />
          <small>ZDU DIGITAL</small>
          <strong>Launch System</strong>
          <p>Website, offer, mockups, and buyer path in one polished digital presence.</p>
        </div>
        <div className="digital-phone-card">
          <Sparkles />
          <strong>Ready-to-send assets</strong>
          <p>Social graphics, product covers, CTAs, content prompts, and handoff files.</p>
        </div>
      </div>}
    />

    <section className="section digital-command-section">
      <div className="container digital-command-layout">
        <SectionHeader
          eyebrow="What it solves"
          title="Some people are not stuck because they lack belief. They are stuck because the launch feels messy."
          description="I learned this building my own personal brand ecosystem: sometimes the confidence problem is not emotional. It is practical. When the website is unfinished, the offer is unclear, the product has no mockup, or the brand does not look premium yet, confidence drops. ZDU Digital turns that hesitation into a clean digital system people can understand, trust, and act on."
        />
        <div className="digital-proof-panel">
          <p><BadgeCheck /> Built for people who need to present, pitch, launch, or sell with confidence.</p>
          <p><BadgeCheck /> Designed as real websites and launch systems, not flat “someday” mockups.</p>
          <p><BadgeCheck /> Flexible enough for personal brands, service providers, creators, coaches, local businesses, and productized offers.</p>
        </div>
      </div>
    </section>

    <section className="section digital-services-section">
      <div className="container">
        <SectionHeader eyebrow="Digital build stack" title="The pieces that make an offer feel <em>ready.</em>" align="center" light />
        <div className="digital-service-grid">
          {services.map(({ icon: Icon, title, description }) => <article key={title}>
            <Icon />
            <h3>{title}</h3>
            <p>{description}</p>
          </article>)}
        </div>
      </div>
    </section>

    <section className="section digital-process-section" id="digital-process">
      <div className="container digital-process-layout">
        <div>
          <p className="eyebrow"><span />The ZDU Digital method</p>
          <h2>From hidden idea to confident launch path.</h2>
          <p>Every build starts with the client’s story, offer, audience, proof, and the reason they have not launched cleanly yet. The goal is not to make another pretty page — it is to create the digital evidence that makes the next step feel obvious.</p>
          <CTAButton href="/contact?interest=digital">Start a Digital Conversation</CTAButton>
        </div>
        <div className="digital-process-list">
          {process.map((item, index) => <article key={item}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <p>{item}</p>
          </article>)}
        </div>
      </div>
    </section>

    <section className="section digital-fit-section">
      <div className="container digital-fit-card">
        <div>
          <p className="eyebrow"><span />Best fit</p>
          <h2>For people with something real to offer who need the online presence to finally match.</h2>
          <ul>
            <li><Check />Coaches and consultants</li>
            <li><Check />Creators and personal brands</li>
            <li><Check />Local service businesses</li>
            <li><Check />Founders preparing a launch or pitch</li>
          </ul>
        </div>
        <CTAButton href="/contact?interest=digital">Build My Vision Path</CTAButton>
      </div>
    </section>
  </>;
}
