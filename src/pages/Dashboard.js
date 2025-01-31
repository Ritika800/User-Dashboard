import React, { useState, useEffect } from "react";
import { fetchUsers, addUser, deleteUser } from "../services/api";
import UserList from "../components/UserList";
import UserForm from "../components/UserForm";

const Dashboard = () => {
  const [users, setUsers] = useState([]); // Store users in state

  // Fetch users when component mounts
  useEffect(() => {
    fetchUsers()
      .then(data => {
        console.log("Fetched Users:", data); // Debugging output
        setUsers(data);
      })
      .catch(error => console.error("Error fetching users:", error));
  }, []);

  // Handle adding a user
  const handleAddUser = async (user) => {
    const newUser = await addUser(user);
    if (newUser) {
      setUsers([...users, newUser]); // Update state with new user
    }
  };

  // Handle deleting a user
  const handleDeleteUser = async (id) => {
    const deletedId = await deleteUser(id);
    if (deletedId) {
      setUsers(users.filter(user => user.id !== deletedId)); // Remove from state
    }
  };

  return (
    <div className="container">
      <h2>User Management Dashboard</h2>
      <UserForm onAddUser={handleAddUser} />
      <UserList users={users} onDeleteUser={handleDeleteUser} />
    </div>
  );
};

export default Dashboard;