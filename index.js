const { Sequelize } = require('sequelize');
const { Movie } = require("./model");
const connectToDatabase = async () => {
    // Option 2: Passing parameters separately (other dialects)
    // const sequelize = new Sequelize('database', 'username', 'password',
    const sequelize = new Sequelize('postgres', 'postgres', 'postgres', {
        host: 'localhost',
        dialect: 'postgres'

    });
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

//connectToDatabase();
const createNewMovie = async () => {
    const movieRecord = {
        movieId: 'MV-0098339',
        title: 'Infinity war',
        actors: 'Erick',
        genre: 'action,sci-fi,time',
        year: 2020,
        length: 150
    }

    const result = await Movie.create(movieRecord);

    console.log(result.toJSON());
}

createNewMovie();