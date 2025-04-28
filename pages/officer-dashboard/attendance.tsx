import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

// Mock data
const initialMembers = [
  { id: 1, name: 'Alex Johnson', grade: '12', email: 'alex.j@example.com' },
  { id: 2, name: 'Jamie Lee', grade: '11', email: 'jamie.l@example.com' },
  { id: 3, name: 'Taylor Smith', grade: '12', email: 'taylor.s@example.com' },
  { id: 4, name: 'Jordan Brown', grade: '10', email: 'jordan.b@example.com' },
  { id: 5, name: 'Casey Wilson', grade: '11', email: 'casey.w@example.com' },
];

const initialEvents = [
  { id: 1, name: 'Chapter Meeting - September', date: '2024-09-15', type: 'Meeting' },
  { id: 2, name: 'Health Fair', date: '2024-10-10', type: 'Event' },
  { id: 3, name: 'Chapter Meeting - October', date: '2024-10-20', type: 'Meeting' },
  { id: 4, name: 'Blood Drive', date: '2024-11-05', type: 'Event' },
];

// Mock attendance data
const initialAttendanceData = {
  1: { 1: true, 2: true, 3: false, 4: true, 5: false }, // Event 1
  2: { 1: true, 2: true, 3: true, 4: false, 5: true },  // Event 2
  3: { 1: false, 2: true, 3: true, 4: true, 5: true },  // Event 3
  4: { 1: true, 2: false, 3: true, 4: false, 5: true }, // Event 4
};

const AttendanceTracker: React.FC = () => {
  const [members] = useState(initialMembers);
  const [events] = useState(initialEvents);
  const [attendanceData, setAttendanceData] = useState(initialAttendanceData);
  const [selectedEvent, setSelectedEvent] = useState<number>(1);
  const [searchTerm, setSearchTerm] = useState('');

  const toggleAttendance = (memberId: number) => {
    setAttendanceData({
      ...attendanceData,
      [selectedEvent]: {
        ...attendanceData[selectedEvent],
        [memberId]: !attendanceData[selectedEvent][memberId]
      }
    });
  };

  const filteredMembers = members.filter(member => 
    member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const calculateAttendanceRate = (memberId: number) => {
    const totalEvents = events.length;
    const eventsAttended = Object.keys(attendanceData).filter(
      eventId => attendanceData[Number(eventId)][memberId]
    ).length;
    return (eventsAttended / totalEvents * 100).toFixed(0);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>Attendance Tracker | MRHS HOSA Officer Dashboard</title>
        <meta name="description" content="Attendance tracking system for MRHS HOSA" />
      </Head>

      {/* Header */}
      <header className="bg-blue-900 shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white">Attendance Tracker</h1>
          <Link href="/officer-dashboard" className="text-white hover:text-gray-200 text-sm">
            Back to Dashboard
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6 flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-lg leading-6 font-medium text-gray-900">Member Attendance</h3>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">
                Track attendance for meetings and events
              </p>
            </div>
            <div className="mt-4 md:mt-0">
              <label htmlFor="event" className="block text-sm font-medium text-gray-700 mb-1">
                Select Event
              </label>
              <select
                id="event"
                name="event"
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                value={selectedEvent}
                onChange={(e) => setSelectedEvent(Number(e.target.value))}
              >
                {events.map((event) => (
                  <option key={event.id} value={event.id}>
                    {event.name} ({event.date})
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="px-4 py-3 bg-gray-50 sm:px-6">
            <div className="max-w-lg">
              <label htmlFor="search" className="sr-only">Search members</label>
              <div className="relative rounded-md shadow-sm">
                <input
                  type="text"
                  name="search"
                  id="search"
                  className="focus:ring-blue-500 focus:border-blue-500 block w-full pr-10 sm:text-sm border-gray-300 rounded-md"
                  placeholder="Search members by name or email"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Grade
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Email
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Attendance
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Overall Rate
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredMembers.map((member) => (
                  <tr key={member.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{member.name}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">{member.grade}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">{member.email}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <button
                        onClick={() => toggleAttendance(member.id)}
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          attendanceData[selectedEvent][member.id]
                            ? 'bg-green-100 text-green-800'
                            : 'bg-red-100 text-red-800'
                        }`}
                      >
                        {attendanceData[selectedEvent][member.id] ? 'Present' : 'Absent'}
                      </button>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <span className="text-sm text-gray-900 mr-2">{calculateAttendanceRate(member.id)}%</span>
                        <div className="w-24 bg-gray-200 rounded-full h-2.5">
                          <div 
                            className="bg-blue-800 h-2.5 rounded-full" 
                            style={{ width: `${calculateAttendanceRate(member.id)}%` }}
                          ></div>
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Event Summary */}
        <div className="mt-8 bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">Event Summary</h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              Attendance statistics for {events.find(e => e.id === selectedEvent)?.name}
            </p>
          </div>

          <div className="px-4 py-5 sm:p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-500 font-medium">Total Members</p>
                <p className="text-2xl font-bold text-gray-900">{members.length}</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="text-sm text-green-600 font-medium">Present</p>
                <p className="text-2xl font-bold text-green-800">
                  {Object.values(attendanceData[selectedEvent]).filter(Boolean).length}
                </p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg">
                <p className="text-sm text-red-600 font-medium">Absent</p>
                <p className="text-2xl font-bold text-red-800">
                  {members.length - Object.values(attendanceData[selectedEvent]).filter(Boolean).length}
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AttendanceTracker; 