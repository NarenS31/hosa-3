import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import { initStaggeredAnimation } from '../utils/animation';

// Officer data
const officers = [
  {
    id: 1,
    name: 'Suhani Ranjan',
    position: 'Co-President',
    grade: '12',
    bio: 'Suhani is a senior dedicated to fostering a community of future healthcare professionals. She has been an active HOSA member since freshman year and has competed in multiple healthcare-related events at the state level.',
    email: 'suhani.r@student.edu',
    image: '/images/suhani.jpg'
  },
  {
    id: 2,
    name: 'Amisha Sharma',
    position: 'Co-President',
    grade: '12',
    bio: 'Amisha brings a passion for healthcare and leadership to her role as Co-President. She has been actively involved in HOSA throughout high school and has excelled in various competitive events.',
    email: 'amisha.s@student.edu',
    image: '/images/amisha.jpg'
  },
  {
    id: 3,
    name: 'Anuhya Bhupati',
    position: 'Vice President',
    grade: '11',
    bio: 'Anuhya serves as Vice President and has played a key role in chapter development. She has competed in CERT Skills at the state level and placed 2nd in the competition.',
    email: 'anuhya.b@student.edu',
    image: '/images/anuhya.jpg'
  },
  {
    id: 4,
    name: 'Emily Nathala',
    position: 'Liaison to the President',
    grade: '11',
    bio: 'Emily works closely with the presidents to coordinate activities and ensure smooth communication across the officer team. She brings organizational skills and dedication to her role.',
    email: 'emily.n@student.edu',
    image: '/images/emily.jpg'
  },
  {
    id: 5,
    name: 'Elsie Nathala',
    position: 'Secretary',
    grade: '11',
    bio: 'Elsie manages all chapter records, meeting minutes, and communications. Her attention to detail and organizational skills ensure that the chapter runs efficiently.',
    email: 'elsie.n@student.edu',
    image: '/images/elsie.jpg'
  },
  {
    id: 6,
    name: 'Moulya Paladugu',
    position: 'Co-Historian',
    grade: '10',
    bio: 'Moulya documents chapter activities and maintains the historical records. She helps manage social media and works to showcase HOSA achievements to the school community.',
    email: 'moulya.p@student.edu',
    image: '/images/moulya.jpg'
  },
  {
    id: 7,
    name: 'Lia Kroh',
    position: 'Co-Historian',
    grade: '10',
    bio: 'Lia works alongside Moulya to capture chapter events through photography and maintains the chapter\'s social media presence. She helps create lasting memories of chapter activities.',
    email: 'lia.k@student.edu',
    image: '/images/lia.jpg'
  },
  {
    id: 8,
    name: 'Isha Sharma',
    position: 'Presentation Captain',
    grade: '11',
    bio: 'Isha leads members participating in presentation-based events, organizing practice sessions and providing feedback. She has excelled in competitive events requiring strong presentation skills.',
    email: 'isha.s@student.edu',
    image: '/images/isha.jpg'
  },
  {
    id: 9,
    name: 'Arya Kalakuntla',
    position: 'Skills Captain',
    grade: '11',
    bio: 'Arya guides members participating in skills-based competitive events. She has placed 2nd at the state level in CERT Skills and brings her expertise to help others succeed.',
    email: 'arya.k@student.edu',
    image: '/images/arya.jpg'
  },
  {
    id: 10,
    name: 'Mahati Mani',
    position: 'Testing Captain',
    grade: '12',
    bio: 'Mahati coordinates study sessions and resources for members participating in knowledge tests. She won 1st place in Medical Spelling at the state level and helps others prepare for their events.',
    email: 'mahati.m@student.edu',
    image: '/images/mahati.jpg'
  },
  {
    id: 11,
    name: 'Sunny Chen',
    position: 'Blood Drive Coordinator',
    grade: '11',
    bio: 'Sunny organizes the chapter\'s blood drives in partnership with local blood banks. She coordinates volunteers, manages logistics, and helps promote these life-saving events.',
    email: 'sunny.c@student.edu',
    image: '/images/sunny.jpg'
  },
  {
    id: 12,
    name: 'Roshini Gowri Shankar',
    position: 'Blood Drive Coordinator',
    grade: '12',
    bio: 'Roshini works with Sunny to organize blood drives. She has been recognized for her work in Community Awareness events at the state level, placing 1st in competition.',
    email: 'roshini.g@student.edu',
    image: '/images/roshini.jpg'
  },
  {
    id: 13,
    name: 'Grace Fang',
    position: 'Blood Drive Coordinator',
    grade: '10',
    bio: 'Grace assists with organizing and promoting blood drives. She helps manage the volunteer schedule and ensures events run smoothly, showing dedication to community service.',
    email: 'grace.f@student.edu',
    image: '/images/grace.jpg'
  },
  {
    id: 14,
    name: 'Anika Nawab',
    position: 'Fundraising Director',
    grade: '11',
    bio: 'Anika develops and implements fundraising strategies to support chapter activities and competition travel. She brings creativity and organizational skills to help fund chapter initiatives.',
    email: 'anika.n@student.edu',
    image: '/images/anika.jpg'
  },
  {
    id: 15,
    name: 'Elise Polchow',
    position: 'Community Service Director',
    grade: '12',
    bio: 'Elise coordinates chapter service projects and volunteer opportunities. She placed 3rd in Pharmacology at the state level and is passionate about giving back to the community.',
    email: 'elise.p@student.edu',
    image: '/images/elise.jpg'
  }
];

const OfficersPage: React.FC = () => {
  // Initialize animations when component mounts
  useEffect(() => {
    // Setup staggered animations
    const cleanup = initStaggeredAnimation();
    return cleanup;
  }, []);

  // Filter officers by categories
  const executiveOfficers = officers.filter(officer => 
    ['Co-President', 'Vice President', 'Liaison to the President', 'Secretary', 'Co-Historian'].includes(officer.position)
  );
  
  const captains = officers.filter(officer => 
    ['Presentation Captain', 'Skills Captain', 'Testing Captain'].includes(officer.position)
  );
  
  const coordinators = officers.filter(officer => 
    ['Blood Drive Coordinator', 'Fundraising Director', 'Community Service Director'].includes(officer.position)
  );

  // Officer card component for reuse
  const OfficerCard = ({ officer }: { officer: typeof officers[0] }) => (
    <div key={officer.id} className="bg-white rounded-lg shadow-md overflow-hidden hover-lift stagger-item">
      <div className="h-64 bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-500 opacity-5 pattern-dots pattern-size-2 pattern-dots-opacity-10"></div>
        <div className="w-40 h-40 bg-blue-600 bg-opacity-10 backdrop-filter backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-blue-200 shadow-inner">
          <span className="text-blue-900 font-semibold">{officer.name.split(' ').map(n => n[0]).join('')}</span>
        </div>
      </div>
      <div className="p-6 border-t border-blue-100">
        <h2 className="text-2xl font-bold text-blue-900">{officer.name}</h2>
        <div className="mt-1 flex items-center justify-between">
          <span className="text-lg font-medium text-red-700">
            {officer.position}
          </span>
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
            Grade {officer.grade}
          </span>
        </div>
        <p className="mt-4 text-gray-600">
          {officer.bio}
        </p>
        <div className="mt-6">
          <a 
            href={`mailto:${officer.email}`}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-800 hover:bg-blue-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
          >
            <svg className="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Contact
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <Layout title="Officers | Marvin Ridge HOSA" description="Meet the student leaders of Marvin Ridge High School HOSA chapter.">
      <div className="bg-blue-900 text-white py-12 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-white opacity-10 rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-white opacity-10 rounded-full"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl font-bold mb-4 animate-slide-in-left">Meet Our Officers</h1>
          <p className="text-xl max-w-3xl animate-slide-in-left" style={{ animationDelay: '0.2s' }}>
            Our student leadership team is dedicated to serving the HOSA chapter and promoting excellence in healthcare education.
          </p>
        </div>
      </div>

      {/* Executive Officers */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold gradient-text mb-2">Executive Board</h2>
        <div className="w-20 h-1 bg-red-600 mb-6"></div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {executiveOfficers.map(officer => (
            <OfficerCard key={officer.id} officer={officer} />
          ))}
        </div>
      </div>

      {/* Team Captains */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold gradient-text mb-2">Team Captains</h2>
          <div className="w-20 h-1 bg-red-600 mb-6"></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {captains.map(officer => (
              <OfficerCard key={officer.id} officer={officer} />
            ))}
          </div>
        </div>
      </div>

      {/* Coordinators */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold gradient-text mb-2">Coordinators</h2>
        <div className="w-20 h-1 bg-red-600 mb-6"></div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coordinators.map(officer => (
            <OfficerCard key={officer.id} officer={officer} />
          ))}
        </div>
      </div>

      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white shadow-xl rounded-lg overflow-hidden transform hover:-translate-y-2 transition-all duration-300">
            <div className="px-6 py-8 md:p-8 md:flex md:items-center md:justify-between">
              <div>
                <h3 className="text-2xl font-bold gradient-text mb-2">Become an Officer</h3>
                <p className="mt-2 text-gray-600 max-w-3xl">
                  Interested in becoming a HOSA officer for next year? Elections are held each spring. 
                  Learn about the application process, requirements, and responsibilities.
                </p>
              </div>
              <div className="mt-6 md:mt-0">
                <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-lg text-white bg-blue-800 hover:bg-blue-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold gradient-text mb-4">Chapter Advisor</h2>
          <div className="mt-2 h-1 w-20 bg-red-800 mx-auto mb-8"></div>
          
          <div className="max-w-lg mx-auto bg-white rounded-lg shadow-xl overflow-hidden transform transition-all duration-300 hover:shadow-2xl">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/3 bg-blue-100 flex items-center justify-center p-6">
                <div className="w-32 h-32 bg-blue-200 rounded-full flex items-center justify-center">
                  <span className="text-blue-800">BP</span>
                </div>
              </div>
              <div className="md:w-2/3 p-6 md:p-8">
                <h3 className="text-xl font-bold text-blue-900">Mrs. Barbara Parker</h3>
                <p className="text-blue-700 font-medium mb-4">School Nurse</p>
                <p className="text-gray-600 mb-4">
                  Mrs. Parker has been the HOSA advisor for Marvin Ridge High School for several years. 
                  As the school nurse, she brings valuable clinical experience and healthcare knowledge to guide 
                  our chapter and is passionate about mentoring the next generation of healthcare professionals.
                </p>
                <a 
                  href="mailto:barbara.parker@marvinridge.edu"
                  className="inline-flex items-center text-blue-700 hover:text-blue-900 transition-colors duration-300"
                >
                  <svg className="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  barbara.parker@marvinridge.edu
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default OfficersPage; 