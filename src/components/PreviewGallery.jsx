import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, X, ZoomIn } from 'lucide-react';

export default function PreviewGallery({ items, className = '' }) {
  const [activeIndex, setActiveIndex] = useState(null);
  const isOpen = activeIndex !== null;

  useEffect(() => {
    if (!isOpen) return undefined;
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setActiveIndex(null);
      if (event.key === 'ArrowRight') setActiveIndex((current) => (current + 1) % items.length);
      if (event.key === 'ArrowLeft') setActiveIndex((current) => (current - 1 + items.length) % items.length);
    };
    document.body.classList.add('modal-open');
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.classList.remove('modal-open');
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, items.length]);

  const showPrevious = () => setActiveIndex((current) => (current - 1 + items.length) % items.length);
  const showNext = () => setActiveIndex((current) => (current + 1) % items.length);
  const activeItem = isOpen ? items[activeIndex] : null;

  return <>
    <div className={`page-preview-grid ${className}`.trim()}>
      {items.map((item, index) => (
        <button className="preview-thumb" type="button" key={item.src} onClick={() => setActiveIndex(index)} aria-label={`Enlarge ${item.alt}`}>
          <img src={item.src} alt={item.alt} loading="lazy" />
          <span><ZoomIn size={16} aria-hidden="true" /> Enlarge preview</span>
        </button>
      ))}
    </div>
    {activeItem && <div className="preview-lightbox" role="dialog" aria-modal="true" aria-label={`${activeItem.alt} preview`}>
      <button className="preview-backdrop" type="button" onClick={() => setActiveIndex(null)} aria-label="Close preview" />
      <div className="preview-lightbox-panel">
        <div className="preview-lightbox-bar">
          <span>Preview {activeIndex + 1} of {items.length}</span>
          <button type="button" onClick={() => setActiveIndex(null)} aria-label="Close preview"><X /></button>
        </div>
        <img src={activeItem.src} alt={activeItem.alt} />
        <div className="preview-lightbox-footer">
          <button type="button" onClick={showPrevious} aria-label="Previous preview"><ChevronLeft /></button>
          <p>{activeItem.alt}</p>
          <button type="button" onClick={showNext} aria-label="Next preview"><ChevronRight /></button>
        </div>
      </div>
    </div>}
  </>;
}
