import { BookOpen, Brain, CircleGauge, Footprints, ShieldCheck, Workflow } from 'lucide-react';
import SEO from '../components/SEO';
import HeroSection from '../components/HeroSection';
import SectionHeader from '../components/SectionHeader';
import PricingCard from '../components/PricingCard';
import FAQAccordion from '../components/FAQAccordion';
import { getProduct } from '../config/products';
import { faqs } from '../config/faqs';

export default function Ebook() {
  const product = getProduct('ebook');
  const topics = [
    ['What anxiety really is', Brain], ['ADHD and anxiety connection', Workflow], ['The silent self-judgment', ShieldCheck],
    ['The cost of ignoring anxiety', CircleGauge], ['Understanding your anxious mind', BookOpen], ['The physiology of anxiety', Brain],
    ['Confidence is built, not found', Footprints], ['The Confidence Loop', Workflow], ['The System of Unstoppable Progress', CircleGauge]
  ];
  return <>
    <SEO title="Your Guide to Overcoming Anxiety | Zacc Drake Unlimited" description="Break free from overthinking, anxiety, self-doubt, and fear with practical systems for self-trust and calm confidence." />
    <HeroSection eyebrow="A Step-by-Step Guide to Finding Your Calm" title="Your Guide to <em>Overcoming Anxiety.</em>" description="Break free from overthinking, anxiety, self-doubt, and fear while learning practical systems to build self-trust and calm confidence." primary={{label:'Get Instant Access for $29.97',href:'#pricing'}} secondary={{label:'See What’s Inside',href:'#inside'}} media={<div className="book-mockup"><img src={product.image} alt={product.name}/><span>22 focused pages</span></div>} />
    <section className="section topic-section" id="inside"><div className="container"><SectionHeader eyebrow="What you will learn" title="Understand the pattern.<br/><em>Change the system.</em>" description="Move from confusion and self-judgment to clarity, self-trust, and repeatable action."/><div className="topic-grid">{topics.map(([title,Icon],i)=><article key={title}><span>{String(i+1).padStart(2,'0')}</span><Icon/><h3>{title}</h3></article>)}</div></div></section>
    <section className="section preview-gallery"><div className="container"><SectionHeader eyebrow="Look inside" title="Clear. Practical. <em>Actionable.</em>" align="center" light/><div className="page-preview-grid"><img src="/assets/ebook-contents.png" alt="Ebook table of contents"/><img src="/assets/ebook-framework.png" alt="Calm Confidence Framework page"/><img src="/assets/ebook-challenge.png" alt="30-day confidence challenge page"/></div></div></section>
    <section className="section" id="pricing"><div className="container pricing-layout"><div><SectionHeader eyebrow="One decision" title="Stop waiting to <em>feel ready.</em>" description="Use a focused guide to understand your patterns and build a new relationship with action."/><div className="quote-panel">“Confidence is earned, not given. Promises made + promises kept.”<span>— Zacc Drake</span></div></div><PricingCard product={product} checkout={product.checkout} features={['Immediate digital access','The Calm Confidence Framework','The Confidence Loop','30-day confidence challenge','Four bonus-resource access points']}/></div></section>
    <section className="section faq-section"><div className="container faq-layout"><SectionHeader eyebrow="Questions" title="Before you <em>begin.</em>"/><FAQAccordion items={faqs.ebook}/></div></section>
  </>;
}
