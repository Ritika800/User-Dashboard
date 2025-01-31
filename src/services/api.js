import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com/users";

// Fetch all users
export const fetchUsers = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data; // Returns an array of users
  } catch (error) {
    console.error("Error fetching users:", error);
    return [];
  }
};

// Add a new user (Mock API won't actually add it)
export const addUser = async (user) => {
  try {
    const response = await axios.post(API_URL, user);
    return { ...user, id: response.data.id || Math.floor(Math.random() * 1000) }; // Mock ID
  } catch (error) {
    console.error("Error adding user:", error);
    return null;
  }
};

// Delete a user (Mock API doesn't actually delete it)
export const deleteUser = async (id) => {
  try {
    await axios.delete(`${API_URL}/${id}`); // 
    return id; // Return the ID to remove it from UI manually
  } catch (error) {
    console.error("Error deleting user:", error);
    return null;
  }
};
