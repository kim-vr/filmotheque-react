import React, { useState, useEffect } from 'react';
import { NavDropdown } from 'react-bootstrap';
import DropdownItem from './DropdownItem';

function MenuActors() {
    const [actors, setActors] = useState([]);
    const [searched, setSearched] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [serverError, setServerError] = useState(null);

    
    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            fetch("http://filmotheque.e-mingo.net/api/catalog/actor"+ "/" + searched)
            .then((response) => {
                if (response.ok) return response.json();
            })
            .then((data) => {
                setIsLoading(false);
                setActors(data);
            })
            .catch((error) => {
                setServerError(error);
                setIsLoading(false);
            });
        };
        fetchData();
    }, [searched]);

    return (
        <NavDropdown title="Acteurs" id="nav-dropdown">
            <form className="d-flex" role="search">
                <input
                    id="actor-search"
                    className="form-control mx-2"
                    type="search"
                    placeholder="Nom acteur"
                    aria-label="Nom acteur"
                    value={searched}
                    onChange={(e) => setSearched(e.target.value)}
                />
            </form>
            {isLoading && <span> Données en cours de chargement ...</span>}
            {!isLoading && serverError ? (
                <span>{serverError.message}</span>
            ) : (
                    actors.map((actor, index) => (
                        <DropdownItem key={index} id={actor.id} name={actor.name} />
                    ))
            )}
        </NavDropdown>
    );
}

export default MenuActors;
