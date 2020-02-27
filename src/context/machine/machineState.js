import React, { useReducer } from 'react'
import MachineContext from './machineContext'
import MachineReducer from './machineReducer'

import { LIST_MACHINE } from '../../types/index'  // Types for Map


const MachineState = (props) => {  // define State 2

    const machinePrueba =[
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

    const initialState = {

        machinePrueba: []
    }

    //dispatch for ejecute actions 4

    const [state, dispatch] = useReducer(MachineReducer, initialState)

    ////List Machine with dispach

    const listMachine = () => {
        dispatch({
            type: LIST_MACHINE,
            payload: machinePrueba
        })
    }




    return(
        <MachineContext.Provider
            value={{
                machinePrueba: state.machinePrueba,

                listMachine
            }}
        >
            {props.children}
        </MachineContext.Provider>
    )
}

export default MachineState