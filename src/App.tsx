import React from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Github, Linkedin, Mail, Menu, Moon, Sun, X } from 'lucide-react';
import LetterboxdIcon from './icons/LetterboxdIcon';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Curriculum from './pages/Curriculum';
import Contact from './pages/Contact';
import Books from './pages/Books';

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isDark, setIsDark] = React.useState(() => {
    if (typeof window !== 'undefined') {
      // Set dark mode by default
      document.documentElement.classList.add('dark');
      return true;
    }
    return true;
  });

  const [flipped, setFlipped] = React.useState(false);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setFlipped((prev) => !prev);
    }, 3000); // alterna a cada 3 segundos

    return () => clearInterval(interval);
  }, []);

  


  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const toggleDarkMode = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');


  };

  

  return (
    <Router>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
        {/* Navigation */}
        <nav className="bg-white dark:bg-gray-800 shadow-sm">
          <div className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
            <div className="relative w-[200px] h-[30px] perspective">
              <div className={`w-full h-full transition-transform duration-700 transform-style-preserve-3d ${flipped ? 'rotate-x-180' : ''}`}>
                <Link
                  to="/"
                  className="absolute w-full h-full backface-hidden text-2xl font-bold text-gray-800 dark:text-white flex items-center justify-center"
                >
                  Felici4no
                </Link>
                <Link
                  to="/"
                  className="absolute w-full h-full backface-hidden text-2xl font-bold text-blue-600 dark:text-blue-400 rotate-x-180 flex items-center justify-center">
                  Lucas Feliciano
                </Link>
              </div>
            </div>




              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-8">
                <Link to="/" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Home</Link>
                <Link to="/about" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">About</Link>
                <Link to="/projects" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Projects</Link>
                <Link to="/curriculum" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Curriculum</Link>
                <Link to="/books" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Books</Link>
                <Link to="/contact" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Contact</Link>
                <button
                  onClick={toggleDarkMode}
                  className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  aria-label="Toggle dark mode"
                >
                  {isDark ? <Sun className="w-5 h-5 text-gray-300" /> : <Moon className="w-5 h-5 text-gray-600" />}
                </button>
              </div>

              {/* Mobile Menu Button */}
              <div className="md:hidden flex items-center gap-4">
                <button
                  onClick={toggleDarkMode}
                  className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  aria-label="Toggle dark mode"
                >
                  {isDark ? <Sun className="w-5 h-5 text-gray-300" /> : <Moon className="w-5 h-5 text-gray-600" />}
                </button>
                <button onClick={toggleMenu}>
                  {isMenuOpen ? <X className="w-6 h-6 text-gray-600 dark:text-gray-300" /> : <Menu className="w-6 h-6 text-gray-600 dark:text-gray-300" />}
                </button>
              </div>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
              <div className="md:hidden mt-4 space-y-4">
                <Link to="/" className="block text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors" onClick={toggleMenu}>Home</Link>
                <Link to="/about" className="block text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors" onClick={toggleMenu}>About</Link>
                <Link to="/projects" className="block text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors" onClick={toggleMenu}>Projects</Link>
                <Link to="/curriculum" className="block text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors" onClick={toggleMenu}>Curriculum</Link>
                <Link to="/books" className="block text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors" onClick={toggleMenu}>Books</Link>
                <Link to="/contact" className="block text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors" onClick={toggleMenu}>Contact</Link>
              </div>
            )}
          </div>
        </nav>

        {/* Main Content */}
        <main className="container mx-auto px-6 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/curriculum" element={<Curriculum />} />
            <Route path="/books" element={<Books />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="bg-white dark:bg-gray-800 shadow-sm mt-12">
          <div className="container mx-auto px-6 py-8">
            <div className="flex justify-center space-x-6">
              <a href="https://github.com/Felici4no" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/in/lucas-feliciano-software/" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="mailto:lucas.feliciano.eng.2003@gmail.com" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100">
                <Mail className="w-6 h-6" />
              </a>
              <a href="https://letterboxd.com/lucas_feliciano/" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100">
                <LetterboxdIcon className="w-6 h-6" />
</a>

            </div>
            <p className="text-center text-gray-600 dark:text-gray-400 mt-4">
              © 2025 Lucas Feliciano - Felici4no. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;