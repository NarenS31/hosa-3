import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import { initStaggeredAnimation } from '../utils/animation';

const JoinPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    grade: '',
    phone: '',
    interests: [],
    experience: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  // Initialize animations when component mounts
  useEffect(() => {
    // Setup staggered animations
    const cleanup = initStaggeredAnimation();
    return cleanup;
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    let updatedInterests = [...(formData.interests as string[])];
    
    if (checked) {
      updatedInterests.push(value);
    } else {
      updatedInterests = updatedInterests.filter(interest => interest !== value);
    }
    
    setFormData({
      ...formData,
      interests: updatedInterests
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log(formData);
    // For now, just show success message
    setSubmitted(true);
  };

  return (
    <Layout title="Join HOSA | Marvin Ridge HOSA" description="Become a member of Marvin Ridge HOSA chapter. Apply online and start your journey as a future health professional.">
      <div className="bg-blue-900 text-white py-12 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-white opacity-10 rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-white opacity-10 rounded-full"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl font-bold mb-4 animate-slide-in-left">Join Marvin Ridge HOSA</h1>
          <p className="text-xl max-w-3xl animate-slide-in-left" style={{ animationDelay: '0.2s' }}>
            Start your journey as a future health professional and become part of our community.
          </p>
        </div>
      </div>

      {/* Benefits Section */}
      <section className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-on-scroll">
          <h2 className="text-3xl font-bold gradient-text mb-2">Membership Benefits</h2>
          <div className="w-20 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            HOSA membership opens doors to valuable experiences and opportunities that help prepare you for a future in healthcare.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6 hover-lift stagger-item">
            <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-blue-900 mb-3">Networking</h3>
            <p className="text-gray-600">Connect with like-minded peers, healthcare professionals, and industry leaders.</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 hover-lift stagger-item">
            <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-blue-900 mb-3">Competitions</h3>
            <p className="text-gray-600">Participate in local, state, and international competitive events in various healthcare fields.</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 hover-lift stagger-item">
            <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-blue-900 mb-3">Leadership</h3>
            <p className="text-gray-600">Develop essential leadership skills through officer roles, projects, and team collaborations.</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 hover-lift stagger-item">
            <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-blue-900 mb-3">Skill Building</h3>
            <p className="text-gray-600">Learn and practice healthcare skills through hands-on activities and training.</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 hover-lift stagger-item">
            <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-blue-900 mb-3">Career Exploration</h3>
            <p className="text-gray-600">Explore different healthcare career pathways through guest speakers and field trips.</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 hover-lift stagger-item">
            <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-blue-900 mb-3">Scholarships</h3>
            <p className="text-gray-600">Access to HOSA scholarships and recognition programs for college and career advancement.</p>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12 animate-on-scroll">
              <h2 className="text-3xl font-bold gradient-text mb-2">Membership Application</h2>
              <div className="w-20 h-1 bg-red-600 mx-auto mb-6"></div>
              <p className="text-lg text-gray-700">
                Complete the form below to apply for HOSA membership. Dues for the 2024-2025 school year are $30.
              </p>
            </div>
            
            {submitted ? (
              <div className="bg-green-50 border border-green-200 rounded-md p-6 text-center stagger-item">
                <svg className="w-12 h-12 text-green-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="text-xl font-bold text-green-800 mb-2">Application Submitted!</h3>
                <p className="text-green-700 mb-4">
                  Thank you for your interest in joining Marvin Ridge HOSA. We'll contact you soon with next steps.
                </p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700"
                >
                  Submit Another Application
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-8 stagger-item">
                <div className="grid grid-cols-1 gap-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="grade" className="block text-sm font-medium text-gray-700 mb-1">Grade Level</label>
                      <select
                        id="grade"
                        name="grade"
                        required
                        value={formData.grade}
                        onChange={handleInputChange}
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      >
                        <option value="">Select Grade</option>
                        <option value="9">9th Grade</option>
                        <option value="10">10th Grade</option>
                        <option value="11">11th Grade</option>
                        <option value="12">12th Grade</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <span className="block text-sm font-medium text-gray-700 mb-1">Areas of Interest</span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                      {['Clinical Practice', 'Public Health', 'Research', 'Health Administration', 'Emergency Services', 'Mental Health'].map((interest) => (
                        <div key={interest} className="flex items-center">
                          <input
                            id={interest.replace(/\s+/g, '-').toLowerCase()}
                            name="interests"
                            type="checkbox"
                            value={interest}
                            onChange={handleCheckboxChange}
                            className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                          />
                          <label htmlFor={interest.replace(/\s+/g, '-').toLowerCase()} className="ml-2 text-sm text-gray-700">
                            {interest}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-1">Healthcare Experience (if any)</label>
                    <textarea
                      id="experience"
                      name="experience"
                      rows={3}
                      value={formData.experience}
                      onChange={handleInputChange}
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Why do you want to join HOSA?</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                  
                  <div className="flex justify-end">
                    <button
                      type="submit"
                      className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-800 hover:bg-blue-700 hover-lift"
                    >
                      Submit Application
                    </button>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default JoinPage; 