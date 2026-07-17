import { useEffect } from 'react';
import { siteConfig } from '../config/siteConfig';

export default function SEO({ title, description }) {
  useEffect(() => {
    const pageTitle = title || siteConfig.seo.defaultTitle;
    const pageDescription = description || siteConfig.seo.defaultDescription;
    const canonical = `${window.location.origin}${window.location.pathname}`;
    const image = `${window.location.origin}/assets/zdu-logo.png`;

    const upsertMeta = (selector, attributes) => {
      const meta = document.querySelector(selector) || document.createElement('meta');
      Object.entries(attributes).forEach(([key, value]) => {
        meta.setAttribute(key, value);
      });
      if (!meta.parentNode) document.head.appendChild(meta);
    };

    const upsertLink = (selector, attributes) => {
      const link = document.querySelector(selector) || document.createElement('link');
      Object.entries(attributes).forEach(([key, value]) => {
        link.setAttribute(key, value);
      });
      if (!link.parentNode) document.head.appendChild(link);
    };

    document.title = pageTitle;
    upsertMeta('meta[name="description"]', { name: 'description', content: pageDescription });
    upsertMeta('meta[property="og:title"]', { property: 'og:title', content: pageTitle });
    upsertMeta('meta[property="og:description"]', { property: 'og:description', content: pageDescription });
    upsertMeta('meta[property="og:type"]', { property: 'og:type', content: 'website' });
    upsertMeta('meta[property="og:url"]', { property: 'og:url', content: canonical });
    upsertMeta('meta[property="og:image"]', { property: 'og:image', content: image });
    upsertMeta('meta[property="og:image:alt"]', { property: 'og:image:alt', content: 'Zacc Drake Unlimited logo' });
    upsertMeta('meta[name="twitter:card"]', { name: 'twitter:card', content: 'summary_large_image' });
    upsertMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: pageTitle });
    upsertMeta('meta[name="twitter:description"]', { name: 'twitter:description', content: pageDescription });
    upsertMeta('meta[name="twitter:image"]', { name: 'twitter:image', content: image });
    upsertLink('link[rel="canonical"]', { rel: 'canonical', href: canonical });
  }, [title, description]);
  return null;
}
