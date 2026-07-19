import { useMemo, useState } from 'react';
import { Camera, Check, RotateCcw, X } from 'lucide-react';

const MAX_EDGE = 2200;

function compressImage(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = () => reject(new Error('Unable to read that image.'));
    reader.onload = () => {
      const image = new Image();
      image.onerror = () => reject(new Error('That file is not a supported image.'));
      image.onload = () => {
        const ratio = Math.min(1, MAX_EDGE / Math.max(image.naturalWidth, image.naturalHeight));
        const canvas = document.createElement('canvas');
        canvas.width = Math.max(1, Math.round(image.naturalWidth * ratio));
        canvas.height = Math.max(1, Math.round(image.naturalHeight * ratio));
        const context = canvas.getContext('2d');
        context.drawImage(image, 0, 0, canvas.width, canvas.height);
        resolve(canvas.toDataURL('image/jpeg', .86));
      };
      image.src = reader.result;
    };
    reader.readAsDataURL(file);
  });
}

export default function HeroPhotoEditor({ value, onChange, onSave, onReset }) {
  const [open, setOpen] = useState(false);
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState('');

  const previewStyle = useMemo(() => ({
    backgroundImage: `url("${value.image}")`,
    backgroundSize: `auto ${value.scale * 100}%`,
    backgroundPosition: `${value.x}% ${value.y}%`
  }), [value]);

  const handleFile = async (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    if (!file.type.startsWith('image/')) {
      setMessage('Please choose a JPG, PNG, or WEBP image.');
      return;
    }
    setBusy(true);
    setMessage('Preparing your photo…');
    try {
      const image = await compressImage(file);
      onChange({ ...value, image });
      setMessage('Photo loaded. Adjust the crop, then save.');
    } catch (error) {
      setMessage(error.message);
    } finally {
      setBusy(false);
      event.target.value = '';
    }
  };

  const update = (key) => (event) => onChange({ ...value, [key]: Number(event.target.value) });

  return (
    <div className={`zdu-hero-editor${open ? ' is-open' : ''}`}>
      {!open && (
        <button className="zdu-hero-editor-trigger" type="button" onClick={() => setOpen(true)}>
          <Camera size={15} /> Customize hero
        </button>
      )}
      {open && (
        <div className="zdu-hero-editor-panel" role="dialog" aria-label="Customize hero photo">
          <div className="zdu-hero-editor-heading">
            <div>
              <span>Owner controls</span>
              <strong>Customize your hero</strong>
            </div>
            <button type="button" className="zdu-hero-editor-close" onClick={() => setOpen(false)} aria-label="Close hero editor">
              <X size={17} />
            </button>
          </div>
          <label className="zdu-hero-upload">
            <Camera size={16} />
            <span>{busy ? 'Preparing photo…' : 'Choose a new photo'}</span>
            <input type="file" accept="image/jpeg,image/png,image/webp" onChange={handleFile} disabled={busy} />
          </label>
          <div className="zdu-hero-editor-preview" style={previewStyle} aria-hidden="true" />
          <label className="zdu-hero-range">
            <span>Scale <b>{value.scale.toFixed(2)}×</b></span>
            <input type="range" min=".8" max="1.65" step=".01" value={value.scale} onChange={update('scale')} />
          </label>
          <label className="zdu-hero-range">
            <span>Horizontal position <b>{value.x}%</b></span>
            <input type="range" min="0" max="100" step="1" value={value.x} onChange={update('x')} />
          </label>
          <label className="zdu-hero-range">
            <span>Vertical position <b>{value.y}%</b></span>
            <input type="range" min="0" max="100" step="1" value={value.y} onChange={update('y')} />
          </label>
          {message && <p className="zdu-hero-editor-message" role="status">{message}</p>}
          <div className="zdu-hero-editor-actions">
            <button type="button" className="zdu-editor-reset" onClick={onReset}><RotateCcw size={14} /> Reset</button>
            <button type="button" className="zdu-editor-save" onClick={() => { onSave(); setMessage('Saved on this browser.'); }}><Check size={14} /> Save hero</button>
          </div>
          <small className="zdu-hero-editor-note">Your crop is saved in this browser so you can refresh without losing it.</small>
        </div>
      )}
    </div>
  );
}
