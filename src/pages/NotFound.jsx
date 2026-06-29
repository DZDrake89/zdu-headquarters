import SEO from '../components/SEO';
import CTAButton from '../components/CTAButton';

export default function NotFound() {
  return <section className="not-found"><SEO title="Page Not Found | ZDU"/><div className="container"><span>404</span><h1>This chapter has not been written yet.</h1><p>The page you requested does not exist, but your next step still does.</p><CTAButton href="/">Return Home</CTAButton></div></section>;
}
