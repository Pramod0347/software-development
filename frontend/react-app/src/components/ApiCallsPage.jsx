import React from 'react'
import { useState } from 'react'
import axios from 'axios'

const API_BASE = import.meta.env.VITE_API_BASE;



const ApiCallsPage = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: ''});
  const [error, setError] = useState('');

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${API_BASE}/api/users`);
      setUsers(response.data.users);
    } catch (error) {
      console.error('Error fetching users:', error);
    } finally {
      setLoading(false);
    }
  };

  const createUser = async () => {
    if(!formData.name || !formData.email) {
      setError('Please fill in all fields');
      return;
    }

    try {
      await axios.post(`${API_BASE}/api/users`, formData);
      setError('');
      setFormData({name: '', email: ''});
      fetchUsers();
    } catch (error) {
      setError(error.response?.data?.error || 'Error creating user:');
    }
  }

  const deleteUser = async (id) => {
    try {
      await axios.delete(`${API_BASE}/api/users/${id}`)
      setError('')
      fetchUsers()
    } catch (error) {
      setError(error.response?.data?.error || 'Failed to delete user')
    }
  }

  const updateUser = async (id, name, email) => {
    if (!name || !email) {
      setError('Please fill in all fields')
      return
    }
    try {
      await axios.put(`${API_BASE}/api/users/${id}`, { name, email })
      setError('')
      fetchUsers()
    } catch (error) {
      setError(error.response?.data?.error || 'Failed to update user')
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-4xl font-bold mb-6">API Calls - Days 1-2</h1>

      {error && (
        <div className="mb-6 bg-red-50 border-l-4 border-red-500 p-4 rounded">
          <p className="text-red-800 font-semibold">{error}</p>
        </div>
      )}

      <div className="mb-8 bg-white p-6 rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-4">Create New User</h2>
        <div className="flex gap-4">
          <input
            type="text"
            placeholder="Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg"
          />
          <input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg"
          />
          <button
            onClick={createUser}
            className="px-6 py-2 bg-green-600 text-white rounded-lg font-bold hover:bg-green-700"
          >
            Create User
          </button>
        </div>
      </div>

      <button
        onClick={fetchUsers}
        disabled={loading}
        className="px-6 py-3 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 disabled:opacity-50"
      >
        {loading ? 'Loading...' : 'Fetch Users'}
      </button>

      {users.length > 0 && (
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Users ({users.length})</h2>
          <table className="w-full border-collapse bg-white rounded-lg shadow">
            <thead className="bg-gray-200">
              <tr>
                <th className="border p-3 text-left">ID</th>
                <th className="border p-3 text-left">Name</th>
                <th className="border p-3 text-left">Email</th>
                <th className="border p-3 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50">
                  <td className="border p-3">{user.id}</td>
                  <td className="border p-3">{user.name}</td>
                  <td className="border p-3">{user.email}</td>
                  <td className="border p-3 flex gap-2">
                    <button
                      onClick={() => {
                        const name = prompt('Enter new name:', user.name)
                        const email = prompt('Enter new email:', user.email)
                        if (name && email) updateUser(user.id, name, email)
                      }}
                      className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => deleteUser(user.id)}
                      className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}

export default ApiCallsPage