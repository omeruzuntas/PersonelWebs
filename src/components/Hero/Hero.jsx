import { useLanguage } from '../../context/LanguageContext';
import profileImage from '../../assets/images/profil.png';

const Hero = () => {
  const { t } = useLanguage();
  
  return (
    <section className="py-24">
      <div className="container max-w-[1440px] grid grid-cols-2 gap-24 items-center">
        <div>
          <div className="inline-block bg-primary-500 text-white px-5 py-1.5 rounded mb-8 text-lg">
            {t('hero.name')}
          </div>
          
          <div className="space-y-8 mb-14">
            <h1 className="text-[#111827] dark:text-white text-6xl font-bold leading-tight">
              {t('hero.title.line1')}
              <br />
              {t('hero.title.line2')}
            </h1>
            <p className="text-[#6B7280] dark:text-gray-300 text-xl leading-relaxed">
              {t('hero.description')}
            </p>
          </div>

          <div className="flex items-center gap-5">
            <a 
              href="mailto:omeruzuntass@gmail.com"
              className="px-10 py-4 bg-primary-500 text-white rounded-lg text-lg font-medium hover:bg-primary-600 transition-colors"
            >
              {t('hero.buttons.hireMe')}
            </a>
            <a 
              href="https://github.com/omeruzuntas"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 bg-white dark:bg-gray-800 text-[#6B7280] dark:text-gray-300 border border-[#E5E7EB] dark:border-gray-700 rounded-lg text-lg font-medium hover:border-primary-500 hover:text-primary-500 transition-colors"
            >
              {t('hero.buttons.github')}
            </a>
            <a 
              href="https://www.linkedin.com/in/ömer-nuri-uzuntaş-740b3a2a7/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 bg-white dark:bg-gray-800 text-[#6B7280] dark:text-gray-300 border border-[#E5E7EB] dark:border-gray-700 rounded-lg text-lg font-medium hover:border-primary-500 hover:text-primary-500 transition-colors"
            >
              {t('hero.buttons.linkedin')}
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-[#E8EBFF] dark:bg-gray-800 rounded-3xl -rotate-6"></div>
          <div className="relative bg-primary-100 dark:bg-gray-700 rounded-3xl w-full h-[600px] overflow-hidden">
            <img 
              src={profileImage} 
              alt="Profile" 
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 