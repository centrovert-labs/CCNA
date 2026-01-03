
import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { MOCK_ARTICLES } from '../constants';
import { Calendar, User, ArrowLeft, Share2, Facebook, Twitter, Linkedin, Check, Link as LinkIcon } from 'lucide-react';
import ArticleCard from '../components/ArticleCard';

const ArticleDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [copying, setCopying] = useState(false);
  
  const article = MOCK_ARTICLES.find(a => a.slug === slug);
  const relatedArticles = MOCK_ARTICLES
    .filter(a => a.category === article?.category && a.id !== article?.id)
    .slice(0, 3);

  if (!article) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold mb-4">Article Not Found</h2>
        <button onClick={() => navigate('/articles')} className="text-blue-900 font-bold hover:underline">
          Return to Articles
        </button>
      </div>
    );
  }

  const articleUrl = window.location.href;

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: article.title,
          text: article.excerpt,
          url: articleUrl,
        });
      } catch (err) {
        if ((err as Error).name !== 'AbortError') {
          console.error('Error sharing:', err);
        }
      }
    } else {
      handleCopyLink();
    }
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(articleUrl);
    setCopying(true);
    setTimeout(() => setCopying(false), 2000);
  };

  const shareLinks = {
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(articleUrl)}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(articleUrl)}&text=${encodeURIComponent(article.title)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(articleUrl)}`,
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Header */}
      <div className="relative py-20 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img src={article.imageUrl} className="w-full h-full object-cover blur-sm" alt="" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
        <div className="relative max-w-4xl mx-auto px-4">
          <Link to="/articles" className="inline-flex items-center text-blue-300 mb-8 hover:text-white transition-colors group">
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Insights
          </Link>
          <span className="bg-blue-600 text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-sm mb-4 inline-block">
            {article.category}
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight serif-font">
            {article.title}
          </h1>
          <div className="flex flex-wrap items-center gap-6 text-slate-300 text-sm">
            <div className="flex items-center"><User className="w-4 h-4 mr-2" /> {article.author}</div>
            <div className="flex items-center"><Calendar className="w-4 h-4 mr-2" /> {article.publishDate}</div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Main Content */}
        <article className="lg:col-span-8">
          <div className="prose prose-lg max-w-none text-slate-700 leading-relaxed">
            <p className="text-xl font-medium text-slate-900 mb-8 border-l-4 border-blue-900 pl-6 italic">
              {article.excerpt}
            </p>
            <div className="space-y-6">
              <p>
                In the rapidly evolving world of legal frameworks, the subject of {article.category} has taken center stage. 
                As we navigate through 2024, the implications of recent legislative shifts continue to ripple through the sector, 
                affecting both local and international stakeholders.
              </p>
              <h2 className="text-2xl font-bold text-blue-950 serif-font">Key Regulatory Changes</h2>
              <p>
                The primary focus of this update surrounds the transparency requirements introduced in the second quarter. 
                For legal practitioners and their clients, understanding the granular details of these changes is no longer optional—it is a prerequisite for compliance.
              </p>
              <blockquote className="bg-slate-50 p-8 rounded-xl border-l-8 border-blue-900 my-10">
                <p className="text-xl font-serif text-slate-800 italic mb-4">
                  "Justice is not just about the outcome; it's about the precision of the process and the protection of fundamental rights within the framework of modern governance."
                </p>
                <cite className="text-sm font-bold text-blue-900 uppercase tracking-widest">— Principal Partner, Chris Chua & Associates LLC</cite>
              </blockquote>
              <p>
                {article.content} We advise our clients to conduct thorough internal audits to ensure alignment with these new guidelines. 
                Our team remains at the forefront of these discussions, participating in legislative sub-committees to ensure 
                our clients' interests are well-represented.
              </p>
            </div>
          </div>

          {/* Sharing Section */}
          <div className="mt-16 pt-10 border-t border-slate-100">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div className="flex items-center space-x-4">
                <span className="text-sm font-bold text-slate-500 uppercase tracking-wider">Share:</span>
                <a 
                  href={shareLinks.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2.5 bg-slate-100 rounded-full text-slate-600 hover:bg-blue-600 hover:text-white transition-all transform hover:scale-110 shadow-sm"
                  aria-label="Share on LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a 
                  href={shareLinks.twitter} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2.5 bg-slate-100 rounded-full text-slate-600 hover:bg-sky-500 hover:text-white transition-all transform hover:scale-110 shadow-sm"
                  aria-label="Share on Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a 
                  href={shareLinks.facebook} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2.5 bg-slate-100 rounded-full text-slate-600 hover:bg-blue-800 hover:text-white transition-all transform hover:scale-110 shadow-sm"
                  aria-label="Share on Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <button 
                  onClick={handleShare}
                  className="inline-flex items-center px-6 py-2.5 bg-[#4A90E2] text-white text-sm font-bold rounded-sm hover:bg-blue-600 transition-all shadow-md active:scale-95 uppercase tracking-widest"
                >
                  <Share2 className="w-4 h-4 mr-2" /> Share Article
                </button>
                <button 
                  onClick={handleCopyLink}
                  className={`inline-flex items-center px-6 py-2.5 border-2 ${copying ? 'border-green-500 text-green-600' : 'border-slate-200 text-slate-600'} text-sm font-bold rounded-sm hover:border-slate-400 transition-all uppercase tracking-widest shadow-sm`}
                >
                  {copying ? <Check className="w-4 h-4 mr-2" /> : <LinkIcon className="w-4 h-4 mr-2" />}
                  {copying ? 'Copied' : 'Copy Link'}
                </button>
              </div>
            </div>
          </div>
        </article>

        {/* Sidebar */}
        <aside className="lg:col-span-4 space-y-12">
          <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100 shadow-sm">
            <h3 className="text-xl font-bold text-blue-950 mb-4 serif-font">Need Legal Advice?</h3>
            <p className="text-blue-900/70 text-sm mb-6 leading-relaxed">
              If you have specific questions about {article.category} or need expert representation, 
              our senior partners are ready to assist you.
            </p>
            <Link to="/contact" className="block w-full bg-blue-900 text-white py-3 rounded-lg font-bold text-center hover:bg-blue-800 transition-colors shadow-lg shadow-blue-900/20">
              Schedule Consultation
            </Link>
          </div>

          <div>
            <h3 className="text-xl font-bold text-slate-900 mb-6 serif-font">Related Insights</h3>
            <div className="space-y-6">
              {relatedArticles.map(rel => (
                <Link key={rel.id} to={`/articles/${rel.slug}`} className="group flex items-start space-x-4">
                  <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                    <img src={rel.imageUrl} className="w-full h-full object-cover group-hover:scale-110 transition-transform" alt="" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm group-hover:text-blue-900 transition-colors line-clamp-2">
                      {rel.title}
                    </h4>
                    <span className="text-xs text-slate-500">{rel.publishDate}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default ArticleDetail;
