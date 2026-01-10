
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Article } from '../types';
import { Calendar, User, ArrowRight } from 'lucide-react';

interface ArticleCardProps {
  article: Article;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  const { t, i18n } = useTranslation();
  const isZh = i18n.language.startsWith('zh');
  const displayTitle = (isZh && article.titleZh) ? article.titleZh : article.title;
  const displayExcerpt = (isZh && article.excerptZh) ? article.excerptZh : article.excerpt;

  return (
    <article className="group bg-white rounded-lg border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full">
      <div className="relative aspect-video overflow-hidden">
        <img
          src={article.imageUrl}
          alt={article.title}
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-blue-900 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
            {article.category}
          </span>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center space-x-4 text-xs text-slate-500 mb-3">
          <span className="flex items-center"><Calendar className="w-3 h-3 mr-1" /> {article.publishDate}</span>
          <span className="flex items-center"><User className="w-3 h-3 mr-1" /> {article.author}</span>
        </div>

        <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-800 transition-colors line-clamp-2">
          {displayTitle}
        </h3>

        <p className="text-slate-600 text-sm mb-6 line-clamp-3 leading-relaxed">
          {displayExcerpt}
        </p>

        <div className="mt-auto pt-4 border-t border-slate-50 flex items-center justify-between">
          <Link
            to={`/articles/${article.slug}`}
            className="text-blue-900 text-sm font-bold flex items-center hover:translate-x-1 transition-transform"
          >
            {t('articles.read_more')} <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default ArticleCard;
