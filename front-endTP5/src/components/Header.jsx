import React from 'react'
import MenuGenres from './MenuGenres';
import MenuActors from './MenuActors';

function Header() {
    return (
    <div id="header" >
            <nav class="navbar navbar-expand-md">
            <div class="container">
                <a class="navbar-brand" href="#"
                ><img class="w-50" src="images/logo-h.png"
                /></a>
                <button
                class="navbar-toggler ms-auto-md"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
                >
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                    <a class="nav-link active" href="#">Accueil</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">Tous</a>
                    </li>
                    <MenuGenres/>
                    <MenuActors/>
                    <li class="nav-item search-box">
                    <form class="d-flex" role="search">
                        <button class="btn-search">
                        <i class="fas fa-search"></i>
                        </button>
                        <input
                        type="text"
                        class="input-search"
                        placeholder="Recherche..."
                        />
                    </form>
                    </li>
                </ul>
                </div>
            </div>
            </nav>
    </div>
    )
}

export default Header;

