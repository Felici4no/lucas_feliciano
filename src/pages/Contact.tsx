import React from 'react';
import { Mail, MapPin, Phone, Github, Linkedin } from 'lucide-react';

function Contact() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">Contact Me</h1>

      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Get in Touch</h2>
        
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg">
              <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
              <a 
                href="mailto:lucas.feliciano.eng.2003@gmail.com" 
                className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400"
              >
                lucas.feliciano.eng.2003@gmail.com
              </a>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg">
              <Phone className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Phone</p>
              <a 
                href="tel:+55 11 95447-1933" 
                className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400"
              >
                +55 11 95447-1933
              </a>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg">
              <MapPin className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Location</p>
              <p className="text-gray-900 dark:text-white">São Paulo, Brazil</p>
            </div>
          </div>

          <div className="pt-6 mt-6 border-t border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Social Media</h3>
            <div className="flex gap-4">
              <a 
                href="https://github.com/Felici4no" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors"
              >
                <Github className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </a>
              <a 
                href="https://www.linkedin.com/in/lucas-feliciano-software/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors"
              >
                <Linkedin className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;