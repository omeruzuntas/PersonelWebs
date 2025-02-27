import { useLanguage } from '../../context/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="py-24 bg-[#FAFAFA] dark:bg-gray-900">
      <div className="container max-w-[1440px]">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-4xl font-bold text-[#111827] dark:text-white mb-4 whitespace-pre-line">
              {t('footer.title')}
            </h2>
            <a 
              href="mailto:omeruzuntass@gmail.com" 
              className="text-[#6366F1] hover:text-[#4F46E5] text-xl font-medium underline"
            >
              👉 omeruzuntass@gmail.com
            </a>
          </div>

          <div className="flex items-center gap-8">
            <a 
              href="https://github.com/omeruzuntas/PersonelWebs" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#6B7280] hover:text-[#6366F1]"
            >
              {t('footer.links.blog')}
            </a>
            <a 
              href="https://github.com/omeruzuntas" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#6366F1] hover:text-[#4F46E5]"
            >
              {t('footer.links.github')}
            </a>
            <a 
              href="https://www.linkedin.com/in/ömer-nuri-uzuntaş-740b3a2a7/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#6366F1] hover:text-[#4F46E5]"
            >
              {t('footer.links.linkedin')}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 