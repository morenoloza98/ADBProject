let Movie = require('../models/movies');

exports.index = (req, res) => {
    res.json({ msg: "Hello from our final project" });
}

exports.movieTitles = async (req, res) => {
    await Movie.find({}, 'title', (err, movies) => {
        if(err) throw err;
        res.json({ movies : movies })
        console.log("WUUU");
    }).cache();
};

exports.test = (req, res) => {
    res.json({ msg: "Hello test" })
}

exports.test1 = async (req, res) => {
        console.log("Ya entré");
      const movies = await Movie.find().cache({ expire: 10 });
      console.log(movies);
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


