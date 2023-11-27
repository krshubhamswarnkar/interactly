const errorHandler = (err, req, res, next) => {
    console.error(err.stack);
  
    // Handle specific known errors
    if (err.name === 'ValidationError') {
      return res.status(400).json({ error: 'Validation error', details: err.message });
    }
  
    // Handle service errors
    if (err.isServiceError) {
      return res.status(err.statusCode || 500).json({ error: err.message });
    }
  
    // Handle other errors
    res.status(500).json({ error: 'Internal Server Error' });
  };
  
  module.exports = errorHandler;