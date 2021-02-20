import React, {useState} from 'react';
import PropTypes from 'prop-types';
import FilmCard from '../film-card/film-card';

const FilmList = (props) => {
  const [activeFilmState, setActiveFilmState] = useState(0);
  const handleOnMouseOver = (evt) => {
    setActiveFilmState(evt.target.dataset.id);
  };

  return (
    <React.Fragment>
      <div className="catalog__movies-list" data-active={activeFilmState}>
        {
          props.films.map((el) =>
            <FilmCard
              key={el.name + el.id}
              film={el}
              id={el.id}
              onMouseOver={handleOnMouseOver}
            />)
        }
      </div>
    </React.Fragment>
  );
};

FilmList.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    genre: PropTypes.string,
    year: PropTypes.number,
    id: PropTypes.number,
  })),
};

export default FilmList;
