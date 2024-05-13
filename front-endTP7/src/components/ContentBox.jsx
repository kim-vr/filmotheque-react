import React from "react";
import MovieThumbnail from "./MovieThumbnail";

const ContentBox = (props) => (
    <>     
        <div className="box container-fluid">
          <div className="head row justify-between align-items-center">
            <h2 className="col">{props.title}</h2>
            <p className="col text-end"><a href="#">Tous</a></p>
          </div>
          <div className="row row-cols-md-6 row-cols-sm-3 row-cols-2" >
            {props.movies && props.movies.map((movie, index) => (
              <MovieThumbnail key={index}
                title = {movie.title}
                poster_path = {movie.poster_path}
              />
            ))}
          </div>
        </div>
        
    </>
);

export default ContentBox;