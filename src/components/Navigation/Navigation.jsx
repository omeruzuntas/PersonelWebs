import { useTheme } from '../../context/ThemeContext';
import { useLanguage } from '../../context/LanguageContext';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';

const Navigation = () => {
  const { isDark, setIsDark } = useTheme();
  const { t, toggleLanguage } = useLanguage();

  return (
    <nav className="py-6">
      <div className="container max-w-[1440px] flex items-center justify-end gap-6 mb-6">
        <div className="flex items-center bg-[#E8EBFF] dark:bg-gray-800 rounded-full p-[2px]">
          <button 
            className={`p-2 rounded-full ${!isDark ? 'bg-white dark:bg-gray-700' : ''}`}
            onClick={() => setIsDark(false)}
          >
            <SunIcon className="w-5 h-5 text-primary-500" />
          </button>
          <button 
            className={`p-2 rounded-full ${isDark ? 'bg-white dark:bg-gray-700' : ''}`}
            onClick={() => setIsDark(true)}
          >
            <MoonIcon className="w-5 h-5 text-primary-500" />
          </button>
        </div>

        <button 
          onClick={toggleLanguage}
          className="text-base font-medium text-primary-500"
        >
          {t('nav.switchLang')}
        </button>
      </div>

      <div className="container max-w-[1440px] flex items-center justify-between">
        <div className="w-14 h-14 bg-[#E8EBFF] dark:bg-gray-800 rounded-full flex items-center justify-center">
          <span className="text-primary-500 text-2xl font-medium">Ö</span>
        </div>

        <div className="flex items-center gap-10">
          <a href="#skills" className="text-[#6B7280] dark:text-gray-300 text-lg font-medium hover:text-primary-500">
            {t('nav.skills')}
          </a>
          <a href="#projects" className="text-[#6B7280] dark:text-gray-300 text-lg font-medium hover:text-primary-500">
            {t('nav.projects')}
          </a>

          <a 
            href="mailto:omeruzuntass@gmail.com"
            className="px-6 py-2.5 border border-[#E5E7EB] dark:border-gray-700 text-[#6B7280] dark:text-gray-300 rounded-lg text-base font-medium hover:text-primary-500 hover:border-primary-500 transition-colors"
          >
            {t('nav.hireMe')}
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation; 