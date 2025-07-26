import { ChevronDown } from "lucide-react";

export default function HeroSection() {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="animate-fade-in">
          {/* Profile Image */}
          <div className="w-32 h-32 mx-auto mb-8 rounded-full overflow-hidden shadow-xl border-4 border-white dark:border-gray-800">
            <img
              src="hero.jpeg"
              alt="Margaret Wangui - Professional Portrait"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Main Content */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
            Wangui Margaret
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-600 dark:text-blue-400 mb-6 font-medium">
            Backend Developer & Data Analyst
          </p>
          
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            I build robust backend solutions and uncover insights through data. 
            Specializing in Django and analytics, I help teams make smarter decisions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button
              onClick={scrollToProjects}
              className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium shadow-sm"
            >
              View My Work
            </button>
            <button
              onClick={scrollToContact}
              className="px-8 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-200 font-medium"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <button 
          onClick={scrollToAbout}
          className="p-3 bg-white/80 dark:bg-gray-800/80 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-200"
        >
          <ChevronDown className="w-6 h-6 text-blue-600 dark:text-blue-400 animate-bounce" />
        </button>
      </div>
    </section>
  );
}
