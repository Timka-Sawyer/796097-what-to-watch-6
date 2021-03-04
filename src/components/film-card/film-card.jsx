import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import CardPlayer from '../card-player/card-player';

const FilmCard = (props) => {
  const {setFilm, film} = props;
  const {previewImage, name, id, previewVideoLink} = film;

  const [isActive, setIsActive] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);


  const handleMouseEnter = () => {
    if (setFilm) {
      setFilm(film);
    }
    setIsActive(true);
    setIsPlaying(true);
  };

  const handleMouseLeave = () => {
    setIsActive(false);
  };

  return (
    <article className="small-movie-card catalog__movies-card" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="small-movie-card__image" data-id={props.film.id} >
        {isActive ? (
          <CardPlayer
            url={previewVideoLink}
            previewImage={previewImage}
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
          />
        ) : (
          <img src={previewImage} alt={name} width={280} height={175} />
        )}
      </div>
      <h3 className="small-movie-card__title">
        <Link className="small-movie-card__link" to={`/films/${id}`}>{props.film.name}</Link>
      </h3>
    </article>
  );
};

FilmCard.propTypes = {
  film: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    posterImage: PropTypes.string.isRequired,
    previewImage: PropTypes.string.isRequired,
    backgroundImage: PropTypes.string.isRequired,
    backgroundColor: PropTypes.string.isRequired,
    videoLink: PropTypes.string.isRequired,
    previewVideoLink: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    scoresCount: PropTypes.number.isRequired,
    director: PropTypes.string.isRequired,
    starring: PropTypes.arrayOf(PropTypes.string.isRequired),
    runTime: PropTypes.number.isRequired,
    genre: PropTypes.string.isRequired,
    released: PropTypes.number.isRequired,
    isFavorite: PropTypes.bool.isRequired,
  }),
  onMouseOver: PropTypes.func,
  setFilm: PropTypes.func,
};

export default FilmCard;
