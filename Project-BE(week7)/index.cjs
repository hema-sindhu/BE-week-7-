const express = require('express');
const cors = require('cors');
const path = require('path'); // Ensure you have this for serving the React app
const app = express();
const connection = require('./src/config/DBconnection.cjs');
const admin = require('./src/routes/adminRoutes.cjs');

// Enable CORS for all routes
app.use(cors());

// Database Connection
connection();

// Middleware to parse JSON requests
app.use(express.json());

// Home route
app.get('/', (req, res) => {
    console.log("HOME");
    res.send("Hello world !");
});

// Admin routes
app.use('/auth', admin);

// Environment variable for database connection
console.log(process.env.DBCONNECT);

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// Handle React routing, return all requests to the React app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

// Start the server
app.listen(3000, () => {
    console.log("Server is running on port 3000...");
});
