const { Sequelize } = require('sequelize');

const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser")


const movieRoutes = require("./route/movieRoute");

const server = express();
server.use(morgan("dev")); // middleware
server.use(bodyParser.json()); // parse json in req.body

server.get("/", (req, res, next) => { // Health check API
    return res.send("Server is running.");
});
server.use("/movie", movieRoutes);


server.listen(9000);











// const connectToDatabase = async () => {
//     const sequelize = new Sequelize('postgres', 'postgres', 'postgres', {
//         host: 'localhost',
//         dialect: 'postgres'

//     });
//     try {
//         await sequelize.authenticate();
//         console.log('Connection has been established successfully.');
//     } catch (error) {
//         console.error('Unable to connect to the database:', error);
//     }
// }
// connectToDatabase();
