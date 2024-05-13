import React from 'react'
import { NavDropdown } from 'react-bootstrap'

function DropdownItem(props) {
  return (
    <NavDropdown.Item eventKey={props.id}>
        {props.name}
    </NavDropdown.Item>
  )
}

export default DropdownItem