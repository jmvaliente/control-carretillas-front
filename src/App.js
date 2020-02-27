import React,{Fragment, useState, useEffect} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom'
import axios from 'axios'
import Header from './components/Header'
import Form from './components/Form'
import Home from './components/Home'


function App() {

  const [machines, setMachine] = useState({})

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
          <Home machines={machines}
          />
        </Route>
        <Route exact path="/new-machine" component={Form}/>
        <Redirect to="/"/>
      </Switch>
      <button onClick={useEffect}>
        Reload
      </button>
    </Fragment>
  );
}

export default App;
