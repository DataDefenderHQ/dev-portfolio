import { Eye, Download, Info } from "lucide-react";
import { useState } from "react";
import ResumeModal from "./resume-modal";

export default function ResumeSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<'view' | 'download'>('view');

  const handleViewResume = () => {
    setModalType('view');
    setIsModalOpen(true);
  };

  const handleDownloadResume = () => {
    setModalType('download');
    setIsModalOpen(true);
  };

  return (
    <>
      <section id="resume" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-700">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">My Resume</h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Download or view my complete professional resume
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 text-center">
              <img 
                src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400" 
                alt="Professional resume document layout" 
                className="w-48 h-64 mx-auto mb-8 rounded-lg shadow-md object-cover" 
              />
              
              <h3 className="text-2xl font-semibold mb-4 dark:text-white">Wangui Margaret - Resume</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                Complete overview of my professional experience, education, skills, and achievements 
                in backend development and data analysis.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                <button 
                  onClick={handleViewResume}
                  className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-blue-800 transition-colors duration-300 shadow-lg"
                >
                  <Eye className="w-4 h-4 mr-2 inline" />
                  View Resume
                </button>
                <button 
                  onClick={handleDownloadResume}
                  className="border-2 border-primary text-primary px-8 py-3 rounded-lg hover:bg-primary hover:text-white transition-all duration-300"
                >
                  <Download className="w-4 h-4 mr-2 inline" />
                  Download Resume
                </button>
              </div>

              <p className="text-sm text-gray-500 dark:text-gray-400">
                <Info className="w-4 h-4 mr-1 inline" />
                Please provide your email to access the resume
              </p>
            </div>
          </div>
        </div>
      </section>

      <ResumeModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        type={modalType}
      />
    </>
  );
}
