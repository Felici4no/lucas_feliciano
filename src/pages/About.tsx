
import { BookOpen, Code, Coffee } from 'lucide-react';

function About() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">About Me</h1>
      
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-8 mb-8">
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
          Sou estudante de Engenharia de Software na FIAP, apaixonado por tecnologia e inovação.
          Minha jornada na tecnologia começou na infância, quando eu usava scripts .bat para pregar peças nos colegas uma curiosidade que evoluiu para uma fascinação sobre como as coisas funcionam e como podem ser melhoradas.
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
          Nos últimos anos, venho explorando diversas linguagens de programação e me envolvendo em projetos acadêmicos e pessoais que têm me ajudado a crescer como profissional e como pessoa. Do estudo de JavaScript, Node.js e TypeScript ao entendimento de lógica e design de sistemas, estou construindo aos poucos um conjunto de habilidades para me tornar um desenvolvedor fullstack capaz de gerar impacto real.
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
          Um dos projetos que mais me orgulham é o <a href="https://feli-app-hub.github.io/"><strong>FeliAppHub</strong></a>  uma plataforma central que conecta todos os meus aplicativos em um ecossistema interativo. Mais do que um portfólio, é um espaço criativo com propósito, onde cada app explora diferentes aspectos do aprendizado, das emoções, das conexões e da utilidade prática. Com esse hub, quero construir experiências que importam e evoluem junto com cada nova ideia.
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
          Embora ainda esteja construindo minha base, aprendi que a lógica é essencial e que os desafios são oportunidades disfarçadas. Já enfrentei e superei vários durante minha trajetória na faculdade, e cada um deles ajudou a moldar minha mentalidade e resiliência. Acredito que a tecnologia, quando combinada com propósito e colaboração, tem o poder de transformar o mundo.
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          Esse é apenas o começo da minha jornada. Estou animado para continuar aprendendo, criando e compartilhando o que descubro ao longo do caminho — com a esperança de contribuir para um futuro mais inovador, sustentável e conectado. Vamos explorar, inovar e construir isso juntos.
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