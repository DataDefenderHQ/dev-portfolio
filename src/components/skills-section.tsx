import { useEffect, useRef } from "react";

const skills = [
  {
    name: "Python",
    level: 90,
    color: "from-yellow-400 to-yellow-600",
    description: "Django, Flask, Data Analysis, Machine Learning",
    icon: "🐍"
  },
  {
    name: "JavaScript",
    level: 50,
    color: "from-yellow-300 to-yellow-500",
    description: "ES6+, Node.js, DOM Manipulation, Async Programming",
    icon: "⚡"
  },
  {
    name: "React",
    level: 70,
    color: "from-blue-400 to-blue-600",
    description: "Hooks, Context API, Component Architecture, JSX",
    icon: "⚛️"
  },
  {
    name: "Kotlin",
    level: 65,
    color: "from-purple-400 to-purple-600",
    description: "Android Development, OOP, Functional Programming",
    icon: "📱"
  }
];

export default function SkillsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const skillBars = entry.target.querySelectorAll('.skill-bar');
            skillBars.forEach((bar: Element) => {
              const htmlBar = bar as HTMLElement;
              const width = htmlBar.dataset.width;
              htmlBar.style.width = '0%';
              setTimeout(() => {
                if (width) {
                  htmlBar.style.width = width;
                }
              }, 200);
            });
          }
        });
      },
      {
        threshold: 0.5,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800" ref={sectionRef}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Skills & Technologies</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are the programming languages and technologies I work with
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {skills.map((skill) => (
            <div key={skill.name} className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-600">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">{skill.icon}</span>
                  <span className="text-lg font-semibold text-gray-900 dark:text-white">{skill.name}</span>
                </div>
                <span className="text-lg font-semibold text-blue-600">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-3 mb-3">
                <div 
                  className={`skill-bar bg-gradient-to-r ${skill.color} h-3 rounded-full`}
                  data-width={`${skill.level}%`}
                ></div>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
