let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let moviesSchema = new Schema({
    id: { type: String },
    type: { type: String},
    title: { type: String },
    director: { type: String },
    cast: { type: String },
    country: { type: String },
    date_added: { type: Date },
    release_year: { type: String },
    rating: { type: String },
    duration: { type: String },
    listed_in: { type: String },
    description: { type: String }
});

let Movie = mongoose.model('movies', moviesSchema);

module.exports = Movie;