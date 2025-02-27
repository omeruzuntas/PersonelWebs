import { useLanguage } from '../../context/LanguageContext';
import pizzaImage from '../../assets/images/pizza.png';
import personalImage from '../../assets/images/personal.png';
import witflixImage from '../../assets/images/witflix.png';

const Projects = () => {
  const { t } = useLanguage();

  const projects = [
    {
      title: 'projects.workintech.title',
      description: 'projects.workintech.description',
      tech: 'projects.workintech.tech',
      github: 'https://github.com/omeruzuntas/Pizza',
      site: 'https://github.com/omeruzuntas/Pizza',
      image: pizzaImage
    },
    {
      title: 'projects.randomJokes.title',
      description: 'projects.randomJokes.description',
      tech: 'projects.randomJokes.tech',
      github: 'https://github.com/omeruzuntas/PersonelWebs',
      site: 'https://github.com/omeruzuntas/PersonelWebs',
      image: personalImage
    },
    {
      title: 'projects.journey.title',
      description: 'projects.journey.description',
      tech: 'projects.journey.tech',
      github: 'https://github.com/omeruzuntas/WitFlix/tree/Project',
      site: 'https://github.com/omeruzuntas/WitFlix/tree/Project',
      image: witflixImage
    }
  ];

  return (
    <section className="py-24" id="projects">
      <div className="container max-w-[1440px]">
        <h2 className="text-4xl font-bold text-[#111827] dark:text-white mb-16">
          {t('projects.title')}
        </h2>

        <div className="grid grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden h-[600px] flex flex-col">
              <div className="aspect-video bg-[#E8EBFF] dark:bg-gray-700 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={t(project.title)}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-semibold text-[#6366F1] dark:text-[#6366F1] mb-4">
                  {t(project.title)}
                </h3>
                <p className="text-[#6B7280] dark:text-gray-300 mb-8">
                  {t(project.description)}
                </p>
                <div className="mt-auto">
                  <div className="flex gap-3 mb-6">
                    {t(project.tech).map((tech, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1 bg-[#EEF2FF] dark:bg-[#EEF2FF] text-[#6366F1] dark:text-[#6366F1] rounded-md text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between">
                    <a 
                      href={project.github} 
                      className="text-[#6366F1] hover:text-[#4F46E5] font-medium"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {t('projects.links.github')}
                    </a>
                    <a 
                      href={project.site} 
                      className="text-[#6366F1] hover:text-[#4F46E5] font-medium"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {t('projects.links.viewSite')}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 