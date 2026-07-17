import { Camera, Mail, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { brand } from '../config/brand';
import { links } from '../config/links';
import { siteConfig } from '../config/siteConfig';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-top">
        <div className="footer-brand">
          <div className="footer-lockup">
            <img src={brand.logo} alt="" aria-hidden="true" />
            <span>
              <strong>{brand.name}</strong>
              <small>Calm Confidence Coaching</small>
            </span>
          </div>
          <p>{brand.tagline}</p>
        </div>
        <div className="footer-nav">
          <p className="footer-label">Explore</p>
          {siteConfig.navigation.map((item) => <Link key={item.href} to={item.href}>{item.label}</Link>)}
        </div>
        <div className="footer-nav">
          <p className="footer-label">Programs</p>
          <Link to="/products">Products</Link>
          <Link to="/accelerator">Accelerator</Link>
          <Link to="/workshops">Workshops</Link>
          <Link to="/zdu-digital">ZDU Digital</Link>
        </div>
        <div className="footer-nav">
          <p className="footer-label">Connect</p>
          <a href={links.instagram} target="_blank" rel="noreferrer"><Camera size={15} /> Instagram</a>
          <a href={links.emailHref}><Mail size={15} /> Email Zacc</a>
          <a href={links.linkMe} target="_blank" rel="noreferrer"><ArrowUpRight size={15} /> All links</a>
        </div>
        <div className="footer-manifesto">
          <span>Your next chapter</span>
          <strong>Starts now.</strong>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>© {new Date().getFullYear()} {brand.name}. All rights reserved.</p>
        <div className="footer-legal-links"><Link to="/privacy">Privacy</Link><Link to="/terms">Terms</Link><Link to="/refund-policy">Refunds</Link><Link to="/accessibility">Accessibility</Link></div>
      </div>
    </footer>
  );
}
