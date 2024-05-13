import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function ActorThumbnail({
  data: { name, id, character, profile_path },
}) {
  return (
    <Col>
      <Link to={"/actor/" + name}>
        <Card>
          <Card.Img variant="top" src={profile_path} alt={name} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{character}</Card.Text>
          </Card.Body>
        </Card>
      </Link>
    </Col>
  );
}
