import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

const OfficerDashboard: React.FC = () => {
  const router = useRouter();
  
  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>MRHS HOSA | Officer Dashboard</title>
        <meta name="description" content="Marvin Ridge HOSA Officer Dashboard" />
      </Head>

      <div className="bg-blue-900 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-white text-xl font-bold">MRHS HOSA</span>
              <span className="ml-4 text-white text-sm">Officer Dashboard</span>
            </div>
            <div>
              <Link href="/" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Back to Website
              </Link>
            </div>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <h1 className="text-3xl font-bold text-gray-900">Welcome, Officer</h1>
          <p className="mt-2 text-gray-600">
            Manage your HOSA chapter from this dashboard.
          </p>
          
          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {/* Attendance Tracker Card */}
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Attendance Tracker
                </h3>
                <div className="mt-2 max-w-xl text-sm text-gray-500">
                  <p>
                    Track attendance for meetings and events. Monitor member participation.
                  </p>
                </div>
                <div className="mt-5">
                  <Link href="/officer-dashboard/attendance"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-800 hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                    View Attendance
                  </Link>
                </div>
              </div>
            </div>

            {/* Volunteer Hours Card */}
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Volunteer Hours
                </h3>
                <div className="mt-2 max-w-xl text-sm text-gray-500">
                  <p>
                    Track volunteer hours for each member. Record and manage service activities.
                  </p>
                </div>
                <div className="mt-5">
                  <Link href="/officer-dashboard/volunteer-hours"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-800 hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                    Manage Hours
                  </Link>
                </div>
              </div>
            </div>

            {/* Member Management Card */}
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Member Management
                </h3>
                <div className="mt-2 max-w-xl text-sm text-gray-500">
                  <p>
                    Add, edit, or remove members. Update member information and status.
                  </p>
                </div>
                <div className="mt-5">
                  <Link href="/officer-dashboard/members"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-800 hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                    Manage Members
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          {/* Summary Statistics */}
          <div className="mt-8 bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Chapter Overview
              </h3>
              <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
                <div className="bg-gray-50 px-4 py-5 rounded-lg shadow-sm">
                  <dt className="text-sm font-medium text-gray-500 truncate">
                    Total Members
                  </dt>
                  <dd className="mt-1 text-3xl font-semibold text-blue-800">
                    32
                  </dd>
                </div>
                <div className="bg-gray-50 px-4 py-5 rounded-lg shadow-sm">
                  <dt className="text-sm font-medium text-gray-500 truncate">
                    Average Attendance
                  </dt>
                  <dd className="mt-1 text-3xl font-semibold text-blue-800">
                    87%
                  </dd>
                </div>
                <div className="bg-gray-50 px-4 py-5 rounded-lg shadow-sm">
                  <dt className="text-sm font-medium text-gray-500 truncate">
                    Total Volunteer Hours
                  </dt>
                  <dd className="mt-1 text-3xl font-semibold text-blue-800">
                    256
                  </dd>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default OfficerDashboard; 