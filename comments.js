const express = require('express');
const path = require('path');
const app = express();

// Check that all required environment variables are set
const requiredEnvVars = ['PORT'];
requiredEnvVars.forEach((envVar) => {
    if (!process.env[envVar]) {
        console.error(`Error: Missing required environment variable ${envVar}`);
        process.exit(1);
    }
});

const port = process.env.PORT || 3000;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Route to serve the HTML content for the root URL
app.get('/', (req, res) => {
    res.send(`
        <html>
            <head>
                <title>Home</title>
            </head>
            <body>
                <h1>Welcome to the Home Page</h1>
                <p>This is the root URL.</p>
            </body>
        </html>
    `);
});

// Route to serve the HTML content for /skills
app.get('/skills', (req, res) => {
    res.send(`
        <html>
            <head>
                <title>Skills Member</title>
            </head>
            <body>
                <h1>Skills Member</h1>
                <p>Here are the skills of the member.</p>
            </body>
        </html>
    `);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});