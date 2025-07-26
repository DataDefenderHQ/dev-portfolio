import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "E-commerce REST API",
    description: "A comprehensive Django REST API for an e-commerce platform with user authentication, product management, order processing, and payment integration.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    tags: ["Kotlin", "PostgreSQL", "Redis"],
    githubUrl: "https://github.com/margret255/KotlinFirebaseApp.git"
  },
  {
    title: "Heart Disease Prediction",
    description: "A heart disease prediction project that demonstrates the basic data science workflow. It covers data cleaning, exploratory data analysis and building a predictive model using a RandomForest classifier in Python. ",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    tags: ["Python", "Pandas", "Plotly"],
    githubUrl: "https://github.com/margret255/Heart-Disease-prediction.git"
  },
  {
    title: "Student Project Management ",
    description: "a collaboration app designed for students to easily upload files, track group member contributions, leave feedback, and download final projects ",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    tags: ["Typescript", "Django", "WebSocket"],
    githubUrl: "https://github.com/margret255/MobileApp_classproject.git"
  },
  {
    title: "Drinks Rest API",
    description: "Drinks REST API built with Django REST Framework. It allows users to view, add, update, and delete various drink items, each with a name and description. Ideal for learning CRUD operations, RESTful design, and API development in Django.",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    tags: ["OpenAI", "Python"],
    githubUrl: "https://github.com/margret255/drinks_rest_api.git"
  },
  {
    title: "Mobile App Backend ",
    description: "RESTful API backend for a food saving mobile application built with Kotlin and Java. Handles user profiles, workout data, and social features.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    tags: ["Kotlin", "Java", "Firebase"],
    githubUrl: "https://github.com/margret255/KotlinFirebaseApp.git"
  }
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills in backend development and data analysis
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden hover:shadow-md transition-shadow duration-200"
            >
              <div className="relative">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover" 
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a 
                  href={project.githubUrl} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm"
                >
                  <Github className="w-4 h-4 mr-2" />
                  View Source Code
                  <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
