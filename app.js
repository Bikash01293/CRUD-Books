//importing required dependencies
const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./db/connection');
const bookRoutes = require('./routes/bookRoutes');

//assigning app to a express() function
const app = express();
const port = process.env.PORT || 3000;

//db connection
connectDB();

//middlewares 
app.use(bodyParser.json());
app.use(bookRoutes);

//listening to server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
