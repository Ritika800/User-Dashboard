# User-Dashboard

**Project Overview**
This is a simple User Management Dashboard that allows users to be added, deleted, and displayed in a list format. The project is built using React.js for the frontend and Node.js/Express.js for the backend. Since there is no database integration, user data is managed in memory (temporary storage).

**Features**
 <ol>1.Add new users </ol>
<ol> 2.Display a list of users </ol>
 <ol>3.Delete users </ol>

**Technologies Used**
<ol> 1.Frontend: React.js, React Router, Axios </ol>
<ol> 2.Backend: Node.js, Express.js </ol>
<ol> 3.State Management: React useState, useEffect </ol>

**Setup Instructions**
<ol> 1. Clone the Repository </ol>
<ol> 2. Install Backend Dependencies </ol>
<ol> 3. Install Frontend Dependencies </ol>
<ol> 4. Start the Backend Server </ol>
<ol> 5. Start the Frontend </ol>

**API Endpoints**
<ol> User Routes </ol>
<ol> 1. GET /api/users → Get the list of users </ol>
<ol> 2. POST /api/users → Add a new user </ol>
<ol> 3. DELETE /api/users/:id → Delete a user </ol>

<br> Since no database is used, the data is stored in memory and will be lost when the server restarts. </.br>

**Frontend Components**
<ol> 1. UserList → Displays the list of users. </ol>
<ol> 2. AddUserForm → Form to add a new user. </ol>
<ol> 3. UserCard → Displays a single user’s details with a delete option. </ol>

**Difficulties Faced During Development**

***State Management Issues:***

<ol> 1. Managing the state properly in React, especially ensuring updates reflect instantly when users are added or deleted. </ol>
<br> 2. Handling asynchronous API calls and ensuring proper re-renders. </br> 

***API Integration Challenges:***

<ol> 1. Setting up Axios properly to communicate between frontend and backend. </ol>
<ol> 2. Handling CORS issues when making API requests from React to Express. </ol>

***Data Persistence Problem:***

<ol> 1. Since there’s no database, user data gets lost when the server restarts. </ol>
<ol> 2. Considered using localStorage on the frontend as a temporary solution. </ol>

   
