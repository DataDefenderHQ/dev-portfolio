import { FaLinkedin, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Wangui Margaret</h3>
          <p className="text-gray-400 mb-6">Backend Developer | Data Analyst</p>
          
          <div className="flex justify-center space-x-4 mb-8">
            <a 
              href="https://linkedin.com/in/margaretwangui" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              <FaLinkedin className="w-5 h-5" />
            </a>
            <a 
              href="https://github.com/margaretwangui" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              <FaGithub className="w-5 h-5" />
            </a>
            <a 
              href="https://instagram.com/margaretwangui" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              <FaInstagram className="w-5 h-5" />
            </a>
            <a 
              href="https://twitter.com/margaretwangui" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              <FaTwitter className="w-5 h-5" />
            </a>
          </div>
          
          <div className="border-t border-gray-800 pt-6">
            <p className="text-gray-400 text-sm">
              © 2025 Wangui Margaret. All rights reserved. 
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
