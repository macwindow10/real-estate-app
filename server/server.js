const express = require('express');
const app = express();
const port = 3002;

// Define a route for the root URL (/)
app.get('/', (req, res) => {
    res.send('root');
});

app.get('/ping', (req, res) => {
    res.send('ping');
});

// Start the server and listen on the specified port
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});