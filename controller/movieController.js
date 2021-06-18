const moment = require("moment");
const { Movie } = require("../model");
const add = async (req, res) => {
    const movieId = `MV-${moment().unix()}`;
    const { title, actors, genre, year, length } = req.body;
    const movieRecord = {
        movieId,
        title,
        actors,
        genre,
        year,
        length
    }

    const result = await Movie.create(movieRecord);

    console.log(result.toJSON());
    return res.json({ message: result.toJSON() });
}

module.exports = { add };