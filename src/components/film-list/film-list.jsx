import React from 'react';
import PropTypes from 'prop-types';
import FilmCard from '../film-card/film-card';

const FilmList = (props) => {


  return (
    <React.Fragment>
      <div className="catalog__movies-list">
        {
          props.films.map((el) =>
            <FilmCard
              id={el.id}
              key={el.name + el.id}
              film={el}
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
