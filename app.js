// Imports
const express = require('express');
const mongoose = require('mongoose');
const webRoutes = require('./routes/web');
const keys = require('./configs/keys');
const bodyParser = require('body-parser');

require('./models/movies');
require('./utils/redis');
//CAMBIOSSSSS

// Express app creation
const app = express();

// Configurations
const appConfig = require('./configs/app');

// Mongoose
mongoose.connect(keys.MONGO_URI, { 
  useUnifiedTopology: true,
  useNewUrlParser: true
});

// Receive parameters from the Form requests
app.use(express.json({ type: 'application/json' }));
app.use(express.urlencoded({ extended: true }));

//Setup Pug 
app.set('views', './views');
app.set('view engine', 'pug');

// Routes
app.use('/', webRoutes);


// App init
app.listen(appConfig.expressPort, () => {
  console.log(`Server is listenning on -> ${appConfig.expressPort}! (http://localhost:${appConfig.expressPort})`);
});



//app.listen(port, () => console.log(`app is listening on port ${port}!`));
