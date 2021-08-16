import React, { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Registered from './Components/RegisteredSheet/Registered'
import Register from './Components/Register/Register'
import Login from './Components/Login/Login.js'
import MainHome from './Components/MainHome/MainHome';
import Top from './Components/Home/Navbar/Top';
import Footer from './Components/Home/Footer/Footer';
import Dashboard from './Components/Dashboard/Dashboard';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';

export const UserContext = createContext();
function App() {
    const [loggedInUser, setLoggedInUser] = useState([]);
  return (
   <div>
    <UserContext.Provider  value={[loggedInUser, setLoggedInUser]}>
    <Router>
    <Top/>
    <Switch>
        <Route path="/registered">
         <Registered/>
        </Route>
        <Route path="/register">
            <Register/>
        </Route>
        <Route path="/login">
            <Login/>
        </Route>
        <Route path="/dashboard">
            <Dashboard/>
        </Route>
        <Route path="/">
            <MainHome/>
        </Route>
    </Switch>
    <Footer/>
    </Router>
    </UserContext.Provider>
   </div>
  );
}

export default App;
