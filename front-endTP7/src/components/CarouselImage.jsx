import React from 'react'

const CarouselImage = (props) => {
  return (
    <>
        <img
            class="img-fluid"
            src={props.backdrop}
            className="d-block w-100"
            alt={props.title}
        />
        <div class="blur">&nbsp;</div>
        <div class="poster">
            <img
            class="img-fluid"
            src={props.poster}
            />
        </div>
    </>
  )
}

export default CarouselImage