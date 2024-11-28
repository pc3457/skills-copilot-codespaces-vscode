const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Route to serve the HTML content
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