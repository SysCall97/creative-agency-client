import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import AddEvent from './components/Admin/AddEvent/AddEvent';
import Order from './components/Customer/Order/Order';
import Review from './components/Customer/Review/Review';
import ServiceList from './components/Customer/ServiceList/ServiceList';
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login';
import ProvateRoute from './components/ProvateRoute/ProvateRoute';

export const userContext = React.createContext();

function App() {
  if(sessionStorage.getItem('user') === null) sessionStorage.setItem('user', JSON.stringify({}));
  const [loggedinUser, setLoggedinUser] = React.useState(JSON.parse(sessionStorage.user));
  return (
    <userContext.Provider
      value={
        {
          user: [loggedinUser, setLoggedinUser]
        }
      }>
      <BrowserRouter>
        <Switch>

          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/home">
            <Home />
          </Route>

          <Route path="/addEvent">
            <AddEvent />
          </Route>

          <ProvateRoute path="/customer/order">
            <Order />
          </ProvateRoute>

          <ProvateRoute path="/customer/serviceList">
            <ServiceList />
          </ProvateRoute>

          <ProvateRoute path="/customer/review">
            <Review />
          </ProvateRoute>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="*">

          </Route>

        </Switch>
      </BrowserRouter>
    </userContext.Provider>
  );
}

export default App;
