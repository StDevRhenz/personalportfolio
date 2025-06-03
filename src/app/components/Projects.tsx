export default function Projects() {
  // const projects = [
  //   {
  //     title: 'Project One',
  //     description: 'A brief description of your first project. Explain what it does and what technologies you used.',
  //     technologies: ['React', 'TypeScript', 'Tailwind CSS'],
  //     image: '/project1.jpg',
  //     link: 'https://github.com/yourusername/project1',
  //     demo: 'https://project1-demo.com'
  //   },
  //   {
  //     title: 'Project Two',
  //     description: 'Description of your second project. Highlight the key features and your role in development.',
  //     technologies: ['Next.js', 'Node.js', 'MongoDB'],
  //     image: '/project2.jpg',
  //     link: 'https://github.com/yourusername/project2',
  //     demo: 'https://project2-demo.com'
  //   },
  // ];

  return (
    <section id="projects" className="py-16">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">My Projects</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-12">Uploading soon...</p>
        
        {/* Commented out project boxes for now
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105"
            >
              <div className="relative h-48 bg-gray-200 dark:bg-gray-700">
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                  [Project Image]
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    GitHub →
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      Live Demo →
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        */}
      </div>
    </section>
  );
}
