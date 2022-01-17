const express = require("express");
const app = express()
const db = require("./db/movies");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  });

app.get("/movies/:id", async (req, res) => {
    const movieDetails = await db.getFavMovies(req.params.id);
    res.status(200).json(movieDetails[0]);
});

app.get("/", function(req, res) {
    res.status(200).json({message: "Test endpoint"});
})

app.listen(8100, (req, res) =>{
    console.log("Express is running on 8100")
})