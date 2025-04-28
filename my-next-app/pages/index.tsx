import React, { useEffect } from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';
import { initStaggeredAnimation, initScrollAnimation } from '../utils/animation';

const HomePage: React.FC = () => {
  // Initialize animations when component mounts
  useEffect(() => {
    // Setup staggered animations
    const cleanupStaggered = initStaggeredAnimation();
    
    // Setup individual animations
    const cleanupHero = initScrollAnimation('animate-fade-in', '.hero-content');
    const cleanupSlideUp = initScrollAnimation('animate-slide-up', '.animate-on-scroll');
    
    return () => {
      cleanupStaggered();
      cleanupHero();
      cleanupSlideUp();
    };
  }, []);

  return (
    <Layout>
      {/* Hero Section */}
      <div className="hero-gradient text-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-white opacity-10 rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-white opacity-10 rounded-full"></div>
        <div className="absolute top-40 right-20 w-20 h-20 bg-white opacity-10 rounded-full"></div>
        
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8 relative z-10">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
            <div className="hero-content">
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl mb-6 animate-slide-in-left">
                Marvin Ridge HOSA
              </h1>
              <div className="w-20 h-1 bg-red-600 mb-6 animate-slide-in-left" style={{ animationDelay: '0.2s' }}></div>
              <p className="mt-4 text-xl animate-slide-in-left" style={{ animationDelay: '0.4s' }}>
                Future Health Professionals dedicated to promoting health science education and developing leadership skills.
              </p>
              <div className="mt-8 flex flex-wrap gap-4 animate-slide-in-left" style={{ animationDelay: '0.6s' }}>
                <Link href="/join" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-blue-900 bg-white hover:bg-gray-100 hover-lift">
                  Join HOSA Today
                </Link>
                <Link href="/about" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-800 hover:bg-blue-700 hover-lift">
                  Learn More
                </Link>
              </div>
            </div>
            <div className="mt-12 lg:mt-0 flex justify-center animate-slide-in-right">
              <div className="relative">
                <div className="absolute inset-0 bg-blue-500 rounded-lg opacity-20 animate-pulse-slow"></div>
                <div className="bg-white p-3 rounded-lg shadow-2xl relative">
                  {/* Placeholder for HOSA logo/image */}
                  <div className="h-64 w-64 bg-blue-100 rounded flex items-center justify-center">
                    <span className="text-blue-900 font-bold text-xl">HOSA Logo</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-on-scroll">
          <h2 className="text-3xl font-bold gradient-text">Welcome to MRHS HOSA</h2>
          <div className="mt-2 h-1 w-20 bg-red-800 mx-auto"></div>
        </div>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto text-center animate-on-scroll">
          Marvin Ridge High School HOSA is dedicated to enhancing the delivery of compassionate, quality healthcare by providing opportunities for knowledge, skill, and leadership development to students interested in pursuing careers in the healthcare industry.
        </p>
        
        <div className="mt-10 text-center animate-on-scroll">
          <Link href="/about" className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-blue-800 hover:bg-blue-700 hover-lift">
            Learn about our chapter
          </Link>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-blue-900 py-12 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="stagger-item">
              <div className="text-4xl font-bold mb-2">40+</div>
              <div className="text-blue-200">Active Members</div>
            </div>
            <div className="stagger-item">
              <div className="text-4xl font-bold mb-2">15</div>
              <div className="text-blue-200">SLC Placers</div>
            </div>
            <div className="stagger-item">
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-blue-200">Volunteer Hours</div>
            </div>
            <div className="stagger-item">
              <div className="text-4xl font-bold mb-2">8</div>
              <div className="text-blue-200">Years of Excellence</div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="text-3xl font-bold gradient-text">Explore MRHS HOSA</h2>
            <div className="mt-2 h-1 w-20 bg-red-800 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover-lift stagger-item">
              <div className="h-48 bg-blue-200 flex items-center justify-center">
                <span className="text-2xl font-bold text-blue-900">Events</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Upcoming Events</h3>
                <p className="text-gray-600 mb-4">Check out our calendar of upcoming meetings, competitions, and service activities.</p>
                <Link href="/events" className="text-blue-700 font-medium hover:text-blue-900">
                  View events →
                </Link>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover-lift stagger-item">
              <div className="h-48 bg-red-200 flex items-center justify-center">
                <span className="text-2xl font-bold text-red-900">Competitions</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">HOSA Competitions</h3>
                <p className="text-gray-600 mb-4">Learn about competitive events, categories, and how to prepare for success.</p>
                <Link href="/competitions" className="text-blue-700 font-medium hover:text-blue-900">
                  Explore competitions →
                </Link>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover-lift stagger-item">
              <div className="h-48 bg-yellow-200 flex items-center justify-center">
                <span className="text-2xl font-bold text-yellow-900">SLC Results</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">2024 SLC Placers</h3>
                <p className="text-gray-600 mb-4">Celebrate our members who placed at the 2024 State Leadership Conference.</p>
                <Link href="/slc-placers" className="text-blue-700 font-medium hover:text-blue-900">
                  View winners →
                </Link>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover-lift stagger-item">
              <div className="h-48 bg-green-200 flex items-center justify-center">
                <span className="text-2xl font-bold text-green-900">Resources</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Member Resources</h3>
                <p className="text-gray-600 mb-4">Access study materials, guidance for healthcare careers, and member resources.</p>
                <Link href="/resources" className="text-blue-700 font-medium hover:text-blue-900">
                  View resources →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-900 opacity-90"></div>
        <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-10"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <div className="md:flex">
              <div className="md:w-2/3 p-8 md:p-12">
                <h2 className="text-3xl font-bold text-blue-900 mb-4 animate-on-scroll">Join Marvin Ridge HOSA Today</h2>
                <p className="text-lg text-gray-600 mb-6 animate-on-scroll">
                  Become part of our community of future healthcare professionals. Develop leadership skills, 
                  prepare for a healthcare career, and make connections that will last a lifetime.
                </p>
                <div className="flex animate-on-scroll">
                  <Link href="/join" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-800 hover:bg-blue-700 hover-lift">
                    Start Your HOSA Journey
                  </Link>
                </div>
              </div>
              <div className="md:w-1/3 bg-blue-100 p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-900 mb-2 animate-bounce-in">Join Now</div>
                  <p className="text-blue-700">Applications open for the 2024-2025 school year</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HomePage; 