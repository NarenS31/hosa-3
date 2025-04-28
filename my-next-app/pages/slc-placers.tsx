import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';
import { initStaggeredAnimation } from '../utils/animation';

const SLCPlacersPage: React.FC = () => {
  // Initialize animations when component mounts
  useEffect(() => {
    // Setup staggered animations
    const cleanup = initStaggeredAnimation();
    return cleanup;
  }, []);

  return (
    <Layout title="2024 SLC Placers | Marvin Ridge HOSA" description="Congratulations to our 2024 State Leadership Conference placers from Marvin Ridge HOSA.">
      <div className="bg-blue-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4 animate-slide-in-left">2024 SLC Competition Results</h1>
          <p className="text-xl max-w-3xl animate-slide-in-left" style={{ animationDelay: '0.2s' }}>
            Congratulations to our Marvin Ridge HOSA members who placed at the 2024 State Leadership Conference!
          </p>
        </div>
      </div>

      {/* First Place Winners */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <div className="inline-block">
            <img 
              src="/images/1st-place-badge.svg" 
              alt="First Place" 
              className="w-32 h-32 mx-auto badge-glow animate-bounce-in"
            />
            <h2 className="text-3xl font-bold text-blue-900 mt-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>First Place</h2>
            <div className="mt-2 h-1 w-20 bg-yellow-500 mx-auto"></div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            { title: "BEHAVIORAL HEALTH", name: "A. PATEL" },
            { title: "PUBLIC HEALTH", name: "A. CHAMPSI, E. CHAVALI" },
            { title: "COMMUNITY AWARENESS", name: "R. GOWRI SHANKAR, A. SIRIPURAM, A. DUNDIGALLA" },
            { title: "HEALTH CAREER DISPLAY", name: "K. CHALLAGUNDLA, S. JETTY" },
            { title: "MEDICAL SPELLING", name: "M. MANI" },
            { title: "MEDICAL PROMOTION", name: "S. JAYAPRAKASH, A. RAO" },
            { title: "HOSA BOWL", name: "S. GANGEYULA, T. TALREJA, S. SHAH, I. DATTA" },
            { title: "FAMILY MEDICINE PHYSICIAN", name: "M. VUPADHYAYULA" }
          ].map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover-lift stagger-item">
              <div className="p-6 relative">
                <div className="absolute top-0 right-0 w-16 h-16 -mt-4 -mr-4 bg-yellow-200 rounded-full flex items-center justify-center transform rotate-12">
                  <span className="text-yellow-800 font-bold text-xs">1st</span>
                </div>
                <h3 className="text-2xl font-bold text-blue-900 mb-2">{item.title}</h3>
                <p className="text-xl text-blue-700">{item.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Second Place Winners */}
      <div className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="inline-block">
              <img 
                src="/images/2nd-place-badge.svg" 
                alt="Second Place" 
                className="w-32 h-32 mx-auto badge-glow-silver animate-bounce-in"
                style={{ animationDelay: '0.2s' }}
              />
              <h2 className="text-3xl font-bold text-blue-900 mt-4 animate-fade-in" style={{ animationDelay: '0.5s' }}>Second Place</h2>
              <div className="mt-2 h-1 w-20 bg-gray-400 mx-auto"></div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: "BEHAVIORAL HEALTH", name: "S. CHEN" },
              { title: "CERT SKILLS", name: "A. KALAKUNTLA, A. BHUPATI" }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover-lift stagger-item">
                <div className="p-6 relative">
                  <div className="absolute top-0 right-0 w-16 h-16 -mt-4 -mr-4 bg-gray-200 rounded-full flex items-center justify-center transform rotate-12">
                    <span className="text-gray-700 font-bold text-xs">2nd</span>
                  </div>
                  <h3 className="text-2xl font-bold text-blue-900 mb-2">{item.title}</h3>
                  <p className="text-xl text-blue-700">{item.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Third Place Winners */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <div className="inline-block">
            <img 
              src="/images/3rd-place-badge.svg" 
              alt="Third Place" 
              className="w-32 h-32 mx-auto badge-glow-bronze animate-bounce-in"
              style={{ animationDelay: '0.4s' }}
            />
            <h2 className="text-3xl font-bold text-blue-900 mt-4 animate-fade-in" style={{ animationDelay: '0.7s' }}>Third Place</h2>
            <div className="mt-2 h-1 w-20 bg-orange-500 mx-auto"></div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            { title: "MENTAL HEALTH PROMOTION", name: "A. MUSLIMANI, A. MUNUGALA, R. RAY" },
            { title: "MEDICAL INNOVATION", name: "A. PATEL, I. PATEL, R. SHARMA" },
            { title: "PUBLIC HEALTH", name: "A. TOLOMEO, T. MAHAJAN, V. KUCHIMACHI" },
            { title: "PHARMACOLOGY", name: "E. POLCHOW" },
            { title: "DENTAL SCIENCE", name: "A. LIU" }
          ].map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover-lift stagger-item">
              <div className="p-6 relative">
                <div className="absolute top-0 right-0 w-16 h-16 -mt-4 -mr-4 bg-orange-200 rounded-full flex items-center justify-center transform rotate-12">
                  <span className="text-orange-800 font-bold text-xs">3rd</span>
                </div>
                <h3 className="text-2xl font-bold text-blue-900 mb-2">{item.title}</h3>
                <p className="text-xl text-blue-700">{item.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-blue-900 py-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center text-white">
            <h2 className="text-3xl font-bold mb-4 animate-fade-in">Congratulations to All Competitors!</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.3s' }}>
              Our members will represent Marvin Ridge HOSA at the International Leadership Conference. 
              Thank you to all participants, advisors, and supporters.
            </p>
            <Link href="/competitions" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-blue-900 bg-white hover:bg-gray-100 hover-lift animate-fade-in" style={{ animationDelay: '0.6s' }}>
              Learn About Competitions
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SLCPlacersPage; 