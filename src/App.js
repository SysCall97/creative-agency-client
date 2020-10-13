import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Order from './components/Customer/Order/Order';
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login';
import ProvateRoute from './components/ProvateRoute/ProvateRoute';

export const userContext = React.createContext();

function App() {
  const [loggedinUser, setLoggedinUser] = React.useState({});
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

          <ProvateRoute path="/customer/order">
            <Order />
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
