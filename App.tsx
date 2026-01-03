
import React, { Suspense, lazy } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import LegalAssistant from './components/LegalAssistant';

// Lazy load pages for performance
const Home = lazy(() => import('./pages/Home'));
const Articles = lazy(() => import('./pages/Articles'));
const ArticleDetail = lazy(() => import('./pages/ArticleDetail'));
const PracticeAreas = lazy(() => import('./pages/PracticeAreas'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const MigrationTool = lazy(() => import('./pages/MigrationTool'));

const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-slate-50">
    <div className="flex flex-col items-center">
      <div className="w-12 h-12 border-4 border-[#4A90E2] border-t-transparent rounded-full animate-spin"></div>
      <p className="mt-4 text-blue-900 font-semibold uppercase tracking-widest text-xs">Loading Chris Chua & Associates...</p>
    </div>
  </div>
);

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Suspense fallback={<LoadingFallback />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/articles" element={<Articles />} />
              <Route path="/articles/:slug" element={<ArticleDetail />} />
              <Route path="/practice-areas" element={<PracticeAreas />} />
              <Route path="/team" element={<About />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/migrate" element={<MigrationTool />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
        <LegalAssistant />
      </div>
    </Router>
  );
};

export default App;
