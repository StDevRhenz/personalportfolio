export default function About() {
  const skills = [
    { name: 'React', level: 'Advanced' },
    { name: 'TypeScript', level: 'Advanced' },
    { name: 'Next.js', level: 'Advanced' },
    { name: 'Node.js', level: 'Intermediate' },
    { name: 'Tailwind CSS', level: 'Advanced' },
    { name: 'Git', level: 'Intermediate' },
  ];

  return (
    <section id="about" className="py-16 flex items-center justify-center min-h-[60vh]">
      <div className="max-w-3xl mx-auto text-center px-4">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">About Me</h2>
        
        <div className="space-y-12">
          <div className="max-w-xl mx-auto">
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              Hi! I'm a student developer who loves building applications.
              I enjoy using modern tools to make things work smoothly and look great.
              Let's create something awesome together!
            </p>  
            <p className="text-lg text-gray-600 dark:text-gray-300">
              I'm always excited to learn new things and keep up with the latest in web development so I can get better every day.
            </p>
          </div>

          <div className="flex flex-col items-center ">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Skills</h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">Uploading soon...</p>
            
            {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-2xl">
              {skills.map((skill) => (
                <div
                  key={skill.name}
                  className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm transform hover:scale-105 transition-transform duration-200"
                >
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-900 dark:text-white">{skill.name}</span>
                    <span className="text-sm text-blue-600 dark:text-blue-400">{skill.level}</span>
                  </div>
                </div>
              ))}
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
