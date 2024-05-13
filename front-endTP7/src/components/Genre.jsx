import React from 'react'
import { Outlet, useLoaderData } from 'react-router-dom';
import GenreNav from './GenreNav'
import { Col, Row, Container } from 'react-bootstrap'

function Genre() {
  const genres = useLoaderData();
  return (
    <Container>
      <Row className="row-cols-2 w-100 d-flex">
        <Col className="w-25 nav2">
          <Container>
            <GenreNav genres={genres}/>
          </Container>
        </Col>
        <Col className="w-75">
          <Outlet/>
        </Col>
      </Row>
    </Container> 
  )
}

export default Genre