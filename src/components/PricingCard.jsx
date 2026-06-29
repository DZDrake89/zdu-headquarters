import { Check } from 'lucide-react';
import CTAButton from './CTAButton';

export default function PricingCard({ product, features, checkout }) {
  const ready = Boolean(checkout);
  return (
    <article className="pricing-card">
      <p className="pricing-type">{product.type}</p>
      <h3>{product.name}</h3>
      <div className="pricing-price">{product.price}</div>
      <p>{product.subtitle}</p>
      <ul>{features.map((feature) => <li key={feature}><Check size={16} />{feature}</li>)}</ul>
      <CTAButton href={ready ? checkout : product.href} external={ready}>{ready ? `Get Instant Access for ${product.price}` : product.cta}</CTAButton>
      {!ready && <small>Checkout link ready to add in <code>src/config/links.js</code>.</small>}
    </article>
  );
}
