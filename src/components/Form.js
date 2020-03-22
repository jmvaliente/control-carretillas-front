import React, { useState, useContext } from 'react'
import { Link } from '@material-ui/core'

const Form = () => {
    
    
    const [state, setState] = useState({
        number: '',
        nfc: false,
        provider:'',
        type:'',
        image:''
    })
    
    const onChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = (e) =>{

        e.preventDefault()

        setState(e)

    }
    
    const {number, nfc, provider, type, image} = state
    


    return(
            <div className="container">
                <div className="row">
                    <div className="col s12 m12 card">
                        <form
                            onSubmit={onSubmit}
                        >
                            <h2>Añadir maquina</h2>
                            <div>
                                <div className="input-field">
                                    <input  id="number"
                                            type="text"
                                            name="number"
                                            value={number}
                                            onChange={onChange}
                                            className="validate"/>

                                    <label htmlFor="first_name">Numero Transpalet</label>
                                </div>
                            </div>

                            <div>    
                                <div className="input-field">
                                    <input  id="provider"
                                            type="text"
                                            name="provider"
                                            onChange={onChange}
                                            value={provider}
                                            className="validate"/>

                                    <label htmlFor="last_name">Proveedor</label>
                                </div>
                            </div>

                            <div>    
                                <div className="input-field">

                                    <input  id="type"
                                            type="text"
                                            name="type"
                                            onChange={onChange}
                                            value={type}
                                            className="validate"/>

                                    <label htmlFor="last_name">Tipo Maquinaria</label>
                                </div>
                            </div>

                            <div>
                                <div className="switch">
                                    <label>
                                    Activar RFID: Off
                                    <input  type="checkbox"
                                            name="nfc"
                                            onChange={onChange}
                                            value={nfc} />
                                    <span className="lever"></span>
                                    On
                                    </label>
                                </div>
                            </div>

                            <div className="center">
                                <input type="submit" className="waves-effect waves-light btn" value="Insertar"/>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
    )
}

export default Form