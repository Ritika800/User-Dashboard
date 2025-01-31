import React from "react";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div className="container mt-4">
      <div className="container-fluid bg-light min-vh-100 p-4">
      <h1 className="text-center">User Management Dashboard</h1>
      <Dashboard />
      </div>
    </div>
  );
}

export default App;
