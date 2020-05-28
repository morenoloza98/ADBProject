// Imports
const express = require('express');
const mongoose = require('mongoose');
const webRoutes = require('./routes/web');
const keys = require('./configs/keys');
//CAMBIOOOOOOS
const bodyParser = require('body-parser');

require('./models/movies');
require('./utils/redis');
//CAMBIOSSSSS

// Express app creation
const app = express();
const port = process.env.PORT || 3000;

// Configurations
const appConfig = require('./configs/app');

app.use(bodyParser.json());

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



//app.listen(port, () => console.log(`app is listening on port ${port}!`));
