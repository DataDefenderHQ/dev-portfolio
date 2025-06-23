import { Code, Terminal, BarChart, Table, Cloud, Hammer, Database, Bot } from "lucide-react";

const tools = [
  { icon: Code, name: "VS Code", description: "Code Editor" },
  { icon: Terminal, name: "Linux/Unix", description: "Operating System" },
  { icon: BarChart, name: "Jupyter", description: "Data Analysis" },
  { icon: Table, name: "Excel/Sheets", description: "Data Processing" },
  { icon: BarChart, name: "Tableau", description: "Data Visualization" },
  { icon: Bot, name: "Scikit-learn", description: "Machine Learning" },
  { icon: Cloud, name: "AWS", description: "Cloud Platform" },
  { icon: Cloud, name: "Heroku", description: "Deployment" },
  { icon: Database, name: "Firebase", description: "Backend Services" },
  { icon: Hammer, name: "Postman", description: "API Testing" },
  { icon: Code, name: "Git & GitHub", description: "Version Control" },
  { icon: Database, name: "Docker", description: "Containerization" }
];

export default function ToolsSection() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">Tools & Technologies</h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            The tools and technologies I use to build robust applications and analyze data
          </p>
        </div>

        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {tools.map((tool, index) => {
            const Icon = tool.icon;
            return (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gray-100 dark:bg-gray-700 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30 transition-colors duration-300">
                  <Icon className="w-8 h-8 text-gray-600 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400" />
                </div>
                <h3 className="font-semibold text-gray-800 dark:text-white">{tool.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{tool.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
