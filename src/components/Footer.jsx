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
          <img src={brand.logo} alt={brand.name} />
          <p>{brand.tagline}</p>
        </div>
        <div className="footer-nav">
          <p className="footer-label">Explore</p>
          {siteConfig.navigation.slice(0, 4).map((item) => <Link key={item.href} to={item.href}>{item.label}</Link>)}
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
        <p>Educational content only. Not a substitute for professional mental health care.</p>
      </div>
    </footer>
  );
}
