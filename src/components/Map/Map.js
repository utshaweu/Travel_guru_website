import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import location from '../../fakeData/Location';
import './Map.css';


const Map = () => {
  const {form} = useContext(UserContext);
  const [bookingForm, setBookingForm] = form;
  const {destination} = bookingForm;

  const [maps, setMaps] = useState({});
  //console.log(maps.locationMap);

  useEffect(() => {
    const data = location.find(item => item.place === destination);
    setMaps(data);
  },[])

  return (
    <div className="map">
      <iframe  src={maps.locationMap} allowfullscreen="" loading="lazy"></iframe>
    </div>
  );
};

export default Map;