import React, { useContext } from 'react';
import './BookingForm.css';
import { Col, Row } from 'react-bootstrap';
import { UserContext } from '../../App';
import { Link } from "react-router-dom";

const BookingForm = ({place}) => {

  const {form} = useContext(UserContext);
  const [bookingForm, setBookingForm] = form;

  //console.log(bookingForm);

  const handleDate = (e) => {
    const newUserFrom = {...bookingForm};
    newUserFrom[e.target.name] = e.target.value;
    setBookingForm(newUserFrom);
    
    if(newUserFrom.from && newUserFrom.to){
      newUserFrom.origin = "Dhaka";
      newUserFrom.destination = place.title;
      newUserFrom.bookingDone = true;
      setBookingForm(newUserFrom);
    }
  }

  const handleAlert = (e) => {
    alert('Select date');
    e.preventDefault();
  }

  return (
    <div className="booking-form">
      <form action="">
        
        <label htmlFor="origin">Origin</label>
        <input type="text" name="origin" defaultValue="Dhaka"/>

        <label htmlFor="destination">Destination</label>
        <input type="text" name="destination" defaultValue={place.title}/>

        <Row>
          <Col lg={6}>
            <label htmlFor="from">From</label>
            <input type="date" name="from" onChange={handleDate}/>
          </Col>
          <Col lg={6}>
            <label htmlFor="to">To</label>
            <input type="date" name="to" onChange={handleDate}/>
          </Col>
        </Row>
        {
          bookingForm.bookingDone ? (
            <Link to="/search">
              <button className="booking-form-btn">Start Booking</button>
            </Link>
          ) : (
            <button className="booking-btn" onClick={handleAlert} disabled>Start Booking</button>
          )
        }
      </form>
    </div>
  );
};

export default BookingForm;