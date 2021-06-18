const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('postgres', 'postgres', 'postgres', {
    host: 'localhost',
    dialect: 'postgres'
});

const Movie = sequelize.define('Movie', {
    movieId: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    actors: {
        type: DataTypes.STRING

    },
    genre: {
        type: DataTypes.STRING

    },
    year: {
        type: DataTypes.INTEGER
    },
    length: {
        type: DataTypes.INTEGER
    }
}, {
    tableName: "movies",
    underscored: true,
    timestamps: false
});


module.exports = Movie;