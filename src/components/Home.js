import React, { Fragment, useContext, useEffect } from 'react'
import MachineContext from '../context/machine/machineContext' // import Context 1
import Machine from './Machine'

const Home = () => {

    //Use Context
    const machineContext = useContext(MachineContext) // useContext 2
    const {machine, listMachine, machineCharge, machineUse, listMachineCharge, listMachineUse} = machineContext  //Extraer state


    //add list Machine
    useEffect ( () => {
        listMachine()
        listMachineCharge()
        listMachineUse()

    },[])



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
            {machineCharge.map( machine => (
                    <Machine
                        key = {machine.nfc}
                        machine = {machine}
                    />
                ))}
            <nav>
                <h4>En uso</h4>
            </nav>
            {machineUse.map( machine => (
                    <Machine
                        key = {machine.nfc}
                        machine = {machine}
                    />
                ))}

        </Fragment>
    )
}

export default Home