import React, { Fragment, useContext, useEffect } from 'react'
import MachineContext from '../context/machine/machineContext' // import Context 1
import Machine from './Machine'

const Home = () => {

    //Use Context
    const machineContext = useContext(MachineContext) // useContext 2
    const {machine, listMachine} = machineContext  //Extraer state


    //add list Machine
    useEffect ( () => {
        listMachine()
    },[])

    //update for time

    setTimeout( () =>{
        listMachine()
        console.log("update")
    },2000)

    

    return(
        <Fragment>
            <nav>
                <h4>Disponible</h4>
            </nav>
                {machine.map( machine => (
                    <Machine
                        key = {machine.nfc}
                        machine = {machine}
                    />
                ))}
            <nav>
                <h4>Conectadas</h4>
            </nav>
            <nav>
                <h4>En uso</h4>
            </nav>

        </Fragment>
    )
}

export default Home