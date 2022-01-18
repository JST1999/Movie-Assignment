# Movie-Assignment
to run movie-ang (the angular app), use npm start
to run movie-express (the backend with express and sqlite), also use npm start
Enter a users number (1 to 5) to fetch their favourite movies
Use the add movie button and textarea to enter an IMDB id

assumptions - entries should already be present in the system, so I added them via an ide
data entries will stay in the file so you already have a database setup

improvements for my implementation - use enviroment variables, use services in angular i.e. subscribe to requests, use div instead of table, add request error checking, check if imdb id is valid

issues - user 5 has a comma at the start of its string of favourite movies which causes a very minor bug

## tech:
angular.js - will allow me to make requests and generate html easily and efficiently i.e. when I generated the movie details along with the delete button
    - used the cli to generate the app
node.js v14.18.3 with modules: body-parser, express, knex, nodemon, sqlite3
sqlite - I thought that this would be best since there is only one table, would also make setting up easy
    - used DB Browser for SQLite

## Bonus tasks:
Use client side framework such as AngularJS, Angular, ReactJS, Vue, etc. - I completed this

Add simple authentication for any user - I have done this before in other node projects, such as https://github.com/JST1999/SOFT355-Coursework where I used session ids and hashed passwords with a salt. For this assignment I did not have time, I would use a pepper along with a salt or just use keycloak if I had the time

Add unit tests - I have done this before in other node projects, such as https://github.com/JST1999/SOFT355-Coursework where I used mocha and chai

Serve your solution somewhere on cloud hosting - I have done this before in other node projects, such as https://github.com/JST1999/SOFT355-Coursework where I used Heroku. I also setup a cd and ci pipeline where Heroku auto deployed from my GitHub, and auto ran my unit tests. If my tests failed then it would send me an email and not deploy the app.

Any other improvement or modification - favorite movies in the database could be an array?
                                    - could use usernames that you could search for