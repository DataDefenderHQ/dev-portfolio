import { BarChart3, Palette, Lightbulb, Server, Database, GitBranch } from "lucide-react";

const skills = [
  {
    icon: BarChart3,
    title: "Data Science",
    description: "Statistical analysis, machine learning, data visualization, and predictive modeling",
    tags: ["Pandas", "NumPy", "Matplotlib"],
    color: "blue"
  },
  {
    icon: Palette,
    title: "Web Design",
    description: "UI/UX design, responsive layouts, user experience optimization, and modern design principles",
    tags: ["Figma", "CSS3", "Tailwind"],
    color: "purple"
  },
  {
    icon: Lightbulb,
    title: "Product Design",
    description: "User research, wireframing, prototyping, and product strategy development",
    tags: ["Prototyping", "User Research", "Strategy"],
    color: "green"
  },
  {
    icon: Server,
    title: "Backend Development",
    description: "RESTful APIs, database design, authentication, and scalable architecture",
    tags: ["Django", "REST APIs", "PostgreSQL"],
    color: "red"
  },
  {
    icon: Database,
    title: "Database Management",
    description: "Database design, optimization, data modeling, and performance tuning",
    tags: ["PostgreSQL", "MongoDB", "Redis"],
    color: "yellow"
  },
  {
    icon: GitBranch,
    title: "API Development",
    description: "RESTful services, GraphQL, API documentation, and integration strategies",
    tags: ["REST", "GraphQL", "OpenAPI"],
    color: "indigo"
  }
];

const getColorClasses = (color: string) => {
  const colors = {
    blue: "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400",
    purple: "bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400",
    green: "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400",
    red: "bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400",
    yellow: "bg-yellow-100 text-yellow-600 dark:bg-yellow-900/30 dark:text-yellow-400",
    indigo: "bg-indigo-100 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400"
  };
  return colors[color as keyof typeof colors] || colors.blue;
};

const getTagClasses = (color: string) => {
  const colors = {
    blue: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300",
    purple: "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300",
    green: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300",
    red: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300",
    yellow: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300",
    indigo: "bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300"
  };
  return colors[color as keyof typeof colors] || colors.blue;
};

export default function AdditionalSkillsSection() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Core Skills & Expertise</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Comprehensive skill set spanning development, design, and data analysis
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div 
                key={index}
                className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 text-center hover:shadow-md transition-shadow duration-200"
              >
                <div className={`w-12 h-12 ${getColorClasses(skill.color)} rounded-lg flex items-center justify-center mx-auto mb-4`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">{skill.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">{skill.description}</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {skill.tags.map((tag) => (
                    <span 
                      key={tag}
                      className={`${getTagClasses(skill.color)} px-2 py-1 rounded text-xs font-medium`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
