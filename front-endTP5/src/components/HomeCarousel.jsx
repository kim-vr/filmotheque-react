import React from 'react'
import { Carousel } from 'react-bootstrap';
import CarouselImage from './CarouselImage';
import { useState, useEffect } from 'react';

export const HomeCarousel = () => {
    const [movies, setMovies] = useState(null);;
    const [isLoading, setIsLoading] = useState(false);
    const [serverError, setServerError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            fetch("http://filmotheque.e-mingo.net/api/favorites")
            .then((response) => {
                if (response.ok) return response.json();
            })
            .then((data) => {
                setIsLoading(false);
                setMovies(data);
            })
            .catch((error) => {
                setServerError(error);
                setIsLoading(false);
            });
        };
        fetchData();
        }, []);
  return (
        <div id="carousel" class="container">
            {isLoading && <span>Données en cours de chargement...</span>}
            {!isLoading && serverError ? (
                <span>Erreur de chargement des données !</span>
            ) : (
            movies && (
            <Carousel 
            id="selectionCarousel" 
            interval={5000} 
            className="carousel container">
                {movies.map((movie, id) => (
                    <Carousel.Item key={id}>
                        <CarouselImage title={movie.title} poster={movie.poster_path} backdrop={movie.backdrop_path}/>
                        <Carousel.Caption>
                            <h5>{movie.title + " (" + new Date(movie.release_date).getFullYear() + ")"}</h5>
                            <p>{movie.tagline}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>
            )
            )}
        </div>
    )
  }
  
  export default HomeCarousel;