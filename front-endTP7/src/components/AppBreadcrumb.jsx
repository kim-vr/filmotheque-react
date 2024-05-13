// Breadcrumb.js
import React from "react";
import { Breadcrumb, Container } from "react-bootstrap";
import { useLocation } from "react-router-dom";

export default function AppBreadcrumb() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  const lib = { movie: "Film", actor: "Acteur", genre: "Genre",register:"Inscription",login:"Connexion" };
  return (
    <Container>
      <Breadcrumb>
        <Breadcrumb.Item href="/">Accueil</Breadcrumb.Item>
        {pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length - 1;

          return (
            <Breadcrumb.Item
              key={index}
              {...(isLast ? { active: "active" } : { href: routeTo })}
            >
              {decodeURI(lib[name] || name)}
            </Breadcrumb.Item>
          );
        })}
      </Breadcrumb>
    </Container>
  );
}
