import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios'

export const ModalContext = createContext()

const ModalProvider = (props) => {

    const [idMachine, setIdMachine] = useState(null)
    const [detailMachine, setDetailMachine] = useState({})

    useEffect( () => {
        const machineDetail = async () =>{
            if(!idMachine) return
            
            const url = `http://localhost:3001/machine/${idMachine}`

            const result = await axios.get(url)

            setDetailMachine(result.data)
        }
        machineDetail()
    },[idMachine])


    return(
        <ModalContext.Provider
            value={{
                detailMachine,
                setIdMachine

            }}
        >
            {props.children}
        </ModalContext.Provider>
    )
}

export default ModalProvider