import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'

const API_BASE = import.meta.env.VITE_API_BASE;

const ApiCallsPage = () => {
  const queryClient = useQueryClient();

  const { data: users = [], isLoading } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const response = await axios.get(`${API_BASE}/api/users`);
      return response.data.users;      
    },
    staleTime: 1000 * 60 * 5,  // Keep fresh for 5 minutes
    gcTime: 1000 * 60 * 10     // Keep in memory for 10 minutes
  })

  const [formData, setFormData] = useState({ name: '', email: ''});
  const [error, setError] = useState('');

  const createUserMutation = useMutation({
    mutationFn: async (userData) => {
      const response = await axios.post(`${API_BASE}/api/users`, userData);
      return response.data;
    },
    onSuccess: () => {
      setFormData({ name: '', email: '' });
      queryClient.invalidateQueries({ queryKey: ['users'] });
    },
    onError: (error) => {
      setError(error.response?.data?.error || 'Error creating user');
    }
  })

  const deleteUserMutation = useMutation({
    mutationFn: async (id) => {
      await axios.delete(`${API_BASE}/api/users/${id}`);
    },

    onSuccess: () => {
      setError('');
      queryClient.invalidateQueries({ queryKey: ['users'] });
    },

    onError: (error) => {
      setError(error.response?.data?.error || 'Failed to delete user');
    }
  })

  const updateUserMutation = useMutation({
    mutationFn: async ({ id, name, email }) => {
      await axios.put(`${API_BASE}/api/users/${id}`, { name, email });
    },

    onSuccess: () => {
      setError('');
      queryClient.invalidateQueries({ queryKey: ['users'] });
    },

    onError: (error) => {
      setError(error.response?.data?.error || 'Failed to update user');
    }
  })

  const createUser = () => {
    if(!formData.name || !formData.email) {
      setError('Please fill in all fields');
      return;
    }

    createUserMutation.mutate(formData);
  }

  const deleteUser = (id) => {
    deleteUserMutation.mutate(id);
  }

  const updateUser = (id, name, email) => {
    if (!name || !email) {
      setError('Please fill in all fields')
      return
    }
    updateUserMutation.mutate({ id, name, email });
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
            disabled={createUserMutation.isPending}
            className="px-6 py-2 bg-green-600 text-white rounded-lg font-bold hover:bg-green-700 disabled:opacity-50"
          >
            {createUserMutation.isPending ? 'Creating...' : 'Create User'}
          </button>
        </div>
      </div>

      <button
        onClick={() => queryClient.refetchQueries({ queryKey: ['users']})}
        disabled={isLoading}
        className="px-6 py-3 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 disabled:opacity-50"
      >
        {isLoading ? 'Loading...' : 'Fetch Users'}
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
                      disabled={updateUserMutation.isPending}
                      className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
                    >
                      {updateUserMutation.isPending ? 'Updating...' : 'Edit'}
                    </button>
                    <button
                      onClick={() => deleteUser(user.id)}
                      disabled={deleteUserMutation.isPending}
                      className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 disabled:opacity-50"
                    >
                      {deleteUserMutation.isPending ? 'Deleting...' : 'Delete'}
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