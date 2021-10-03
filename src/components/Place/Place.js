import React from 'react';
import './Place.css';
import { Button, } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Place = ({place}) => {
  const {title, description} = place;
  return (
    <div className="placeContent">
      <h6>{title}</h6>
      <p>{description}</p>
      <div className="booking-btn">
       <Button variant="primary">Booking <FontAwesomeIcon icon={faArrowRight} /></Button>{' '}
      </div>
    </div>
  );
};

export default Place;