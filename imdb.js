/* ------- READING JSON DATA --------- */

//1.Import JSON Models & DATA
const getJson = require('./json-file-reader');
const filename = './movies.json';

//Bring in IMDB module
const imdb = require('imdb-api');

//API KEY for IMDB;
const key = 'b3dac628';

//Movielist array
let movies = [];

//Read movie json data
getJson.passJSON(filename, function(data){
  
  //loop through 150 top films according to IMDB
  for (let i = 0; i <=149; i++) {
    //console.log(data[i].title); title
     imdb.get({ name: data[i].title }, { apiKey: key, timeout: 30000 })
     .then((movieObj) => {
       //Push all movies to db
       movies.push(movieObj);
     })
     .catch(console.log); //error
  }
})

//Show results
const resultsMovie = function () {

  //wait to return result of matches
  setTimeout(() => {
    console.log(movies.length);
  }, 2000);
}

resultsMovie()

/* --------- CUSTOM IMDB METHODS --------- */

const getMovieByTitle = function(title){
  imdb.get({ name: title }, { apiKey: key, timeout: 30000 })
    .then((movie) => {
      console.log(movie);
    })
    .catch(console.log);
}


  









