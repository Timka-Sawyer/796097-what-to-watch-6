import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const FilmCard = (props) => {
  return (
    <article className="small-movie-card catalog__movies-card">
      <div className="small-movie-card__image" data-id={props.film.id} onMouseOver={props.onMouseOver}>
        <img src={props.film.previewImage} alt={props.film.name} width={280} height={175} />
      </div>
      <h3 className="small-movie-card__title">
        <Link className="small-movie-card__link" to={`/films/${props.film.id}`}>{props.film.name}</Link>
      </h3>
    </article>
  );
};

FilmCard.propTypes = {
  film: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    genre: PropTypes.string,
    released: PropTypes.number,
    previewImage: PropTypes.string,
  }),
  onMouseOver: PropTypes.func,
};

export default FilmCard;
