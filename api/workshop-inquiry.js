const FORMSUBMIT_ENDPOINT = 'https://formsubmit.co/ajax/zaccdrakeunlimited@gmail.com';
const SITE_ORIGIN = 'https://zdu-headquarters.vercel.app';

export default async function handler(request, response) {
  if (request.method !== 'POST') {
    response.setHeader('Allow', 'POST');
    return response.status(405).json({ success: false, message: 'Method not allowed.' });
  }

  const { name, email, company = '', workshopType = '', message, _honey = '' } = request.body || {};
  if (!name || !email || !message || _honey) {
    return response.status(400).json({ success: false, message: 'Please complete the required fields.' });
  }

  try {
    const upstream = await fetch(FORMSUBMIT_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Origin: SITE_ORIGIN,
        Referer: `${SITE_ORIGIN}/workshops`
      },
      body: JSON.stringify({
        name,
        email,
        company,
        workshopType,
        message,
        _subject: 'New ZDU Workshop Information Request',
        _template: 'table',
        _url: `${SITE_ORIGIN}/workshops`,
        source: 'ZDU Workshops Page'
      })
    });
    const result = await upstream.json().catch(() => ({}));
    if (!upstream.ok || String(result.success) !== 'true') {
      throw new Error(result.message || 'Form relay failed.');
    }
    return response.status(200).json({ success: true });
  } catch (error) {
    console.error('Workshop inquiry failed:', error.message);
    return response.status(502).json({ success: false, message: 'Unable to send the workshop request.' });
  }
}
