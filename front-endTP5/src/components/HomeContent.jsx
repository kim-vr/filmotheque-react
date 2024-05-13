import React from 'react';
import ContentBox from './ContentBox';
import { useState, useEffect } from 'react';

export const HomeContent = () => {
  const sections = [
    {
      title: "Plus récents",
      movies: "http://filmotheque.e-mingo.net/api/catalog/movie/?last",
    },
    {
      title: "Mieux notés",
      movies: "http://filmotheque.e-mingo.net/api/catalog/movie/?sort=vote",
    },
    {
      title: "Plus commentés",
      movies: "http://filmotheque.e-mingo.net/api/catalog/movie/?sort=post",
    },
  ];

  const [sectionData, setSectionData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [serverError, setServerError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const dataPromises = sections.map(async (section) => {
          const response = await fetch(section.movies);
          if (response.ok) {
            const sectionData = await response.json();
            return { title: section.title, movies: sectionData.slice(0, 6) };
          }
        });

        const data = await Promise.all(dataPromises);

        setIsLoading(false);
        setSectionData(data);
      } catch (error) {
        setServerError(error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div id="content" className="container">
      {isLoading && <span>Données en cours de chargement...</span>}
      {!isLoading && serverError ? (
        <span>Erreur de chargement des données !</span>
      ) : (
        sectionData.map((section, index) => (
          <ContentBox key={index} title={section.title} movies={section.movies} />
        ))
      )}
    </div>
  );
};

export default HomeContent;
