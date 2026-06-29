import { Outlet, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import OptInForm from './OptInForm';

export default function Layout() {
  const [scorecardOpen, setScorecardOpen] = useState(false);
  const location = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [location.pathname]);
  useEffect(() => {
    const open = () => setScorecardOpen(true);
    window.addEventListener('open-scorecard', open);
    return () => window.removeEventListener('open-scorecard', open);
  }, []);
  useEffect(() => {
    const onKey = (event) => { if (event.key === 'Escape') setScorecardOpen(false); };
    document.addEventListener('keydown', onKey);
    document.body.classList.toggle('modal-open', scorecardOpen);
    return () => document.removeEventListener('keydown', onKey);
  }, [scorecardOpen]);
  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <Navbar onScorecard={() => setScorecardOpen(true)} />
    <main id="main"><Outlet /></main>
    <Footer />
    {scorecardOpen && <OptInForm modal onClose={() => setScorecardOpen(false)} />}
  </>;
}
