import CTAButton from './CTAButton';

export default function HeroSection({ eyebrow, title, description, primary, secondary, media, children, compact = false }) {
  return (
    <section className={`hero ${compact ? 'hero-compact' : ''}`}>
      <div className="hero-grid-lines" aria-hidden="true" />
      <div className="container hero-layout">
        <div className="hero-content reveal">
          {eyebrow && <p className="eyebrow"><span />{eyebrow}</p>}
          <h1 dangerouslySetInnerHTML={{ __html: title }} />
          <p className="hero-description">{description}</p>
          <div className="hero-actions">
            {primary && <CTAButton {...primary}>{primary.label}</CTAButton>}
            {secondary && <CTAButton {...secondary} variant="ghost">{secondary.label}</CTAButton>}
          </div>
          {children}
        </div>
        {media && <div className="hero-media reveal">{media}</div>}
      </div>
    </section>
  );
}
