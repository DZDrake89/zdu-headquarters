import { useState } from 'react';
import { ArrowRight, BadgeCheck, Brush, Check, Layers, MonitorSmartphone, PanelsTopLeft, Rocket, Sparkles } from 'lucide-react';
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

function BeforeAfterSlider() {
  const [position, setPosition] = useState(58);

  return (
    <div className="revamp-slider-shell">
      <div className="revamp-slider" style={{ '--split': `${position}%` }}>
        <img
          className="revamp-image revamp-before"
          src="/assets/case-studies/zdu-before-revamp.jpg"
          alt="Zacc Drake Unlimited website before the ZDU Digital redesign"
          loading="lazy"
        />
        <div className="revamp-after-wrap" aria-hidden="true">
          <img
            className="revamp-image revamp-after"
            src="/assets/case-studies/zdu-after-revamp.jpg"
            alt=""
            loading="lazy"
          />
        </div>
        <span className="revamp-label revamp-label-before">Before</span>
        <span className="revamp-label revamp-label-after">After</span>
        <div className="revamp-divider" aria-hidden="true"><span /></div>
        <input
          className="revamp-range"
          type="range"
          min="8"
          max="92"
          value={position}
          onChange={(event) => setPosition(Number(event.target.value))}
          aria-label="Compare the Zacc Drake Unlimited website before and after the redesign"
        />
      </div>
      <p className="revamp-slider-caption">Slide to compare the original live site direction against the new face-forward Zacc Drake Unlimited rebuild.</p>
    </div>
  );
}

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

    <section className="section digital-revamp-section" id="zdu-revamp-proof">
      <div className="container digital-revamp-layout">
        <div className="digital-revamp-copy">
          <p className="eyebrow"><span />Live proof</p>
          <h2>Zacc Drake Unlimited, rebuilt as a face-forward confidence brand.</h2>
          <p>
            The old site carried the pieces. The new version turns the whole ecosystem into a clearer personal brand:
            coaching, products, proof, video, and ZDU Digital all working from one confident path.
          </p>
          <div className="digital-revamp-points">
            <article>
              <span>Before</span>
              <strong>Brand-heavy, less personal</strong>
              <p>The offer existed, but the human trust signal was not leading the experience.</p>
            </article>
            <article>
              <span>After</span>
              <strong>Face-forward launch system</strong>
              <p>The site now feels like a real coaching ecosystem with cleaner products, proof, and direction.</p>
            </article>
            <article>
              <span>Upgrade</span>
              <strong>Digital confidence bridge</strong>
              <p>ZDU Digital becomes the next step for people whose offer is ready but online presence is not.</p>
            </article>
          </div>
          <a className="digital-revamp-link" href="/contact?interest=digital">
            Start Your Own Digital Revamp <ArrowRight />
          </a>
        </div>
        <div className="digital-revamp-visual">
          <div className="digital-revamp-kicker">
            <Layers />
            <span>Before / After Website System</span>
          </div>
          <BeforeAfterSlider />
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
