import React, { Fragment, useContext, useEffect } from 'react'
import MachineContext from '../context/machine/machineContext' // import Context 1
import Machine from './Machine'

const Home = () => {

    //Use Context
    const machineContext = useContext(MachineContext) // useContext 2
    const {machine, listMachine, machineCharge, machineUse, listMachineCharge, listMachineUse} = machineContext  //Extraer state


    //add list Machine
    useEffect ( () => {
        setInterval( () =>{  // set Interval for update  and clear interval
            
            listMachine()
            listMachineCharge()
            listMachineUse()

        },1000)
        // clearInterval(id)

    },[])



    return(
        <Fragment>
            <nav>
                <h4>Disponible</h4>
            </nav>
                <div className="row">
                    {machine.map( machine => (
                    <Machine
                        key = {machine.nfc}
                        machine = {machine}
                    />
                ))}

                </div>
                
            <nav>
                <h4>Conectadas</h4>
            </nav>
                <div className="row">
                   {machineCharge.map( machine => (
                        <Machine
                            key = {machine.nfc}
                            machine = {machine}
                        />
                    ))}
                </div>
            <nav>
                <h4>En uso</h4>
            </nav>
                <div className="row">
                    {machineUse.map( machine => (
                        <Machine
                            key = {machine.nfc}
                            machine = {machine}
                        />
                    ))}
                </div>

        </Fragment>
    )
}

export default Home