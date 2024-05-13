import React from 'react'
import { Carousel } from 'react-bootstrap';
import CarouselImage from './CarouselImage';


export const HomeCarousel = () => {
    const movies = [
        {
        title: "What If...? (2021)",
        text: "Une seule question peut tout changer.",
        backdrop:"https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/xuCHkaxkkm9pPum1SByC0dhvR2U.jpg",
        poster:"https://www.themoviedb.org/t/p/w300_and_h450_bestv2/mj98hl3XsRcxYdw99arNavsSBDP.jpg" },
        {
        title: "Rebel Moon - Partie 1 : Enfant du feu (2023)",
        text: "La guerre n'épargnera aucun monde.",
        backdrop:"https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/sRLC052ieEzkQs9dEtPMfFxYkej.jpg",
        poster:"https://www.themoviedb.org/t/p/w300_and_h450_bestv2/jKLRbmLu6QrGvWq1kmfFLJw8LN8.jpg" },
        {
        title: "Aquaman et le Royaume perdu (2023)",
        text: "Que les océans se déchaînent.",
        backdrop:"https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/jXJxMcVoEuXzym3vFnjqDW4ifo6.jpg",
        poster:"https://www.themoviedb.org/t/p/w300_and_h450_bestv2/7uqsoZYrYiXJqR14wROzuVphkas.jpg" } ]
    
    
  return (
        <div id="carousel" class="container">
            <Carousel 
            id="selectionCarousel" 
            interval={5000} 
            className="carousel container">
                {movies.map((movie, id) => (
                    <Carousel.Item key={id}>
                        <CarouselImage title={movie.title} poster={movie.poster} backdrop={movie.backdrop}/>
                        <Carousel.Caption>
                            <h5>{movie.title}</h5>
                            <p>{movie.text}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    )
  }
  
  export default HomeCarousel;