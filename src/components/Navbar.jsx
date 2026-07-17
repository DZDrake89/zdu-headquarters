import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { brand } from '../config/brand';
import { siteConfig } from '../config/siteConfig';
import CTAButton from './CTAButton';

export default function Navbar({ onScorecard }) {
  const [open, setOpen] = useState(false);
  const [heroBrandAway, setHeroBrandAway] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => { setOpen(false); }, [location.pathname]);

  useEffect(() => {
    if (!isHome) {
      setHeroBrandAway(false);
      return undefined;
    }

    const updateHeroBrand = () => {
      setHeroBrandAway(window.scrollY > 80);
    };

    updateHeroBrand();
    window.addEventListener('scroll', updateHeroBrand, { passive: true });

    return () => window.removeEventListener('scroll', updateHeroBrand);
  }, [isHome]);

  return (
    <header className={`site-header${isHome ? ' site-header-home' : ''}${heroBrandAway ? ' site-header-home-away' : ''}`}>
      <div className="container nav-shell">
        <Link className="brand-link" to="/" aria-label={`${brand.name} home`}>
          <img src={brand.logo} alt="" aria-hidden="true" />
          <span className="brand-wordmark">
            <strong>{brand.name}</strong>
            <small>Calm Confidence Coaching</small>
          </span>
        </Link>
        <nav className={`main-nav ${open ? 'is-open' : ''}`} aria-label="Primary navigation">
          {siteConfig.navigation.map((item) => (
            <NavLink key={item.href} to={item.href} className={({ isActive }) => isActive ? 'active' : ''}>{item.label}</NavLink>
          ))}
          <button className="mobile-scorecard" type="button" onClick={onScorecard}>Take the Free Scorecard</button>
        </nav>
        <div className="nav-actions">
          <CTAButton onClick={onScorecard} className="nav-cta">Free Scorecard</CTAButton>
          <button className="menu-button" type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle navigation">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
    </header>
  );
}
