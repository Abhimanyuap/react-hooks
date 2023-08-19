
import './styles.scss'
import Movie from './Movie';
import movies from './resources/movie.json'
import Header from "./Header"

const Movies = () => {

  return (
    <>
    <div><Header /></div>
    <div className='movies'>
      {movies.map((movie) => (
        <Movie
          key={movie.imdbID}
          title={movie.Title}
          year={movie.Year}
          poster={movie.Poster}
        />
      ))}
    </div>
    </>
  );
};

export default Movies;