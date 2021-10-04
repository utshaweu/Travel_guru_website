import React, { useContext } from 'react';
import './BookingForm.css';
import { useForm } from "react-hook-form";
import { Col, Row } from 'react-bootstrap';
import { UserContext } from '../../App';

const BookingForm = ({place}) => {

  const {form} = useContext(UserContext);
  const [bookingForm, setBookingForm] = form;
  //console.log(bookingForm);

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => {
    setBookingForm(data);
  };

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    <div className="booking-form">
      <form onSubmit={handleSubmit(onSubmit)}>
        
        <label>Origin</label>
        <input defaultValue="Dhaka" type="text" {...register("origin", { required: true })}/>
        {errors.origin && <span className="error">This field is required</span>}

        <label>Destination</label>
        <input defaultValue={place.title} type="text" {...register("destination", { required: true })}/>
        {errors.destination && <span className="error">This field is required</span>}

        <Row>
          <Col lg={6}>
            <label>From</label>
            <input  type="date" {...register("from", { required: true })}/>
            {errors.from && <span className="error">This field is required</span>}
          </Col>
          <Col lg={6}>
          <label>To</label>
            <input  type="date" {...register("to", { required: true })}/>
            {errors.to && <span className="error">This field is required</span>}
          </Col>
        </Row>
        <br/>
        <input type="submit" value="Start Booking" className="booking-form-btn"/>
      </form>
    </div>
  );
};

export default BookingForm;