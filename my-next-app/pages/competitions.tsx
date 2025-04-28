import React, { useState } from 'react';
import Layout from '../components/Layout';

// Competition categories data
const categories = [
  {
    id: 'health-science',
    name: 'Health Science',
    description: 'Tests knowledge and understanding of health science topics and healthcare-related academic subjects.'
  },
  {
    id: 'health-professions',
    name: 'Health Professions',
    description: 'Tests technical skills and knowledge in specific health professions.'
  },
  {
    id: 'emergency-preparedness',
    name: 'Emergency Preparedness',
    description: 'Tests skills in emergency situations and preparedness for disaster response.'
  },
  {
    id: 'leadership',
    name: 'Leadership',
    description: 'Tests leadership skills and abilities needed in the healthcare community.'
  },
  {
    id: 'teamwork',
    name: 'Teamwork',
    description: 'Tests ability to work as a team to complete a healthcare-related task or project.'
  }
];

// Competition events data
const events = [
  { 
    id: 1, 
    name: 'Medical Terminology', 
    category: 'health-science',
    type: 'Knowledge Test',
    level: 'Individual',
    description: 'This event is designed to test knowledge of medical terminology, including word structure, prefixes, suffixes, root words, and abbreviations.',
    resources: ['Medical Terminology textbooks', 'HOSA study guides', 'Online practice quizzes']
  },
  { 
    id: 2, 
    name: 'Human Growth and Development', 
    category: 'health-science',
    type: 'Knowledge Test',
    level: 'Individual',
    description: 'This event provides HOSA members with the opportunity to gain knowledge and skills regarding the growth and development of humans from conception to death.',
    resources: ['Developmental Psychology textbooks', 'HOSA study guides', 'Online resources']
  },
  { 
    id: 3, 
    name: 'Nursing Assisting', 
    category: 'health-professions',
    type: 'Skill Test',
    level: 'Individual',
    description: 'This event is designed to provide HOSA members with an opportunity to develop and demonstrate knowledge and skills in nursing assisting.',
    resources: ['Nursing Assisting textbooks', 'Skill videos', 'CNA training materials']
  },
  { 
    id: 4, 
    name: 'Physical Therapy', 
    category: 'health-professions',
    type: 'Skill Test',
    level: 'Individual',
    description: 'This event involves knowledge and skills required in the field of physical therapy, including assessment, treatment, and rehabilitation.',
    resources: ['Physical Therapy textbooks', 'Anatomy resources', 'PT techniques videos']
  },
  { 
    id: 5, 
    name: 'CPR/First Aid', 
    category: 'emergency-preparedness',
    type: 'Skill Test',
    level: 'Team',
    description: 'This event tests knowledge and skills in managing emergency situations and providing first aid and CPR according to current guidelines.',
    resources: ['American Heart Association resources', 'CPR training videos', 'First Aid manuals']
  },
  { 
    id: 6, 
    name: 'CERT Skills', 
    category: 'emergency-preparedness',
    type: 'Skill Test',
    level: 'Team',
    description: 'This event tests knowledge and skills needed to respond to a community\'s needs during emergencies or disasters as part of a CERT team.',
    resources: ['FEMA CERT training materials', 'Disaster response guidelines', 'Emergency response protocols']
  },
  { 
    id: 7, 
    name: 'Prepared Speaking', 
    category: 'leadership',
    type: 'Presentation',
    level: 'Individual',
    description: 'This event allows HOSA members to develop and demonstrate communication skills by preparing and delivering a speech on a health-related topic.',
    resources: ['Public speaking guides', 'Healthcare topics', 'Speech delivery techniques']
  },
  { 
    id: 8, 
    name: 'Job Seeking Skills', 
    category: 'leadership',
    type: 'Interview',
    level: 'Individual',
    description: 'This event involves creating a personal portfolio and participating in a simulated job interview for a healthcare position.',
    resources: ['Resume writing guides', 'Interview preparation tips', 'Professional portfolio examples']
  },
  { 
    id: 9, 
    name: 'HOSA Bowl', 
    category: 'teamwork',
    type: 'Knowledge Test',
    level: 'Team',
    description: 'This event tests knowledge of HOSA, health careers, medical terminology, and healthcare-related topics in a quiz bowl format.',
    resources: ['HOSA handbook', 'Medical terminology resources', 'Healthcare topics study guides']
  },
  { 
    id: 10, 
    name: 'Creative Problem Solving', 
    category: 'teamwork',
    type: 'Problem Solving',
    level: 'Team',
    description: 'This event tests a team\'s ability to analyze a problem and develop a solution using creative thinking skills.',
    resources: ['Problem-solving techniques', 'Critical thinking resources', 'Healthcare case studies']
  }
];

const CompetitionsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  // Filter events based on selected category
  const filteredEvents = selectedCategory 
    ? events.filter(event => event.category === selectedCategory)
    : events;

  return (
    <Layout title="Competitions | Marvin Ridge HOSA" description="HOSA competitive events, categories, and resources for participants.">
      <div className="bg-blue-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">HOSA Competitive Events</h1>
          <p className="text-xl max-w-3xl">
            Explore the various competitive events offered by HOSA and find resources to help you prepare.
          </p>
        </div>
      </div>

      {/* Competition categories */}
      <div className="bg-gray-100 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Event Categories</h2>
            <p className="text-gray-600 mb-6">
              HOSA offers a wide range of competitive events across different categories. Select a category below to explore specific events.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => setSelectedCategory(null)}
                className={`px-4 py-2 rounded-md text-sm font-medium ${
                  selectedCategory === null 
                    ? 'bg-blue-800 text-white' 
                    : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                }`}
              >
                All Categories
              </button>
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-md text-sm font-medium ${
                    selectedCategory === category.id 
                      ? 'bg-blue-800 text-white' 
                      : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {selectedCategory && (
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h3 className="text-xl font-bold text-blue-900 mb-2">
                {categories.find(c => c.id === selectedCategory)?.name}
              </h3>
              <p className="text-gray-600">
                {categories.find(c => c.id === selectedCategory)?.description}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Competition events */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-blue-900 mb-6">
          {selectedCategory 
            ? `${categories.find(c => c.id === selectedCategory)?.name} Events` 
            : 'All Competitive Events'}
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {filteredEvents.map(event => (
            <div key={event.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-900 mb-2">{event.name}</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    {event.type}
                  </span>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    {event.level}
                  </span>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                    {categories.find(c => c.id === event.category)?.name}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{event.description}</p>
                
                <div className="mt-4">
                  <h4 className="text-sm font-medium text-gray-900 mb-2">Recommended Resources:</h4>
                  <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                    {event.resources.map((resource, index) => (
                      <li key={index}>{resource}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="mt-6">
                  <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-800 hover:bg-blue-700">
                    Event Guidelines
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Success Stories */}
      <div className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-blue-900">Competition Success Stories</h2>
            <div className="mt-2 h-1 w-20 bg-red-800 mx-auto"></div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/3 bg-blue-200 p-6 flex items-center justify-center">
                <div className="h-48 w-48 bg-gray-300 rounded-full flex items-center justify-center">
                  <span className="text-gray-500">Photo</span>
                </div>
              </div>
              <div className="md:w-2/3 p-6 md:p-8">
                <h3 className="text-xl font-bold text-blue-900">Sarah Chen - State Champion in Medical Terminology</h3>
                <p className="text-blue-700 font-medium">Class of 2023</p>
                <p className="mt-4 text-gray-600">
                  "Competing in HOSA was one of the most valuable experiences of my high school career. The Medical Terminology event challenged me to expand my knowledge and develop skills that have been incredibly useful in my pre-med studies. The rigorous preparation and competition experience helped me build confidence and precision in medical communication that I use every day in my college courses."
                </p>
                <p className="mt-4 text-gray-600">
                  Sarah is now studying Biology at Duke University with plans to attend medical school.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Get Started Section */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-blue-900 rounded-lg shadow-xl overflow-hidden">
          <div className="px-6 py-12 md:p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-6">Ready to Compete?</h2>
            <p className="text-xl max-w-3xl mx-auto mb-8">
              HOSA competitions are a great way to test your knowledge, develop new skills, and connect with others who share your passion for healthcare.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-blue-900 bg-white hover:bg-gray-100">
                Competition Calendar
              </button>
              <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-red-700 hover:bg-red-800">
                Register for Events
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CompetitionsPage; 