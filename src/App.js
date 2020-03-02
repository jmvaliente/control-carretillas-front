import React,{Fragment, useState, useEffect} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom'
import axios from 'axios'
import Header from './components/layout/Header'
import Form from './components/Form'
import Home from './components/Home'
import Login from './components/auth/Login'
import New from './components/auth/New'
import DetailMachine from './components/DetailMachine';


function App() {


  return (
    <Fragment>
      <Header/>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/new-user" component={New}/>
        <Route exact path="/new-machine" component={Form}/>
        <Route exact path="/machine/:id" component={DetailMachine}/>
        <Redirect to="/"/>
      </Switch>
    </Fragment>
  );
}

export default App;
