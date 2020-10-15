import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import AddService from './components/Admin/AddService/AddService';
import MakeAdmin from './components/Admin/MakeAdmin/MakeAdmin';
import TaskList from './components/Admin/TaskList/TaskList';
import Order from './components/Customer/Order/Order';
import Review from './components/Customer/Review/Review';
import ServiceList from './components/Customer/ServiceList/ServiceList';
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login';
import ProvateRoute from './components/ProvateRoute/ProvateRoute';

export const userContext = React.createContext();

function App() {
  if(sessionStorage.getItem('user') === null) sessionStorage.setItem('user', JSON.stringify({}));
  if(sessionStorage.getItem('services') === null) sessionStorage.setItem('services', JSON.stringify([]));

  const [loggedinUser, setLoggedinUser] = React.useState(JSON.parse(sessionStorage.user));
  const [services, setServices] = React.useState(JSON.parse(sessionStorage.services));

  return (
    <userContext.Provider
      value={
        {
          user: [loggedinUser, setLoggedinUser],
          servicesContext: [services, setServices]
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

          <ProvateRoute path="/customer/order/:id">
            <Order />
          </ProvateRoute>

          <ProvateRoute path="/customer/order">
            <Order />
          </ProvateRoute>

          <ProvateRoute path="/customer/serviceList">
            <ServiceList />
          </ProvateRoute>

          <ProvateRoute path="/admin/makeAdmin">
            <MakeAdmin />
          </ProvateRoute>

          <ProvateRoute path="/admin/addService">
            <AddService />
          </ProvateRoute>

          <ProvateRoute path="/admin/serviceList">
            <TaskList />
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
