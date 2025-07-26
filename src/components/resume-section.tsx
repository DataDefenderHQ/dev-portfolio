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
      <section id="resume" className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">My Resume</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6 rounded-full"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Download or view my complete professional resume
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 p-8 text-center">
              <img 
                src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400" 
                alt="Professional resume document layout" 
                className="w-40 h-56 mx-auto mb-6 rounded-lg shadow-sm object-cover" 
              />
              
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Wangui Margaret - Resume</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Complete overview of my professional experience, education, skills, and achievements 
                in backend development and data analysis.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center mb-4">
                <button 
                  onClick={handleViewResume}
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
                >
                  <Eye className="w-4 h-4 mr-2 inline" />
                  View Resume
                </button>
                <button 
                  onClick={handleDownloadResume}
                  className="px-6 py-2 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-200 font-medium"
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
