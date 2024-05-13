import React from 'react'
import ContentBox from './ContentBox';

const sections = [
  { title: "Plus récents",
  movies: [ { title: "X-MAN", poster_path: "images/movie1.jpg" }, { title: "SPIDER MAN 2", poster_path: "images/movie2.jpg" }, { title: "SPIDER MAN 3", 
 poster_path: "images/movie3.jpg" },{ title: "VALKYRIE", poster_path: "images/movie4.jpg" },{ title: "GLADIATOR", poster_path: "images/movie5.jpg" },{ title: "ICE AGE", poster_path: "images/movie6.jpg" } ],
  },
  { title: "Mieux notés",
  movies: [ { title: "TRANSFORMERS", poster_path: "images/movie7.jpg" }, { title: "MAGNETO", poster_path: "images/movie8.jpg" }, { title: "KUNG FU PANDA", 
 poster_path: "images/movie9.jpg" }, { title: "EAGLE EYE", poster_path: "images/movie10.jpg" }, { title: "NARNIA", poster_path: "images/movie11.jpg" },{ title: 
 "ANGELS &amp; DEMONS", poster_path: "images/movie12.jpg" } ],
  },
  { title: "Plus commentés",
  movies: [ { title: "HOUSE", poster_path: "images/movie13.jpg" },{ title: "VACANCY", poster_path: "images/movie14.jpg" }, { title: "MIRRORS", poster_path: 
 "images/movie15.jpg" }, { title: "THE KINGDOM", poster_path: "images/movie16.jpg" }, { title: "MOTIVES", poster_path: "images/movie17.jpg" },
  { title: "THE PRESTIGE", poster_path: "images/movie18.jpg" } ],
  }];

export const HomeContent = () => {
  return (
    <div id="content" class="container" >
        {sections.map(section => (
            <ContentBox title={section.title} movies={section.movies} />
        ))}
    </div>
  )
}

export default HomeContent;