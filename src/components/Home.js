import React, { Fragment } from 'react'
import Machine from './Machine'

const Home = ({machines}) => {

    const machinePrueba = [
        {
            machine:"1",
            nfc:"26",
            nfcActive: true
        },
        {
            machine:"2",
            nfc:"35",
            nfcActive: false 
        }
    
    ]

    
    return(
        <Fragment>
            <nav>
                <h4>Disponible</h4>
            </nav>
                
                {machinePrueba.map(machine => (
                    <Machine
                        key={machine.nfc}
                        machine={machine}
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