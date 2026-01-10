import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Globe, ChevronDown } from 'lucide-react';

const LanguageSwitcher: React.FC = () => {
    const { i18n, t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const toggleDropdown = () => setIsOpen(!isOpen);

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
        setIsOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={toggleDropdown}
                className="flex items-center space-x-2 text-slate-700 hover:text-blue-600 font-bold transition-colors focus:outline-none"
            >
                <Globe className="w-5 h-5" />
                <span>{i18n.language.startsWith('zh') ? '中文' : 'English'}</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''}`} />
            </button>

            {isOpen && (
                <div className="absolute right-0 mt-2 w-32 bg-white border border-slate-200 rounded-md shadow-lg py-1 z-50">
                    <button
                        className={`block w-full text-left px-4 py-2 text-sm font-bold hover:bg-slate-50 ${i18n.language.startsWith('en') ? 'text-blue-600' : 'text-slate-700'}`}
                        onClick={() => changeLanguage('en')}
                    >
                        English
                    </button>
                    <button
                        className={`block w-full text-left px-4 py-2 text-sm font-bold hover:bg-slate-50 ${i18n.language.startsWith('zh') ? 'text-blue-600' : 'text-slate-700'}`}
                        onClick={() => changeLanguage('zh')}
                    >
                        中文
                    </button>
                </div>
            )}
        </div>
    );
};

export default LanguageSwitcher;
