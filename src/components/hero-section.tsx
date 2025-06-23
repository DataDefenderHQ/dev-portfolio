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
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden pt-20">
      <div className="container mx-auto px-6 text-center">
        <div className="animate-fade-in">
          {/* Professional headshot */}
          <div className="w-48 h-48 mx-auto mb-8 rounded-full overflow-hidden shadow-2xl border-4 border-white">
            <img 
              src="hero.jpeg" 
              alt="Margaret Wangui - Professional Portrait" 
              className="w-full h-full object-cover" 
            />
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-4">
            Wangui Margaret
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Backend Developer |Enthusiast Data Analyst
          </p>
          
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Passionate about creating robust backend solutions and uncovering insights through data analysis. 
            I specialize in Django development and leveraging data to drive informed decision-making.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button 
              onClick={scrollToProjects}
              className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-blue-800 transition-colors duration-300 shadow-lg"
            >
              View My Work
            </button>
            <button 
              onClick={scrollToContact}
              className="border-2 border-primary text-primary px-8 py-3 rounded-lg hover:bg-primary hover:text-white transition-all duration-300"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Down Arrow */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <button onClick={scrollToAbout}>
          <div className="animate-bounce-slow cursor-pointer">
            <ChevronDown className="w-8 h-8 text-primary" />
          </div>
        </button>
      </div>
    </section>
  );
}
