import React, { createContext, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './pages/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Booking from './pages/Booking/Booking';


export const UserContext = createContext();


function App() {
  const [bookingForm, setBookingForm] = useState({});
  console.log(bookingForm);
  return (
    <UserContext.Provider
      value={{
        form: [bookingForm, setBookingForm],
      }}
    >
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/place/:name">
            <Booking></Booking>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
