const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const errorHandler = require('./src/middleware/errorHandler');

const app = express();

// Load environment variables from .env
dotenv.config();

// Middleware
app.use(bodyParser.json());

// Routes
const contactRoute = require('./src/route/contactRoute');
app.use('/api', contactRoute);
app.use(errorHandler);
// Error handling middleware
//app.use(require('./src/middlewares/errorHandlers'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
