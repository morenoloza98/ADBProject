let Movie = require('../models/movies');

exports.index = (req, res) => {
    res.json({ msg: "Hello from our final project" });
}

exports.movieTitles = (req, res) => {
    Movie.find({}, 'title', (err, movies) => {
        if(err) throw err;
        res.json({ movies : movies })
    });
};

exports.test = (req, res) => {
    res.json({ msg: "Hello test" })
}
