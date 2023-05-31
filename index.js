const express = require('express');
const mysql = require('mysql2/promise');
const bodyParser = require('body-parser');
const { check, validationResult } = require('express-validator');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;
const domain = 'invicious.in';

const dbConfig = {
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'invicious',
};

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Custom validation middleware for email and phone number
const validateInput = [
  check('name').notEmpty().withMessage('Name is required'),
  check('organisationType').notEmpty().withMessage('Type of organization is required'),
  check('email').isEmail().withMessage('Invalid email address'),
  check('phoneNumber').isMobilePhone().withMessage('Invalid phone number'),
];

// Endpoint for handling form submission at '/'
app.post('/', validateInput, async (req, res) => {
  try {
    // Validate input
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const connection = await mysql.createConnection(dbConfig);

    const { name, organisationType, email, phoneNumber } = req.body;

    const query =
      'INSERT INTO `registration_form` (`name`, `organisationType`, `email`, `phoneNumber`) VALUES (?, ?, ?, ?)';
    const [result] = await connection.execute(query, [name, organisationType, email, phoneNumber]);

    connection.end();

    res.status(201).json({
      message: 'Registration successful',
    });
  } catch (error) {
    console.error('An error occurred:', error);
    let errorMessage = 'Registration failed';

    // Check for specific error conditions
    switch (error.code) {
      case 'ER_DUP_ENTRY':
        errorMessage = 'Email or phone number already exists';
        break;
      case 'ER_PARSE_ERROR':
        errorMessage = 'Invalid query syntax';
        break;
      case 'ER_NO_REFERENCED_ROW':
        errorMessage = 'Invalid foreign key reference';
        break;
      case 'ER_DATA_TOO_LONG':
        errorMessage = 'Data too long for a column';
        break;
      case 'ER_NO_DEFAULT_FOR_FIELD':
        errorMessage = 'Missing default value for a field';
        break;
      case 'ER_ACCESS_DENIED_ERROR':
        errorMessage = 'Access denied for user';
        break;
      case 'ER_TABLE_EXISTS_ERROR':
        errorMessage = 'Table already exists';
        break;
      case 'ER_BAD_FIELD_ERROR':
        errorMessage = 'Unknown column in the query';
        break;
      case 'ER_NO_SUCH_TABLE':
        errorMessage = 'Table does not exist';
        break;
      default:
        errorMessage = 'An error occurred';
        break;
    }

    res.status(500).json({
      message: errorMessage,
    });
  }
});

// Endpoint for handling form submission at '/tributorE' path
app.post('/tributorE', validateInput, async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const connection = await mysql.createConnection(dbConfig);

    const { name, organisationType, email, phoneNumber } = req.body;

    const query =
      'INSERT INTO `registration_form` (`name`, `organisationType`, `email`, `phoneNumber`) VALUES (?, ?, ?, ?)';
    const [result] = await connection.execute(query, [name, organisationType, email, phoneNumber]);

    connection.end();

    res.status(201).json({
      message: 'Form submission successful',
    });
  } catch (error) {
    console.error('An error occurred:', error);
    let errorMessage = 'Form submission failed';

    switch (error.code) {
      // Handle specific error cases
      default:
        errorMessage = 'An error occurred';
        break;
    }

    res.status(500).json({
      message: errorMessage,
    });
  }
});

// Endpoint for handling form submission at '/tributorCM' path
app.post('/tributorCM', validateInput, async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const connection = await mysql.createConnection(dbConfig);

    const { name, organisationType, email, phoneNumber } = req.body;

    const query =
      'INSERT INTO `registration_form` (`name`, `organisationType`, `email`, `phoneNumber`) VALUES (?, ?, ?, ?)';
    const [result] = await connection.execute(query, [name, organisationType, email, phoneNumber]);

    connection.end();

    res.status(201).json({
      message: 'Registration successful',
    });
  } catch (error) {
    console.error('An error occurred:', error);
    let errorMessage = 'Registration failed';

    switch (error.code) {
      // Handle specific error cases
      default:
        errorMessage = 'An error occurred';
        break;
    }

    res.status(500).json({
      message: errorMessage,
    });
  }
});
app.get('/', (req, res) => {
  res.redirect('/Main');
});

app.get('*', (req, res) => {
  res.status(404).send('Not Found');
});

app.listen(port, () => {
  console.log(`Server running on http://${domain}:${port}`);
});
