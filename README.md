# User-Dashboard

**Project Overview**
This is a simple User Management Dashboard that allows users to be added, deleted, and displayed in a list format. The project is built using React.js for the frontend and Node.js/Express.js for the backend. Since there is no database integration, user data is managed in memory (temporary storage).

**Features**
 <ol> Add new users  </ol>
<ol> Display a list of users </ol>
 <ol> Delete users </ol>

**Technologies Used**
<br> 1.Frontend: React.js, React Router, Axios </br>
<br> 2.Backend: Node.js, Express.js </br>
<br> 3.State Management: React useState, useEffect </br>

**Setup Instructions**
<br> 1. Clone the Repository </br>
<br> 2. Install Backend Dependencies </br>
<br> 3. Install Frontend Dependencies </br>
<br> 4. Start the Backend Server </br>
<br> 5. Start the Frontend </br>

**API Endpoints**
<br> User Routes </br>
<br> 1. GET /api/users → Get the list of users </br>
<br> 2. POST /api/users → Add a new user </br>
<br> 3. DELETE /api/users/:id → Delete a user </br>

<br> Since no database is used, the data is stored in memory and will be lost when the server restarts. </.br>

**Frontend Components**
<br> 1. UserList → Displays the list of users. </br>
<br> 2. AddUserForm → Form to add a new user. </br>
<br> 3. UserCard → Displays a single user’s details with a delete option. </br>

**Difficulties Faced During Development**
***State Management Issues:***

<br> 1. Managing the state properly in React, especially ensuring updates reflect instantly when users are added or deleted. </br>
<br> 2. Handling asynchronous API calls and ensuring proper re-renders. </br> 

***API Integration Challenges:***

<br> 1. Setting up Axios properly to communicate between frontend and backend. </br>
<br> 2. Handling CORS issues when making API requests from React to Express. </br>

***Data Persistence Problem:***

<br> 1. Since there’s no database, user data gets lost when the server restarts. </br>
<br> 2. Considered using localStorage on the frontend as a temporary solution. </br>

   
