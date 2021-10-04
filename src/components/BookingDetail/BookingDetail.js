import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import destination from '../../fakeData/Destination';
import BookingForm from '../BookingForm/BookingForm';
import './BookingDetail.css';

const BookingDetail = () => {

  const {name} = useParams();
  const [placeItem, setPlaceItem] = useState([]);
  // console.log(placeItem);
  const {title, description} = placeItem;


  useEffect(() => {
    const place = destination.find(item => item.title === name);
    setPlaceItem(place);
  }, [name])


  return (
    <Container fluid={true} className="booking-detail">
      <Container className="booking-top">
        <Row>
          <Col lg={6}>
            <h6>{title}</h6>
            <p>{description}</p>
          </Col>
          <Col lg={6}>
            <BookingForm place={placeItem}></BookingForm>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default BookingDetail;