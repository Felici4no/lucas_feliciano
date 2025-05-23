  import React from 'react';
  import { BookOpen, Briefcase, GraduationCap, Languages } from 'lucide-react';

  function Curriculum() {
    const skills = {
      programming: [
        { name: 'Python', level: 75 },
        { name: 'JavaScript', level: 70 }, // Atualizado
        { name: 'TypeScript', level: 30 }, // Novo
        { name: 'Java', level: 30 }
      ]
      ,
      technologies: [
        { name: 'Git', level: 70 },
        { name: 'Flask', level: 60 },
        { name: 'Node.js', level: 40 }, // Novo
        { name: 'MySQL', level: 30 }
      ],    
      languages: [
        { name: 'Portuguese', level: 100, native: true },
        { name: 'English', level: 65, native: false },
        { name: 'Mandarin', level: 10, native: false } // Novo idioma
      ]
      
    };

    return (
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8 animate-fade-in">Curriculum Vitae</h1>

      
      {/* Education Section */}
      <section className="mb-12 transform hover:scale-[1.01] transition-transform duration-300">
          <div className="flex items-center gap-3 mb-6">
            <GraduationCap className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Education</h2>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 mb-4 hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Software Engineering</h3>
            <p className="text-gray-600 dark:text-gray-300">FIAP</p>
            <p className="text-gray-500 dark:text-gray-400">2024 - Present</p>
            <p className="text-gray-700 dark:text-gray-300 mt-3">
              Relevant coursework: Web Development, Algorithms, Agile Methodology, Database Management          </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 mb-4 hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Software Programming</h3>
            <p className="text-gray-600 dark:text-gray-300">ALURA</p>
            <p className="text-gray-500 dark:text-gray-400">2024 - Present</p>
            <p className="text-gray-700 dark:text-gray-300 mt-3">
              Various programming languages ​​and technologies, data science and DevOps
            </p>
          </div>
        </section>

        {/* Language Section */}
        <section className="mb-12 transform hover:scale-[1.01] transition-transform duration-300">
          <div className="flex items-center gap-3 mb-6">
            <Languages className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Language Proficiency</h2>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 hover:shadow-lg transition-shadow duration-300">
            <div className="space-y-6">
              {skills.languages.map((language, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-gray-700 dark:text-gray-300 font-medium">
                        {language.name}
                      </span>
                      {language.native && (
                        <span className="ml-2 text-sm text-blue-600 dark:text-blue-400">
                          (Native)
                        </span>
                      )}
                    </div>
                    <span className="text-gray-600 dark:text-gray-400">
                      {language.level}%
                    </span>
                  </div>
                  <div className="h-2.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-blue-600 dark:bg-blue-500 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${language.level}%` }}
                    />
                  </div>
                  <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
                    <span>Beginner</span>
                    <span>Intermediate</span>
                    <span>Advanced</span>
                    <span>Native</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-12 transform hover:scale-[1.01] transition-transform duration-300">
          <div className="flex items-center gap-3 mb-6">
            <BookOpen className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Skills</h2>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 hover:shadow-lg transition-shadow duration-300">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Programming Languages</h3>
                <div className="space-y-4">
                  {skills.programming.map((skill, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
                        <span className="text-gray-600 dark:text-gray-400">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-blue-600 dark:bg-blue-500 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Technologies & Tools</h3>
                <div className="space-y-4">
                  {skills.technologies.map((skill, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
                        <span className="text-gray-600 dark:text-gray-400">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-blue-600 dark:bg-blue-500 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="transform hover:scale-[1.01] transition-transform duration-300">
          <div className="flex items-center gap-3 mb-6">
            <Briefcase className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Experience</h2>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 hover:shadow-lg transition-shadow duration-300">
            <div className="mb-6 pb-6 border-b border-gray-100 dark:border-gray-700">
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Software Developer - Scientific Initiation - LibrasFlow</h3>
              <p className="text-gray-600 dark:text-gray-300"></p>
              <p className="text-gray-500 dark:text-gray-400">June 2024 - February 2025</p>
              <ul className="mt-3 space-y-2 text-gray-700 dark:text-gray-300">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-600 dark:bg-blue-400 rounded-full"></span>
                  Developed and maintained applications using Python and other tools
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-600 dark:bg-blue-400 rounded-full"></span>
                  Collaborated with senior developers on the project
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-600 dark:bg-blue-400 rounded-full"></span>
                  Implemented responsive designs and improved user experience
                  </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    );
  }

  export default Curriculum;