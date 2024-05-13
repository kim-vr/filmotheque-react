import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from './components/Home';
import Genre from './components/Genre';
import GenreList from './components/GenreList';
import GenreDetails from './components/GenreDetails';
import Actor from './components/Actor';
import ActorList from './components/ActorList';
import ActorDetails from './components/ActorDetails';
import Movie from './components/Movie';
import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';


const route = createBrowserRouter([
  {
    path: "/",
    element:(<App /> ),
    children: [
      {
        index: true,
        element:(<Home />),
      },
      {
        path: "genre",
        element: <Genre />,
        loader: async ({ request, params }) => {
          const data = await fetch("http://filmotheque.e-mingo.net/api/catalog/genre").then((res) => {
            if (res.status === 404) {
              throw new Response("Not Found", { status: 404 });
            }
            return res.json();
          });

          return data;
        },
        children: [
          {
            index: true,
            element: <GenreList />,
            loader: async ({ request, params }) => {
              let apiUrl = `http://filmotheque.e-mingo.net/api/catalog/movie/?genre`;
              const data = await fetch(apiUrl).then((res) => {
                console.log(res);
                if (res.status === 404) {
                  throw new Response("Not Found", { status: 404 });
                }
                return res.json();
              });
              return data;
            },
          },
          {
            path: ':id',
            element: <GenreDetails/>,
            loader: async ({ request, params }) => {
              const response = await fetch(`http://filmotheque.e-mingo.net/api/catalog/genre/${params.id}`);
              if (response.status === 404) {
                throw new Response("Not Found", { status: 404 });
              }
              
              return response.json();
            },
            errorElement: <p>La page demandée est introuvable</p>,
          },
        ],
      },
      {
        path: "actor",
        element: <Actor />,
        children: [
          {
            index: true, element: <ActorList /> 
          },
          {
            path: ':id',
            element: <ActorDetails/>
          },
        ],
      },
      {
        path: "movie",
        element: <Movie />,
        children: [
          {
            index: true, element: <MovieList />
          },
          {
            path: ':id',
            element: <MovieDetails />
          },
        ],
      },
    ],
  },
  {
    path: "*",
    element:<p>La page demandée est introuvable</p>
  }
]);




const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
 <React.StrictMode>
 <RouterProvider router={route}></RouterProvider>
 </React.StrictMode>
);
