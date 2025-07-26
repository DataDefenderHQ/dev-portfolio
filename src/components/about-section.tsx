export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A passionate developer focused on creating meaningful solutions through code and data
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 dark:text-gray-200 leading-relaxed">
              Hi, I'm a curious problem-solver with a love for backend development in Django and data analysis. 
              Whether it's creating impactful web apps or designing powerful resumes, I enjoy helping people 
              bring their ideas to life in a meaningful way.
            </p>
            
            <p className="text-lg text-gray-700 dark:text-gray-200 leading-relaxed">
              When I'm not coding, you'll find me exploring new datasets, contributing to open-source projects, 
              or learning about emerging technologies. I believe in the power of collaboration and 
              continuous learning to create impactful solutions.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">10+</div>
                <div className="text-gray-600 dark:text-gray-300 font-medium">Projects Completed</div>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">2+</div>
                <div className="text-gray-600 dark:text-gray-300 font-medium">Years Experience</div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="Modern developer workspace with multiple monitors" 
                className="rounded-lg shadow-lg w-full h-auto" 
              />
            </div>
            
            <div className="bg-blue-600 text-white p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">My Mission</h3>
              <p className="leading-relaxed">
                To bridge the gap between complex data and actionable insights while building 
                scalable backend solutions that power amazing user experiences.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
