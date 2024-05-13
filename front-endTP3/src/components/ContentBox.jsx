import React from "react";
import MovieThumbnail from "./MovieThumbnail";

const ContentBox = (props) => (
    <>     
        <div class="box container-fluid">
          <div class="head row justify-between align-items-center">
            <h2 class="col">{props.title}</h2>
            <p class="col text-end"><a href="#">Tous</a></p>
          </div>
          <div class="row row-cols-md-6 row-cols-sm-3 row-cols-2" >
            {props.movies.map(movie => (
              <MovieThumbnail key={movie.title}
                title = {movie.title}
                poster_path = {movie.poster_path}
              />
            ))}
          </div>
        </div>
        
    </>
);

export default ContentBox;