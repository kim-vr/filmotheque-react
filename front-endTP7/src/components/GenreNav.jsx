import React from 'react'
import { NavLink } from 'react-router-dom';


const GenreNav = ({genres}) => {
  return(
  <div className="nav">
    <div className="shadow-sm p-3 mb-5 bg-white rounded col-15">
      <h2>Genres:</h2>
      <ul className="list-unstyled">
        {genres && genres.map(genre => (
          <li key={genre.id}>
              <NavLink className="dropdown-item" to={`/genre/${genre.name}`}>
                <a href={`/genre/${genre.name}`}>
                  {genre.name}
                </a>
              </NavLink>
          </li>
        ))}
      </ul>
    </div>
  </div>
  )
    

  
}

export default GenreNav