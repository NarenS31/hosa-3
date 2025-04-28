import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import { initStaggeredAnimation } from '../utils/animation';

const AboutPage: React.FC = () => {
  // Initialize animations when component mounts
  useEffect(() => {
    // Setup staggered animations
    const cleanup = initStaggeredAnimation();
    return cleanup;
  }, []);

  return (
    <Layout title="About Us | Marvin Ridge HOSA" description="Learn about Marvin Ridge High School HOSA chapter, our mission, values, and history.">
      <div className="bg-blue-900 text-white py-12 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-white opacity-10 rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-white opacity-10 rounded-full"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl font-bold mb-4 animate-slide-in-left">About Marvin Ridge HOSA</h1>
          <p className="text-xl max-w-3xl animate-slide-in-left" style={{ animationDelay: '0.2s' }}>
            Future Health Professionals dedicated to promoting health science education and developing leadership skills.
          </p>
        </div>
      </div>

      {/* Mission & Vision Section */}
      <section className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="stagger-item">
            <h2 className="text-3xl font-bold gradient-text mb-2">Our Mission</h2>
            <div className="w-20 h-1 bg-red-600 mb-6"></div>
            <p className="text-lg text-gray-700 mb-6">
              Marvin Ridge HOSA's mission is to enhance the delivery of compassionate, quality healthcare by providing opportunities for knowledge, skill, and leadership development to students interested in pursuing careers in the healthcare industry.
            </p>
            <p className="text-lg text-gray-700">
              We strive to develop future healthcare professionals through educational and leadership development, promoting career opportunities, and enhancing the delivery of quality healthcare.
            </p>
          </div>
          <div className="bg-gray-100 p-8 rounded-lg shadow-md stagger-item">
            <h2 className="text-3xl font-bold gradient-text mb-2">Our Vision</h2>
            <div className="w-20 h-1 bg-red-600 mb-6"></div>
            <p className="text-lg text-gray-700">
              To be recognized as the premier organization for students pursuing careers in the health professions by fostering academic excellence, leadership skills, and innovative thinking to meet the healthcare needs of our community and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="text-3xl font-bold gradient-text mb-2">Our History</h2>
            <div className="w-20 h-1 bg-red-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Since our founding in 2015, Marvin Ridge HOSA has grown from a small group of passionate students to one of the largest and most active chapters in North Carolina.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 hover-lift stagger-item">
              <div className="text-blue-900 text-2xl font-bold mb-2">2015</div>
              <p className="text-gray-700">Marvin Ridge HOSA chapter founded with 15 initial members.</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 hover-lift stagger-item">
              <div className="text-blue-900 text-2xl font-bold mb-2">2017</div>
              <p className="text-gray-700">First state-level competitive event placements, with 3 members qualifying for ILC.</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 hover-lift stagger-item">
              <div className="text-blue-900 text-2xl font-bold mb-2">2019</div>
              <p className="text-gray-700">Chapter grew to over 50 members and began annual health fair community service.</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 hover-lift stagger-item">
              <div className="text-blue-900 text-2xl font-bold mb-2">2021</div>
              <p className="text-gray-700">Adapted to virtual competitions during pandemic while maintaining member engagement.</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 hover-lift stagger-item">
              <div className="text-blue-900 text-2xl font-bold mb-2">2022</div>
              <p className="text-gray-700">Expanded community involvement with blood drives and health screenings.</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 hover-lift stagger-item">
              <div className="text-blue-900 text-2xl font-bold mb-2">2024</div>
              <p className="text-gray-700">Record-setting year with 15 state-level winners and expanded chapter leadership.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-on-scroll">
          <h2 className="text-3xl font-bold gradient-text mb-2">Our Values</h2>
          <div className="w-20 h-1 bg-red-600 mx-auto mb-6"></div>
        </div>
        
        <div className="grid md:grid-cols-4 gap-8">
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover-lift stagger-item">
            <div className="h-2 bg-blue-600"></div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-blue-900 mb-3">Leadership</h3>
              <p className="text-gray-600">Developing the skills and confidence to lead in healthcare settings and beyond.</p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover-lift stagger-item">
            <div className="h-2 bg-red-600"></div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-blue-900 mb-3">Service</h3>
              <p className="text-gray-600">Committing to serve our community through health education and outreach.</p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover-lift stagger-item">
            <div className="h-2 bg-green-600"></div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-blue-900 mb-3">Innovation</h3>
              <p className="text-gray-600">Embracing creative thinking to address healthcare challenges.</p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover-lift stagger-item">
            <div className="h-2 bg-purple-600"></div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-blue-900 mb-3">Excellence</h3>
              <p className="text-gray-600">Striving for the highest standards in all our academic and professional pursuits.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-900 py-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center text-white">
            <h2 className="text-3xl font-bold mb-4 animate-fade-in">Join Our HOSA Chapter</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.3s' }}>
              Become part of our community of future healthcare professionals. Develop leadership skills, prepare for a healthcare career, and make connections that will last a lifetime.
            </p>
            <a href="/join" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-blue-900 bg-white hover:bg-gray-100 hover-lift animate-fade-in" style={{ animationDelay: '0.6s' }}>
              Join HOSA Today
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage; 