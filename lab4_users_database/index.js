const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const User = require('./models/User');
const dotenv = require('dotenv');

dotenv.config();
const app = express();
const port = 8081;

app.use(bodyParser.json());

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.log('Failed to connect to MongoDB', err));

app.post('/users', async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();

        res.status(201).json({ message: 'User created successfully', user });
    } catch (error) {
        if (error.name === 'ValidationError') {
            return res.status(400).json({ message: 'Validation failed', errors: error.errors });
        }
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
