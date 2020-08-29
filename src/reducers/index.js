import { combineReducers } from "redux";
const moviesReducer = () => {
  return [
    {
      title: "Inception",
      Category: " Action | Adventure | Sci-Fi | Thriller",
      Director: "Christopher Nolan",
      Writer: "Christopher Nolan",
      Stars: "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page",
      Runtime: "148 min",
    },

    {
      title: "Joker",
      Category: "Crime | Drama | Thriller",
      Director: "Todd Phillips",
      Writer: "Todd Phillips, Scott Silver ",
      Stars: " Joaquin Phoenix, Robert De Niro, Zazie Beetz ",
      Runtime: "  122 min",
    },

    {
      title: "Knives Out",
      Category: "Comedy | Crime | Drama | Mystery | Thriller",
      Director: " Rian Johnson",
      Writer: "Rian Johnson",
      Stars: " Daniel Craig, Chris Evans, Ana de Armas ",
      Runtime: "130 min",
    },

    {
      title: "Interstellar",
      Category: "Action | Drama | Sci-Fi | Thriller",
      Director: "Christopher Nolan",
      Writer: "Jonathan Nolan,Christopher Nolan",
      Stars: " Matthew McConaughey, Anne Hathaway, Jessica Chastain",
      Runtime: "169 min",
    },

    {
      title: "1917",
      Category: "Drama | War",
      Director: "Sam Mendes",
      Writer: "Sam Mendes, Krysty Wilson-Cairns",
      Stars: "Dean-Charles Chapman, George MacKay, Daniel Mays",
      Runtime: "119 min",
    },

    {
      title: "The Godfather",
      Category: "Crime | Drama",
      Director: " Francis Ford Coppola",
      Writer: "Mario Puzo,Francis Ford Coppola",
      Stars: " Marlon Brando, Al Pacino, James Caan",
      Runtime: "175 min",
    },

    {
      title: "John Wick",
      Category: "Action | Crime | Thriller",
      Director: "Chad Stahelski, David Leitch ",
      Writer: " Derek Kolstad",
      Stars: "Keanu Reeves, Michael Nyqvist, Alfie Allen",
      Runtime: "101 min",
    },

    {
      title: "Baby Driver",
      Category: " Action | Crime | Drama | Music | Thriller",
      Director: "Edgar Wright",
      Writer: "Edgar Wright",
      Stars: "Ansel Elgort, Jon Bernthal, Jon Hamm",
      Runtime: "113 min",
    },

    {
      title: "Mad Max:Fury Road ",
      Category: " Action | Adventure | Sci-Fi | Thriller",
      Director: " George Miller",
      Writer: "George Miller, Brendan McCarthy",
      Stars: "  Tom Hardy, Charlize Theron, Nicholas Hoult",
      Runtime: "120 min",
    },

    {
      title: "The Matrix",
      Category: "Action | Sci-Fi",
      Director: "Lana Wachowski,Lilly Wachowski",
      Writer: "Lana Wachowski,Lilly Wachowski",
      Stars: "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page",
      Runtime: "136 min",
    },
  ];
};
const selectedMovieReducer = (selectedMovie = null, action) => {
  if (action.type === "MOVIE_SELECTED") {
    return action.payload;
  }
  return selectedMovie;
};
export default combineReducers({
  movies: moviesReducer,
  selectedMovie: selectedMovieReducer,
});
