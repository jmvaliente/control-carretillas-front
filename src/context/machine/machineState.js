import React, { useReducer } from 'react'
import MachineContext from './machineContext'
import MachineReducer from './machineReducer'
import axios from 'axios'

import { LIST_MACHINE, CHARGE_MACHINE, USE_MACHINE } from '../../types'  // Types for Map

const allMachines = result => ({
    type: LIST_MACHINE,
    payload: result.data
})
const allChargeMachines = result => ({
    type: CHARGE_MACHINE,
    payload: result.data
})

const allUsedMachines = result => ({
    type: USE_MACHINE,
    payload: result.data
})

const MachineState = (props) => {  // define State 2


    const initialState = {

        machine: [],
        machineCharge: [],
        machineUse: [],

    }

    //dispatch for ejecute actions 4

    const [state, dispatch] = useReducer(MachineReducer, initialState)

    ////List Machine with dispach

    const listMachine = async () => {

        try{
            const result = await axios.get('http://localhost:3001')
            
            dispatch(allMachines(result))

        } catch (error){
            console.log(error)
        }
        
    }
    const listMachineCharge = async () => {

        try{
            const result = await axios.get('http://localhost:3001/machine_charge')

            dispatch(allChargeMachines(result))

        } catch (error){
            console.log(error)
        }
        
    }
    const listMachineUse = async () => {

        try{
            const result = await axios.get('http://localhost:3001/machine_use')

            dispatch(allUsedMachines(result))

        } catch (error){
            console.log(error)
        }
        
    }

    const updateCompleteCharge = async machine => {
        console.log(machine)
        try{
            const result = await axios.put(`http://localhost:3001/update/${machine._id}`,machine.completeCharge)
            console.log(machine)
            

        }catch (error){
            console.log(error)
        }
        
    }




    return(
        <MachineContext.Provider
            value={{
                machine: state.machine,
                machineCharge: state.machineCharge,
                machineUse: state.machineUse,

                listMachine,
                listMachineCharge,
                listMachineUse,
                updateCompleteCharge
            }}
        >
            {props.children}
        </MachineContext.Provider>
    )
}

export default MachineState