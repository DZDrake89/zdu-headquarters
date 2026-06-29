import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Scorecard from './pages/Scorecard';
import Ebook from './pages/Ebook';
import Workbook from './pages/Workbook';
import Accelerator from './pages/Accelerator';
import Coaching from './pages/Coaching';
import Workshops from './pages/Workshops';
import Resources from './pages/Resources';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

export default function App() {
  return <Routes>
    <Route element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/products" element={<Products />} />
      <Route path="/scorecard" element={<Scorecard />} />
      <Route path="/ebook" element={<Ebook />} />
      <Route path="/workbook" element={<Workbook />} />
      <Route path="/accelerator" element={<Accelerator />} />
      <Route path="/coaching" element={<Coaching />} />
      <Route path="/workshops" element={<Workshops />} />
      <Route path="/resources" element={<Resources />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  </Routes>;
}
