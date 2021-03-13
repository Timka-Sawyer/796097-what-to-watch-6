import React, {useState} from "react";
import PropTypes from 'prop-types';
import {Tab} from "../../const";
import OverwiewPanel from "../overview-panel/overview-panel";
import DetailsPanel from "../details-panel/details-panel";
import ReviewsPanel from "../reviews-panel/reviews-panel";

const Tabs = (props) => {
  const tabs = [
    {
      id: Tab.OVERVIEW,
      name: Tab.OVERVIEW,
      isActive: true
    },
    {
      id: Tab.DETAILS,
      name: Tab.DETAILS,
      isActive: false
    },
    {
      id: Tab.REVIEWS,
      name: Tab.REVIEWS,
      isActive: false
    },
  ];

  const [activeTabId, setActiveTabId] = useState(tabs.find((tab)=>tab.isActive === true).id);

  const getPanel = (id) => {
    switch (id) {
      case Tab.OVERVIEW:
        return <OverwiewPanel
          description={props.film.description}
          director={props.film.director}
          starring={props.film.starring}
          rating={props.film.rating}
          reviewsCount={props.film.scoresCount}
        />;
      case Tab.DETAILS:
        return <DetailsPanel
          genre={props.film.genre}
          year={props.film.released}
          director={props.film.director}
          starring={props.film.starring}
          duration={props.film.runTime}
        />;
      case Tab.REVIEWS:
        return <ReviewsPanel />;
    }

    return null;
  };

  return <>
    <nav className="movie-nav movie-card__nav">
      <ul className="movie-nav__list">
        {
          tabs.map((tab)=>{
            const {
              id,
              name,
            } = tab;

            return <li key={name} className={`movie-nav__item ${activeTabId === id && `movie-nav__item--active`}`}>
              <a
                onClick={
                  (event)=>{
                    event.preventDefault();
                    setActiveTabId(id);
                  }
                }
                href="#"
                className="movie-nav__link"
              >{name}</a>
            </li>;
          })
        }
      </ul>
    </nav>
    {getPanel(activeTabId)}
  </>;
};

Tabs.propTypes = {
  film: PropTypes.shape({
    genre: PropTypes.string.isRequired,
    released: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    director: PropTypes.string.isRequired,
    starring: PropTypes.arrayOf(PropTypes.string).isRequired,
    runTime: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    scoresCount: PropTypes.number.isRequired,
  })
};

export default Tabs;
