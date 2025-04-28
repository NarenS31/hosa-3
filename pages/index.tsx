import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

const HomePage: React.FC = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <div className="min-h-screen bg-gray-50">
            <Head>
                <title>Marvin Ridge HOSA | Future Health Professionals</title>
                <meta name="description" content="Marvin Ridge High School HOSA chapter dedicated to promoting health science education and leadership among students." />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {/* Navigation */}
            <nav className="bg-blue-900 shadow-lg">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex">
                            <div className="flex-shrink-0 flex items-center">
                                <span className="text-white text-xl font-bold">MRHS HOSA</span>
                            </div>
                            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                                <a href="#" className="border-indigo-500 text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                                    Home
                                </a>
                                <a href="#events" className="border-transparent text-gray-300 hover:border-gray-300 hover:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                                    Events
                                </a>
                                <a href="#officers" className="border-transparent text-gray-300 hover:border-gray-300 hover:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                                    Officers
                                </a>
                                <a href="#competitions" className="border-transparent text-gray-300 hover:border-gray-300 hover:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                                    Competitions
                                </a>
                                <a href="#resources" className="border-transparent text-gray-300 hover:border-gray-300 hover:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                                    Resources
                                </a>
                                <Link href="/officer-login" className="border-transparent text-white bg-red-800 hover:bg-red-700 inline-flex items-center px-3 py-1 rounded-md ml-4 text-sm font-medium">
                                    Officer Login
                                </Link>
                            </div>
                        </div>
                        
                        <div className="flex items-center space-x-4">
                            <div className="-mr-2 flex items-center sm:hidden">
                                <button 
                                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                    className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                >
                                    <span className="sr-only">Open main menu</span>
                                    <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile menu */}
                <div className={`${mobileMenuOpen ? 'block' : 'hidden'} sm:hidden`}>
                    <div className="pt-2 pb-3 space-y-1">
                        <a href="#" className="bg-blue-800 text-white block pl-3 pr-4 py-2 text-base font-medium">Home</a>
                        <a href="#events" className="text-gray-300 hover:bg-blue-800 hover:text-white block pl-3 pr-4 py-2 text-base font-medium">Events</a>
                        <a href="#officers" className="text-gray-300 hover:bg-blue-800 hover:text-white block pl-3 pr-4 py-2 text-base font-medium">Officers</a>
                        <a href="#competitions" className="text-gray-300 hover:bg-blue-800 hover:text-white block pl-3 pr-4 py-2 text-base font-medium">Competitions</a>
                        <a href="#resources" className="text-gray-300 hover:bg-blue-800 hover:text-white block pl-3 pr-4 py-2 text-base font-medium">Resources</a>
                        <Link href="/officer-login" className="bg-red-800 text-white block pl-3 pr-4 py-2 text-base font-medium">Officer Login</Link>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <div className="bg-gradient-to-r from-blue-900 to-red-900 text-white">
                <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
                    <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
                        <div>
                            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                                Marvin Ridge HOSA
                            </h1>
                            <p className="mt-4 text-xl">
                                Future Health Professionals dedicated to promoting health science education and developing leadership skills.
                            </p>
                            <div className="mt-8">
                                <a href="#join" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-blue-900 bg-white hover:bg-gray-100">
                                    Join HOSA Today
                                </a>
                                <a href="#learn" className="inline-flex items-center ml-4 px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-800 hover:bg-blue-700">
                                    Learn More
                                </a>
                            </div>
                        </div>
                        <div className="mt-12 lg:mt-0 flex justify-center">
                            <div className="bg-white p-2 rounded-lg shadow-lg">
                                {/* Placeholder for HOSA logo/image */}
                                <div className="h-64 w-64 bg-blue-100 rounded flex items-center justify-center">
                                    <span className="text-blue-900 font-bold text-xl">HOSA Logo</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                {/* About Section */}
                <section className="px-4 py-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-blue-900">Welcome to MRHS HOSA</h2>
                        <div className="mt-2 h-1 w-20 bg-red-800 mx-auto"></div>
                    </div>
                    <p className="text-lg text-gray-700 max-w-3xl mx-auto text-center">
                        Marvin Ridge High School HOSA is dedicated to enhancing the delivery of compassionate, quality healthcare by providing opportunities for knowledge, skill, and leadership development to students interested in pursuing careers in the healthcare industry.
                    </p>
                </section>

                {/* Events Section */}
                <section id="events" className="px-4 py-8 bg-gray-100 rounded-lg shadow-inner my-8">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold text-blue-900">Upcoming Events</h2>
                        <div className="mt-2 h-1 w-20 bg-red-800 mx-auto"></div>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <div className="text-blue-900 font-bold mb-2">March 15, 2024</div>
                            <h3 className="text-xl font-semibold mb-2">Health Fair</h3>
                            <p className="text-gray-700">Join us for a day of health awareness activities and free health screenings for the community.</p>
                            <a href="#" className="mt-4 inline-block text-blue-800 hover:text-blue-900 font-medium">Learn more →</a>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <div className="text-blue-900 font-bold mb-2">April 10, 2024</div>
                            <h3 className="text-xl font-semibold mb-2">Blood Drive</h3>
                            <p className="text-gray-700">Partner with the Red Cross to host a blood drive at Marvin Ridge High School.</p>
                            <a href="#" className="mt-4 inline-block text-blue-800 hover:text-blue-900 font-medium">Learn more →</a>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <div className="text-blue-900 font-bold mb-2">May 5-7, 2024</div>
                            <h3 className="text-xl font-semibold mb-2">State Leadership Conference</h3>
                            <p className="text-gray-700">Attend the annual State Leadership Conference to compete and network with other HOSA members.</p>
                            <a href="#" className="mt-4 inline-block text-blue-800 hover:text-blue-900 font-medium">Learn more →</a>
                        </div>
                    </div>
                </section>

                {/* Officers Section */}
                <section id="officers" className="px-4 py-8">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold text-blue-900">Meet Our Officers</h2>
                        <div className="mt-2 h-1 w-20 bg-red-800 mx-auto"></div>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="text-center">
                            <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                                <span className="text-gray-500">Photo</span>
                            </div>
                            <h3 className="text-xl font-semibold">Alex Johnson</h3>
                            <p className="text-blue-900 font-medium">President</p>
                            <p className="mt-2 text-gray-600">Senior, interested in studying medicine</p>
                        </div>
                        <div className="text-center">
                            <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                                <span className="text-gray-500">Photo</span>
                            </div>
                            <h3 className="text-xl font-semibold">Jamie Lee</h3>
                            <p className="text-blue-900 font-medium">Vice President</p>
                            <p className="mt-2 text-gray-600">Junior, aspiring physical therapist</p>
                        </div>
                        <div className="text-center">
                            <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                                <span className="text-gray-500">Photo</span>
                            </div>
                            <h3 className="text-xl font-semibold">Taylor Smith</h3>
                            <p className="text-blue-900 font-medium">Secretary</p>
                            <p className="mt-2 text-gray-600">Senior, future nursing student</p>
                        </div>
                    </div>
                </section>

                {/* Competitions Section */}
                <section id="competitions" className="px-4 py-8 bg-gray-100 rounded-lg shadow-inner my-8">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold text-blue-900">Competitions</h2>
                        <div className="mt-2 h-1 w-20 bg-red-800 mx-auto"></div>
                    </div>
                    <div className="max-w-3xl mx-auto">
                        <p className="text-lg text-gray-700 mb-6">
                            HOSA offers a variety of competitive events that test your knowledge and skills in health science. Participate in these competitions to showcase your abilities and prepare for your future career.
                        </p>
                        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                            <h3 className="text-xl font-semibold mb-2">Healthcare Issues Exam</h3>
                            <p className="text-gray-700">Test your knowledge on current healthcare issues and topics.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                            <h3 className="text-xl font-semibold mb-2">Medical Terminology</h3>
                            <p className="text-gray-700">Demonstrate your understanding of medical terms and their meanings.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold mb-2">Clinical Specialty</h3>
                            <p className="text-gray-700">Showcase your skills in a specific healthcare profession through a portfolio and skills demonstration.</p>
                        </div>
                    </div>
                </section>

                {/* Resources Section */}
                <section id="resources" className="px-4 py-8">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold text-blue-900">Resources</h2>
                        <div className="mt-2 h-1 w-20 bg-red-800 mx-auto"></div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold mb-2">Study Materials</h3>
                            <p className="text-gray-700 mb-4">Access study guides, practice tests, and other materials to help you prepare for competitions.</p>
                            <a href="#" className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-blue-800 hover:bg-blue-700">
                                Access Materials
                            </a>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold mb-2">Leadership Development</h3>
                            <p className="text-gray-700 mb-4">Resources to help you develop leadership skills and prepare for future healthcare careers.</p>
                            <a href="#" className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-blue-800 hover:bg-blue-700">
                                View Resources
                            </a>
                        </div>
                    </div>
                </section>

                {/* Join Section */}
                <section id="join" className="px-4 py-12 my-8 bg-blue-900 rounded-lg text-white">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold">Join MRHS HOSA Today</h2>
                        <p className="mt-4 text-lg max-w-2xl mx-auto">
                            Become a part of our community of future health professionals. Gain valuable skills, participate in competitions, and prepare for your career in healthcare.
                        </p>
                        <div className="mt-6">
                            <a href="#" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-blue-900 bg-white hover:bg-gray-100">
                                Membership Information
                            </a>
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="bg-blue-900 text-white">
                <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div>
                            <h3 className="text-xl font-bold mb-4">MRHS HOSA</h3>
                            <p className="text-gray-300">
                                Marvin Ridge High School<br />
                                2825 Crane Road<br />
                                Waxhaw, NC 28173
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
                            <p className="text-gray-300">
                                Email: hosa@marvinridge.edu<br />
                                Phone: (704) 555-1234<br />
                                Advisor: Mrs. Jane Smith
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
                            <div className="flex space-x-4">
                                <a href="#" className="text-gray-300 hover:text-white">
                                    <span className="sr-only">Facebook</span>
                                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                                    </svg>
                                </a>
                                <a href="#" className="text-gray-300 hover:text-white">
                                    <span className="sr-only">Instagram</span>
                                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                                    </svg>
                                </a>
                                <a href="#" className="text-gray-300 hover:text-white">
                                    <span className="sr-only">Twitter</span>
                                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="mt-8 border-t border-blue-800 pt-8 flex justify-between items-center">
                        <p className="text-gray-300">&copy; 2024 Marvin Ridge High School HOSA. All rights reserved.</p>
                        <div className="flex space-x-6">
                            <a href="#" className="text-gray-300 hover:text-white">Privacy Policy</a>
                            <a href="#" className="text-gray-300 hover:text-white">Terms of Use</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default HomePage; 