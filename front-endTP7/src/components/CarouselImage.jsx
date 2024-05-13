import React from 'react'

const CarouselImage = (props) => {
  return (
    <>
      <img
        src={props.backdrop}
        className="img-fluid d-block w-100"
        alt={props.title}
      />
      <div className="blur">&nbsp;</div>
      <div className="poster">
        <img
          className="img-fluid"
          src={props.poster}
          alt={props.title}
        />
      </div>
    </>
  )
}

export default CarouselImage