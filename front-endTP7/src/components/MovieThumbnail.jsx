import React from 'react'

const MovieThumbnail= ({ title, poster_path }) => {
  return (
    <div className="movie col">
      <div className="movie-image">
        <a href={`/movie/${title}`}>
        <span className="play"><span className="name">{title}</span></span>
        </a>
        <a href="#"><img  className="img-fluid img-thumbnail" src={poster_path} alt="" /></a>
      </div>
      <div className="rating">
        <div className="stars">
          <div className="stars-in"></div>
        </div>
        <span className="comments">12</span>
      </div>
    </div>
  )
}

export default MovieThumbnail;
