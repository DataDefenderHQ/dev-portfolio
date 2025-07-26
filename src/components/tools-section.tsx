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
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Tools & Technologies</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            The tools and technologies I use to build robust applications and analyze data
          </p>
        </div>

        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {tools.map((tool, index) => {
            const Icon = tool.icon;
            return (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-white dark:bg-gray-700 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30 transition-colors duration-200 shadow-sm border border-gray-100 dark:border-gray-600">
                  <Icon className="w-6 h-6 text-gray-600 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400" />
                </div>
                <h3 className="font-semibold text-gray-800 dark:text-white text-sm">{tool.name}</h3>
                <p className="text-xs text-gray-600 dark:text-gray-300 mt-1">{tool.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
