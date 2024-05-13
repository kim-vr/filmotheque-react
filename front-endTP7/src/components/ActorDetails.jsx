import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import MovieThumbnail from "./MovieThumbnail";

export default function ActorDetails() {
  const actor = useLoaderData();
  if (!actor) throw new Error("Acteur introuvable");
  const { id, name, profile_path, movies } = actor;
  return (
    <Container key={id}>
      <Row className="mh-50">
        <Container fluid className="large rounded first text-white  p-0">
          <Container fluid className="custom_bg p-5">
            <Row className="row-cols-2 flex align-items-center justity-items-center">
              <Col className="col-3 text-align-center">
                <Image
                  className="img-thumbnail"
                  fluid
                  src={
                    profile_path ||
                    `https://placehold.co/300x450/EEE/31343C?font=montserrat&text=${name}`
                  }
                />
              </Col>
              <Col className="col-9">
                <h1>{name}</h1>
                <br />
                <br />
              </Col>
            </Row>
          </Container>
        </Container>
        <br />
        <br />
        <Container fluid>
          <h2>Filmographie</h2>
          <Row
            xl={6}
            lg={5}
            md={4}
            sm={3}
            xs={2}
            className="g-4 justify-content-center"
          >
            {movies?.map((movie) => (
              <Col key={movie.id}>
                <MovieThumbnail data={movie} />
                <h5>{movie.title}</h5>
                <p>{movie.credits}</p>
              </Col>
            ))}
          </Row>
        </Container>
      </Row>
    </Container>
  );
}
