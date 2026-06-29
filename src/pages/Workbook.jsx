import { ArrowRight, Check, X } from 'lucide-react';
import SEO from '../components/SEO';
import HeroSection from '../components/HeroSection';
import SectionHeader from '../components/SectionHeader';
import FeatureGrid from '../components/FeatureGrid';
import FounderSection from '../components/FounderSection';
import TestimonialCard from '../components/TestimonialCard';
import OptInForm from '../components/OptInForm';
import PricingCard from '../components/PricingCard';
import FAQAccordion from '../components/FAQAccordion';
import { getProduct } from '../config/products';
import { siteConfig } from '../config/siteConfig';
import { testimonials } from '../config/testimonials';
import { faqs } from '../config/faqs';

export default function Workbook() {
  const product = getProduct('workbook');
  const includes = [
    {title:'Confidence Assessment',description:'Establish your baseline and uncover your highest-value growth areas.'},
    {title:'The Confidence Wheel',description:'See the bigger picture across the areas that shape calm confidence.'},
    {title:'Self-Trust Inventory',description:'Evaluate how consistently you keep meaningful promises to yourself.'},
    {title:'Fear vs. Cost Exercise',description:'Face the fear and understand the cost of staying where you are.'},
    {title:'Future Self Blueprint',description:'Design the person, habits, and identity you are building toward.'},
    {title:'Courageous Action Plan',description:'Convert clarity into one practical action plan you can execute.'}
  ];
  return <>
    <SEO title="The Calm Confidence Workbook | Zacc Drake Unlimited" description="A practical, faith-friendly workbook for high performers ready to stop overthinking, build self-trust, and develop lasting confidence." />
    <HeroSection eyebrow="A 12-Step System for Unbreakable Calm Confidence" title="Become the confident person <em>you were created to be.</em>" description="A practical, faith-friendly workbook for high performers ready to overcome self-doubt, stop overthinking, build emotional resilience, and develop lasting confidence through intentional action." primary={{label:'Get Instant Access for $39.97',href:'#workbook-pricing'}} secondary={{label:'Preview the Workbook',href:'#workbook-preview'}} media={<div className="workbook-mockup"><img src={product.image} alt={product.name}/><div><strong>12</strong><span>guided steps</span></div></div>} />
    <section className="section"><div className="container split-layout"><SectionHeader eyebrow="You are not stuck" title="Your current patterns are not <em>your permanent identity.</em>" description="The workbook is for people who are tired of knowing what to do but still struggling to follow through."/><div className="pain-list">{siteConfig.painPoints.slice(0,6).map((pain,i)=><div key={pain}><span>{String(i+1).padStart(2,'0')}</span><p>{pain}</p><ArrowRight/></div>)}</div></div></section>
    <section className="section framework-section"><div className="container"><SectionHeader eyebrow="What’s inside" title="A system designed to be <em>used.</em>" align="center" light/><FeatureGrid items={includes}/></div></section>
    <section className="section" id="workbook-preview"><div className="container"><SectionHeader eyebrow="Workbook previews" title="Reflection becomes <em>direction.</em>" description="Every page turns awareness into a practical decision, plan, or action." align="center"/><div className="page-preview-grid page-preview-four"><img src="/assets/workbook-cover.png" alt="Workbook cover"/><img src="/assets/workbook-contents.png" alt="Workbook table of contents"/><img src="/assets/workbook-how-to.png" alt="How to use the workbook"/><img src="/assets/workbook-assessment.png" alt="Confidence assessment worksheet"/></div></div></section>
    <section className="section comparison-section"><div className="container"><SectionHeader eyebrow="The transformation" title="From internal chaos to <em>calm confidence.</em>" align="center" light/><div className="comparison-grid"><article><h3>Before</h3>{['Overthinking every move','Waiting for motivation','Breaking promises to yourself','Avoiding difficult action','Letting fear define identity'].map(x=><p key={x}><X/>{x}</p>)}</article><article className="comparison-after"><h3>After</h3>{['Clearer decisions','A repeatable confidence system','Evidence-based self-trust','Consistent courageous action','Identity built with intention'].map(x=><p key={x}><Check/>{x}</p>)}</article></div></div></section>
    <FounderSection />
    <section className="section testimonial-section"><div className="container"><SectionHeader eyebrow="Transformation stories" title="Results that become <em>real life.</em>" align="center"/><div className="testimonial-grid">{testimonials.map((t,i)=><TestimonialCard testimonial={t} key={i}/>)}</div></div></section>
    <section className="section optin-section"><div className="container"><OptInForm/></div></section>
    <section className="section" id="workbook-pricing"><div className="container pricing-layout"><div><SectionHeader eyebrow="Your life. Your foundation. Your design." title="Build confidence <em>on purpose.</em>" description="Complete one focused section per day or move at your own pace. Lifetime access means the system is ready whenever you need it."/><img className="pricing-support-image" src="/assets/workbook-thumbnail.png" alt="Calm Confidence Workbook product mockup"/></div><PricingCard product={product} checkout={product.checkout} features={['Immediate PDF access','12 guided transformation steps','Confidence assessments and audits','Action-planning worksheets','Reflection and habit-building tools','Lifetime personal access']}/></div></section>
    <section className="section faq-section"><div className="container faq-layout"><SectionHeader eyebrow="Questions" title="Everything you need to <em>start.</em>"/><FAQAccordion items={faqs.workbook}/></div></section>
  </>;
}
