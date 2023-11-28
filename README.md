# Alemeno 
Fullstack Developer Hiring Assignment
Welcome to the Fullstack Developer Hiring Assignment repository! This project is a web application that manages and showcases a list of courses and their details. The application is divided into two main folders: client and server.

Getting Started

Prerequisites
Make sure you have the following installed:
Node.js
MongoDB


Installation and Setup
Clone the repository using the following command:

git clone https://github.com/1806loki/Alemeno.git


Frontend

Navigate to the client folder:
cd client

Install dependencies:
npm install


Start the frontend server:
npm run dev
The frontend will be running at http://localhost:5173.

Backend
Open a new terminal window.

Navigate to the server folder:
cd server


Install dependencies:
npm install

Start the backend server using nodemon:
nodemon index.js

The server will be running at http://localhost:3000, and the MongoDB database will be accessible at mongodb://localhost:27017.

API Endpoints
Authentication:
Login: POST http://localhost:3000/auth/login
Register: POST http://localhost:3000/auth/register
Course Operations:
Get Courses List: GET http://localhost:3000/api/courses
Get Course Details: GET http://localhost:3000/api/courses/:courseID
Enrollment Actions:
Enroll in a Course: POST http://localhost:3000/api/enrollment
Get Enrolled Courses: GET http://localhost:3000/api/enrollment/:user


Usage
Access the provided authentication endpoints to log in or register new users.
Use the course-related endpoints to retrieve the list of available courses and their details.
Enroll in courses using the enrollment endpoint, and check enrolled courses using the corresponding endpoint.



![Screenshot 2023-11-28 231454](https://github.com/1806loki/Alemeno/assets/127595726/27f8d5bb-b3a0-4af7-b17e-394071b67a68)
![Screenshot 2023-11-28 231508](https://github.com/1806loki/Alemeno/assets/127595726/1695dcaa-68c1-4d76-a7f3-9d2973f3f635)
![Screenshot 2023-11-28 231524](https://github.com/1806loki/Alemeno/assets/127595726/2068f076-19e0-4f81-a3ec-524bb699c2e2)
![Screenshot 2023-11-28 231546](https://github.com/1806loki/Alemeno/assets/127595726/8683fbba-6778-48ec-8c22-61b202300a94)
