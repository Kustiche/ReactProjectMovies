import { useState } from "react";
import poster from "../resources/img/hero/cover.png";
import Sidebar from "./Sidebar";

export default function Hero() {
  const [searchObject, setSearchObject] = useState(null);

  function search(e) {
    e.preventDefault();
    const form = e.target.closest(".sidebar__form");
    const nameInput = form.querySelector(".sidebar__search");
    const yearInput = form.querySelector(".sidebar__year");
    const url = `https://www.omdbapi.com/?apikey=96058abc&t=${nameInput.value}${
      yearInput.value !== null ? "&y=" + yearInput.value : null
    }`;
    const errorMovie = {
      name: "Error: ",
      message: "Movie not found!",
    };

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data.Response === "True") {
          setSearchObject(data);
        } else {
          throw errorMovie;
        }
      })
      .catch((error) => alert(`${error.name}${error.message}`));
  }
  if (searchObject === null) {
    return (
      <section className="hero">
        <Sidebar onClick={search} />
        <div className="hero__container container">
          <div className="hero__wrap">
            <img className="hero__img" src={poster} alt="Cover" />
            <div className="hero__content">
              <p className="hero__years">2016–2024</p>
              <h1 className="hero__title">Stranger Things</h1>
              <p className="hero__paragraph">
                <span className="hero__text">Type: </span>series
              </p>
              <p className="hero__paragraph">
                <span className="hero__text">Actors: </span>Millie Bobby Brown, Finn Wolfhard, Winona Ryder
              </p>
              <p className="hero__paragraph">
                <span className="hero__text">Plot: </span>
                In a small town where everyone knows everyone, a peculiar incident starts a chain of events that leads
                to the disappearance of a child, which begins to tear at the fabric of an otherwise peaceful community.
                Dark government agencies and seemingly malevolent supernatural forces converge on the town, while a few
                of the locals begin to understand that there's more going on than meets the eye.
              </p>
              <p className="hero__paragraph">
                <span className="hero__text">Rating imdb: </span>8.5
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  } else {
    return (
      <section className="hero">
        <Sidebar onClick={search} />
        <div className="hero__container container">
          <div className="hero__wrap">
            <img className="hero__img" src={searchObject.Poster} alt="Cover" />
            <div className="hero__content">
              <p className="hero__years">{searchObject.Year}</p>
              <h1 className="hero__title">{searchObject.Title}</h1>
              <p className="hero__paragraph">
                <span className="hero__text">Type: </span>
                {searchObject.Type}
              </p>
              <p className="hero__paragraph">
                <span className="hero__text">Actors: </span>
                {searchObject.Actors}
              </p>
              <p className="hero__paragraph">
                <span className="hero__text">Plot: </span>
                {searchObject.Plot}
              </p>
              <p className="hero__paragraph">
                <span className="hero__text">Rating imdb: </span>
                {searchObject.imdbRating}
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
