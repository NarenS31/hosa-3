import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();

  // Helper function to determine active link
  const isActive = (path: string) => {
    return router.pathname === path ? 'border-indigo-500 text-white' : 'border-transparent text-gray-300 hover:border-gray-300 hover:text-white';
  };

  return (
    <nav className="bg-blue-900 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="text-white text-xl font-bold">MRHS HOSA</Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link href="/" className={`${isActive('/')} inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}>
                Home
              </Link>
              <Link href="/events" className={`${isActive('/events')} inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}>
                Events
              </Link>
              <Link href="/officers" className={`${isActive('/officers')} inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}>
                Officers
              </Link>
              <Link href="/competitions" className={`${isActive('/competitions')} inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}>
                Competitions
              </Link>
              <Link href="/slc-placers" className={`${isActive('/slc-placers')} inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}>
                SLC Placers
              </Link>
              <Link href="/resources" className={`${isActive('/resources')} inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}>
                Resources
              </Link>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <Link href="/officer-login" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-800 hover:bg-red-700 shadow-lg">
              Officer Login
            </Link>
            
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
          <Link href="/" className={`${router.pathname === '/' ? 'bg-blue-800 text-white' : 'text-gray-300 hover:bg-blue-800 hover:text-white'} block pl-3 pr-4 py-2 text-base font-medium`}>
            Home
          </Link>
          <Link href="/events" className={`${router.pathname === '/events' ? 'bg-blue-800 text-white' : 'text-gray-300 hover:bg-blue-800 hover:text-white'} block pl-3 pr-4 py-2 text-base font-medium`}>
            Events
          </Link>
          <Link href="/officers" className={`${router.pathname === '/officers' ? 'bg-blue-800 text-white' : 'text-gray-300 hover:bg-blue-800 hover:text-white'} block pl-3 pr-4 py-2 text-base font-medium`}>
            Officers
          </Link>
          <Link href="/competitions" className={`${router.pathname === '/competitions' ? 'bg-blue-800 text-white' : 'text-gray-300 hover:bg-blue-800 hover:text-white'} block pl-3 pr-4 py-2 text-base font-medium`}>
            Competitions
          </Link>
          <Link href="/slc-placers" className={`${router.pathname === '/slc-placers' ? 'bg-blue-800 text-white' : 'text-gray-300 hover:bg-blue-800 hover:text-white'} block pl-3 pr-4 py-2 text-base font-medium`}>
            SLC Placers
          </Link>
          <Link href="/resources" className={`${router.pathname === '/resources' ? 'bg-blue-800 text-white' : 'text-gray-300 hover:bg-blue-800 hover:text-white'} block pl-3 pr-4 py-2 text-base font-medium`}>
            Resources
          </Link>
          <Link href="/officer-login" className="bg-red-800 text-white block pl-3 pr-4 py-2 text-base font-medium mt-4">
            Officer Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 