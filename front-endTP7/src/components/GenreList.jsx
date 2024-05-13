import React, { useEffect, useState } from 'react';
import ContentBox from './ContentBox';
import { useLoaderData } from 'react-router-dom';

const GenreList = () => {
  const genresData = useLoaderData();

  return (
    <>
      {genresData && genresData.map((genre, index) => (
        <div key={index}>
          <ContentBox title={genre.name} movies={genre.movies} />
        </div>
      ))}
    </>
  )
};

export default GenreList;
