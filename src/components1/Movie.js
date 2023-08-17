
import React from 'react'

const Movie = ({title,year,poster}) => {
  return (
    <div className='movie'>
      <img src={poster} />
      <h3>{title}</h3>
      <p>{year}</p>
    </div>
  )
}

export default Movie
