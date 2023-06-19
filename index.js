// const express = require('express');
// const mysql = require('mysql2/promise');
// const bodyParser = require('body-parser');
// const { check, validationResult } = require('express-validator');
// const cors = require('cors');

// const app = express();
// const port = process.env.PORT || 5000;
// const domain = 'invicious.in';

// const dbConfig = {
//   host: 'localhost',
//   user: 'root',
//   password: '',
//   database: 'invicious',
// };

// // Middleware
// app.use(bodyParser.json());
// app.use(cors());

// // Custom validation middleware for email and phone number
// const validateInput = [
//   check('name').notEmpty().withMessage('Name is required'),
//   check('organisationType').notEmpty().withMessage('Type of organization is required'),
//   check('email').isEmail().withMessage('Invalid email address'),
//   check('phoneNumber').isMobilePhone().withMessage('Invalid phone number'),
// ];

// // Endpoint for handling form submission at '/'
// app.post('/', validateInput, async (req, res) => {
//   try {
//     // Validate input
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       return res.status(400).json({ errors: errors.array() });
//     }

//     const connection = await mysql.createConnection(dbConfig);

//     const { name, organisationType, email, phoneNumber } = req.body;

//     const query =
//       'INSERT INTO `registration_form` (`name`, `organisationType`, `email`, `phoneNumber`) VALUES (?, ?, ?, ?)';
//     const [result] = await connection.execute(query, [name, organisationType, email, phoneNumber]);

//     connection.end();

//     res.status(201).json({
//       message: 'Registration successful',
//     });
//   } catch (error) {
//     console.error('An error occurred:', error);
//     let errorMessage = 'Registration failed';

//     // Check for specific error conditions
//     switch (error.code) {
//       case 'ER_DUP_ENTRY':
//         errorMessage = 'Email or phone number already exists';
//         break;
//       case 'ER_PARSE_ERROR':
//         errorMessage = 'Invalid query syntax';
//         break;
//       case 'ER_NO_REFERENCED_ROW':
//         errorMessage = 'Invalid foreign key reference';
//         break;
//       case 'ER_DATA_TOO_LONG':
//         errorMessage = 'Data too long for a column';
//         break;
//       case 'ER_NO_DEFAULT_FOR_FIELD':
//         errorMessage = 'Missing default value for a field';
//         break;
//       case 'ER_ACCESS_DENIED_ERROR':
//         errorMessage = 'Access denied for user';
//         break;
//       case 'ER_TABLE_EXISTS_ERROR':
//         errorMessage = 'Table already exists';
//         break;
//       case 'ER_BAD_FIELD_ERROR':
//         errorMessage = 'Unknown column in the query';
//         break;
//       case 'ER_NO_SUCH_TABLE':
//         errorMessage = 'Table does not exist';
//         break;
//       default:
//         errorMessage = 'An error occurred';
//         break;
//     }

//     res.status(500).json({
//       message: errorMessage,
//     });
//   }
// });

// // Endpoint for handling form submission at '/tributorE' path
// app.post('/tributorE', validateInput, async (req, res) => {
//   try {
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       return res.status(400).json({ errors: errors.array() });
//     }

//     const connection = await mysql.createConnection(dbConfig);

//     const { name, organisationType, email, phoneNumber } = req.body;

//     const query =
//       'INSERT INTO `registration_form` (`name`, `organisationType`, `email`, `phoneNumber`) VALUES (?, ?, ?, ?)';
//     const [result] = await connection.execute(query, [name, organisationType, email, phoneNumber]);

//     connection.end();

//     res.status(201).json({
//       message: 'Form submission successful',
//     });
//   } catch (error) {
//     console.error('An error occurred:', error);
//     let errorMessage = 'Form submission failed';

//     switch (error.code) {
//       // Handle specific error cases
//       default:
//         errorMessage = 'An error occurred';
//         break;
//     }

//     res.status(500).json({
//       message: errorMessage,
//     });
//   }
// });

// // Endpoint for handling form submission at '/tributorCM' path
// app.post('/tributorCM', validateInput, async (req, res) => {
//   try {
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       return res.status(400).json({ errors: errors.array() });
//     }

//     const connection = await mysql.createConnection(dbConfig);

//     const { name, organisationType, email, phoneNumber } = req.body;

//     const query =
//       'INSERT INTO `registration_form` (`name`, `organisationType`, `email`, `phoneNumber`) VALUES (?, ?, ?, ?)';
//     const [result] = await connection.execute(query, [name, organisationType, email, phoneNumber]);

//     connection.end();

//     res.status(201).json({
//       message: 'Registration successful',
//     });
//   } catch (error) {
//     console.error('An error occurred:', error);
//     let errorMessage = 'Registration failed';

//     switch (error.code) {
//       // Handle specific error cases
//       default:
//         errorMessage = 'An error occurred';
//         break;
//     }

//     res.status(500).json({
//       message: errorMessage,
//     });
//   }
// });
// app.get('/', (req, res) => {
//   res.redirect('/Main');
// });

// app.get('*', (req, res) => {
//   res.status(404).send('Not Found');
// });

// app.listen(port, () => {
//   console.log(`Server running on http://${domain}:${port}`);
// });
// require('dotenv').config();

const express=require("express");
const bodyParser = require("body-parser");
const { check, validationResult }=require("express-validator");
const cors=require("cors");
const mongoose=require("mongoose");
const path = require('path');
//const RegistrationForm = require("./mongo"); // Import the RegistrationForm model from mongo.js


const app = express();


// const DB_URL = "mongodb://127.0.0.1:27017/invicious"
// mongoose.connect(DB_URL,{useNewUrlParser:true,useUnifiedTopology:true,})

//   .then(() => {
//     console.log(`mongodb is connected`);
//   }) 
//    .catch((e) => {
//     console.log('failed', e);
//   });



// mongoose
//   .connect('mongodb://localhost:27017/invicious', { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => {
//     console.log('Connected to MongoDB');
//     // Your server setup or other code here
//   })
//   .catch((error) => {
//     console.error('Error connecting to MongoDB:', error);
//   });
  // const db = require("./mongo");
// mongoose.connect("mongodb://localhost:27017/inv",{
//     useNewUrlParser:true,useUnifiedTopology:true
// },(err)=>{
//   if(err)
//   {
//     console.log(err)
//   }else{
//     console.log("successfully connected")
//   }
// })

 const port = process.env.PORT || 5000;
 //const port = process.env.PORT || 3000;
 const domain = 'invicious.in';
//  const domain = 'localhost';

 const mongoConfig = {
   host: process.env.MONGO_HOST || 'localhost',
   port: process.env.MONGO_PORT || 27017,
   database: process.env.MONGO_DATABASE || 'invicious',
   collection: process.env.MONGO_COLLECTION || 'registrationForm',
 };

// Middleware
app.use(express.json());
app.use(cors());



 const DB_URL = "mongodb://127.0.0.1:27017/invicious"
//  const DB_URL = "mongodb://localhost:27017/invicious"

mongoose.connect(DB_URL,{useNewUrlParser:true,useUnifiedTopology:true,})

  .then(() => {
    console.log(`mongodb is connected`);
  }) 
   .catch((e) => {
    console.log('failed', e);
  });


// Custom validation middleware for email and phone number
const validateInput = [
   check('name').notEmpty().withMessage('Name is required'),
   check('organisationType').notEmpty().withMessage('Type of organization is required'),
   check('email').isEmail().withMessage('Please enter valid email address'),
   check('phoneNumber').isMobilePhone().withMessage('Please enter a valid phone number')

  //  check('phoneNumber').isMobilePhone('en-US').withMessage('Please enter valid phone number'),
 ];

// // Database connection function
async function connectToDatabase() {
  try {
    // await mongoose.connect(`mongodb://${mongoConfig.host}:${mongoConfig.port}/${mongoConfig.database}`, {
      // await mongoose.connect('mongodb://localhost:27017/invicious', {
        await mongoose.connect(DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
    // return mongoose.connection;
  } catch (error) {
    console.error('Database connection error:', error);
    throw new Error('Failed to connect to the database');
  }
}

// // Define schema and model for registration form
const registrationFormSchema = new mongoose.Schema({
  name: { type: String, required: true },
  organisationType: { type: String, enum: ['Audio streaming platform', 'Distribution Company', 'Multiplex','OTT streaming platform','Producer','Production House','Single Screen Cinema'],required: true },
  email: { type: String, required: true },
  phoneNumber: { type: String, required: true },
});

// const RegistrationForm = mongoose.model('RegistrationForm', registrationFormSchema);

//  let RegistrationForm;
// try {
//   RegistrationForm = mongoose.model('RegistrationForm');
// } catch {
//   RegistrationForm = mongoose.model('RegistrationForm', registrationFormSchema);
// }


const RegistrationFormModel = mongoose.models.RegistrationForm || mongoose.model('RegistrationForm', registrationFormSchema);





//  const RegistrationForm = mongoose.model('RegistrationForm', registrationFormSchema);

// Endpoint for handling form submission





//  app.post('/', validateInput, async (req, res) => {
//   // app.post('/tributorE', validateInput, async (req, res) => {
//   try {
//     // Validate input
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       return res.status(400).json({ errors: errors.array() });
//     }

//     // Extract form data
//     const { name, organisationType, email, phoneNumber } = req.body;

//     await connectToDatabase();

//     // const registration = new RegistrationForm({
//       const registration = new RegistrationFormModel({
//       name,
//       organisationType,
//       email,
//       phoneNumber,
//     });


   

//     await registration.save();

//     res.status(201).json({
//       message: 'Registration successful',
//     });
//   } catch (error) {
//     console.error('An error occurred:', error);

//     //corrected code
//     let errorMessage = 'Registration failed';

//     // Check for specific error conditions using the error message or relevant property

//     switch (error.code) {
//       case 'ER_DUP_ENTRY':
//         errorMessage = 'Email or phone number already exists';
//         break;
//       case 'ER_PARSE_ERROR':
//         errorMessage = 'Invalid query syntax';
//         break;
//       case 'ER_NO_REFERENCED_ROW':
//         errorMessage = 'Invalid foreign key reference';
//         break;
//       case 'ER_DATA_TOO_LONG':
//         errorMessage = 'Data too long for a column';
//         break;
//       case 'ER_NO_DEFAULT_FOR_FIELD':
//         errorMessage = 'Missing default value for a field';
//         break;
//       case 'ER_ACCESS_DENIED_ERROR':
//         errorMessage = 'Access denied for user';
//         break;
//       case 'ER_TABLE_EXISTS_ERROR':
//         errorMessage = 'Table already exists';
//         break;
//       case 'ER_BAD_FIELD_ERROR':
//         errorMessage = 'Unknown column in the query';
//         break;
//       case 'ER_NO_SUCH_TABLE':
//         errorMessage = 'Table does not exist';
//         break;
//       case 'ER_LOCK_WAIT_TIMEOUT':
//         errorMessage = 'Lock wait timeout exceeded';
//         break;
//       case 'ER_WRONG_VALUE_COUNT':
//         errorMessage = 'Incorrect number of values in the query';
//         break;
//       case 'ER_BAD_NULL_ERROR':
//         errorMessage = 'Column cannot be null';
//         break;
//       case 'ER_WRONG_TABLE_NAME':
//         errorMessage = 'Incorrect table name';
//         break;
//       case 'ER_SERVER_SHUTDOWN':
//         errorMessage = 'Server shutdown in progress';
//         break;
//       case 'ER_UNKNOWN_ERROR':
//         errorMessage = 'Unknown error occurred';
//         break;
//       case 'ER_DBACCESS_DENIED_ERROR':
//         errorMessage = 'Access denied for database';
//         break;
//       case 'ER_TABLEACCESS_DENIED_ERROR':
//         errorMessage = 'Access denied for table';
//         break;
//       case 'ER_OUT_OF_RANGE':
//         errorMessage = 'Value out of range for column';
//         break;
//       case 'ER_FOREIGN_KEY_CONSTRAINT':
//         errorMessage = 'Foreign key constraint violation';
//         break;
//       case 'ER_SIGNAL_EXCEPTION':
//         errorMessage = 'Exception during signal handling';
//         break;
//       case 'ER_SP_DOES_NOT_EXIST':
//         errorMessage = 'Stored procedure does not exist';
//         break;
//       case 'ER_SP_ALREADY_EXISTS':
//         errorMessage = 'Stored procedure already exists';
//         break;
//       case 'ER_SP_LOAD_FAILED':
//         errorMessage = 'Error during loading of stored procedure';
//         break;
//       case 'ER_SP_NO_RETSET':
//         errorMessage = 'Not allowed to return a result set from a stored procedure';
//         break;
//       case 'ER_SP_FETCH_NO_DATA':
//         errorMessage = 'No data fetched from a stored procedure';
//         break;
//       default:
//         errorMessage = 'An error occurred';
//         break;
//     }

    // if (error.message.includes('duplicate key error')) {
    //   errorMessage = 'Email or phone number already exists';
    // } else if (error.message.includes('invalid query syntax')) {
    //   errorMessage = 'Invalid query syntax';
    // } else if (error.message.includes('invalid foreign key reference')) {
    //   errorMessage = 'Invalid foreign key reference';
    // }
    // Add more conditions as needed


//     res.status(500).json({
//       // message: errorMessage,
//       message: 'Registration failed',
//     });
//   }
// });



app.post('/', validateInput, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const { name, organisationType, email, phoneNumber } = req.body;

   
   
    const newFormEntry = new RegistrationFormModel({
      name,
      organisationType,
      email,
      phoneNumber,
  });
  
  const savedRegistrationFormModel = await newFormEntry.save();
  res.status(200).jsonp(savedRegistrationFormModel);
} catch (error) {
  console.error('Error while saving form entry:', error);
  return res.status(500).json({ error: 'Internal server error' });
    }
  });
  


//     const newFormEntry = new RegistrationFormModel({
//       name,
//       organisationType,
//       email,
//       phoneNumber,
//     });

//     await newFormEntry.save();

//     return res.status(200).json({ message: 'Form submitted successfully' });
//   } catch (error) {
//     console.error('Error while saving form entry:', error);
//     return res.status(500).json({ error: 'Internal server error' });
//   }
// });


//Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err);
  if (err instanceof mongoose.Error.ValidationError) {
    return res.status(400).json({ error: err.message });
  }
  if (err instanceof mongoose.Error.DocumentNotFoundError) {
    return res.status(404).json({ error: 'Not found' });
  }
  return res.status(500).json({ error: 'Internal server error' });
});




// Serve the React app
app.use(express.static(path.join(__dirname, 'OFF-WEBSITE/build')));

// Handle root URL redirection
app.get('/', (req, res) => {
  res.redirect('/Main');
});

// Handle all other routes by serving the React app's index.html
app.get('*', (req, res) => {
  // res.sendFile(path.join(__dirname, 'OFF-WEBSITE/build/index.html'));
  res.sendFile(path.resolve(__dirname, 'OFF-WEBSITE/build', 'index.html'));
});




    // res.status(500).json({
    //   message: 'Registration failed',
    //   error:error.message
//     });
//   }
// });

// Error handling middleware
// app.use((err, req, res, _next) => {
//   console.error('An error occurred:', err);

//   if (err instanceof ValidationError) {
//     res.status(400).json({
//       errors: err.array(),
//     });
//   } else {
//     res.status(500).json({
//       message: 'Internal Server Error',
//       // error: err.message, // Add the error message to the response
//     stack: err.stack // Add the error stack trace to the response
//     });
//   }
// });



// // Error handling middleware
// app.use((err, req, res, _next) => {
//   console.error('An error occurred:', err);

//   if (err instanceof mongoose.Error.ValidationError) {
//     // Validation error
//     const errors = Object.values(err.errors).map((error) => error.message);
//     res.status(400).json({ errors });
//   } else if (err instanceof mongoose.Error.CastError) {
//     // Cast error (e.g., invalid ObjectId)
//     res.status(400).json({ message: 'Invalid resource ID' });
//   } else {
//     // Other error types
//     res.status(500).json({ message: 'Internal Server Error', error: err.stack });
//   }
// });





// Start the server

// const server = app.listen(port, () => {
//   console.log(`Server running on http://${domain}:${port}`);
// });



//   const server = app.listen(port, '0.0.0.0', () => {
//   console.log(`Server running on http://${domain}:${port}`);
// });


// const server = app.listen(port, '0.0.0.0', async () => {
//   try {
//     await connectToDatabase();
//     console.log('Server running on http://${domain}:${port}');
//   } catch (error) {
//     console.error('Failed to start the server:', error);
//   }
// });



// const port = process.env.PORT || 5000;
// const server = app.listen(port, '0.0.0.0', async () => {
//   try {
//     await connectToDatabase();
//     console.log(`Server running on http://${domain}:${port}`);
//   } catch (error) {
//     console.error('Failed to start the server:', error);
//   }
// });


// const port = process.env.PORT || 5000;
const server = app.listen(port, '0.0.0.0', async () => {
  try {
    await connectToDatabase();
    console.log(`Server running on http://${domain}:${port}`);
  } catch (error) {
    console.error('Failed to start the server:', error);
  }
});





// Handle termination signals
// process.on('SIGINT', () => {
//   shutdownServer('SIGINT');
// });

// process.on('SIGTERM', () => {
//   shutdownServer('SIGTERM');
// });

// // Shutdown function
// function shutdownServer(signal) {
//   console.log(`Received ${signal}. Shutting down gracefully.`);
//   server.close(() => {
//     console.log('Server has been gracefully terminated.');
//     process.exit(0);
//   });
// }


