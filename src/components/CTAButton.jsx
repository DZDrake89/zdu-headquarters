import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CTAButton({ href, children, variant = 'primary', external, className = '', onClick }) {
  const classes = `button button-${variant} ${className}`.trim();
  const content = <>{children}<ArrowRight size={17} aria-hidden="true" /></>;
  if (onClick) return <button className={classes} type="button" onClick={onClick}>{content}</button>;
  if (href?.startsWith('#')) {
    const scrollToSection = (event) => {
      const target = document.getElementById(href.slice(1));
      if (!target) return;
      event.preventDefault();
      window.history.pushState(null, '', href);
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };
    return <a className={classes} href={href} onClick={scrollToSection}>{content}</a>;
  }
  if (external || href?.startsWith('http') || href?.startsWith('mailto')) {
    return <a className={classes} href={href || '#'} target={href?.startsWith('http') ? '_blank' : undefined} rel="noreferrer">{content}</a>;
  }
  return <Link className={classes} to={href || '/'}>{content}</Link>;
}
