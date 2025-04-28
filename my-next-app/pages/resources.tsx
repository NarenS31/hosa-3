import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import { initStaggeredAnimation } from '../utils/animation';

const ResourcesPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('study');

  // Initialize animations when component mounts
  useEffect(() => {
    // Setup staggered animations
    const cleanup = initStaggeredAnimation();
    return cleanup;
  }, []);

  // Resource categories
  const resources = {
    study: [
      {
        title: "HOSA Competitive Events Guidelines",
        description: "Official guidelines for all HOSA competitive events, including rules, procedures, and judging criteria.",
        link: "https://hosa.org/guidelines/"
      },
      {
        title: "Medical Terminology Study Guide",
        description: "Comprehensive guide to medical terminology, prefixes, suffixes, and root words.",
        link: "#"
      },
      {
        title: "Anatomy & Physiology Resources",
        description: "Interactive diagrams, practice quizzes, and study materials for human anatomy and physiology.",
        link: "#"
      },
      {
        title: "HOSA Bowl Practice Questions",
        description: "Practice questions for HOSA Bowl competition covering healthcare topics and HOSA knowledge.",
        link: "#"
      },
      {
        title: "Behavioral Health Study Resources",
        description: "Study materials for mental health, psychology, and behavioral disorders.",
        link: "#"
      },
      {
        title: "Medical Math Practice Problems",
        description: "Practice problems for medical math, including dosage calculations, conversions, and IV rates.",
        link: "#"
      }
    ],
    career: [
      {
        title: "Healthcare Career Profiles",
        description: "Detailed information about various healthcare careers, including education requirements, salary ranges, and job outlook.",
        link: "#"
      },
      {
        title: "Interview Preparation Guide",
        description: "Tips and practice questions for healthcare job interviews.",
        link: "#"
      },
      {
        title: "Resume Writing Workshop",
        description: "Guide to creating an effective healthcare resume with templates and examples.",
        link: "#"
      },
      {
        title: "Healthcare Job Shadow Opportunities",
        description: "List of local healthcare providers offering job shadow experiences for students.",
        link: "#"
      },
      {
        title: "College Application Timeline",
        description: "Timeline and checklist for applying to healthcare-related college programs.",
        link: "#"
      }
    ],
    scholarships: [
      {
        title: "HOSA Scholarship Program",
        description: "Information about HOSA's national scholarship program for members.",
        link: "https://hosa.org/scholarships/"
      },
      {
        title: "NC HOSA Scholarships",
        description: "Scholarships available to North Carolina HOSA members.",
        link: "#"
      },
      {
        title: "Healthcare Industry Scholarships",
        description: "Scholarships offered by healthcare organizations, hospitals, and professional associations.",
        link: "#"
      },
      {
        title: "Scholarship Application Guide",
        description: "Tips for writing effective scholarship essays and completing applications.",
        link: "#"
      }
    ],
    chapter: [
      {
        title: "Chapter Bylaws",
        description: "Marvin Ridge HOSA chapter bylaws and governance documents.",
        link: "#"
      },
      {
        title: "Meeting Schedule",
        description: "Calendar of upcoming chapter meetings and events.",
        link: "#"
      },
      {
        title: "Officer Positions",
        description: "Information about chapter officer roles, responsibilities, and election procedures.",
        link: "#"
      },
      {
        title: "Volunteer Hour Tracking",
        description: "Forms and instructions for tracking and submitting volunteer hours.",
        link: "#"
      },
      {
        title: "Chapter History",
        description: "History and achievements of the Marvin Ridge HOSA chapter since its founding.",
        link: "#"
      }
    ]
  };

  return (
    <Layout title="Resources | Marvin Ridge HOSA" description="Access resources for HOSA members including study materials, career guidance, scholarships, and chapter documents.">
      <div className="bg-blue-900 text-white py-12 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-white opacity-10 rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-white opacity-10 rounded-full"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl font-bold mb-4 animate-slide-in-left">Member Resources</h1>
          <p className="text-xl max-w-3xl animate-slide-in-left" style={{ animationDelay: '0.2s' }}>
            Access materials to help you succeed in HOSA competitions, explore healthcare careers, and more.
          </p>
        </div>
      </div>

      {/* Resources Section */}
      <section className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8">
              {[
                { id: 'study', name: 'Study Materials' },
                { id: 'career', name: 'Career Resources' },
                { id: 'scholarships', name: 'Scholarships' },
                { id: 'chapter', name: 'Chapter Documents' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-lg ${
                    activeTab === tab.id
                      ? 'border-blue-600 text-blue-900'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  {tab.name}
                </button>
              ))}
            </nav>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {resources[activeTab as keyof typeof resources].map((resource, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-md p-6 hover-lift stagger-item relative overflow-hidden"
            >
              <div className="h-2 bg-blue-600 absolute top-0 left-0 right-0"></div>
              <h3 className="text-xl font-semibold text-blue-900 mb-3">{resource.title}</h3>
              <p className="text-gray-600 mb-4">{resource.description}</p>
              <a 
                href={resource.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-700 hover:text-blue-900"
              >
                Access Resource
                <svg className="ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Additional Resources */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="text-3xl font-bold gradient-text mb-2">External Resources</h2>
            <div className="w-20 h-1 bg-red-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Explore these trusted external resources for additional support in your healthcare journey.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <a 
              href="https://hosa.org/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white rounded-lg shadow-md overflow-hidden hover-lift stagger-item"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">HOSA International</h3>
                <p className="text-gray-600">Official HOSA-Future Health Professionals website with guidelines, resources, and program information.</p>
              </div>
            </a>
            
            <a 
              href="https://www.nchosa.org/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white rounded-lg shadow-md overflow-hidden hover-lift stagger-item"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">NC HOSA</h3>
                <p className="text-gray-600">North Carolina HOSA state association with state-specific events, conferences, and resources.</p>
              </div>
            </a>
            
            <a 
              href="https://www.nih.gov/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white rounded-lg shadow-md overflow-hidden hover-lift stagger-item"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">National Institutes of Health</h3>
                <p className="text-gray-600">Leading medical research organization with educational resources and current health information.</p>
              </div>
            </a>
            
            <a 
              href="https://medlineplus.gov/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white rounded-lg shadow-md overflow-hidden hover-lift stagger-item"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">MedlinePlus</h3>
                <p className="text-gray-600">Health information resource for patients and healthcare professionals from the National Library of Medicine.</p>
              </div>
            </a>
            
            <a 
              href="https://www.cdc.gov/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white rounded-lg shadow-md overflow-hidden hover-lift stagger-item"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">Centers for Disease Control</h3>
                <p className="text-gray-600">Public health resources, disease information, and health statistics from the CDC.</p>
              </div>
            </a>
            
            <a 
              href="https://explorehealthcareers.org/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white rounded-lg shadow-md overflow-hidden hover-lift stagger-item"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">Explore Health Careers</h3>
                <p className="text-gray-600">Comprehensive resource for exploring various healthcare careers, education paths, and job requirements.</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Request Resources */}
      <section className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:w-2/3 p-8 md:p-12">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">Need Something Specific?</h2>
              <p className="text-gray-600 mb-6">
                Can't find what you're looking for? Our officer team is here to help. 
                Contact us with your specific resource needs, and we'll do our best to assist you.
              </p>
              <a 
                href="mailto:hosa@marvinridge.edu" 
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-800 hover:bg-blue-700 hover-lift"
              >
                Request a Resource
              </a>
            </div>
            <div className="md:w-1/3 bg-blue-50 p-8 flex items-center justify-center">
              <div className="text-center">
                <svg className="w-16 h-16 text-blue-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div className="text-lg font-semibold text-blue-900">Resource Help</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ResourcesPage; 