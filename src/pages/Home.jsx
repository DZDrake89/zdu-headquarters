import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Camera, Check, Mail, Play, Sparkles } from 'lucide-react';
import SEO from '../components/SEO';
import CTAButton from '../components/CTAButton';
import HeroPhotoEditor from '../components/HeroPhotoEditor';
import { links } from '../config/links';
import { products } from '../config/products';

const zduHeroPath = '/uploads/zdu-hero/optimized';

const heroSlides = [
  {
    image: `${zduHeroPath}/zacc-hero-direct.jpeg`,
    position: 'center 36%',
    size: 'cover'
  }
];

const heroPreferencesKey = 'zdu-hero-preferences-v1';
const defaultHeroPreferences = {
  image: heroSlides[0].image,
  scale: 1.24,
  x: 100,
  y: 40
};

function getHeroPreferences() {
  try {
    const stored = JSON.parse(window.localStorage.getItem(heroPreferencesKey));
    if (stored?.image) return { ...defaultHeroPreferences, ...stored };
  } catch {
    // Use the built-in hero when local storage is unavailable or corrupted.
  }
  return defaultHeroPreferences;
}

const feedItems = [
  {
    eyebrow: 'Start Here',
    title: 'Confidence IQ',
    description: 'Find out what is actually blocking your momentum before you try to fix everything.',
    type: 'Free Assessment',
    href: '/scorecard',
    image: `${zduHeroPath}/zacc-cafe-wide.jpeg`,
    position: 'center 32%'
  },
  {
    eyebrow: 'New Resource',
    title: 'The Calm Reset',
    description: 'A simple rhythm for reducing mental chaos and making cleaner decisions.',
    type: 'Workbook',
    href: '/workbook',
    image: `${zduHeroPath}/zacc-cafe-centered.jpeg`,
    position: 'center 28%'
  },
  {
    eyebrow: 'Coaching',
    title: '8 Week Accelerator',
    description: 'Build self-trust, identity, courage, consistency, and proof with weekly support.',
    type: '1:1 Program',
    href: '/accelerator',
    image: `${zduHeroPath}/zacc-maroon-center.jpeg`,
    position: 'center 28%'
  }
];

const productSystems = [
  {
    label: 'Free',
    title: 'Confidence Scorecard',
    copy: 'Diagnose where confidence is leaking: clarity, self-trust, consistency, identity, and action.',
    href: '/scorecard'
  },
  {
    label: 'Core Offer',
    title: 'Calm Confidence Accelerator',
    copy: 'Eight weeks of 1:1 coaching, guided exercises, accountability, and weekly action plans.',
    href: '/accelerator',
    featured: true
  },
  {
    label: 'Self-Guided',
    title: 'Workbook + Ebook Path',
    copy: 'Turn awareness into daily action with printable tools, reflection prompts, and confidence exercises.',
    href: '/products'
  },
  {
    label: 'Bridge',
    title: 'ZDU Digital Launch Path',
    copy: 'When the confidence gap is a presentation gap, build the website, assets, and offer system.',
    href: '/zdu-digital'
  }
];

const videoCards = [
  { title: 'Stop Waiting To Feel Ready', href: '/resources/interrupt-the-overthinking-loop' },
  { title: 'Why Confidence Needs Evidence', href: '/resources/confidence-is-built-not-found' },
  { title: 'The Truth About Self-Trust', href: '/workbook' },
  { title: 'How To Move With Calm Authority', href: '/coaching' }
];

const proofItems = [
  'Client Testimonials',
  'Message Screenshots',
  'Podcast Clips',
  'Workbook Wins',
  'Before / After Identity Shifts',
  'Coaching Case Studies',
  'Scorecard Results',
  'ZDU Digital Builds'
];

const confidencePillars = [
  'Awareness',
  'Truth',
  'Shift',
  'Action',
  'Evidence',
  'Identity',
  'Consistency',
  'Freedom'
];

const currentOfferLinks = [
  { label: 'Ebook', href: '/ebook' },
  { label: 'Workbook', href: '/workbook' },
  { label: 'Products', href: '/products' },
  { label: 'Workshops', href: '/workshops' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' }
];

export default function Home() {
  const [heroPreferences, setHeroPreferences] = useState(defaultHeroPreferences);
  const [heroEditorEnabled, setHeroEditorEnabled] = useState(false);
  useEffect(() => setHeroPreferences(getHeroPreferences()), []);
  useEffect(() => {
    // Keep owner controls out of the public UI. Add `?zdu-editor=1` (or
    // `#zdu-editor`) to the homepage URL when you want to edit this browser's
    // hero crop; the control is never rendered for normal visitors.
    const params = new URLSearchParams(window.location.search);
    setHeroEditorEnabled(params.get('zdu-editor') === '1' || window.location.hash === '#zdu-editor');
  }, []);

  const openScorecard = () => window.dispatchEvent(new Event('open-scorecard'));
  const saveHeroPreferences = () => {
    try { window.localStorage.setItem(heroPreferencesKey, JSON.stringify(heroPreferences)); } catch { /* private browsing may block storage */ }
  };
  const resetHeroPreferences = () => {
    setHeroPreferences(defaultHeroPreferences);
    try { window.localStorage.removeItem(heroPreferencesKey); } catch { /* ignore storage failures */ }
  };

  return (
    <>
      <SEO
        title="Zacc Drake Unlimited | Calm Confidence Coaching"
        description="Zacc Drake Unlimited helps high-capacity people build calm confidence, self-trust, courageous action, and a stronger personal brand ecosystem."
      />
      <div className="zdu-face-home">
        <section className="zdu-face-hero" aria-labelledby="home-hero-title">
          <div className="zdu-hero-photo" aria-hidden="true">
            {heroSlides.map((slide) => (
              <span
                className="zdu-hero-slide"
                key={slide.image}
                style={{
                  backgroundImage: `url("${heroPreferences.image}")`,
                  '--hero-position': `${heroPreferences.x}% ${heroPreferences.y}%`,
                  '--hero-scale': heroPreferences.scale,
                  '--hero-position-x': `${heroPreferences.x}%`,
                  '--hero-position-y': `${heroPreferences.y}%`,
                  backgroundSize: `auto ${heroPreferences.scale * 100}%`,
                  backgroundPosition: `${heroPreferences.x}% ${heroPreferences.y}%`
                }}
              />
            ))}
          </div>
          <div className="zdu-hero-grid" aria-hidden="true" />

          {heroEditorEnabled && (
            <HeroPhotoEditor
              value={heroPreferences}
              onChange={setHeroPreferences}
              onSave={saveHeroPreferences}
              onReset={resetHeroPreferences}
            />
          )}

          <div className="zdu-face-hero-copy">
            <p className="zdu-face-eyebrow">Calm Confidence • Mentor • Results Builder</p>
            <h1 id="home-hero-title">Zacc<br />Drake</h1>
            <p>
              A modern confidence coach helping high-capacity people stop fighting themselves internally,
              build self-trust, and move forward with calm, structure, and purpose.
            </p>
            <div className="zdu-face-actions">
              <CTAButton href="/coaching" trackingLocation="Face-forward hero">Apply For Coaching</CTAButton>
              <CTAButton onClick={openScorecard} variant="ghost" trackingLocation="Face-forward hero">Take The Scorecard</CTAButton>
            </div>
            <div className="zdu-hero-microcopy">
              Personal brand coaching, calm confidence systems, and digital launch support for people ready
              to look like the next version of themselves.
            </div>
          </div>

        </section>

        <section className="zdu-face-section zdu-face-feed" aria-labelledby="confidence-feed-title">
          <div className="zdu-face-section-title">
            <span>Zacc’s Framework</span>
            <h2 id="confidence-feed-title">The Confidence Feed</h2>
          </div>
          <div className="zdu-feed-grid">
            {feedItems.map((item) => (
              <Link className="zdu-feed-card" to={item.href} key={item.title}>
                <div className="zdu-feed-media" style={{ backgroundImage: `url("${item.image}")`, backgroundPosition: item.position }} />
                <span>{item.eyebrow}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <b>{item.type}</b>
              </Link>
            ))}
          </div>
        </section>

        <section className="zdu-story-split" aria-labelledby="zdu-story-title">
          <div className="zdu-story-copy">
            <span>This is the story</span>
            <h2 id="zdu-story-title">Zacc is not just building a coaching brand. He is becoming the guide people can actually feel.</h2>
            <p>
              Zacc Drake Unlimited becomes the personal, face-forward side of the ecosystem — the voice,
              the mentor, the calm presence, and the person helping people rebuild from the inside out.
            </p>
            <strong>Zacc Drake</strong>
          </div>
          <div className="zdu-story-photo" role="img" aria-label="Zacc Drake outside in a maroon shirt" />
        </section>

        <section className="zdu-face-section zdu-product-systems" aria-labelledby="product-systems-title">
          <div className="zdu-face-section-title">
            <span>Choose The Path</span>
            <h2 id="product-systems-title">Coaching Products & Confidence Systems</h2>
          </div>
          <div className="zdu-product-row">
            {productSystems.map((product) => (
              <Link className={product.featured ? 'zdu-system-card featured' : 'zdu-system-card'} to={product.href} key={product.title}>
                <small>{product.label}</small>
                <h3>{product.title}</h3>
                <p>{product.copy}</p>
                <em>Explore <ArrowUpRight size={15} /></em>
              </Link>
            ))}
          </div>
        </section>

        <section className="zdu-video-series" aria-labelledby="video-series-title">
          <div className="zdu-face-section-title dark">
            <span>Watch The Room</span>
            <h2 id="video-series-title">Video Series</h2>
          </div>
          <div className="zdu-video-grid">
            {videoCards.map((video) => (
              <Link to={video.href} key={video.title}>
                <span><Play size={17} fill="currentColor" /></span>
                <h3>{video.title}</h3>
              </Link>
            ))}
          </div>
        </section>

        <section className="zdu-face-section zdu-framework-strip" aria-labelledby="framework-strip-title">
          <div className="zdu-face-section-title">
            <span>The 8-part path</span>
            <h2 id="framework-strip-title">From internal chaos to calm confidence.</h2>
          </div>
          <div className="zdu-pillar-track">
            {confidencePillars.map((pillar, index) => (
              <div key={pillar}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <strong>{pillar}</strong>
              </div>
            ))}
          </div>
        </section>

        <section className="zdu-face-section zdu-current-site-map" aria-labelledby="current-content-title">
          <div>
            <p className="zdu-face-eyebrow">Everything from the current ZDU ecosystem</p>
            <h2 id="current-content-title">The full site still has the depth behind the homepage.</h2>
            <p>
              The homepage now feels more like a premium personal brand, while the existing ZDU pages still give
              visitors a full path into resources, products, coaching, workshops, legal information, and ZDU Digital.
            </p>
          </div>
          <div className="zdu-current-links">
            {currentOfferLinks.map((link) => <Link to={link.href} key={link.href}>{link.label}<ArrowUpRight size={15} /></Link>)}
          </div>
        </section>

        <section className="zdu-face-section zdu-products-with-art" aria-labelledby="all-offers-title">
          <div className="zdu-face-section-title">
            <span>Shop The System</span>
            <h2 id="all-offers-title">Every current ZDU offer in one clean lane.</h2>
          </div>
          <div className="zdu-offer-art-grid">
            {products.map((product) => (
              <Link to={product.href} className="zdu-offer-art-card" key={product.id}>
                <img src={product.image} alt={`${product.name} mockup`} loading="lazy" />
                <div>
                  <small>{product.price}</small>
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="zdu-face-section zdu-proof-wall" aria-labelledby="proof-title">
          <span>Proof that belongs in the Zacc Drake world</span>
          <h2 id="proof-title" className="sr-only">ZDU proof categories</h2>
          <div className="zdu-proof-grid">
            {proofItems.map((item) => <b key={item}>{item}</b>)}
          </div>
        </section>

        <section className="zdu-face-section zdu-digital-bridge" aria-labelledby="digital-bridge-title">
          <div>
            <span>ZDU Digital</span>
            <h2 id="digital-bridge-title">Sometimes confidence is having the right online tools.</h2>
            <p>
              One thing Zacc realized while building his personal brand ecosystem: lacking confidence is not always emotional.
              Sometimes you need the website, offer, product mockups, launch assets, and presentation that make you proud
              to send people to your work.
            </p>
          </div>
          <Link to="/zdu-digital">Explore ZDU Digital <ArrowUpRight size={18} /></Link>
        </section>

        <section className="zdu-face-section zdu-connect" aria-labelledby="connect-title">
          <div className="zdu-connect-copy">
            <span>Instagram / YouTube / Coaching</span>
            <h2 id="connect-title">Connect with Zacc</h2>
            <p>
              Daily confidence tools, behind-the-scenes coaching thoughts, launch lessons, and reminders for people
              becoming the highest version of themselves.
            </p>
            <div className="zdu-social-actions">
              <a href={links.instagram} target="_blank" rel="noreferrer"><Camera size={15} /> Instagram</a>
              <a href={links.emailHref}><Mail size={15} /> Email</a>
            </div>
          </div>
          <div className="zdu-connect-gallery">
            <img src={`${zduHeroPath}/zacc-cafe-wide.jpeg`} alt="Zacc Drake seated with laptop in a gray beanie" loading="lazy" />
            <img src={`${zduHeroPath}/zacc-black-close.jpeg`} alt="Zacc Drake smiling in a black shirt" loading="lazy" />
            <img src={`${zduHeroPath}/zacc-maroon-center.jpeg`} alt="Zacc Drake standing in a maroon shirt" loading="lazy" />
          </div>
        </section>

        <section className="zdu-final-cta" aria-labelledby="final-home-cta">
          <Sparkles />
          <p>For the person rebuilding from the inside out</p>
          <h2 id="final-home-cta">Stop waiting to feel ready. Build the person who moves anyway.</h2>
          <div className="zdu-face-actions">
            <CTAButton href="/coaching">Apply For Coaching</CTAButton>
            <CTAButton onClick={openScorecard} variant="ghost">Take The Scorecard</CTAButton>
          </div>
        </section>
      </div>
    </>
  );
}
