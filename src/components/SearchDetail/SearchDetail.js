import React, { useContext, useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { UserContext } from '../../App';
import Hotel from '../../fakeData/Hotel';
import HotelDetail from '../HotelDetail/HotelDetail';
import Map from '../Map/Map';
import './SearchDetail.css';

const SearchDetail = () => {
  const {form} = useContext(UserContext);
  const [bookingForm, setBookingForm] = form;
  const {origin, destination, from, to} = bookingForm;

  const [hotelRoom, setHotelRoom] = useState([]);

  useEffect(() => {
    const findHotel = Hotel.filter(item => item.place === destination);
    setHotelRoom(findHotel);
  }, [])

  return (
    <Container className="search-detail">
      <h6>{origin} <span style={{fontSize: '14px', color: '#FFAF38', padding: '0 10px'}}>To</span> {destination}</h6>
      <p>{from} <span style={{fontSize: '14px', color: '#FFAF38', padding: '0 10px'}}>To</span> {to}</p>
      <Row>
        <Col lg={7}>
          <Row>
            {
              hotelRoom.map(hotel => (
                <Col lg={12}>
                  <HotelDetail hotel={hotel}></HotelDetail>
                </Col>
              ))
            }
          </Row>
        </Col>
        <Col lg={5}>
          <Map></Map>
        </Col>
      </Row>
    </Container>
  );
};

export default SearchDetail;