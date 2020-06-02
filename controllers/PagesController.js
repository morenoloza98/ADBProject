let Movie = require('../models/movies');

exports.index = (req, res) => {
  res.render('index', {
    type:"type",
    title:"title",
    director:"director",
    cast:"cast",
    country:"country",
    release_year:"year",
    rating:"rating",
    duration:"duration",
    listed_in:"genre",
    description:"description",
    ratedCount:"R-rated",
    shows:"shows",
    moreThanOne:"moreThanOne",
    releasedYear:"releasedYear",
    addMovie:"add-movie"
  });
}

exports.movieByType = async (req, res) => {
  let type = req.body.mot;
  const moviesByType = await Movie.find({ 'type': type }, { _id: 0 }).limit(50).cache({ time: 1440, key: 'type' });
  res.json(moviesByType);
};

exports.movieByTitle = async (req, res) => {
  let title = req.body.title;
  const moviesByTitle = await Movie.find({ 'title': title }, { _id: 0 }).cache({ time: 1440, key: 'title' });
  res.json(moviesByTitle);
};

exports.movieByDirector = async (req, res) => {
  let director = req.body.director;
  const moviesByDirector = await Movie.find({ 'director': director}).cache({ time: 1440, key: 'director' });
  res.json(moviesByDirector);
};

exports.movieByCast = async (req, res) => {
  let cast = req.body.cast;
  const moviesByCast = await Movie.find({ 'cast': { $regex: cast } }).cache({ time: 1440, key: 'cast' });
  res.json(moviesByCast);
};

exports.movieByCountry = async (req, res) => {
  let country = req.body.country;
  const movieByCountry = await Movie.find({ 'country': { $regex: country } }).cache({ time: 1440, key: 'country' });
  res.json(movieByCountry);
};

exports.movieByYear = async (req, res) => {
  let year = req.body.year;
  const movieByYear = await Movie.find({ 'release_year': year }).cache({ time: 1440, key: 'year' });
  res.json(movieByYear);
};

exports.movieByRating = async (req, res) => {
  let rating = req.body.rating;
  const movieByRating = await Movie.find({ 'rating': rating }).cache({ time: 1440, rating: 'rating' });
  res.json(movieByRating);
};

exports.movieByDuration = async (req, res) => {
  let duration = req.body.duration;
  const movieByDuration = await Movie.find({ 'duration': duration }).cache({ time: 1440, key: 'duration' });
  res.json(movieByDuration);
};

exports.movieByGenre = async (req, res) => {
  let listed_in = req.body.listed_in
  const movieByGenre = await Movie.find({ 'listed_in': {$regex: listed_in} }).cache({ time: 1440, key: 'genre' });
  res.json(movieByGenre);
};

exports.movieByDesc = async (req, res) => {
  let description = req.body.description;
  const movieByDesc = await Movie.find({ 'description': {$regex: description } }).cache({ time: 1440, key: 'moviesByDesc' });
  console.log(typeof(movieByDesc));
  res.json(movieByDesc);
};

exports.moviesRRated = async (req, res) => {
  const moviesRRated = await Movie.find({ 'rating': 'R' }).countDocuments().cache({ time: 1440, key: 'rRated' });
  res.json(moviesRRated);
};

exports.tvShows = async (req, res) => {
  const tvShows = await Movie.find({ 'type': 'TV Show' }).countDocuments().cache({ time: 1440, key: 'numShows' });
  res.json(tvShows);
};

exports.moreThanOne = async (req, res) => {
  const moreThanOne = await Movie.find({ 'director': { $regex: ',' } }).countDocuments().cache({ time: 1440, key: 'countMoreDirec' });
  res.json(moreThanOne);
};

exports.releaseYear = async (req, res) => {
  const releasedYear = await Movie.find({ 'release_year': '2012'}).countDocuments().cache({ time: 1440, key: 'numReleaseYear' });
  res.json(releasedYear);
};

exports.addOne = async (req, res) => {
  let type = req.body.type;
  let title = req.body.title;
  let director = req.body.director;
  let cast = req.body.cast;
  let country = req.body.country;
  let release_year = req.body.year;
  let rating = req.body.rating;
  let duration = req.body.duration;
  let listed_in = req.body.listed_in;
  let description = req.body.description;
  let newMovie = new Movie({
    id: Math.floor(Math.random() * 100000000) + 85000000,
    type: type,
    title: title,
    director: director,
    cast: cast,
    country: country,
    date_added: new Date(),
    release_year: release_year,
    rating: rating,
    duration: duration,
    listed_in: listed_in,
    description: description
  });

  try{
    await newMovie.save();
    console.log("Added " + newMovie.title);
    res.send(newMovie);
  } catch(err) {
    res.status(400).send(err);
  }

}



