import { Calendar, Camera, Link as LinkIcon, Mail } from 'lucide-react';
import SEO from '../components/SEO';
import HeroSection from '../components/HeroSection';
import ContactForm from '../components/ContactForm';
import { links } from '../config/links';

export default function Contact() {
  const methods = [
    {icon:Mail,label:'Email',value:links.email,href:links.emailHref},
    {icon:Camera,label:'Instagram',value:'@iamzaccdrake',href:links.instagram},
    {icon:LinkIcon,label:'All ZDU Links',value:'link.me/zdunlimited',href:links.linkMe},
    {icon:Calendar,label:'Free Call',value:'Book on Calendly',href:links.calendly}
  ];
  return <>
    <SEO title="Contact Zacc Drake Unlimited" description="Contact Zacc Drake Unlimited for coaching, workshops, speaking, products, and partnerships." />
    <HeroSection compact eyebrow="Let’s connect" title="Your next conversation could create <em>your next breakthrough.</em>" description="Reach out about coaching, workshops, speaking, partnerships, or the ZDU product ecosystem." />
    <section className="section contact-section"><div className="container form-layout"><div><div className="contact-methods">{methods.map(({icon:Icon,label,value,href})=><a key={label} href={href} target={href.startsWith('http')?'_blank':undefined} rel="noreferrer"><Icon/><span>{label}<strong>{value}</strong></span></a>)}</div></div><ContactForm/></div></section>
  </>;
}
