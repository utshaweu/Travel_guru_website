import React from 'react';
import './Place.css';
import { Button, } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Place = ({place}) => {
  const {title, description} = place;
  return (
    <div className="placeContent">
      <h6>{title}</h6>
      <p>{description}</p>
      <div className="booking-button">
       <Link to={`/place/${title}`}>
        <Button variant="primary">Booking <FontAwesomeIcon icon={faArrowRight} /></Button>{' '}
       </Link>
      </div>
    </div>
  );
};

export default Place;