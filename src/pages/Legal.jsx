import SEO from '../components/SEO';
import { links } from '../config/links';

const policyContent = {
  privacy: {
    label: 'Privacy',
    title: 'Your information should feel safe here.',
    description: 'How Zacc Drake Unlimited collects, uses, and protects information submitted through this website.',
    sections: [
      ['Information we collect', 'When you request a scorecard, contact us, book a call, purchase a product, or request a workshop, we may collect your name, email address, contact details, business information, and the details you choose to share. We may also receive basic usage data through analytics tools when they are enabled.'],
      ['How we use information', 'We use information to deliver requested resources, respond to inquiries, process purchases, schedule calls, provide coaching or workshop services, improve the website, and send relevant updates when you have opted in.'],
      ['Service providers', 'Payments may be processed by Stripe, scheduling may be handled by Calendly, and email delivery may be handled by MailerLite or another provider shown at the point of submission. Those providers process information under their own terms and privacy policies.'],
      ['Your choices', 'You can unsubscribe from marketing emails at any time, ask what information we have about you, or request correction or deletion by emailing us. We do not sell personal information.'],
      ['Contact', `Questions about privacy can be sent to ${links.email}.`]
    ]
  },
  terms: {
    label: 'Terms',
    title: 'Clear expectations create better work.',
    description: 'The basic terms for using the Zacc Drake Unlimited website, products, coaching, and workshops.',
    sections: [
      ['Educational scope', 'ZDU content and coaching are educational and personal-development resources. They are not medical, mental-health, legal, or financial advice, and they do not replace a qualified professional.'],
      ['Digital products', 'Digital products are licensed for the purchaser’s personal use. Do not copy, resell, distribute, or publish the materials without written permission.'],
      ['Coaching and workshops', 'Coaching, workshops, and other services are governed by the written agreement or scope shared for that engagement. Results vary and depend on participation, context, and implementation.'],
      ['Third-party services', 'Stripe, Calendly, MailerLite, Canva, and other linked services are independent providers. Their availability and terms are outside our control.'],
      ['Contact', `Questions about these terms can be sent to ${links.email}.`]
    ]
  },
  refunds: {
    label: 'Refund policy',
    title: 'A straightforward policy for every offer.',
    description: 'Refund and cancellation guidance for ZDU digital products, coaching, and workshops.',
    sections: [
      ['Digital products', 'Because ebooks and workbooks are delivered digitally, purchases are generally final. If you experience a duplicate charge or cannot access a purchase because of a technical issue, contact us within 7 days so we can investigate and make it right.'],
      ['Coaching', 'Coaching deposits, payments, rescheduling, and cancellations follow the written coaching agreement for that engagement. Please review that agreement before payment.'],
      ['Workshops and services', 'Workshop and service cancellations, deposits, and rescheduling terms are confirmed in the applicable proposal or service agreement.'],
      ['How to request help', `Email ${links.email} with your name, purchase email, offer, and the issue you are experiencing. We will review the request and respond with the next step.`]
    ]
  },
  accessibility: {
    label: 'Accessibility',
    title: 'A clearer experience for more people.',
    description: 'Our accessibility commitment for the Zacc Drake Unlimited website.',
    sections: [
      ['Our commitment', 'We aim to make this website usable with keyboard navigation, readable contrast, responsive layouts, meaningful labels, and alternative text for important images.'],
      ['Known limitations', 'Some third-party checkout, scheduling, embedded, or social experiences may have their own accessibility limitations that we cannot fully control.'],
      ['Need help?', `If something prevents you from accessing information or completing an action, email ${links.email} and describe the page and task. We will work to provide an accessible alternative.`]
    ]
  }
};

export default function Legal({ type = 'privacy' }) {
  const policy = policyContent[type] || policyContent.privacy;
  return <>
    <SEO title={`${policy.label} | Zacc Drake Unlimited`} description={policy.description} />
    <section className="section legal-page">
      <div className="container legal-shell">
        <p className="eyebrow"><span />Zacc Drake Unlimited · {policy.label}</p>
        <h1>{policy.title}</h1>
        <p className="legal-intro">{policy.description}</p>
        <div className="legal-notice"><strong>Important:</strong> These are plain-language website policies and starting points. Have a qualified attorney review them for your business, location, and offers before relying on them as legal documents.</div>
        <p className="legal-updated">Last updated: July 13, 2026</p>
        <div className="legal-sections">{policy.sections.map(([heading, copy]) => <section key={heading}><h2>{heading}</h2><p>{copy}</p></section>)}</div>
      </div>
    </section>
  </>;
}
