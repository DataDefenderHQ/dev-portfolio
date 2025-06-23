import { useEffect, useRef } from "react";

const skills = [
  {
    name: "Python",
    level: 90,
    color: "from-yellow-400 to-yellow-600",
    description: "Django, Flask, Data Analysis, Machine Learning"
  },
  {
    name: "JavaScript",
    level: 50,
    color: "from-yellow-300 to-yellow-500",
    description: "ES6+, Node.js, DOM Manipulation, Async Programming"
  },
  {
    name: "React",
    level: 70,
    color: "from-blue-400 to-blue-600",
    description: "Hooks, Context API, Component Architecture, JSX"
  },
  {
    name: "Kotlin",
    level: 65,
    color: "from-purple-400 to-purple-600",
    description: "Android Development, OOP, Functional Programming"
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
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">Programming Languages</h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are the programming languages I work with and my proficiency levels
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {skills.map((skill) => (
            <div key={skill.name} className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <span className="text-lg font-semibold">{skill.name}</span>
                </div>
                <span className="text-primary font-semibold">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div 
                  className={`skill-bar bg-gradient-to-r ${skill.color} h-3 rounded-full`}
                  data-width={`${skill.level}%`}
                ></div>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
