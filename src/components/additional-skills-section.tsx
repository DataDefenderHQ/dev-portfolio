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
    blue: "bg-blue-100 text-blue-600",
    purple: "bg-purple-100 text-purple-600",
    green: "bg-green-100 text-green-600",
    red: "bg-red-100 text-red-600",
    yellow: "bg-yellow-100 text-yellow-600",
    indigo: "bg-indigo-100 text-indigo-600"
  };
  return colors[color as keyof typeof colors] || colors.blue;
};

const getTagClasses = (color: string) => {
  const colors = {
    blue: "bg-blue-100 text-blue-800",
    purple: "bg-purple-100 text-purple-800",
    green: "bg-green-100 text-green-800",
    red: "bg-red-100 text-red-800",
    yellow: "bg-yellow-100 text-yellow-800",
    indigo: "bg-indigo-100 text-indigo-800"
  };
  return colors[color as keyof typeof colors] || colors.blue;
};

export default function AdditionalSkillsSection() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">Core Skills & Expertise</h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Comprehensive skill set spanning development, design, and data analysis
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div 
                key={index}
                className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
              >
                <div className={`w-16 h-16 ${getColorClasses(skill.color)} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">{skill.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{skill.description}</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {skill.tags.map((tag) => (
                    <span 
                      key={tag}
                      className={`${getTagClasses(skill.color)} px-2 py-1 rounded text-sm`}
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
