import { useState } from 'react';
import { links } from '../config/links';

export default function ContactForm({ type = 'contact' }) {
  const [status, setStatus] = useState('');
  const isWorkshop = type === 'workshop';
  const endpoint = isWorkshop ? links.workshopFormEndpoint : links.contactFormEndpoint;

  const submit = async (event) => {
    event.preventDefault();
    const data = {
      ...Object.fromEntries(new FormData(event.currentTarget)),
      _subject: isWorkshop ? 'New ZDU Workshop Information Request' : 'New ZDU Contact Message',
      _template: 'table',
      _url: window.location.href,
      source: isWorkshop ? 'ZDU Workshops Page' : 'ZDU Contact Page'
    };
    if (endpoint) {
      try {
        const response = await fetch(endpoint, { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify(data) });
        if (!response.ok) throw new Error();
        setStatus('Thanks - your message has been received.');
        event.currentTarget.reset();
      } catch { setStatus('Something went wrong. Please email us directly.'); }
    } else {
      setStatus('Preview complete. Add your form endpoint in src/config/links.js before launch.');
    }
  };

  return (
    <form className="contact-form" onSubmit={submit}>
      <input className="form-honey" name="_honey" tabIndex="-1" autoComplete="off" aria-hidden="true" />
      <div className="field-row">
        <label>Name<input name="name" required autoComplete="name" /></label>
        <label>Email<input name="email" type="email" required autoComplete="email" /></label>
      </div>
      {isWorkshop && <div className="field-row">
        <label>Company<input name="company" autoComplete="organization" /></label>
        <label>Workshop Type<select name="workshopType" defaultValue=""><option value="" disabled>Select one</option><option>Confidence Building</option><option>Anxiety & Emotional Resilience</option><option>Leadership Development</option><option>Corporate Wellness</option><option>Team Confidence</option></select></label>
      </div>}
      <label>Message<textarea name="message" rows="6" required /></label>
      <button className="button button-primary" type="submit">{isWorkshop ? 'Request Workshop Info' : 'Send Message'}</button>
      <p className="form-status" aria-live="polite">{status}</p>
    </form>
  );
}
