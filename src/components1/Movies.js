
import Movie from './Movie';
import movies from '../resources/movie.json'

const Movies = () => {

  return (
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
  );
};

export default Movies;