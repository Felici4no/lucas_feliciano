import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

function Projects() {
  const projects = [
{
      title: "EcoSimulator 1.0",
      description: "An educational ecosystem simulator that visualizes environmental interactions and resource flows. Designed to promote ecological awareness through digital experimentation.",
      image: "https://media.licdn.com/dms/image/v2/D4D22AQGdGggYfhPJOA/feedshare-shrink_800/feedshare-shrink_800/0/1730127797655?e=1749081600&v=beta&t=g4F6Yx98iAHJR7tosUHRkJbozPD1NLz6pLGmZGwOti0",
      technologies: ["C", "Python", "PVC Pipes"],
      github: "https://github.com/orgs/NextStage-NextCode",
      demo: "https://jocular-brigadeiros-f03751.netlify.app/"
    },  {
      title: "FeliAppHub",
      description: 'FeliAppHub é a central inteligente do ecossistema FeliApp. Aqui você encontra, acessa e acompanha todos os aplicativos desenvolvidos com criatividade, inovação e propósito. Seja para aprender com quizzes, explorar emoções em mapas, converter arquivos, criar conexões especiais ou até transformar sonhos em dados — tudo começa por aqui.',
      image: "https://i.imgur.com/FtOGNGp_d.png?maxwidth=520&shape=thumb&fidelity=high",
      technologies: ["JavaScript", "React", "Vercel"],
      github: "https://github.com/Feli-App-Hub/feli-app-hub.github.io",
      demo: "https://feli-app-hub.github.io/"
    },{
      title: "PyCriptoNita",
      description: "PyCriptoNita is a simple Python script designed to encrypt and decrypt text messages using a randomly generated substitution cipher.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/640px-Python-logo-notext.svg.png",
      technologies: ["Python"],
      github: "https://github.com/Felici4no/PyCriptoNita",
      demo: "https://github.com/Felici4no/PyCriptoNita"
    },{
      title: "SudokuGen",
      description: "A Sudoku generator that creates unique puzzles at various difficulty levels. Perfect for logic enthusiasts and developers looking to integrate Sudoku challenges into their projects.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/640px-Python-logo-notext.svg.png",
      technologies: ["Python"],
      github: "https://github.com/Felici4no/SudokuGen",
      demo: "https://github.com/Felici4no/SudokuGen"
    }, {
      title: "IC FIAP – ServoDesk 1.0",
      description: "An accessibility-oriented robotic desk developed during a scientific initiation at FIAP. It features a robotic arm for object manipulation and mobility support, built using Raspberry Pi and Python.",
      image: "https://plus.unsplash.com/premium_photo-1682582241642-d16c69cc087c?q=80&w=1991&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      technologies: ["Python", "Raspberry Pi", "Computer Vision"],
      github: "https://github.com/Felici4no/ServoDesk",
      demo: "https://github.com/Felici4no/ServoDesk"
    },
  ];
  

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">My Projects</h1>
      
      <div className="grid gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/3">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-48 w-full object-cover md:h-full"
                />
              </div>
              <div className="p-8 md:w-2/3">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{project.title}</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                  >
                    <Github className="w-5 h-5" />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                  >
                    <ExternalLink className="w-5 h-5" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;