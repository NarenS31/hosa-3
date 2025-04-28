import React from 'react';
import Layout from '../components/Layout';

// Event data
const events = [
  {
    id: 1,
    title: 'Health Fair',
    date: 'March 15, 2024',
    time: '10:00 AM - 3:00 PM',
    location: 'Marvin Ridge High School Gymnasium',
    description: 'Join us for a day of health awareness activities and free health screenings for the community. HOSA members will organize and staff various health education booths covering topics like nutrition, exercise, mental health, and basic first aid.',
    image: '/images/health-fair.jpg'
  },
  {
    id: 2,
    title: 'Blood Drive',
    date: 'April 10, 2024',
    time: '9:00 AM - 2:00 PM',
    location: 'Marvin Ridge High School Cafeteria',
    description: 'Partner with the Red Cross to host a blood drive at Marvin Ridge High School. HOSA members will assist with registration, post-donation care, and raising awareness about the importance of blood donation.',
    image: '/images/blood-drive.jpg'
  },
  {
    id: 3,
    title: 'State Leadership Conference',
    date: 'May 5-7, 2024',
    time: 'All Day',
    location: 'Greensboro Convention Center',
    description: 'Attend the annual State Leadership Conference to compete and network with other HOSA members from across North Carolina. This three-day event includes competitive events, leadership workshops, and networking opportunities.',
    image: '/images/slc.jpg'
  },
  {
    id: 4,
    title: 'Monthly HOSA Meeting',
    date: 'March 28, 2024',
    time: '3:30 PM - 5:00 PM',
    location: 'Room 204',
    description: 'Join us for our monthly HOSA chapter meeting. We\'ll discuss upcoming events, competitive event preparation, and have a guest speaker from the healthcare field.',
    image: '/images/meeting.jpg'
  },
  {
    id: 5,
    title: 'Hospital Volunteer Orientation',
    date: 'April 15, 2024',
    time: '4:00 PM - 6:00 PM',
    location: 'Novant Health Medical Center',
    description: 'Orientation session for HOSA members interested in volunteering at Novant Health. Learn about opportunities, requirements, and sign up for volunteer shifts.',
    image: '/images/hospital.jpg'
  },
  {
    id: 6,
    title: 'International Leadership Conference',
    date: 'June 21-24, 2024',
    time: 'All Day',
    location: 'Houston, TX',
    description: 'The HOSA International Leadership Conference brings together thousands of future health professionals from around the world to compete, learn, and network.',
    image: '/images/ilc.jpg'
  }
];

const EventsPage: React.FC = () => {
  return (
    <Layout title="Events | Marvin Ridge HOSA" description="Upcoming events, meetings, and activities for Marvin Ridge HOSA members.">
      <div className="bg-blue-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Upcoming Events</h1>
          <p className="text-xl max-w-3xl">
            Stay up to date with HOSA chapter meetings, competitions, service projects, and more.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          {events.map(event => (
            <div key={event.id} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <span className="text-xl font-bold text-gray-500">Event Image</span>
              </div>
              <div className="p-6 flex-grow">
                <div className="flex justify-between items-start">
                  <h2 className="text-2xl font-bold text-blue-900 mb-2">{event.title}</h2>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                    {event.date}
                  </span>
                </div>
                <div className="mt-2 text-sm text-gray-500">
                  <div className="mb-1">
                    <span className="font-medium">Time:</span> {event.time}
                  </div>
                  <div className="mb-3">
                    <span className="font-medium">Location:</span> {event.location}
                  </div>
                </div>
                <p className="mt-2 text-gray-600">{event.description}</p>
              </div>
              <div className="p-6 pt-0">
                <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-800 hover:bg-blue-700">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Propose an Event</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              Have an idea for a HOSA event? Submit your proposal and our officer team will review it.
            </p>
            <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-800 hover:bg-blue-700">
              Submit Event Proposal
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default EventsPage; 