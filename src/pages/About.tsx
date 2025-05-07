
import { BookOpen, Code, Coffee } from 'lucide-react';

function About() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">About Me</h1>
      
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-8 mb-8">
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
          I'm a Software Engineering student at FIAP, passionate about technology and innovation.
          My journey in tech began in childhood, when I used .bat scripts to prank classmates — a playful curiosity that evolved into a deep fascination with how things work and how they can be improved.
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
          Over the past few years, I've been dedicated to exploring various programming languages and engaging in both academic and personal projects that helped me grow as a professional and as a person. From studying JavaScript, Node.js, and TypeScript to understanding system logic and design, I'm steadily building the skillset to become a fullstack developer capable of creating real impact.
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
          Although I'm still building my foundation, I’ve learned that logic is essential and that challenges are opportunities in disguise. I've already faced and overcome several during my time in college, each one shaping my mindset and resilience. I believe that technology, when combined with purpose and collaboration, has the power to transform the world.
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          This is just the beginning of my journey. I’m excited to keep learning, creating, and sharing what I discover along the way — with the hope of contributing to a more innovative, sustainable, and connected future. Let's explore, innovate, and build it together.
        </p>
      </div>


      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">What I Do</h2>
      
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
          <Code className="w-8 h-8 text-blue-600 dark:text-blue-400 mb-4" />
          <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Development</h3>
          <p className="text-gray-600 dark:text-gray-300">
          Focused on back-end development, building robust and efficient server-side applications.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
          <BookOpen className="w-8 h-8 text-blue-600 dark:text-blue-400 mb-4" />
          <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Learning</h3>
          <p className="text-gray-600 dark:text-gray-300">
          Constantly expanding my knowledge in software engineering and new technologies, I understand what the market demands.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
        <Coffee className="w-8 h-8 text-blue-600 dark:text-blue-400 mb-4" />
          <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Problem Solving</h3>
          <p className="text-gray-600 dark:text-gray-300">
            I enjoy tackling complex problems and finding efficient solutions. My team and I proudly achieved <strong>2nd place</strong> in FIAP's annual challenge by solving a real-world problem for <strong>Tech Mahindra</strong>. 
            If you're open to it, we could even play a game of chess.
          </p>
        </div>

      </div>
    </div>
  );
}

export default About;