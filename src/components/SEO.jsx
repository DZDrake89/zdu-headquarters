import { useEffect } from 'react';
import { siteConfig } from '../config/siteConfig';

export default function SEO({ title, description }) {
  useEffect(() => {
    document.title = title || siteConfig.seo.defaultTitle;
    const meta = document.querySelector('meta[name="description"]') || document.createElement('meta');
    meta.name = 'description';
    meta.content = description || siteConfig.seo.defaultDescription;
    if (!meta.parentNode) document.head.appendChild(meta);
  }, [title, description]);
  return null;
}
