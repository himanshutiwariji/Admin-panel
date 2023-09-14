import React from 'react';

const Users = () => {
  // Simulate user data
  const users = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
    { id: 3, name: 'Bob Johnson' },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">User List</h1>
      <div className="bg-white rounded p-4 shadow-md">
        <ul>
          {users.map((user) => (
            <li key={user.id} className="mb-2">
              {user.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Users;