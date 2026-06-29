import { useState } from 'react';
import { X } from 'lucide-react';
import { links } from '../config/links';

export default function OptInForm({ modal = false, onClose }) {
  const [status, setStatus] = useState('');
  const submit = async (event) => {
    event.preventDefault();
    const email = new FormData(event.currentTarget).get('email');
    if (links.scorecardFormEndpoint) {
      try {
        const payload = new URLSearchParams({
          'fields[email]': email,
          'ml-submit': '1',
          anticsrf: 'true'
        });
        await fetch(links.scorecardFormEndpoint, {
          method: 'POST',
          mode: 'no-cors',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: payload.toString()
        });
        setStatus('Success! Opening your scorecard now.');
        window.setTimeout(() => window.location.assign(links.scorecard), 450);
      } catch { setStatus('Please try again or use the direct scorecard link.'); }
    } else {
      localStorage.setItem('zduPreviewLead', JSON.stringify({ email, capturedAt: new Date().toISOString() }));
      setStatus('Preview captured. Opening your scorecard now.');
      window.setTimeout(() => window.location.assign(links.scorecard), 450);
    }
  };

  const content = (
    <div className={`optin-card ${modal ? 'optin-modal-card' : ''}`}>
      {modal && <button className="modal-close" type="button" onClick={onClose} aria-label="Close scorecard form"><X /></button>}
      <div className="optin-image"><img src="/assets/confidence-scorecard.png" alt="ZDU Confidence Scorecard preview" /></div>
      <div className="optin-copy">
        <p className="eyebrow"><span />Free confidence scorecard</p>
        <h2>Know where you stand.</h2>
        <p>Score eight confidence categories, identify your top three growth areas, and choose one clear next action.</p>
        <form onSubmit={submit}>
          <label className="sr-only" htmlFor={modal ? 'modal-email' : 'inline-email'}>Email address</label>
          <input id={modal ? 'modal-email' : 'inline-email'} name="email" type="email" required placeholder="Enter your email address" />
          <button className="button button-primary" type="submit">Send My Free Scorecard</button>
        </form>
        <p className="form-status" aria-live="polite">{status}</p>
        <small>We’ll use your email to deliver the scorecard and relevant confidence-building resources.</small>
      </div>
    </div>
  );
  return modal ? <div className="modal-shell" role="dialog" aria-modal="true" aria-label="Free Confidence Scorecard"><button className="modal-backdrop" onClick={onClose} aria-label="Close" />{content}</div> : content;
}
