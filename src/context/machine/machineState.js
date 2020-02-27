import React, { useReducer } from 'react'
import MachineContext from './machineContext'
import MachineReducer from './machineReducer'

const MachineState = (props) => {  // define State 2

    const initialState = {
        
        active: false
    }

    //dispatch for ejecute actions 4

    const [state, dispatch] = useReducer(MachineReducer, initialState)


    return(
        <MachineContext.Provider
            value={{
                active: state.active
            }}
        >
            {props.children}
        </MachineContext.Provider>
    )
}

export default MachineState