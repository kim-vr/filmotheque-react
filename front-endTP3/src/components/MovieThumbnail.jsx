import React from 'react'

const MovieThumbnail= ({ title, poster_path }) => {
  return (
    <div class="movie col">
              <div class="movie-image">
                <span class="play"><span class="name">{title}</span></span>
                <a href="#"><img  class="img-fluid img-thumbnail" src={poster_path} alt="" /></a>
              </div>
              <div class="rating">
                <div class="stars">
                  <div class="stars-in"></div>
                </div>
                <span class="comments">12</span>
              </div>
    </div>
  )
}

export default MovieThumbnail;
