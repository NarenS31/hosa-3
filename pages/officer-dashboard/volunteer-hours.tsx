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

const initialVolunteerEvents = [
  { id: 1, name: 'Health Fair', date: '2024-10-10', location: 'School Gymnasium' },
  { id: 2, name: 'Blood Drive', date: '2024-11-05', location: 'Community Center' },
  { id: 3, name: 'Nursing Home Visit', date: '2024-12-15', location: 'Sunrise Senior Living' },
];

// Mock volunteer hours data
const initialVolunteerHours = [
  { id: 1, memberId: 1, eventId: 1, hours: 3, description: 'Helped with health screenings' },
  { id: 2, memberId: 2, eventId: 1, hours: 4, description: 'Managed registration desk' },
  { id: 3, memberId: 3, eventId: 1, hours: 2, description: 'Distributed flyers' },
  { id: 4, memberId: 1, eventId: 2, hours: 5, description: 'Assisted with donor check-in' },
  { id: 5, memberId: 4, eventId: 2, hours: 3, description: 'Helped with refreshments' },
  { id: 6, memberId: 5, eventId: 2, hours: 4, description: 'Managed waiting area' },
  { id: 7, memberId: 2, eventId: 3, hours: 2, description: 'Played games with residents' },
  { id: 8, memberId: 3, eventId: 3, hours: 3, description: 'Read books to residents' },
];

const VolunteerHoursTracker: React.FC = () => {
  const [members] = useState(initialMembers);
  const [volunteerEvents] = useState(initialVolunteerEvents);
  const [volunteerHours, setVolunteerHours] = useState(initialVolunteerHours);
  const [searchTerm, setSearchTerm] = useState('');
  const [isAddingHours, setIsAddingHours] = useState(false);

  // Form state for adding new volunteer hours
  const [formData, setFormData] = useState({
    memberId: '',
    eventId: '',
    hours: '',
    description: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!formData.memberId || !formData.eventId || !formData.hours) {
      alert('Please fill out all required fields');
      return;
    }

    const newHourEntry = {
      id: volunteerHours.length + 1,
      memberId: Number(formData.memberId),
      eventId: Number(formData.eventId),
      hours: Number(formData.hours),
      description: formData.description
    };

    setVolunteerHours([...volunteerHours, newHourEntry]);
    setFormData({ memberId: '', eventId: '', hours: '', description: '' });
    setIsAddingHours(false);
  };

  const getMemberById = (id: number) => {
    return members.find(member => member.id === id);
  };

  const getEventById = (id: number) => {
    return volunteerEvents.find(event => event.id === id);
  };

  const getHoursByMember = (memberId: number) => {
    return volunteerHours
      .filter(entry => entry.memberId === memberId)
      .reduce((total, entry) => total + entry.hours, 0);
  };

  const filteredMembers = members.filter(member => 
    member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>Volunteer Hours Tracker | MRHS HOSA Officer Dashboard</title>
        <meta name="description" content="Volunteer hours tracking system for MRHS HOSA" />
      </Head>

      {/* Header */}
      <header className="bg-blue-900 shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white">Volunteer Hours Tracker</h1>
          <Link href="/officer-dashboard" className="text-white hover:text-gray-200 text-sm">
            Back to Dashboard
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Controls */}
        <div className="bg-white shadow rounded-lg p-6 mb-6">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center">
            <div className="mb-4 md:mb-0">
              <h2 className="text-lg font-medium text-gray-900">Member Volunteer Hours</h2>
              <p className="text-sm text-gray-500">Track and manage volunteer hours for all members</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative rounded-md shadow-sm">
                <input
                  type="text"
                  className="focus:ring-blue-500 focus:border-blue-500 block w-full pr-10 sm:text-sm border-gray-300 rounded-md"
                  placeholder="Search members"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <button
                type="button"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-900 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                onClick={() => setIsAddingHours(true)}
              >
                Add Hours
              </button>
            </div>
          </div>
        </div>

        {/* Add Hours Form */}
        {isAddingHours && (
          <div className="bg-white shadow rounded-lg p-6 mb-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium text-gray-900">Add Volunteer Hours</h3>
              <button
                type="button"
                className="text-gray-400 hover:text-gray-500"
                onClick={() => setIsAddingHours(false)}
              >
                <span className="sr-only">Close</span>
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="memberId" className="block text-sm font-medium text-gray-700">
                    Member *
                  </label>
                  <select
                    id="memberId"
                    name="memberId"
                    required
                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                    value={formData.memberId}
                    onChange={handleChange}
                  >
                    <option value="">Select Member</option>
                    {members.map((member) => (
                      <option key={member.id} value={member.id}>
                        {member.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="eventId" className="block text-sm font-medium text-gray-700">
                    Event *
                  </label>
                  <select
                    id="eventId"
                    name="eventId"
                    required
                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                    value={formData.eventId}
                    onChange={handleChange}
                  >
                    <option value="">Select Event</option>
                    {volunteerEvents.map((event) => (
                      <option key={event.id} value={event.id}>
                        {event.name} ({event.date})
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="hours" className="block text-sm font-medium text-gray-700">
                    Hours *
                  </label>
                  <input
                    type="number"
                    name="hours"
                    id="hours"
                    required
                    min="0.5"
                    step="0.5"
                    className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    value={formData.hours}
                    onChange={handleChange}
                  />
                </div>

                <div className="md:col-span-2">
                  <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                    Description
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    rows={3}
                    className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    value={formData.description}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="mt-6 flex justify-end">
                <button
                  type="button"
                  className="mr-3 inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  onClick={() => setIsAddingHours(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-900 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Save Hours
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Members Summary Table */}
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">Members Summary</h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              Total volunteer hours by member
            </p>
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
                    Total Hours
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
                      <div className="text-sm font-medium text-blue-800">{getHoursByMember(member.id)} hours</div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Hours Details */}
        <div className="mt-8 bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">Volunteer History</h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              Detailed record of all volunteer hours
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Member
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Event
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Hours
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {volunteerHours.map((entry) => {
                  const member = getMemberById(entry.memberId);
                  const event = getEventById(entry.eventId);
                  
                  return (
                    <tr key={entry.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">{member?.name}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{event?.name}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">{event?.date}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-blue-800">{entry.hours}</div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-500">{entry.description}</div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

export default VolunteerHoursTracker; 