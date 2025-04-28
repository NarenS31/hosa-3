import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

// Mock data
const initialMembers = [
  { id: 1, name: 'Alex Johnson', grade: '12', email: 'alex.j@student.edu' },
  { id: 2, name: 'Jamie Lee', grade: '11', email: 'jamie.l@student.edu' },
  { id: 3, name: 'Taylor Smith', grade: '12', email: 'taylor.s@student.edu' },
  { id: 4, name: 'Morgan Williams', grade: '10', email: 'morgan.w@student.edu' },
  { id: 5, name: 'Jordan Brown', grade: '11', email: 'jordan.b@student.edu' },
  { id: 6, name: 'Casey Garcia', grade: '9', email: 'casey.g@student.edu' },
];

const initialEvents = [
  { id: 1, name: 'Chapter Meeting', date: '2024-03-05' },
  { id: 2, name: 'Health Fair', date: '2024-03-15' },
  { id: 3, name: 'Blood Drive', date: '2024-04-10' },
  { id: 4, name: 'State Leadership Conference', date: '2024-05-05' },
];

// Initial attendance data (member id, event id)
const initialAttendance = [
  { memberId: 1, eventId: 1 },
  { memberId: 2, eventId: 1 },
  { memberId: 3, eventId: 1 },
  { memberId: 5, eventId: 1 },
  { memberId: 1, eventId: 2 },
  { memberId: 3, eventId: 2 },
  { memberId: 4, eventId: 2 },
  { memberId: 2, eventId: 3 },
  { memberId: 3, eventId: 3 },
];

const AttendanceTracker: React.FC = () => {
  const [members] = useState(initialMembers);
  const [events] = useState(initialEvents);
  const [attendance, setAttendance] = useState(initialAttendance);
  const [selectedEvent, setSelectedEvent] = useState<number>(events[0].id);
  const [searchTerm, setSearchTerm] = useState('');

  // Toggle attendance for a member at the selected event
  const toggleAttendance = (memberId: number) => {
    const existingRecord = attendance.find(
      record => record.memberId === memberId && record.eventId === selectedEvent
    );

    if (existingRecord) {
      // Remove attendance record
      setAttendance(attendance.filter(
        record => !(record.memberId === memberId && record.eventId === selectedEvent)
      ));
    } else {
      // Add attendance record
      setAttendance([...attendance, { memberId, eventId: selectedEvent }]);
    }
  };

  // Filter members based on search term
  const filteredMembers = members.filter(member => 
    member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Calculate attendance rate for each member
  const memberAttendanceRates = members.map(member => {
    const attendedCount = attendance.filter(record => record.memberId === member.id).length;
    const rate = (attendedCount / events.length) * 100;
    return {
      ...member,
      attended: attendedCount,
      rate: rate.toFixed(0)
    };
  });

  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>MRHS HOSA | Attendance Tracker</title>
        <meta name="description" content="Marvin Ridge HOSA Officer Dashboard - Attendance Tracker" />
      </Head>

      <div className="bg-blue-900 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-white text-xl font-bold">MRHS HOSA</span>
              <span className="ml-4 text-white text-sm">Attendance Tracker</span>
            </div>
            <div>
              <Link href="/officer-dashboard" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Back to Dashboard
              </Link>
            </div>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <h1 className="text-3xl font-bold text-gray-900">Attendance Tracker</h1>
          <p className="mt-2 text-gray-600">
            Track attendance for meetings and events. Select an event and mark attendance for each member.
          </p>

          {/* Search and Filter Controls */}
          <div className="mt-6 flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
            <div className="w-full md:w-1/3">
              <label htmlFor="event-select" className="block text-sm font-medium text-gray-700">Select Event</label>
              <select
                id="event-select"
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                value={selectedEvent}
                onChange={(e) => setSelectedEvent(Number(e.target.value))}
              >
                {events.map(event => (
                  <option key={event.id} value={event.id}>
                    {event.name} ({event.date})
                  </option>
                ))}
              </select>
            </div>
            
            <div className="w-full md:w-1/3">
              <label htmlFor="search" className="block text-sm font-medium text-gray-700">Search Members</label>
              <input
                type="text"
                id="search"
                className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                placeholder="Search by name or email"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          {/* Attendance Table */}
          <div className="mt-8 flex flex-col">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
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
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {filteredMembers.map(member => {
                        const isPresent = attendance.some(
                          record => record.memberId === member.id && record.eventId === selectedEvent
                        );
                        return (
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
                                className={`px-4 py-2 rounded-md text-sm font-medium ${
                                  isPresent 
                                    ? 'bg-green-100 text-green-800 hover:bg-green-200' 
                                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                                }`}
                              >
                                {isPresent ? 'Present' : 'Absent'}
                              </button>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          {/* Attendance Statistics */}
          <div className="mt-10">
            <h2 className="text-2xl font-bold text-gray-900">Attendance Statistics</h2>
            <div className="mt-4 bg-white shadow overflow-hidden sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Member
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Events Attended
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Attendance Rate
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {memberAttendanceRates.map(member => (
                    <tr key={member.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">{member.name}</div>
                        <div className="text-sm text-gray-500">Grade {member.grade}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{member.attended} of {events.length}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="w-full bg-gray-200 rounded-full h-2.5">
                            <div 
                              className={`h-2.5 rounded-full ${
                                parseInt(member.rate) > 75 
                                  ? 'bg-green-600' 
                                  : parseInt(member.rate) > 50 
                                    ? 'bg-yellow-500' 
                                    : 'bg-red-600'
                              }`} 
                              style={{ width: `${member.rate}%` }}
                            ></div>
                          </div>
                          <span className="ml-2 text-sm text-gray-700">{member.rate}%</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AttendanceTracker; 