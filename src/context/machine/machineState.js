import React, { useReducer } from 'react'
import MachineContext from './machineContext'
import MachineReducer from './machineReducer'
import axios from 'axios'

import { LIST_MACHINE } from '../../types/index'  // Types for Map


const MachineState = (props) => {  // define State 2


    const initialState = {

        machine: []
    }

    //dispatch for ejecute actions 4

    const [state, dispatch] = useReducer(MachineReducer, initialState)

    ////List Machine with dispach

    const listMachine = async () => {

        try{
            const result = await axios.get('http://localhost:3001')


            dispatch({
                type: LIST_MACHINE,
                payload: result.data
            })

        } catch (error){
            console.log(error)
        }

        
    }




    return(
        <MachineContext.Provider
            value={{
                machine: state.machine,

                listMachine
            }}
        >
            {props.children}
        </MachineContext.Provider>
    )
}

export default MachineState