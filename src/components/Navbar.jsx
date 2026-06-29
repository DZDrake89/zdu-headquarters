import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { brand } from '../config/brand';
import { siteConfig } from '../config/siteConfig';
import CTAButton from './CTAButton';

export default function Navbar({ onScorecard }) {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  useEffect(() => { setOpen(false); }, [location.pathname]);

  return (
    <header className="site-header">
      <div className="container nav-shell">
        <Link className="brand-link" to="/" aria-label={`${brand.name} home`}>
          <img src={brand.logo} alt={brand.name} />
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
