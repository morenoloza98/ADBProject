let Movie = require('../models/movies');

const type = 'Movie';
const title = 'Jandino: Whatever it Takes';
const director = 'Fernando Lebrija';
const cast = 'Jandino Asporaat';
const country = 'United Kingdom';
const release_year = '2019';
const rating = 'TV-MA';
const duration = '90 min';
const listed_in = 'Comedies';
const description = 'A young journalist is forced into a life of crime to save his father and family in this series based on the novel by Miguel Sáez Carral.';


exports.index = (req, res) => {
  res.json({ msg: "Hello from our final project" });
}

exports.movieByType = async (req, res) => {
  const moviesByType = await Movie.find({ 'type': type }, { _id: 0 }).limit(10).cache({ time: 10 });
  res.json(moviesByType);
};

exports.movieByTitle = async (req, res) => {
  const moviesByTitle = await Movie.find({ 'title': title }, { _id: 0 }).cache({ time: 10 });
  res.json(moviesByTitle);
};

exports.movieByDirector = async (req, res) => {
  const moviesByDirector = await Movie.find({ 'director': director}).cache({ time: 10 });
  res.json(moviesByDirector);
};

exports.movieByCast = async (req, res) => {
  const moviesByCast = await Movie.find({ 'cast': { $regex: cast } }).cache({ time: 10 });
  res.json(moviesByCast);
};

exports.movieByCountry = async (req, res) => {
  const movieByCountry = await Movie.find({ 'country': { $regex: country } }).cache({ time: 10 });
  res.json(movieByCountry);
};

exports.movieByYear = async (req, res) => {
  const movieByYear = await Movie.find({ 'release_year': release_year }).cache({ time: 10 });
  res.json(movieByYear);
};

exports.movieByRating = async (req, res) => {
  const movieByRating = await Movie.find({ 'rating': rating }).cache({ time: 10 });
  res.json(movieByRating);
};

exports.movieByDuration = async (req, res) => {
  const movieByDuration = await Movie.find({ 'duration': duration }).cache({ time: 10 });
  res.json(movieByDuration);
};

exports.movieByGenre = async (req, res) => {
  const movieByGenre = await Movie.find({ 'listed_in': listed_in }).cache({ time: 10 });
  res.json(movieByGenre);
};

exports.movieByDesc = async (req, res) => {
  const movieByDesc = await Movie.find({ 'description': description }).cache({ time: 10 });
  res.json(movieByDesc);
};

exports.moviesRRated = async (req, res) => {
  const moviesRRated = await Movie.find({ 'rating': 'R' }).count().cache({ time: 10 });
  res.json({moviesRRated});
};

exports.tvShows = async (req, res) => {
  const tvShows = await Movie.find({ 'type': 'TV Show' }).count().cache({ time: 10 });
  res.json(tvShows);
};

exports.moreThanOne = async (req, res) => {
  const moreThanOne = await Movie.find({ 'director': { $regex: ',' } }).count().cache({ time: 10 });
  res.json(moreThanOne);
};

exports.releaseYear = async (req, res) => {
  const releasedYear = await Movie.find({ 'release_year': '2012'}).count().cache({ time: 10 });
  res.json(releasedYear);
};

    /*app.post('test', async (req, res) => {
      const { title, director, country } = req.body;
  
      if (!title || !director || !country) {
        return res.status(400).send('Missing title, author, or content')
      }
  
      const movie = new Movie({
        title,
        director,
        country
      });
  
      try {
        await movie.save();
        res.send(movie);
      } catch (err) {
        res.status(400).send(err.message);
      }
    });
  };*/


