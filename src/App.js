import React,{Fragment, useState, useEffect} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom'
import axios from 'axios'
import Header from './components/layout/Header'
import Form from './components/Form'
import Home from './components/Home'
import Login from './components/auth/Login'
import New from './components/auth/New'


function App() {

  const [machines, setMachine] = useState()

  useEffect( () =>{
    const machineList = async () => {
      
      const url = 'http://localhost:3001'
      
      const machine = await axios.get(url)
      
      setMachine(machine.data)
    }

    machineList()
    
  },[])

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
        <Redirect to="/"/>
      </Switch>
    </Fragment>
  );
}

export default App;
