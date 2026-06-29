import CTAButton from './CTAButton';

export default function ProductCard({ product }) {
  return (
    <article className={`product-card ${product.featured ? 'product-card-featured' : ''}`}>
      <div className="product-image"><img src={product.image} alt={product.name} loading="lazy" /></div>
      <div className="product-content">
        <div className="product-meta"><span>{product.type}</span><strong>{product.price}</strong></div>
        <h3>{product.name}</h3>
        <p className="product-subtitle">{product.subtitle}</p>
        <p>{product.description}</p>
        <CTAButton href={product.href} external={product.href.startsWith('http')}>{product.cta}</CTAButton>
      </div>
    </article>
  );
}
