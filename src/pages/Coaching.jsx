import { CalendarCheck, Check, ClipboardCheck, MessageCircle, MessageSquareQuote, Rocket, ShieldCheck, Star, Target, X } from 'lucide-react';
import SEO from '../components/SEO';
import HeroSection from '../components/HeroSection';
import SectionHeader from '../components/SectionHeader';
import FeatureGrid from '../components/FeatureGrid';
import CTAButton from '../components/CTAButton';
import FAQAccordion from '../components/FAQAccordion';
import { links } from '../config/links';

const outcomes = [
  { title: 'Less Anxiety', description: 'Reduce internal chaos and create space for calm, focused decisions.' },
  { title: 'Stronger Self-Trust', description: 'Build evidence by keeping promises and following through.' },
  { title: 'Emotional Control', description: 'Regulate pressure without sacrificing ambition or performance.' },
  { title: 'Bold Action', description: 'Stop waiting for certainty and create momentum through courage.' },
  { title: 'Consistent Focus', description: 'Replace all-or-nothing cycles with sustainable habits.' },
  { title: 'Purposeful Leadership', description: 'Lead yourself and others with greater clarity and confidence.' }
];

const coachingProof = [
  { value: '01', title: 'Pattern clarity', description: 'Name the exact loop that is creating anxiety, avoidance, pressure, or self-doubt.' },
  { value: '02', title: 'Self-trust evidence', description: 'Build proof through promises kept, decisions made, and courageous action taken.' },
  { value: '03', title: 'Calm execution', description: 'Create a repeatable way to move when emotions are loud and certainty is low.' }
];

const realTestimonials = [
  {
    name: 'Anton Antipov',
    context: 'Message after a ZDU encouragement / audio response',
    quote: 'Bro bro, I needed that. Men often never say anything so everyone usually assumed we are good, but we all go through shit — and I’m going to replay this message when I have shit days. You always pop up outta the blue with some hype shit that makes my day. Other than you, in my life — honestly there was one other person like you, that would always reach out randomly and just send a message that what I put out there is appreciated. I wish the world had more people like you and him.'
  },
  {
    name: 'Jeremy Diaz',
    context: 'Personal character and communication feedback',
    quote: 'Laser focused on being successful. Always has a positive mindset in every situation. Great listener. Very well organized. Great speaker and educator.'
  }
];

const fit = [
  'You look capable on the outside but feel stuck, anxious, or inconsistent internally.',
  'You are tired of motivational spikes and want a repeatable confidence system.',
  'You want practical guidance, accountability, and a clear plan — not vague inspiration.',
  'You are willing to take honest action between sessions.'
];

const notFit = [
  'You want someone to fix your life without personal responsibility.',
  'You are looking for therapy, diagnosis, or medical mental health treatment.',
  'You only want information and are not ready to practice new behaviors.',
  'You need crisis support or emergency care.'
];

const coachingFaqs = [
  {
    question: 'What happens on the free call?',
    answer: 'We identify what is creating the most pressure, clarify what you have already tried, and map the most useful next step. If coaching fits, we discuss it. If not, you still leave with clarity.'
  },
  {
    question: 'Is this therapy?',
    answer: 'No. ZDU coaching is educational, practical, and action-focused. It is not a replacement for therapy, diagnosis, medical care, or crisis support.'
  },
  {
    question: 'Who is this best for?',
    answer: 'High performers, entrepreneurs, leaders, and growth-minded adults who are capable but struggling with anxiety, overthinking, self-doubt, inconsistency, or fear of taking action.'
  },
  {
    question: 'What makes this different from just reading another book?',
    answer: 'The value is personal feedback, accountability, pattern recognition, and turning insight into action. Books give information. Coaching helps you apply it to your actual life.'
  },
  {
    question: 'Do I need to be faith-based?',
    answer: 'No. The work is faith-friendly and purpose-centered, but the coaching is practical and respectful of different backgrounds.'
  }
];

export default function Coaching() {
  return <>
    <SEO title="Confidence Coaching | Zacc Drake Unlimited" description="Private confidence coaching for high performers who want less anxiety, stronger self-trust, emotional resilience, and consistent courageous action." />
    <HeroSection
      eyebrow="Private confidence coaching"
      title="Build<br/>confidence<br/>with <em>personal<br/>guidance.</em>"
      description="A focused coaching path for capable people who are tired of silently battling anxiety, overthinking, self-doubt, or inconsistent action."
      primary={{ label: 'Book Your Free Call', href: links.calendly, external: true, trackingLocation: 'coaching_hero' }}
      secondary={{ label: 'Watch the Intro', href: '#intro-video', trackingLocation: 'coaching_hero' }}
      media={<div className="coach-video-card" id="intro-video" aria-label="Zacc Drake Unlimited coaching intro video">
        <div className="coach-video-frame">
          <iframe
            src="https://www.youtube.com/embed/WJ5ml3rF2sg"
            title="Zacc Drake Unlimited coaching intro video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
        <div className="coach-video-overlay">
          <span><MessageCircle /></span>
          <p>Watch the intro</p>
          <strong>“If you are capable but still fighting yourself internally, start here.”</strong>
        </div>
      </div>}
    />

    <section className="section coach-proof-section">
      <div className="container">
        <SectionHeader eyebrow="What we measure" title="Proof is built through <em>practice.</em>" description="The work is not about sounding confident for a moment. It is about creating real evidence that you can trust yourself under pressure." align="center" />
        <div className="coach-proof-grid">
          {coachingProof.map(item => <article key={item.title}>
            <span>{item.value}</span>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </article>)}
        </div>
      </div>
    </section>

    <section className="section real-testimonials-section">
      <div className="container">
        <SectionHeader eyebrow="Real words" title="The work is already <em>landing with people.</em>" description="These are real messages from people who have experienced Zacc’s voice, encouragement, presence, and ability to help people feel seen when they need it most." align="center" />
        <div className="real-testimonial-grid">
          {realTestimonials.map((testimonial, index) => <article key={testimonial.name} className={index === 0 ? 'real-testimonial-card real-testimonial-featured' : 'real-testimonial-card'}>
            <MessageSquareQuote />
            <blockquote>“{testimonial.quote}”</blockquote>
            <div>
              <strong>{testimonial.name}</strong>
              <span>{testimonial.context}</span>
            </div>
          </article>)}
        </div>
        <div className="testimonial-proof-note">
          <Star />
          <p>More formal coaching case studies can be added here as clients complete the full Accelerator path.</p>
        </div>
      </div>
    </section>

    <section className="section breakthrough-section">
      <div className="container split-layout">
        <SectionHeader eyebrow="Free Confidence Breakthrough Call" title="A focused 30 minutes.<br/><em>One clear next step.</em>" description="This is a strategy conversation, not a high-pressure sales call. We will look at what is keeping you stuck and identify the most valuable move forward." />
        <div className="call-steps">
          <div><Target /><span>01</span><h3>Identify</h3><p>Clarify the pattern creating the most internal pressure.</p></div>
          <div><MessageCircle /><span>02</span><h3>Explore</h3><p>Understand what has and has not worked so far.</p></div>
          <div><Rocket /><span>03</span><h3>Move</h3><p>Leave with a practical next step you can act on.</p></div>
        </div>
      </div>
    </section>

    <section className="section framework-section" id="accelerator">
      <div className="container">
        <SectionHeader eyebrow="8-week coaching program" title="The Calm Confidence <em>Accelerator.</em>" description="A transformational coaching experience for high-performing professionals who are ready to eliminate internal chaos and build consistent action." align="center" light />
        <div className="coaching-breakdown-layout">
          <img src="/assets/coaching-breakdown.png" alt="Calm Confidence Accelerator coaching breakdown" />
          <div className="included-list">
            <h3>What’s included</h3>
            {['Weekly 60-minute coaching sessions', 'Personalized action plans', 'Accountability and support', 'The ZDU Framework and practical tools', 'Email and voice support between sessions', 'Progress checkpoints so wins are documented'].map(item => <p key={item}><Check />{item}</p>)}
            <CTAButton href={links.calendly} external trackingLocation="coaching_program">Apply / Book a Discovery Call</CTAButton>
          </div>
        </div>
      </div>
    </section>

    <section className="section coaching-fit-section">
      <div className="container coaching-fit-grid">
        <article className="coaching-fit-card">
          <p className="eyebrow"><span />Good fit</p>
          <h2>This is for you if...</h2>
          <ul>{fit.map(item => <li key={item}><Check />{item}</li>)}</ul>
        </article>
        <article className="coaching-fit-card coaching-fit-card-dark">
          <p className="eyebrow"><span />Not the fit</p>
          <h2>This is not for you if...</h2>
          <ul>{notFit.map(item => <li key={item}><X />{item}</li>)}</ul>
        </article>
      </div>
    </section>

    <section className="section">
      <div className="container">
        <SectionHeader eyebrow="The results" title="You will not just think differently.<br/><em>You will live differently.</em>" align="center" />
        <FeatureGrid items={outcomes} />
      </div>
    </section>

    <section className="section proof-standard-section">
      <div className="container proof-standard-card">
        <div>
          <p className="eyebrow"><span />The proof standard</p>
          <h2>Client stories should be specific, honest, and documented.</h2>
          <p>ZDU will use this section for real client wins as they are collected: what changed, what action was taken, and what proof showed up in daily life. No inflated screenshots. No fake testimonials. Just clear transformation evidence.</p>
        </div>
        <div className="proof-standard-list">
          <p><ClipboardCheck />Before pattern</p>
          <p><CalendarCheck />Action timeline</p>
          <p><ShieldCheck />Breakthrough proof</p>
        </div>
      </div>
    </section>

    <section className="section faq-section">
      <div className="container faq-layout">
        <SectionHeader eyebrow="Questions before booking" title="Know what you are stepping into." description="The goal is clarity before commitment. These answers handle the most common questions before a breakthrough call." />
        <FAQAccordion items={coachingFaqs} />
      </div>
    </section>

    <section className="section application-section">
      <div className="container application-card">
        <ShieldCheck />
        <div>
          <p className="eyebrow"><span />Your next move</p>
          <h2>Ready for a breakthrough?</h2>
          <p>Book a free call and see whether the Calm Confidence Accelerator is the right next step.</p>
        </div>
        <CTAButton href={links.calendly} external trackingLocation="coaching_final_cta">Book a Free Call</CTAButton>
      </div>
    </section>
  </>;
}
