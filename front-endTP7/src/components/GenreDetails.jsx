import React from 'react'
import { useState, useEffect } from 'react'
import ContentBox from './ContentBox';
import { useLoaderData } from 'react-router-dom';

export const GenreDetails = () => {
  const genreMovies = useLoaderData();
  console.log(genreMovies);
  return ( 
    <>
      {genreMovies && genreMovies.map((genre, index) => (
        <div key={index}>
          <ContentBox title={genre.name} movies={genre.movies} />
        </div>
      ))}
    </>
  );
};

export default GenreDetails