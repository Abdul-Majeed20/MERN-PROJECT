import { useState } from "react";

export default function Users() {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Abdul Majeed",
      email: "majeed@example.com",
      role: "Admin",
      status: "Active",
      joined: "2025-06-10",
    },
    {
      id: 2,
      name: "Sarah Ali",
      email: "sarah@example.com",
      role: "Customer",
      status: "Inactive",
      joined: "2025-05-22",
    },
    {
      id: 3,
      name: "John Smith",
      email: "john@example.com",
      role: "Customer",
      status: "Active",
      joined: "2025-07-01",
    },
  ]);

  const deleteUser = (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this user?");
    if (confirmDelete) {
      setUsers(users.filter(user => user.id !== id));
    }
  };

  const getStatusBadge = (status) => {
    return status === "Active"
      ? "bg-green-100 text-green-700"
      : "bg-red-100 text-red-600";
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Users</h2>

      {/* Desktop Table (hidden on mobile) */}
      <div className="hidden md:block overflow-x-auto">
        <table className="min-w-full bg-white shadow rounded-lg">
          <thead>
            <tr className="bg-gray-100 text-gray-700">
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Email</th>
              <th className="p-3 text-left">Role</th>
              <th className="p-3 text-left">Status</th>
              <th className="p-3 text-left">Joined</th>
              <th className="p-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id} className="border-t hover:bg-gray-50">
                <td className="p-3">{user.name}</td>
                <td className="p-3">{user.email}</td>
                <td className="p-3">{user.role}</td>
                <td className="p-3">
                  <span className={`text-sm px-2 py-1 rounded-full ${getStatusBadge(user.status)}`}>
                    {user.status}
                  </span>
                </td>
                <td className="p-3">{user.joined}</td>
                <td className="p-3 space-x-2">
                  <button
                    className="px-3 py-1 bg-yellow-500 hover:bg-yellow-600 text-white rounded"
                    onClick={() => alert(`Edit user: ${user.name}`)}
                  >
                    Edit
                  </button>
                  <button
                    className="px-3 py-1 bg-red-500 hover:bg-red-600 text-white rounded"
                    onClick={() => deleteUser(user.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {users.length === 0 && (
              <tr>
                <td colSpan="6" className="text-center py-6 text-gray-400">No users found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards (shown on mobile) */}
      <div className="md:hidden space-y-4">
        {users.length === 0 ? (
          <div className="text-center py-6 text-gray-400">No users found.</div>
        ) : (
          users.map(user => (
            <div key={user.id} className="bg-white p-4 rounded-lg shadow">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium text-lg">{user.name}</h3>
                  <p className="text-gray-600 text-sm">{user.email}</p>
                </div>
                <span className={`text-xs px-2 py-1 rounded-full ${getStatusBadge(user.status)}`}>
                  {user.status}
                </span>
              </div>
              
              <div className="mt-3 grid grid-cols-2 gap-2 text-sm">
                <div>
                  <p className="text-gray-500">Role</p>
                  <p>{user.role}</p>
                </div>
                <div>
                  <p className="text-gray-500">Joined</p>
                  <p>{user.joined}</p>
                </div>
              </div>
              
              <div className="mt-4 flex space-x-2">
                <button
                  className="flex-1 py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded"
                  onClick={() => alert(`Edit user: ${user.name}`)}
                >
                  Edit
                </button>
                <button
                  className="flex-1 py-2 bg-red-500 hover:bg-red-600 text-white rounded"
                  onClick={() => deleteUser(user.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}