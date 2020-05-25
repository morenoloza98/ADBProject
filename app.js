// Imports
const express = require('express');
const mongoose = require('mongoose');
const webRoutes = require('./routes/web');

// Express app creation
const app = express();

// Configurations
const appConfig = require('./configs/app');

// Mongoose
mongoose.connect("mongodb://localhost:27017/netflix", { 
    useUnifiedTopology: true,
    useNewUrlParser: true
});

// Receive parameters from the Form requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.use('/', webRoutes);

// App init
app.listen(appConfig.expressPort, () => {
  console.log(`Server is listenning on ${appConfig.expressPort}! (http://localhost:${appConfig.expressPort})`);
});
