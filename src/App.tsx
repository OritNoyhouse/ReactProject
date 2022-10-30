import { getDefaultNormalizer } from '@testing-library/react';
import LogInPatients from './Components/LoginPatient/LoginPatient';
import AreaOfPatient from './Components/LoginPatient/AreaOfPatient';
import React, { Component } from 'react';
import './App.css';
import './App.css';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Nav from './Components/Nav/Nav';
 import Foot from './Components/Foot/Foot';
 import Manager from './Components/Manager/Manager';
 import Area from './Components/Manager/Area';
 import Home  from './Components/Home/Home';
 import Request  from './Components/RequestOf/Request';
 import SignInClient  from './Components/SignInClient/SignInClient';
 import UpdateAdress  from './Components/UpdateAdress/UpdateAdress';
import Information from './Components/Information/Information';
 import LogIn from './Components/Login/Login';
 import ListOfClients from './Components/ListOfClients/ListOfClients';
 import AreaOfDoctor from './Components/Login/AreaOfDoctor';
 import SignIn from './Components/SignIn/SignIn';
 import RouteS from './Components/Route/RouteS';
import Orders from './Components/Orders/Order';



function App() {
  return (
    <div className="App">
     
      <Router>
     <Nav></Nav>
     
       
      <Routes>
        <Route path="/addDoctor" element={<SignIn />} />
        <Route path="/" element={<Home />} />
        <Route path="/logindoctor" element={<LogIn/>} />
        <Route path="/manager" element={<Manager/>} />
        <Route path="/area" element={<Area/>} />
        <Route path="/areaofDoctor/:id/:firstName/:lastName" element={<AreaOfDoctor/>} />
        <Route path="/route/:id/:firstName/:lastName" element={<RouteS/>} />
        <Route path="/ListOfClients" element={< ListOfClients/>} />
        <Route path="/Information" element={< Information/>} />
        <Route path="/loginpatient" element={<LogInPatients />} />
        <Route path="/SignInClient" element={<SignInClient />} />
        <Route path="/RequestOfOrder" element={<Request />} />
        <Route path="/UpdateAdress/:id/:firstName/:lastName" element={<UpdateAdress />} />
        <Route path="/order/:id/:firstName/:lastName" element={<Orders />} />
        <Route path="/AreaOfPatient/:id/:firstName/:lastName" element={<AreaOfPatient/ >} /> 
       
      </Routes>
      <Foot></Foot>
      </Router>
    
    </div>
  );
}
export default App;


  





