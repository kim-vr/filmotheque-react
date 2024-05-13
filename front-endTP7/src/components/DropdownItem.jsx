import React from 'react'
import { NavDropdown } from 'react-bootstrap'
import { NavLink, Link } from 'react-router-dom';

function DropdownItem(props) {

  let linkTo = '';
  if (props.type === 'genre') {
    linkTo = `/genre/${props.name}`;
  } else if (props.type === 'actor') {
    linkTo = `/actor/${props.name}`;
  }

  return (
    <Link to={linkTo}>
      <NavDropdown.Item eventKey={props.id}>
          {props.name}
      </NavDropdown.Item>
    </Link>
  )
}

export default DropdownItem