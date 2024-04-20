const express = require('express');
const bodyParser = require('body-parser');
const dmRoutes = require('./routes/dmRoutes');
const errorHandler = require('./utils/errorHandler');

const app = express();

// Middleware to parse request bodies as JSON
app.use(bodyParser.json());

// Define routes
app.use('/dm', dmRoutes);

// Error handling middleware
app.use(errorHandler.handleInternalError);
app.use(errorHandler.handleValidationError);
app.use(errorHandler.handleAuthenticationError);

// Enable CORS for specific routes (e.g., for /dm endpoints)
app.use('/dm', (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'chrome-extension://eibpkafikdjdljminmglgoicihgibkae ');
    res.setHeader('Access-Control-Allow-Methods', 'POST');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});






// In this example, the code initializes an Express.js server by creating an instance of the Express application using `express()`. The application object is assigned to the `app` variable.

// Middleware functions are configured using `app.use()` to handle various aspects of incoming requests and responses. The `express.json()` middleware is used to parse JSON bodies, and `express.urlencoded()` is used to parse URL-encoded bodies.

// Routes are defined using `app.use()` and the `dmRoutes` module, which contains the route handlers for the "/dm" URL path. You can modify the URL path and import additional route modules as needed.

// Error handling middleware functions are defined using `app.use()` and the `errorHandler` module. These functions handle different types of errors and send appropriate error responses to the client.

// The server is started using `app.listen()` and the specified port number. The `process.env.PORT` variable is used to allow the server to listen on the port specified in the environment variable, or fallback to port 3000 if the environment variable is not set.

// Remember to test the Express.js server to ensure that it starts successfully and handles incoming requests as expected. Also, provide comments and documentation within the file to explain the purpose and configuration of each section of code.
