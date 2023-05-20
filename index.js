const express = require('express');
const mysql = require('mysql2/promise');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;
const domain = 'invicious.in'; 

const dbConfig = {
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'invicious'
};

app.use(bodyParser.json());

app.post('/register', async (req, res) => {
  try {
    const connection = await mysql.createConnection(dbConfig);

    const { Name, 'Type of organization': organisation_type, email, 'phone number': phoneNumber } = req.body;

    const [rows, fields] = await connection.execute(
      'INSERT INTO `registration form` (Name, `Type of organization`, email, `phone number`) VALUES (?, ?, ?, ?)',
      [Name, organisation_type, email, phoneNumber]
    );

    await connection.end();

    res.status(201).send({
      message: 'Registration successful'
    });
  } catch (error) {
    console.error(error);
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
      case 'ER_LOCK_WAIT_TIMEOUT':
        errorMessage = 'Lock wait timeout exceeded';
        break;
      case 'ER_WRONG_VALUE_COUNT':
        errorMessage = 'Incorrect number of values in the query';
        break;
      case 'ER_BAD_NULL_ERROR':
        errorMessage = 'Column cannot be null';
        break;
      case 'ER_WRONG_TABLE_NAME':
        errorMessage = 'Incorrect table name';
        break;
      case 'ER_SERVER_SHUTDOWN':
        errorMessage = 'Server shutdown in progress';
        break;
      case 'ER_UNKNOWN_ERROR':
        errorMessage = 'Unknown error occurred';
        break;
      case 'ER_DBACCESS_DENIED_ERROR':
        errorMessage = 'Access denied for database';
        break;
      case 'ER_TABLEACCESS_DENIED_ERROR':
        errorMessage = 'Access denied for table';
        break;
      case 'ER_OUT_OF_RANGE':
        errorMessage = 'Value out of range for column';
        break;
      case 'ER_FOREIGN_KEY_CONSTRAINT':
        errorMessage = 'Foreign key constraint violation';
        break;
      case 'ER_SIGNAL_EXCEPTION':
        errorMessage = 'Exception during signal handling';
        break;
      case 'ER_SP_DOES_NOT_EXIST':
        errorMessage = 'Stored procedure does not exist';
        break;
      case 'ER_SP_ALREADY_EXISTS':
        errorMessage = 'Stored procedure already exists';
        break;
      case 'ER_SP_LOAD_FAILED':
        errorMessage = 'Error during loading of stored procedure';
        break;
      case 'ER_SP_NO_RETSET':
        errorMessage = 'Not allowed to return a result set from a stored procedure';
        break;
      case 'ER_SP_FETCH_NO_DATA':
        errorMessage = 'No data fetched from a stored procedure';
        break;
      default:
        errorMessage = 'An error occurred';
        break;
    }

    res.status(500).send({
      message: errorMessage
    });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://${domain}:${port}`);
});

