import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 mt-16 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
        <p className="text-sm">&copy; {new Date().getFullYear()} Divesh Zope. All rights reserved.</p>
        
        <div className="flex space-x-6">
          <a
            href="https://github.com/DiveshZope08"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-gray-400 hover:text-white transition-colors duration-300"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.427 2.865 8.19 6.839 9.522.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.157-1.11-1.466-1.11-1.466-.908-.62.069-.607.069-.607 1.004.071 1.532 1.032 1.532 1.032.892 1.528 2.341 1.087 2.91.832.091-.647.35-1.087.636-1.337-2.22-.253-4.555-1.112-4.555-4.948 0-1.092.39-1.986 1.029-2.686-.103-.253-.446-1.27.098-2.646 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.91-1.296 2.748-1.025 2.748-1.025.546 1.376.202 2.393.1 2.646.64.7 1.028 1.594 1.028 2.686 0 3.846-2.338 4.69-4.566 4.938.36.31.68.92.68 1.855 0 1.337-.012 2.416-.012 2.745 0 .268.18.58.688.48A10.02 10.02 0 0022 12.017C22 6.484 17.523 2 12 2z"
              />
            </svg>
          </a>

          <a
            href="https://linkedin.com/in/divesh-zope"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-gray-400 hover:text-white transition-colors duration-300"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.327-.026-3.036-1.85-3.036-1.852 0-2.136 1.445-2.136 2.939v5.666H9.354V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.37-1.85 3.602 0 4.267 2.369 4.267 5.455v6.286zM5.337 7.433a2.07 2.07 0 11.001-4.14 2.07 2.07 0 010 4.14zM6.86 20.452H3.813V9h3.047v11.452zM22.225 0H1.771C.792 0 0 .77 0 1.722v20.555C0 23.23.792 24 1.771 24h20.451c.978 0 1.778-.77 1.778-1.722V1.722C24 .77 23.203 0 22.225 0z" />
            </svg>
          </a>

          <a
            href="mailto:diveshzope@gmail.com"
            aria-label="Email"
            className="text-gray-400 hover:text-white transition-colors duration-300"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M4 4h16v16H4z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
