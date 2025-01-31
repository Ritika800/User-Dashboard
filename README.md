# User-Dashboard

**Project Overview**
This is a simple User Management Dashboard that allows users to be added, deleted, and displayed in a list format. The project is built using React.js for the frontend and Node.js/Express.js for the backend. Since there is no database integration, user data is managed in memory (temporary storage).

**Features**
 <br>  Add new users </br>
<br> Display a list of users </br>
 <br> Delete users </br>

**Technologies Used**
<br> Frontend: React.js, React Router, Axios </br>
<br> Backend: Node.js, Express.js </br>
<br> State Management: React useState, useEffect </br>

**Setup Instructions**
<br> 1. Clone the Repository </br>
<br> 2. Install Backend Dependencies </br>
<br> 3. Install Frontend Dependencies </br>
<br> 4. Start the Backend Server </br>
<br> 5. Start the Frontend </br>

**API Endpoints**
<br> User Routes </br>
<br> GET /api/users → Get the list of users </br>
<br> POST /api/users → Add a new user </br>
<br> DELETE /api/users/:id → Delete a user </br>

**Since no database is used, the data is stored in memory and will be lost when the server restarts.**

**Frontend Components**
<br> UserList → Displays the list of users. </br>
<br> AddUserForm → Form to add a new user. </br>
<br> UserCard → Displays a single user’s details with a delete option. </br>

**Difficulties Faced During Development**
*State Management Issues:*

<br> Managing the state properly in React, especially ensuring updates reflect instantly when users are added or deleted. </br>
<br> Handling asynchronous API calls and ensuring proper re-renders. </br> 

*API Integration Challenges:*

<br> Setting up Axios properly to communicate between frontend and backend. </br>
<br> Handling CORS issues when making API requests from React to Express. </br>

*Data Persistence Problem:*

<br> Since there’s no database, user data gets lost when the server restarts. </br>
<br> Considered using localStorage on the frontend as a temporary solution. </br>

   
