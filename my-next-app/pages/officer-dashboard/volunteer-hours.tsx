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
  { id: 1, name: 'Health Fair', date: '2024-03-15' },
  { id: 2, name: 'Blood Drive', date: '2024-04-10' },
  { id: 3, name: 'Hospital Volunteering', date: '2024-03-25' },
  { id: 4, name: 'Community Service Day', date: '2024-04-22' },
];

// Initial volunteer hours data
const initialVolunteerHours = [
  { id: 1, memberId: 1, eventId: 1, hours: 4, description: 'Set up and managed health education booth', date: '2024-03-15' },
  { id: 2, memberId: 2, eventId: 1, hours: 3, description: 'Helped with registrations and checkout', date: '2024-03-15' },
  { id: 3, memberId: 3, eventId: 1, hours: 5, description: 'Led health screenings and coordination', date: '2024-03-15' },
  { id: 4, memberId: 1, eventId: 2, hours: 2, description: 'Assisted with registration', date: '2024-04-10' },
  { id: 5, memberId: 3, eventId: 3, hours: 8, description: 'Shadowed nurses in pediatric unit', date: '2024-03-25' },
  { id: 6, memberId: 4, eventId: 3, hours: 6, description: 'Assisted in hospital gift shop', date: '2024-03-26' },
  { id: 7, memberId: 2, eventId: 4, hours: 5, description: 'Helped organize community garden', date: '2024-04-22' },
];

const VolunteerHoursTracker: React.FC = () => {
  const [members] = useState(initialMembers);
  const [events] = useState(initialEvents);
  const [volunteerHours, setVolunteerHours] = useState(initialVolunteerHours);
  const [searchTerm, setSearchTerm] = useState('');
  
  // Form state
  const [selectedMember, setSelectedMember] = useState('');
  const [selectedEvent, setSelectedEvent] = useState('');
  const [hours, setHours] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [showForm, setShowForm] = useState(false);

  // Handle form submission for adding new volunteer hours
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedMember || !selectedEvent || !hours || !date) {
      return; // Validation failed
    }
    
    const newRecord = {
      id: volunteerHours.length + 1,
      memberId: parseInt(selectedMember),
      eventId: parseInt(selectedEvent),
      hours: parseFloat(hours),
      description,
      date
    };
    
    setVolunteerHours([...volunteerHours, newRecord]);
    
    // Reset form
    setSelectedMember('');
    setSelectedEvent('');
    setHours('');
    setDescription('');
    setDate('');
    setShowForm(false);
  };

  // Filter members based on search term
  const filteredMembers = members.filter(member => 
    member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Calculate total volunteer hours for each member
  const memberVolunteerSummary = members.map(member => {
    const memberHours = volunteerHours.filter(record => record.memberId === member.id);
    const totalHours = memberHours.reduce((sum, record) => sum + record.hours, 0);
    
    return {
      ...member,
      totalHours,
      recordCount: memberHours.length
    };
  });

  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>MRHS HOSA | Volunteer Hours Tracker</title>
        <meta name="description" content="Marvin Ridge HOSA Officer Dashboard - Volunteer Hours Tracker" />
      </Head>

      <div className="bg-blue-900 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-white text-xl font-bold">MRHS HOSA</span>
              <span className="ml-4 text-white text-sm">Volunteer Hours Tracker</span>
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
          <h1 className="text-3xl font-bold text-gray-900">Volunteer Hours Tracker</h1>
          <p className="mt-2 text-gray-600">
            Record and manage volunteer hours for each member. Add new volunteer records and view totals.
          </p>

          {/* Search and Add Controls */}
          <div className="mt-6 flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
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
            
            <div>
              <button
                onClick={() => setShowForm(!showForm)}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-800 hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                {showForm ? 'Cancel' : 'Add Volunteer Hours'}
              </button>
            </div>
          </div>

          {/* Add Volunteer Hours Form */}
          {showForm && (
            <div className="mt-6 bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6">
              <div className="md:grid md:grid-cols-3 md:gap-6">
                <div className="md:col-span-1">
                  <h3 className="text-lg font-medium leading-6 text-gray-900">Add Volunteer Hours</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Record new volunteer hours for a member. Fill out all required fields.
                  </p>
                </div>
                <div className="mt-5 md:mt-0 md:col-span-2">
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-6 gap-6">
                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="member" className="block text-sm font-medium text-gray-700">Member</label>
                        <select
                          id="member"
                          className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                          value={selectedMember}
                          onChange={(e) => setSelectedMember(e.target.value)}
                          required
                        >
                          <option value="">Select a member</option>
                          {members.map(member => (
                            <option key={member.id} value={member.id}>
                              {member.name} (Grade {member.grade})
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="event" className="block text-sm font-medium text-gray-700">Event</label>
                        <select
                          id="event"
                          className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                          value={selectedEvent}
                          onChange={(e) => setSelectedEvent(e.target.value)}
                          required
                        >
                          <option value="">Select an event</option>
                          {events.map(event => (
                            <option key={event.id} value={event.id}>
                              {event.name} ({event.date})
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="col-span-6 sm:col-span-2">
                        <label htmlFor="hours" className="block text-sm font-medium text-gray-700">Hours</label>
                        <input
                          type="number"
                          id="hours"
                          min="0.25"
                          step="0.25"
                          className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          value={hours}
                          onChange={(e) => setHours(e.target.value)}
                          required
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-4">
                        <label htmlFor="date" className="block text-sm font-medium text-gray-700">Date</label>
                        <input
                          type="date"
                          id="date"
                          className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          value={date}
                          onChange={(e) => setDate(e.target.value)}
                          required
                        />
                      </div>

                      <div className="col-span-6">
                        <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
                        <textarea
                          id="description"
                          rows={3}
                          className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          value={description}
                          onChange={(e) => setDescription(e.target.value)}
                          placeholder="Describe the volunteer work performed"
                        />
                      </div>
                    </div>
                    <div className="mt-5 flex justify-end">
                      <button
                        type="button"
                        className="mr-3 py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        onClick={() => setShowForm(false)}
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-800 hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                      >
                        Save
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          )}

          {/* Volunteer Hours Summary Table */}
          <div className="mt-8">
            <h2 className="text-2xl font-bold text-gray-900">Volunteer Hours Summary</h2>
            <div className="mt-4 flex flex-col">
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
                            Total Hours
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {filteredMembers.map(member => {
                          const summary = memberVolunteerSummary.find(m => m.id === member.id);
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
                                <div className="text-sm font-medium text-gray-900">
                                  {summary?.totalHours || 0} hours ({summary?.recordCount || 0} activities)
                                </div>
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
          </div>

          {/* Volunteer History Table */}
          <div className="mt-10">
            <h2 className="text-2xl font-bold text-gray-900">Volunteer History</h2>
            <div className="mt-4 flex flex-col">
              <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                  <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
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
                        {volunteerHours
                          .filter(record => {
                            const member = members.find(m => m.id === record.memberId);
                            return !searchTerm || 
                              (member && member.name.toLowerCase().includes(searchTerm.toLowerCase()));
                          })
                          .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
                          .map(record => {
                            const member = members.find(m => m.id === record.memberId);
                            const event = events.find(e => e.id === record.eventId);
                            
                            return (
                              <tr key={record.id}>
                                <td className="px-6 py-4 whitespace-nowrap">
                                  <div className="text-sm font-medium text-gray-900">
                                    {member?.name || 'Unknown Member'}
                                  </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                  <div className="text-sm text-gray-900">
                                    {event?.name || 'Unknown Event'}
                                  </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                  <div className="text-sm text-gray-500">{record.date}</div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                  <div className="text-sm text-gray-900">{record.hours}</div>
                                </td>
                                <td className="px-6 py-4">
                                  <div className="text-sm text-gray-500">{record.description}</div>
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
          </div>
        </div>
      </main>
    </div>
  );
};

export default VolunteerHoursTracker; 