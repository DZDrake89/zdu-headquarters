import { Outlet, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import OptInForm from './OptInForm';

const scorecardDismissedKey = 'zdu-scorecard-popup-dismissed-v2';

export default function Layout() {
  const [scorecardOpen, setScorecardOpen] = useState(false);
  const location = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [location.pathname]);
  useEffect(() => {
    const open = () => {
      window.sessionStorage.removeItem(scorecardDismissedKey);
      setScorecardOpen(true);
    };
    window.addEventListener('open-scorecard', open);
    return () => window.removeEventListener('open-scorecard', open);
  }, []);
  useEffect(() => {
    if (location.pathname !== '/' || window.sessionStorage.getItem(scorecardDismissedKey)) return undefined;
    const timer = window.setTimeout(() => setScorecardOpen(true), 22000);
    return () => window.clearTimeout(timer);
  }, [location.pathname]);
  useEffect(() => {
    const dismiss = () => {
      window.sessionStorage.setItem(scorecardDismissedKey, 'true');
      setScorecardOpen(false);
    };
    const onKey = (event) => { if (event.key === 'Escape') dismiss(); };
    document.addEventListener('keydown', onKey);
    document.body.classList.toggle('modal-open', scorecardOpen);
    return () => document.removeEventListener('keydown', onKey);
  }, [scorecardOpen]);
  const closeScorecard = () => {
    window.sessionStorage.setItem(scorecardDismissedKey, 'true');
    setScorecardOpen(false);
  };
  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <Navbar onScorecard={() => setScorecardOpen(true)} />
    <main id="main" className={location.pathname === '/' ? 'site-main site-main-home' : 'site-main site-main-inner'}><Outlet /></main>
    <Footer />
    {scorecardOpen && <OptInForm modal onClose={closeScorecard} />}
  </>;
}
