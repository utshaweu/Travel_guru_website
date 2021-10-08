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
import Login from './pages/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Search from './pages/Search/Search';


export const UserContext = createContext();


function App() {

  const [bookingForm, setBookingForm] = useState({
    origin: '',
    destination: '',
    from: '',
    to: '',
    booking: false,
  });
  const [loggedInUser, setLoggedInUser] = useState({});

  //console.log(bookingForm);
  return (
    <UserContext.Provider
      value={{
        form: [bookingForm, setBookingForm],
        login: [loggedInUser,setLoggedInUser],
      }}
    >
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/search">
            <Search></Search>
          </PrivateRoute>
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
