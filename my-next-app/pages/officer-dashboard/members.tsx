import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

// Mock initial member data
const initialMembers = [
  { id: 1, name: 'Alex Johnson', grade: '12', email: 'alex.j@student.edu', phone: '704-555-1234', joinDate: '2022-09-01' },
  { id: 2, name: 'Jamie Lee', grade: '11', email: 'jamie.l@student.edu', phone: '704-555-2345', joinDate: '2023-08-15' },
  { id: 3, name: 'Taylor Smith', grade: '12', email: 'taylor.s@student.edu', phone: '704-555-3456', joinDate: '2022-09-10' },
  { id: 4, name: 'Morgan Williams', grade: '10', email: 'morgan.w@student.edu', phone: '704-555-4567', joinDate: '2023-09-05' },
  { id: 5, name: 'Jordan Brown', grade: '11', email: 'jordan.b@student.edu', phone: '704-555-5678', joinDate: '2023-08-20' },
  { id: 6, name: 'Casey Garcia', grade: '9', email: 'casey.g@student.edu', phone: '704-555-6789', joinDate: '2023-09-12' },
];

const MemberManagement: React.FC = () => {
  const [members, setMembers] = useState(initialMembers);
  const [searchTerm, setSearchTerm] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [editingMember, setEditingMember] = useState<number | null>(null);
  
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    grade: '',
    email: '',
    phone: '',
    joinDate: ''
  });

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Set up form for editing an existing member
  const handleEditMember = (memberId: number) => {
    const memberToEdit = members.find(m => m.id === memberId);
    if (memberToEdit) {
      setFormData({
        name: memberToEdit.name,
        grade: memberToEdit.grade,
        email: memberToEdit.email,
        phone: memberToEdit.phone || '',
        joinDate: memberToEdit.joinDate || ''
      });
      setEditingMember(memberId);
      setShowForm(true);
    }
  };

  // Add a new member or update existing member
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.grade || !formData.email) {
      return; // Basic validation
    }
    
    if (editingMember !== null) {
      // Update existing member
      setMembers(members.map(member => 
        member.id === editingMember 
          ? { ...member, ...formData }
          : member
      ));
    } else {
      // Add new member
      const newMember = {
        id: Math.max(0, ...members.map(m => m.id)) + 1,
        ...formData
      };
      setMembers([...members, newMember]);
    }
    
    // Reset form
    setFormData({
      name: '',
      grade: '',
      email: '',
      phone: '',
      joinDate: ''
    });
    setEditingMember(null);
    setShowForm(false);
  };

  // Delete a member
  const handleDeleteMember = (memberId: number) => {
    if (confirm('Are you sure you want to delete this member?')) {
      setMembers(members.filter(member => member.id !== memberId));
    }
  };

  // Filter members based on search term
  const filteredMembers = members.filter(member => 
    member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.grade.includes(searchTerm)
  );

  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>MRHS HOSA | Member Management</title>
        <meta name="description" content="Marvin Ridge HOSA Officer Dashboard - Member Management" />
      </Head>

      <div className="bg-blue-900 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-white text-xl font-bold">MRHS HOSA</span>
              <span className="ml-4 text-white text-sm">Member Management</span>
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
          <h1 className="text-3xl font-bold text-gray-900">Member Management</h1>
          <p className="mt-2 text-gray-600">
            Add, edit, or remove members from your HOSA chapter.
          </p>

          {/* Search and Add Controls */}
          <div className="mt-6 flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
            <div className="w-full md:w-1/3">
              <label htmlFor="search" className="block text-sm font-medium text-gray-700">Search Members</label>
              <input
                type="text"
                id="search"
                className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                placeholder="Search by name, email, or grade"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div>
              <button
                onClick={() => {
                  setFormData({
                    name: '',
                    grade: '',
                    email: '',
                    phone: '',
                    joinDate: ''
                  });
                  setEditingMember(null);
                  setShowForm(!showForm);
                }}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-800 hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                {showForm ? 'Cancel' : 'Add Member'}
              </button>
            </div>
          </div>

          {/* Add/Edit Member Form */}
          {showForm && (
            <div className="mt-6 bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6">
              <div className="md:grid md:grid-cols-3 md:gap-6">
                <div className="md:col-span-1">
                  <h3 className="text-lg font-medium leading-6 text-gray-900">
                    {editingMember !== null ? 'Edit Member' : 'Add New Member'}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Fill out the form to {editingMember !== null ? 'update' : 'add'} a member.
                  </p>
                </div>
                <div className="mt-5 md:mt-0 md:col-span-2">
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-6 gap-6">
                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                        <input
                          type="text"
                          name="name"
                          id="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          required
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="grade" className="block text-sm font-medium text-gray-700">Grade</label>
                        <select
                          id="grade"
                          name="grade"
                          value={formData.grade}
                          onChange={handleInputChange}
                          className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                          required
                        >
                          <option value="">Select grade</option>
                          <option value="9">9th Grade</option>
                          <option value="10">10th Grade</option>
                          <option value="11">11th Grade</option>
                          <option value="12">12th Grade</option>
                        </select>
                      </div>

                      <div className="col-span-6 sm:col-span-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          required
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                        <input
                          type="tel"
                          name="phone"
                          id="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="joinDate" className="block text-sm font-medium text-gray-700">Join Date</label>
                        <input
                          type="date"
                          name="joinDate"
                          id="joinDate"
                          value={formData.joinDate}
                          onChange={handleInputChange}
                          className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>
                    </div>
                    <div className="mt-5 flex justify-end">
                      <button
                        type="button"
                        className="mr-3 py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        onClick={() => {
                          setShowForm(false);
                          setEditingMember(null);
                        }}
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-800 hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                      >
                        {editingMember !== null ? 'Save Changes' : 'Add Member'}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          )}

          {/* Members Table */}
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
                          Contact Info
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Join Date
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {filteredMembers.map(member => (
                        <tr key={member.id}>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-medium text-gray-900">{member.name}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-500">{member.grade}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">{member.email}</div>
                            <div className="text-sm text-gray-500">{member.phone}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-500">{member.joinDate}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            <button
                              onClick={() => handleEditMember(member.id)}
                              className="text-blue-600 hover:text-blue-900 mr-4"
                            >
                              Edit
                            </button>
                            <button
                              onClick={() => handleDeleteMember(member.id)}
                              className="text-red-600 hover:text-red-900"
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))}
                      {filteredMembers.length === 0 && (
                        <tr>
                          <td colSpan={5} className="px-6 py-4 text-center text-sm text-gray-500">
                            No members found. Please add a new member or adjust your search criteria.
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          {/* Member Statistics */}
          <div className="mt-8 bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Member Statistics
              </h3>
              <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
                <div className="bg-gray-50 px-4 py-5 rounded-lg shadow-sm">
                  <dt className="text-sm font-medium text-gray-500 truncate">
                    Total Members
                  </dt>
                  <dd className="mt-1 text-3xl font-semibold text-blue-800">
                    {members.length}
                  </dd>
                </div>
                <div className="bg-gray-50 px-4 py-5 rounded-lg shadow-sm">
                  <dt className="text-sm font-medium text-gray-500 truncate">
                    Members by Grade
                  </dt>
                  <dd className="mt-1 text-sm text-gray-800">
                    <ul>
                      <li>9th Grade: {members.filter(m => m.grade === '9').length}</li>
                      <li>10th Grade: {members.filter(m => m.grade === '10').length}</li>
                      <li>11th Grade: {members.filter(m => m.grade === '11').length}</li>
                      <li>12th Grade: {members.filter(m => m.grade === '12').length}</li>
                    </ul>
                  </dd>
                </div>
                <div className="bg-gray-50 px-4 py-5 rounded-lg shadow-sm">
                  <dt className="text-sm font-medium text-gray-500 truncate">
                    New Members This Year
                  </dt>
                  <dd className="mt-1 text-3xl font-semibold text-blue-800">
                    {members.filter(m => {
                      const joinDate = new Date(m.joinDate || '');
                      const currentYear = new Date().getFullYear();
                      return joinDate.getFullYear() === currentYear;
                    }).length}
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

export default MemberManagement; 