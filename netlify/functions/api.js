const express = require('express');
const serverless = require('serverless-http');
const mongoose = require('mongoose');
const User = require('../../models/User');
const jwt = require('jsonwebtoken')

const api = express();
const router = express.Router();
api.use(express.json())

const uri = 'mongodb+srv://nishantcs21:1234@cluster0.wzsovnv.mongodb.net/fnaxiom?retryWrites=true&w=majority&appName=Cluster0';
const secret = '1234';

// MongoDB
mongoose.connect(uri)
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('MongoDB connection error:', err));



// Signup endpoint
router.post('/signup', async (req, res) => {
  const { username, email, password } = req.body;
  console.log(req.body);
  if (!username || !email || !password) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    const newUser = new User({ username, email, password });
    await newUser.save();
    res.status(201).json({ message: 'User signed up successfully' });
  } catch (error) {
    console.error('Signup error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Login endpoint
router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ error: 'Username and password are required' });
  }

  try {
    const user = await User.findOne({ username, password });
    if (user) {
      const token = jwt.sign(
        { userId: user._id, username: user.username },
        secret,
        { expiresIn: '1h' }
      );
      res.status(200).json({ message: 'Login successful', token, username: user.username });
    } else {
      res.status(401).json({ error: 'Invalid credentials' });
    }
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

api.use("/api/", router);

module.exports.handler = serverless(api);

