let Movie = require('../models/movies');

exports.index = (req, res) => {
  res.render('index', {
    val:"movieTitles"
  });
}

exports.movieTitles =  (req, res) => {
  Movie.find({}, 'title', (err, movies) => {
      if(err) throw err;
      res.json({ movies : movies })
      console.log("WUUU");
  }).cache();
};

exports.test = (req, res) => {
  res.json({ msg: "Hello test" })
}

exports.test1 = async (req, res) => {
  const movies = await Movie.find({}, "title").cache({ time: 10 });
  res.json(movies);
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


