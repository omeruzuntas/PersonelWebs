import { useLanguage } from '../../context/LanguageContext';

const Profile = () => {
  const { t } = useLanguage();

  return (
    <section className="py-12" id="profile">
      <div className="container max-w-[1440px]">
        <h2 className="text-4xl font-bold text-[#111827] dark:text-white mb-8">
          {t('profile.title')}
        </h2>

        <div className="grid grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-primary-500 mb-6">
              {t('profile.details.title')}
            </h3>
            
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <span className="text-[#6B7280] dark:text-gray-300 font-medium">
                  {t('profile.details.birthDate')}
                </span>
                <span className="text-[#111827] dark:text-white">
                  {t('profile.details.birthDateValue')}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <span className="text-[#6B7280] dark:text-gray-300 font-medium">
                  {t('profile.details.city')}
                </span>
                <span className="text-[#111827] dark:text-white">
                  {t('profile.details.cityValue')}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <span className="text-[#6B7280] dark:text-gray-300 font-medium">
                  {t('profile.details.education')}
                </span>
                <div className="text-[#111827] dark:text-white">
                  <div>{t('profile.details.educationValue')}</div>
                  <div>{t('profile.details.educationYear')}</div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <span className="text-[#6B7280] dark:text-gray-300 font-medium">
                  {t('profile.details.role')}
                </span>
                <span className="text-[#111827] dark:text-white">
                  {t('profile.details.roleValue')}
                </span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-primary-500 mb-6">
              {t('profile.about.title')}
            </h3>
            
            <div className="space-y-4">
              <p>{t('profile.about.description1')}</p>
              <p>{t('profile.about.description2')}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container max-w-[1440px] mt-12">
        <div className="w-full h-[1px] bg-[#E5E7EB] dark:bg-gray-700"></div>
      </div>
    </section>
  );
};

export default Profile; 