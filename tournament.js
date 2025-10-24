// Movie database
const MOVIE_POOL = [
  // Classics & Modern Masterpieces
  { id: 1, title: "The Godfather", poster: "/assets/MovieImages/thegodfather.png", year: 1972, genre: "Crime" },
  { id: 2, title: "The Shawshank Redemption", poster: "/assets/MovieImages/theshawshankredemption.png", year: 1994, genre: "Drama" },
  { id: 3, title: "Pulp Fiction", poster: "/assets/MovieImages/pulpfiction.png", year: 1994, genre: "Crime" },
  { id: 4, title: "The Dark Knight", poster: "/assets/MovieImages/thedarkknight.png", year: 2008, genre: "Action" },
  { id: 5, title: "Goodfellas", poster: "/assets/MovieImages/goodfellas.png", year: 1990, genre: "Crime" },
  { id: 6, title: "Casablanca", poster: "/assets/MovieImages/casablanca.png", year: 1942, genre: "Romance" },
  { id: 7, title: "Citizen Kane", poster: "/assets/MovieImages/citizenkane.png", year: 1941, genre: "Drama" },
  { id: 8, title: "Parasite", poster: "/assets/MovieImages/parasite.png", year: 2019, genre: "Thriller" },
  
  // Sci-Fi & Fantasy
  { id: 9, title: "Blade Runner 2049", poster: "/assets/MovieImages/bladerunner2049.png", year: 2017, genre: "Sci-Fi" },
  { id: 10, title: "The Matrix", poster: "/assets/MovieImages/thematrix.png", year: 1999, genre: "Sci-Fi" },
  { id: 11, title: "Inception", poster: "/assets/MovieImages/Inception.png", year: 2010, genre: "Sci-Fi" },
  { id: 12, title: "Interstellar", poster: "/assets/MovieImages/interstellar.png", year: 2014, genre: "Sci-Fi" },
  { id: 13, title: "The Lord of the Rings: Fellowship", poster: "/assets/MovieImages/thefellowshipofthering.png", year: 2001, genre: "Fantasy" },
  { id: 14, title: "Star Wars: A New Hope", poster: "/assets/MovieImages/starwars4.png", year: 1977, genre: "Sci-Fi" },
  { id: 15, title: "Back to the Future", poster: "/assets/MovieImages/backtothefuture.png", year: 1985, genre: "Sci-Fi" },
  { id: 16, title: "The Wolf of Wall Street", poster: "/assets/MovieImages/wolfofwallstreet.png", year: 2013, genre: "Thriller" },
  
  // Action & Adventure
  { id: 17, title: "Mad Max: Fury Road", poster: "/assets/MovieImages/", year: 2015, genre: "Action" },
  { id: 18, title: "Raiders of the Lost Ark", poster: "/assets/MovieImages/raidersofthelostark.png", year: 1981, genre: "Adventure" },
  { id: 19, title: "Die Hard", poster: "/assets/MovieImages/diehard.png", year: 1988, genre: "Action" },
  { id: 20, title: "Terminator 2: Judgment Day", poster: "/assets/MovieImages/theterminator2.png", year: 1991, genre: "Action" },
  { id: 21, title: "Heat", poster: "/assets/MovieImages/heat.png", year: 1995, genre: "Crime" },
  { id: 22, title: "John Wick", poster: "/assets/MovieImages/johnwick.png", year: 2014, genre: "Action" },
  { id: 23, title: "The Avengers", poster: "/assets/MovieImages/avengers.png", year: 2012, genre: "Action" },
  { id: 24, title: "Mission: Impossible - Fallout", poster: "/assets/MovieImages/missionimpossiblefallout.png", year: 2018, genre: "Action" },
  
  // Horror & Thriller
  { id: 25, title: "Get Out", poster: "/assets/MovieImages/getout.png", year: 2017, genre: "Horror" },
  { id: 26, title: "The Silence of the Lambs", poster: "/assets/MovieImages/thesilenceofthelambs.png", year: 1991, genre: "Thriller" },
  { id: 27, title: "Insomnia", poster: "/assets/MovieImages/insomnia.png", year: 2002, genre: "Thriller" },
  { id: 28, title: "The Exorcist", poster: "/assets/MovieImages/theexorcist.png", year: 1973, genre: "Horror" },
  { id: 29, title: "Psycho", poster: "/assets/MovieImages/psycho.png", year: 1960, genre: "Thriller" },
  { id: 30, title: "A Quiet Place", poster: "/assets/MovieImages/aquietplace.png", year: 2018, genre: "Horror" },
  { id: 31, title: "Se7en", poster: "/assets/MovieImages/seven.png", year: 1995, genre: "Thriller" },
  { id: 32, title: "The Thing", poster: "/assets/MovieImages/thething.png", year: 1982, genre: "Horror" },
  
  // Comedy & Romance
  { id: 33, title: "The Grand Budapest Hotel", poster: "/assets/MovieImages/thegrandbudapesthotel.png", year: 2014, genre: "Comedy" },
  { id: 34, title: "Some Like It Hot", poster: "/assets/MovieImages/somelikeithot.png", year: 1959, genre: "Comedy" },
  { id: 35, title: "The Princess Bride", poster: "/assets/MovieImages/theprincessbride.png", year: 1987, genre: "Adventure" },
  { id: 36, title: "When Harry Met Sally", poster: "/assets/MovieImages/whenharrymetsally", year: 1989, genre: "Romance" },
  { id: 37, title: "Groundhog Day", poster: "/assets/MovieImages/groundhogday.png", year: 1993, genre: "Comedy" },
  { id: 38, title: "La La Land", poster: "/assets/MovieImages/lalaland.png", year: 2016, genre: "Musical" },
  { id: 39, title: "Singin' in the Rain", poster: "/assets/MovieImages/singingintherain.png", year: 1952, genre: "Musical" },
  { id: 40, title: "The Big Lebowski", poster: "/assets/MovieImages/thebiglebowski.png", year: 1998, genre: "Comedy" },
  
  // International Cinema
  { id: 41, title: "Seven Samurai", poster: "/assets/MovieImages/sevensamurai.png", year: 1954, genre: "Action" },
  { id: 42, title: "8½", poster: "/assets/MovieImages/8andhalf.png", year: 1963, genre: "Drama" },
  { id: 43, title: "Tokyo Story", poster: "/assets/MovieImages/tokyostory.png", year: 1953, genre: "Drama" },
  { id: 44, title: "The Rules of the Game", poster: "/assets/MovieImages/therulesofthegame.png", year: 1939, genre: "Drama" },
  { id: 45, title: "Bicycle Thieves", poster: "/assets/MovieImages/bicyclethieves.png", year: 1948, genre: "Drama" },
  { id: 46, title: "Spirited Away", poster: "h/assets/MovieImages/spiritedaway.png", year: 2001, genre: "Animation" },
  { id: 47, title: "Your Name", poster: "/assets/MovieImages/yourname.png", year: 2016, genre: "Animation" },
  { id: 48, title: "The 400 Blows", poster: "/assets/MovieImages/the400blows.png", year: 1959, genre: "Drama" },
  
  // Modern Classics
  { id: 49, title: "There Will Be Blood", poster: "/assets/MovieImages/therewillbeblood.png", year: 2007, genre: "Drama" },
  { id: 50, title: "No Country for Old Men", poster: "/assets/MovieImages/nocountryforoldmen.png", year: 2007, genre: "Thriller" },
  { id: 51, title: "The Social Network", poster: "/assets/MovieImages/thesocialnetwork.png", year: 2010, genre: "Drama" },
  { id: 52, title: "Moonlight", poster: "/assets/MovieImages/moonlight.png", year: 2016, genre: "Drama" },
  { id: 53, title: "Her", poster: "/assets/MovieImages/her.png", year: 2013, genre: "Romance" },
  { id: 54, title: "Call Me by Your Name", poster: "/assets/MovieImages/callmebyyourname.png", year: 2017, genre: "Romance" },
  { id: 55, title: "Lady Bird", poster: "/assets/MovieImages/ladybird.png", year: 2017, genre: "Comedy" },
  { id: 56, title: "Manchester by the Sea", poster: "/assets/MovieImages/manchesterbythesea.png", year: 2016, genre: "Drama" },
  
  // Additional crowd favorites to reach 64
  { id: 57, title: "Forrest Gump", poster: "/assets/MovieImages/forrestgump.png", year: 1994, genre: "Drama" },
  { id: 58, title: "The Lion King", poster: "/assets/MovieImages/thelionking.png", year: 1994, genre: "Animation" },
  { id: 59, title: "Toy Story", poster: "/assets/MovieImages/toystory.png", year: 1995, genre: "Animation" },
  { id: 60, title: "Finding Nemo", poster: "/assets/MovieImages/findingnemo.png", year: 2003, genre: "Animation" },
  { id: 61, title: "Wall-E", poster: "/assets/MovieImages/walle.png", year: 2008, genre: "Animation" },
  { id: 62, title: "Cars", poster: "/assets/MovieImages/cars.png", year: 2006, genre: "Animation" },
  { id: 63, title: "Jaws", poster: "/assets/MovieImages/jaws.png", year: 1975, genre: "Thriller" },
  { id: 64, title: "Jurassic Park", poster: "/assets/MovieImages/jurassicpark.png", year: 1993, genre: "Adventure" }
];

// Utility functions
function getRandomMovies(count) {
  const shuffled = [...MOVIE_POOL].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

function createBracket(movies) {
  const rounds = [];
  let currentRound = movies;
  
  while (currentRound.length > 1) {
    rounds.push([...currentRound]);
    currentRound = Array(Math.floor(currentRound.length / 2)).fill(null).map(() => ({ 
      id: 0, 
      title: "TBD", 
      poster: "", 
      year: 0, 
      genre: "" 
    }));
  }
  
  return rounds;
}