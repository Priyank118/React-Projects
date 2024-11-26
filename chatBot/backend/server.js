const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { pool } = require('./db');
require('dotenv').config();  // Load the .env file

const app = express();
app.use(express.json());

// SignUp Endpoint
app.post('/signup', async (req, res) => {
    const { email, password } = req.body;

    try {
        // Check if the email already exists
        pool.query('SELECT * FROM users WHERE email = ?', [email], async (err, results) => {
            if (err) {
                return res.status(500).send('Database query failed');
            }
            if (results.length > 0) {
                return res.status(400).send('Email already exists');
            }

            // Hash the password
            const hashedPassword = await bcrypt.hash(password, 10);

            // Insert the user into the database
            pool.query('INSERT INTO users (email, password) VALUES (?, ?)', [email, hashedPassword], (err, results) => {
                if (err) {
                    return res.status(500).send('Failed to register user');
                }
                res.status(201).send('User registered successfully');
            });
        });
    } catch (error) {
        res.status(500).send('Server error');
    }
});

// Login Endpoint
app.post('/login', (req, res) => {
    const { email, password } = req.body;

    pool.query('SELECT * FROM users WHERE email = ?', [email], async (err, results) => {
        if (err) {
            return res.status(500).send('Database query failed');
        }

        if (results.length === 0) {
            return res.status(400).send('Email not found');
        }

        const user = results[0];

        // Compare the entered password with the hashed password in the database
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).send('Invalid credentials');
        }

        // Generate a JWT token using the secret from .env file
        const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.json({ token });
    });
});

// Start the server
app.listen(5000, () => {
    console.log('Server running on port 5000');
});
