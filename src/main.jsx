import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './styles.css';
import './hero-refinement.css';

function MarketingAnalytics() {
  const measurementId = import.meta.env.VITE_GA4_MEASUREMENT_ID;

  useEffect(() => {
    if (!measurementId || document.querySelector(`script[data-zdu-ga4="${measurementId}"]`)) return;
    window.dataLayer = window.dataLayer || [];
    window.gtag = window.gtag || function gtag() { window.dataLayer.push(arguments); };
    window.gtag('js', new Date());
    window.gtag('config', measurementId, { anonymize_ip: true });
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    script.dataset.zduGa4 = measurementId;
    document.head.appendChild(script);
  }, [measurementId]);

  return null;
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <MarketingAnalytics />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
