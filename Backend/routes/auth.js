const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { body, validationResult } = require('express-validator');
const router = express.Router();
const { MongoClient } = require('mongodb');
const uri = process.env.MONGO_URI; // Your MongoDB URI

// Create a MongoDB client
const client = new MongoClient(uri);

// Register route
router.post('/register', [
    body('name').isAlpha().withMessage('Name must contain only letters').trim().notEmpty(),
    body('surname').isAlpha().withMessage('Surname must contain only letters').trim().notEmpty(),
    body('email').isEmail().normalizeEmail(),
    body('password').matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/)
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { name, surname, email, password } = req.body;

    try {
        await client.connect();
        const db = client.db('blogs'); // Replace with your actual database name
        const collection = db.collection('APDS7311'); // The target collection

        let user = await collection.findOne({ email });
        if (user) return res.status(400).json({ msg: 'User already exists' });

        // Hash the password before saving
        const hashedPassword = await bcrypt.hash(password, 10);

        user = {
            name,
            surname,
            email,
            password: hashedPassword,
        };
        
        const result = await collection.insertOne(user); // Insert user into the collection

        const payload = { user: { id: result.insertedId } }; // Use the insertedId for JWT
        jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' }, (err, token) => {
            if (err) throw err;
            res.json({ token });
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    } finally {
        await client.close(); // Close the connection after the operation
    }
});

// Login route
router.post('/login', [
    body('email').isEmail(),
    body('password').exists()
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
        await client.connect();
        const db = client.db('your_database_name'); // Replace with your actual database name
        const collection = db.collection('APDS7311'); // The target collection

        const user = await collection.findOne({ email });
        if (!user) return res.status(400).json({ msg: 'Invalid credentials' });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ msg: 'Invalid credentials' });

        const payload = { user: { id: user._id } }; // Use user._id for JWT
        jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' }, (err, token) => {
            if (err) throw err;
            res.json({ token });
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    } finally {
        await client.close(); // Close the connection after the operation
    }
});

module.exports = router;
