const express = require('express');
const cors = require('cors');
const reviewRoutes = require('./routes/reviews');  

const app = express();

// Enable CORS  
app.use(cors({
  origin: 'http://localhost:3000',  
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
}));

// Middleware 
app.use(express.json());

// routes 
app.use('/reviews', reviewRoutes);

 
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
