import React from "react";

function UserCard({ user, onDelete }) {
  return (
    <div className="card col-md-3 m-2 p-2">
      <h5>{user.name}</h5>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <button className="btn btn-danger btn-sm" onClick={() => onDelete(user.id)}>Delete</button>
    </div>
  );
}

export default UserCard;