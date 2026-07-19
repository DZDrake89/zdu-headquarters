import { useEffect, useMemo, useState } from 'react';
import { ArrowLeft, Camera, Check, ExternalLink, FileDown, LockKeyhole, LogOut, Play, RotateCcw, Save, ShieldCheck, Upload, Video, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { brand } from '../config/brand';
import { defaultSiteContent, isVideoEmbed, loadSiteContent, resetSiteContent, saveSiteContent } from '../config/contentStore';
import '../backoffice.css';

const SESSION_KEY = 'zdu-backoffice-session-v1';
const PASSWORD_HINT = 'Set VITE_ZDU_BACKOFFICE_PASSWORD in Vercel for your private password.';
function readConfiguredPassword() {
  // Vite exposes env values to the browser, so this gate is a convenience
  // layer for the private editor—not a replacement for server-side auth.
  return import.meta.env.VITE_ZDU_BACKOFFICE_PASSWORD || (import.meta.env.DEV ? 'local-preview-only' : '');
}

function compressImage(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = () => reject(new Error('Unable to read that image.'));
    reader.onload = () => {
      const image = new Image();
      image.onerror = () => reject(new Error('That file is not a supported image.'));
      image.onload = () => {
        const maxEdge = 2400;
        const ratio = Math.min(1, maxEdge / Math.max(image.naturalWidth, image.naturalHeight));
        const canvas = document.createElement('canvas');
        canvas.width = Math.max(1, Math.round(image.naturalWidth * ratio));
        canvas.height = Math.max(1, Math.round(image.naturalHeight * ratio));
        canvas.getContext('2d').drawImage(image, 0, 0, canvas.width, canvas.height);
        resolve(canvas.toDataURL('image/jpeg', .88));
      };
      image.src = reader.result;
    };
    reader.readAsDataURL(file);
  });
}

function Login({ onLogin }) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const submit = (event) => {
    event.preventDefault();
    if (!readConfiguredPassword()) {
      setError('Backoffice is not configured yet. Add VITE_ZDU_BACKOFFICE_PASSWORD in Vercel.');
      return;
    }
    if (password !== readConfiguredPassword()) {
      setError('That password did not match.');
      return;
    }
    sessionStorage.setItem(SESSION_KEY, 'authenticated');
    onLogin();
  };
  return (
    <main className="zdu-backoffice-login">
      <div className="zdu-login-card">
        <div className="zdu-backoffice-brand"><img src={brand.logo} alt="" /><span>ZDU Backoffice</span></div>
        <div className="zdu-login-icon"><LockKeyhole size={22} /></div>
        <p className="zdu-backoffice-kicker">PRIVATE OWNER ACCESS</p>
        <h1>Manage the <em>experience.</em></h1>
        <p className="zdu-login-copy">Update the ZDU hero image, crop, and video links from one private workspace.</p>
        <form onSubmit={submit} className="zdu-login-form">
          <label htmlFor="backoffice-password">Password</label>
          <input id="backoffice-password" autoFocus type="password" value={password} onChange={(event) => setPassword(event.target.value)} placeholder="Enter your private password" />
          {error && <p className="zdu-backoffice-error" role="alert">{error}</p>}
          <button className="zdu-backoffice-primary" type="submit">Unlock backoffice <ArrowLeft size={16} className="zdu-arrow-turn" /></button>
        </form>
        <p className="zdu-login-note"><ShieldCheck size={15} /> {PASSWORD_HINT}</p>
        <Link className="zdu-backoffice-home-link" to="/"><ArrowLeft size={15} /> Back to public site</Link>
      </div>
    </main>
  );
}

function Preview({ content }) {
  const style = useMemo(() => ({
    backgroundImage: `url("${content.hero.image}")`,
    backgroundSize: `auto ${content.hero.scale * 100}%`,
    backgroundPosition: `${content.hero.x}% ${content.hero.y}%`
  }), [content.hero]);
  return <div className="zdu-backoffice-preview" style={style}><div className="zdu-backoffice-preview-shade" /><span>Live hero preview</span></div>;
}

function MediaEditor({ content, setContent, notify }) {
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState('');
  const handlePhoto = async (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    if (!file.type.startsWith('image/')) { setMessage('Choose a JPG, PNG, or WEBP image.'); return; }
    setBusy(true);
    setMessage('Preparing your image…');
    try {
      const image = await compressImage(file);
      setContent((current) => ({ ...current, hero: { ...current.hero, image } }));
      setMessage('Image loaded. Adjust the crop and save when ready.');
    } catch (error) { setMessage(error.message); }
    finally { setBusy(false); event.target.value = ''; }
  };
  const updateHero = (key) => (event) => setContent((current) => ({ ...current, hero: { ...current.hero, [key]: Number(event.target.value) } }));
  return <>
    <div className="zdu-backoffice-editor-grid">
      <div>
        <div className="zdu-backoffice-section-heading"><Camera size={18} /><div><p className="zdu-backoffice-kicker">HERO MEDIA</p><h2>Own the first impression.</h2></div></div>
        <p className="zdu-backoffice-muted">Upload a new hero photo, then control its framing without touching code. The original file is compressed for a faster site.</p>
        <label className="zdu-backoffice-upload"><Upload size={17} /><span>{busy ? 'Preparing image…' : 'Choose a hero photo'}</span><input type="file" accept="image/jpeg,image/png,image/webp" onChange={handlePhoto} disabled={busy} /></label>
        <div className="zdu-backoffice-ranges">
          <label><span>Scale <b>{content.hero.scale.toFixed(2)}×</b></span><input type="range" min=".8" max="1.65" step=".01" value={content.hero.scale} onChange={updateHero('scale')} /></label>
          <label><span>Horizontal position <b>{content.hero.x}%</b></span><input type="range" min="0" max="100" step="1" value={content.hero.x} onChange={updateHero('x')} /></label>
          <label><span>Vertical position <b>{content.hero.y}%</b></span><input type="range" min="0" max="100" step="1" value={content.hero.y} onChange={updateHero('y')} /></label>
        </div>
        {message && <p className="zdu-backoffice-status" role="status">{message}</p>}
      </div>
      <Preview content={content} />
    </div>
    <div className="zdu-backoffice-card-actions"><button className="zdu-backoffice-secondary" type="button" onClick={() => { setContent((current) => ({ ...current, hero: defaultSiteContent.hero })); setMessage('Hero reset to the original image.'); }}><RotateCcw size={15} /> Reset crop</button><button className="zdu-backoffice-primary compact" type="button" onClick={() => notify('Hero changes are saved on this browser.')}><Save size={15} /> Save hero</button></div>
  </>;
}

function VideoEditor({ content, setContent }) {
  const updateVideo = (index, key, value) => setContent((current) => ({ ...current, videos: current.videos.map((video, videoIndex) => videoIndex === index ? { ...video, [key]: value } : video) }));
  const addVideo = () => setContent((current) => ({ ...current, videos: [...current.videos, { title: 'New video', url: '', type: 'link' }] }));
  const removeVideo = (index) => setContent((current) => ({ ...current, videos: current.videos.filter((_, videoIndex) => videoIndex !== index) }));
  return <div>
    <div className="zdu-backoffice-section-heading"><Video size={18} /><div><p className="zdu-backoffice-kicker">VIDEO LIBRARY</p><h2>Keep the teaching current.</h2></div></div>
    <p className="zdu-backoffice-muted">Add a YouTube/Vimeo link or point a card to a page on your site. These cards update the public homepage’s Video Series section.</p>
    <div className="zdu-video-admin-list">{content.videos.map((video, index) => <div className="zdu-video-admin-row" key={`${index}-${video.title}`}><div className="zdu-video-admin-number">{String(index + 1).padStart(2, '0')}</div><div className="zdu-video-admin-fields"><label>Title<input value={video.title} onChange={(event) => updateVideo(index, 'title', event.target.value)} /></label><label>Video or page URL<input value={video.url} onChange={(event) => updateVideo(index, 'url', event.target.value)} placeholder="https://youtube.com/... or /resources/..." /></label><span className={`zdu-video-type ${isVideoEmbed(video.url) ? 'is-embed' : ''}`}>{isVideoEmbed(video.url) ? 'EMBED READY' : 'LINK CARD'}</span></div><button className="zdu-icon-button" type="button" onClick={() => removeVideo(index)} aria-label={`Remove ${video.title}`}><X size={16} /></button></div>)}</div>
    <button type="button" className="zdu-backoffice-secondary" onClick={addVideo}><Video size={15} /> Add video card</button>
  </div>;
}

function HeroVideo({ content, setContent }) {
  const update = (key) => (event) => setContent((current) => ({ ...current, heroVideo: { ...current.heroVideo, [key]: event.target.type === 'checkbox' ? event.target.checked : event.target.value } }));
  return <div className="zdu-backoffice-hero-video"><div className="zdu-backoffice-section-heading"><Play size={18} /><div><p className="zdu-backoffice-kicker">OPTIONAL FEATURE</p><h2>Put a video behind the message.</h2></div></div><p className="zdu-backoffice-muted">Add a hosted YouTube or Vimeo URL if you want a hero intro later. Leave it blank to keep the photo-only hero.</p><label>Video URL<input value={content.heroVideo.url} onChange={update('url')} placeholder="https://www.youtube.com/watch?v=..." /></label><label className="zdu-backoffice-checkbox"><input type="checkbox" checked={content.heroVideo.enabled} onChange={update('enabled')} disabled={!content.heroVideo.url} /><span>Show this as an optional intro on the homepage</span></label></div>;
}

export default function Backoffice() {
  const [authenticated, setAuthenticated] = useState(() => sessionStorage.getItem(SESSION_KEY) === 'authenticated');
  const [content, setContent] = useState(loadSiteContent);
  const [activeTab, setActiveTab] = useState('hero');
  const [toast, setToast] = useState('');
  useEffect(() => { if (!toast) return undefined; const timer = setTimeout(() => setToast(''), 2600); return () => clearTimeout(timer); }, [toast]);
  const notify = (message) => { saveSiteContent(content); setToast(message); };
  const save = () => { saveSiteContent(content); setToast('Saved. The public site will use these settings in this browser.'); };
  const logout = () => { sessionStorage.removeItem(SESSION_KEY); setAuthenticated(false); };
  const reset = () => { setContent(resetSiteContent()); setToast('All media settings reset.'); };
  const exportContent = () => { const blob = new Blob([JSON.stringify(content, null, 2)], { type: 'application/json' }); const href = URL.createObjectURL(blob); const anchor = document.createElement('a'); anchor.href = href; anchor.download = 'zdu-site-media-settings.json'; anchor.click(); URL.revokeObjectURL(href); };
  if (!authenticated) return <Login onLogin={() => setAuthenticated(true)} />;
  return <main className="zdu-backoffice-shell"><header className="zdu-backoffice-topbar"><Link className="zdu-backoffice-brand" to="/"><img src={brand.logo} alt="" /><span>ZDU Backoffice</span></Link><div className="zdu-backoffice-top-actions"><a href="https://app.pagescms.org/dzdrake89/zdu-headquarters/main" target="_blank" rel="noreferrer"><ExternalLink size={15} /> Manage posts in Pages CMS</a><button type="button" onClick={logout}><LogOut size={15} /> Log out</button></div></header><div className="zdu-backoffice-layout"><aside className="zdu-backoffice-sidebar"><p className="zdu-backoffice-kicker">CONTENT CONTROL</p><h1>Make it feel like <em>you.</em></h1><p>Private tools for your photo, video, and first-impression media.</p><nav><button className={activeTab === 'hero' ? 'active' : ''} onClick={() => setActiveTab('hero')}><Camera size={16} /> Hero photo</button><button className={activeTab === 'videos' ? 'active' : ''} onClick={() => setActiveTab('videos')}><Video size={16} /> Video library</button><button className={activeTab === 'intro' ? 'active' : ''} onClick={() => setActiveTab('intro')}><Play size={16} /> Hero intro video</button></nav><div className="zdu-backoffice-sidebar-note"><ShieldCheck size={16} /><span>Owner-only workspace. The editor link is not included in public navigation.</span></div></aside><section className="zdu-backoffice-main"><div className="zdu-backoffice-main-head"><div><p className="zdu-backoffice-kicker">ZACC DRAKE UNLIMITED</p><h2>{activeTab === 'hero' ? 'Hero photo' : activeTab === 'videos' ? 'Video library' : 'Hero intro video'}</h2></div><div className="zdu-backoffice-main-actions"><button className="zdu-backoffice-secondary" type="button" onClick={exportContent}><FileDown size={15} /> Export settings</button><button className="zdu-backoffice-primary compact" type="button" onClick={save}><Check size={15} /> Save changes</button></div></div><div className="zdu-backoffice-panel">{activeTab === 'hero' && <MediaEditor content={content} setContent={setContent} notify={notify} />}{activeTab === 'videos' && <VideoEditor content={content} setContent={setContent} />}{activeTab === 'intro' && <HeroVideo content={content} setContent={setContent} />}</div><div className="zdu-backoffice-footer-actions"><button type="button" onClick={reset}><RotateCcw size={14} /> Reset all site media</button><Link to="/"><ArrowLeft size={14} /> View public site</Link></div></section></div>{toast && <div className="zdu-backoffice-toast" role="status"><Check size={16} /> {toast}</div>}</main>;
}
