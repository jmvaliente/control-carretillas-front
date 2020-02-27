import React, { Fragment } from 'react'
import Machine from './Machine'

const Home = ({machines}) => {

    
    return(
        <Fragment>
            <nav>
                <h4>Disponibles</h4>
            </nav>
                {/*
                {machines.map(machine => (
                    <Machine
                        key={machine.nfc}
                        machine={machine}
                    />    
                ))}
                */}
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