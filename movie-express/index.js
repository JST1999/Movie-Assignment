const express = require("express");
const app = express()
const db = require("./db/movies");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/movies/:id", async (req, res) => {
    const movieDetails = await db.getFavMovies(req.params.id);
    res.status(200).json(movieDetails[0]);
});

app.patch('/movies/:id', async (req, res) => {
    const movieUpdate = await db.updateFavMovies(req.params.id, req.body.favMovies);
    res.status(200).json(movieUpdate[0]);
});

app.get("/", function(req, res) {
    res.status(200).json({message: "Test endpoint"});
})

app.listen(8100, (req, res) =>{
    console.log("Express is running on 8100")
})