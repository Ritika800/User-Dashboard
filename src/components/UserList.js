import React from "react";

const UserList = ({ users, onDeleteUser }) => {
  return (
    <div className="mt-4">
      <h3>Users</h3>
      <ul className="list-group">
        {users.map(user => (
          <li key={user.id} className="list-group-item d-flex justify-content-between">
            <span>{user.name} ({user.email})</span>
            <button className="btn btn-danger" onClick={() => onDeleteUser(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;