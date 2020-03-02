import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router} from 'react-router-dom'
import MachineState from './context/machine/machineState' // add Context
import AuthState from './context/auth/AuthState' //add autContext
import ModalProvider from './context/modal/ModalContext'

ReactDOM.render(
                <MachineState>
                    <Router>
                        <AuthState>
                            <ModalProvider>
                                <App />
                            </ModalProvider>
                        </AuthState>
                    </Router>
                </MachineState>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
