const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(express.json());

// Serve static files from the Frontend directory
app.use(express.static(path.join(__dirname, '../Frontend')));

// API Route for contact form (mock)
app.post('/api/contact', (req, res) => {
    const { name, email, message } = req.body;
    console.log('New contact request:', { name, email, message });
    res.status(200).json({ message: 'Budget request sent successfully! We will contact you soon.' });
});

// The static middleware handles index.html by default for the root path


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

app.get('/', (req, res) => {
    res.send('O servidor está rodando!');
});
