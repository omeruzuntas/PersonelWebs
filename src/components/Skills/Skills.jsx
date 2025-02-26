import { useLanguage } from '../../context/LanguageContext';

const Skills = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24" id="skills">
      <div className="container max-w-[1440px]">
        <h2 className="text-4xl font-bold text-[#111827] dark:text-white mb-16">
          {t('skills.title')}
        </h2>

        <div className="grid grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-primary-500">
              {t('skills.javascript.title')}
            </h3>
            <p className="text-[#6B7280] dark:text-gray-300 leading-relaxed">
              {t('skills.javascript.description')}
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-primary-500">
              {t('skills.react.title')}
            </h3>
            <p className="text-[#6B7280] dark:text-gray-300 leading-relaxed">
              {t('skills.react.description')}
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-primary-500">
              {t('skills.node.title')}
            </h3>
            <p className="text-[#6B7280] dark:text-gray-300 leading-relaxed">
              {t('skills.node.description')}
            </p>
          </div>
        </div>
      </div>
      <div className="container max-w-[1440px] mt-24">
        <div className="w-full h-[1px] bg-[#E5E7EB] dark:bg-gray-700"></div>
      </div>
    </section>
  );
};

export default Skills; 