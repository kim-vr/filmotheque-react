import React from 'react'
import DropdownItem from './DropdownItem';
import { useState, useEffect } from 'react';
import { NavDropdown } from 'react-bootstrap';

function MenuGenres() {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [serverError, setServerError] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            fetch("http://filmotheque.e-mingo.net/api/catalog/genre")
            .then((response) => {
                if (response.ok) return response.json();
            })
            .then((data) => {
                setIsLoading(false);
                setData(data);
            })
            .catch((error) => {
                setServerError(error);
                setIsLoading(false);
            });
        };
        fetchData();
        }, []);
  return (
    <>
    {isLoading && <span> Données en cours de chargement ...</span>}
    {!isLoading && serverError ? (
    <span>Erreur de chargement des données ! </span>
    ) : (
    data && (
    <NavDropdown title="Genres" id="nav-dropdown">
        {data.map((genre, index) => (
            <DropdownItem key={index} id={genre.id} name={genre.name}/>
        ))}
    </NavDropdown>
  ))}
  </>
  )
}

export default MenuGenres