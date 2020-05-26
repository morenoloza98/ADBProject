// Imports
const express = require('express');
const mongoose = require('mongoose');
const webRoutes = require('./routes/web');

// Express app creation
const app = express();

// Configurations
const appConfig = require('./configs/app');
const keys = require('./configs/keys');

// Mongoose
mongoose.connect(keys.MONGO_URI, { 
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
  console.log(`Server is listenning on awesome moreno server!!!!!! -> ${appConfig.expressPort}! (http://localhost:${appConfig.expressPort})`);
});
