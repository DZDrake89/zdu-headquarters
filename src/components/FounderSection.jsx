import CTAButton from './CTAButton';

export default function FounderSection({ full = false }) {
  return (
    <section className="section founder-section">
      <div className="container founder-layout">
        <div className="founder-portrait">
          <img src="/assets/zacc-drake-founder.jpg" alt="Zacc Drake, founder of Zacc Drake Unlimited" loading="lazy" />
        </div>
        <div className="founder-copy">
          <p className="eyebrow"><span />From lived experience</p>
          <h2>{full ? 'I do not teach confidence from theory.' : 'I’ve walked the path you’re walking now.'}</h2>
          <p>For over 35 years, I battled anxiety, overthinking, trauma, self-doubt, dystonia, and undiagnosed ADHD. I know what it feels like to look strong on the outside while silently fighting your own mind.</p>
          <p>Everything changed when I stopped chasing motivation and started building self-trust. Today, I help others build confidence from the inside out through practical systems, faith, and intentional action.</p>
          {!full && <CTAButton href="/about" variant="outline">Read My Story</CTAButton>}
          <div className="signature">Zacc Drake</div>
        </div>
      </div>
    </section>
  );
}
