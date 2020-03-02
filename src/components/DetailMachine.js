import React, { useState, useEffect, useContext } from 'react'
import MachineContext from '../context/machine/machineContext'
import axios from 'axios'

const DetailMachine = (id) => {

    //use Context
    //const machineContext = useContext(machineContext)
    //const {machine} = machineContext

    const [state,setState] = useState([])

    const detailsMachine = async () =>{
        const machine = await axios.get(`http://localhost:3001/machine/${id}`)
        setState(machine)
    }

    useEffect( () => {

        detailsMachine()

    },[])
    
    console.log(state)

    return(
        <h1>Detalles</h1>

    )
}

export default DetailMachine