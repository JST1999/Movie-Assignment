const knex = require("./knex");

function getFavMovies(id) {
    return knex("users").select("*").where("id", id);
}

function updateFavMovies(id, mov) {
    return knex("users").where("id", id).update("favourite_movies", mov);
}

module.exports = {
    getFavMovies,
    updateFavMovies
}