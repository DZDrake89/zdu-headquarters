import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

function trackCTA({ href, label, location }) {
  if (typeof window === 'undefined') return;
  const payload = {
    event: 'zdu_cta_click',
    cta_label: label,
    cta_href: href || '',
    cta_location: location || ''
  };
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(payload);
  if (typeof window.gtag === 'function') {
    window.gtag('event', 'cta_click', payload);
  }
}

export default function CTAButton({ href, children, label, trackingLabel, trackingLocation, variant = 'primary', external, className = '', onClick }) {
  const classes = `button button-${variant} ${className}`.trim();
  const content = <>{children}<ArrowRight size={17} aria-hidden="true" /></>;
  const handleTrackedClick = (event) => {
    trackCTA({ href, label: trackingLabel || label || children?.toString?.() || '', location: trackingLocation });
    if (onClick) onClick(event);
  };
  if (onClick) return <button className={classes} type="button" onClick={handleTrackedClick}>{content}</button>;
  if (href?.startsWith('#')) {
    const scrollToSection = (event) => {
      trackCTA({ href, label: trackingLabel || label || children?.toString?.() || '', location: trackingLocation });
      const target = document.getElementById(href.slice(1));
      if (!target) return;
      event.preventDefault();
      window.history.pushState(null, '', href);
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };
    return <a className={classes} href={href} onClick={scrollToSection}>{content}</a>;
  }
  if (external || href?.startsWith('http') || href?.startsWith('mailto')) {
    return <a className={classes} href={href || '#'} target={href?.startsWith('http') ? '_blank' : undefined} rel="noreferrer" onClick={handleTrackedClick}>{content}</a>;
  }
  return <Link className={classes} to={href || '/'} onClick={handleTrackedClick}>{content}</Link>;
}
