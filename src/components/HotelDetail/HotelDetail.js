import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './HotelDetail.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const HotelDetail = ({hotel}) => {

  const {img, title, room, wifi, cancel, rating, price, totalPrice} = hotel;

  return (
    <>
     <Row>
       <Col lg={4}>
         <div className="hotel-img">
           <img src={img} alt="" className="w-100"/>
         </div>
       </Col>
       <Col lg={8}>
         <div className="hotel-detail">
           <h6>{title}</h6>
           <p>{room}</p>
           <p>{wifi}</p>
           <p>{cancel}</p>
           <Row>
             <Col lg={4}>
              <span><FontAwesomeIcon icon={faStar} />{rating}</span>
             </Col>
             <Col lg={4}>
               <span>${price}/night</span>
             </Col>
             <Col lg={4}>
             <span>${totalPrice}/total</span>
             </Col>
           </Row>
         </div>
       </Col>
     </Row>
    </>
  );
};

export default HotelDetail;