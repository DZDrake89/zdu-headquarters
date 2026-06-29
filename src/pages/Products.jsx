import SEO from '../components/SEO';
import HeroSection from '../components/HeroSection';
import ProductCard from '../components/ProductCard';
import SectionHeader from '../components/SectionHeader';
import { products } from '../config/products';

export default function Products() {
  return <>
    <SEO title="Confidence Products & Coaching | Zacc Drake Unlimited" description="Explore ZDU confidence tools, anxiety resources, digital products, and private coaching programs." />
    <HeroSection compact eyebrow="The ZDU ecosystem" title="Choose your <em>next step.</em>" description="Start with clarity. Build with a proven system. Get personal support when you are ready to accelerate." media={<div className="product-collage"><img src="/assets/workbook-thumbnail.png" alt="Calm Confidence Workbook"/><img src="/assets/accelerator-thumbnail.png" alt="Calm Confidence Accelerator"/></div>} />
    <section className="section"><div className="container"><SectionHeader eyebrow="Products & programs" title="Built for <em>real transformation.</em>" description="Every ZDU offer is designed to turn awareness into action and action into lasting confidence."/><div className="product-grid">{products.map(product=><ProductCard key={product.id} product={product}/>)}</div></div></section>
  </>;
}
