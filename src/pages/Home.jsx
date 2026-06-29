import { ArrowDown, Check, ChevronRight, Shield, Sparkles } from 'lucide-react';
import SEO from '../components/SEO';
import HeroSection from '../components/HeroSection';
import SectionHeader from '../components/SectionHeader';
import FeatureGrid from '../components/FeatureGrid';
import ProductCard from '../components/ProductCard';
import FounderSection from '../components/FounderSection';
import CTAButton from '../components/CTAButton';
import { siteConfig } from '../config/siteConfig';
import { products } from '../config/products';
import { links } from '../config/links';

export default function Home() {
  const openScorecard = () => window.dispatchEvent(new Event('open-scorecard'));
  return <>
    <SEO />
    <HeroSection
      eyebrow="Confidence built from the inside out"
      title="Build Self-Trust.<br/><em>Take Courageous Action.</em><br/>Become Unstoppable."
      description={siteConfig.hero.subheadline}
      primary={{ label: 'Take the Free Confidence Scorecard', onClick: openScorecard }}
      secondary={{ label: 'Explore Products', href: '/products' }}
      media={<div className="hero-product-stack"><img className="stack-workbook" src="/assets/workbook-thumbnail.png" alt="Calm Confidence Workbook" /><img className="stack-ebook" src="/assets/ebook-cover.png" alt="Your Guide to Overcoming Anxiety" /><div className="hero-stamp"><Shield size={23}/><strong>Practical systems</strong><span>for lasting confidence</span></div></div>}
    >
      <div className="trust-row"><span><Check />Lived experience</span><span><Check />Action focused</span><span><Check />Faith friendly</span></div>
    </HeroSection>

    <section className="proof-strip"><div className="container proof-grid"><span><strong>35+</strong> years of lived experience</span><span><strong>12</strong> step confidence system</span><span><strong>8</strong> week coaching path</span><span><strong>1</strong> clear next step</span></div></section>

    <section className="section problem-section">
      <div className="container split-layout">
        <SectionHeader eyebrow="The quiet struggle" title="You’re capable of more—<em>but something keeps holding you back.</em>" description="High performance can hide an exhausting internal fight. These patterns do not mean you are broken. They mean your current system needs an upgrade." />
        <div className="pain-list">{siteConfig.painPoints.map((pain, index) => <div key={pain}><span>{String(index + 1).padStart(2, '0')}</span><p>{pain}</p><ChevronRight /></div>)}</div>
      </div>
    </section>

    <FounderSection />

    <section className="section framework-section">
      <div className="container">
        <SectionHeader eyebrow="The ZDU methodology" title="The Calm Confidence <em>Framework</em>" description="Six connected pillars help you create lasting change from the inside out." align="center" light />
        <FeatureGrid items={siteConfig.framework} numbered />
      </div>
    </section>

    <section className="section product-preview-section">
      <div className="container">
        <div className="section-topline"><SectionHeader eyebrow="Start where you are" title="Tools for your <em>next chapter.</em>" description="Begin with clarity, build with structure, and get support when you are ready." /><CTAButton href="/products" variant="outline">View All Products</CTAButton></div>
        <div className="product-grid product-grid-three">{products.slice(0, 3).map((product) => <ProductCard key={product.id} product={product} />)}</div>
      </div>
    </section>

    <section className="section coaching-banner">
      <div className="container coaching-banner-inner">
        <div><p className="eyebrow"><span />Personal guidance</p><h2>Ready to stop fighting yourself internally?</h2><p>Use a focused 30-minute conversation to identify what is keeping you stuck and map your clearest next step.</p></div>
        <CTAButton href={links.calendly} external>Book a Free Confidence Breakthrough Call</CTAButton>
      </div>
    </section>

    <section className="final-cta"><div className="final-cta-rays"/><div className="container"><Sparkles/><p>Your next chapter</p><h2>Starts now.</h2><CTAButton onClick={openScorecard}>Start Building Confidence</CTAButton><ArrowDown className="final-arrow"/></div></section>
  </>;
}
