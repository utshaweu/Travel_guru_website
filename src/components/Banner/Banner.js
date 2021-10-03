import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Banner.css';
import Sajek from '../../Assets/images/Sajek.png';
import Sreemangal from '../../Assets/images/Sreemongol.png';
import Sundorbon from '../../Assets/images/sundorbon.png';
import destination from '../../fakeData/Destination';
import Place from '../Place/Place';


const Banner = () => {

  const [place, setPlace] = useState([]);
  const [selectedPlace, setSelectedPlace] = useState('Sajek');

  //console.log(place);

  useEffect(() => {
    const data = destination.find(item => item.title === selectedPlace);
    setPlace(data);
  },[selectedPlace]);

  const handlePlace = (placeName) => {
    setSelectedPlace(placeName);
  }


  return (
    <Container fluid={true} className="banner">
      <Container className="banner-top">
        <Row>
          <Col lg={4}>
            <Place place={place}></Place>
          </Col>
          <Col lg={8}>
            <Row>
              <Col lg={4}>
                <div className="place" onClick={() => handlePlace('Sajek')}>
                  <img src={Sajek} alt="" className={selectedPlace === 'Sajek' ? 'active-place': 'nonactive-place'}/>
                  <p>Sajek</p>
                </div>
              </Col>
              <Col lg={4}>
              <div className="place" onClick={() => handlePlace('Sreemangal')}>
                  <img src={Sreemangal} alt="" className={selectedPlace === 'Sreemangal' ? 'active-place': 'nonactive-place'}/>
                  <p>Sreemangal</p>
                </div>
              </Col>
              <Col lg={4}>
              <div className="place" onClick={() => handlePlace('Sundorbon')}>
                  <img src={Sundorbon} alt="" className={selectedPlace === 'Sundorbon' ? 'active-place': 'nonactive-place'}/>
                  <p>Sundorbon</p>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Banner;