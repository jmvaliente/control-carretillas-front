import React,{Fragment} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom'
import Header from './components/Header'
import Form from './components/Form'


function App() {
  return (
    <Fragment>
      <Header/>
      
      <Switch>
        <Route exact path="/new-machine" component={Form}/>
        <Redirect to="/"/>
      </Switch>
    </Fragment>
  );
}

export default App;
