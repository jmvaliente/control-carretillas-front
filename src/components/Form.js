import React, { useState, useContext } from 'react'

const Form = () => {
    
    
    const [state, setState] = useState({
        number: '',
        nfc: false,
        provider:''
    })
    
    const onChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = (e) =>{

        e.preventDefault()



    }
    
    const {number, nfc, provider} = state
    


    return(
                <form
                    onSubmit={onSubmit}
                >
                    <div className="row">
                        <div className="input-field col s6">
                            <input  id="number"
                                    type="text"
                                    name="number"
                                    value={number}
                                    onChange={onChange}
                                    className="validate"/>

                            <label htmlFor="first_name">Numero Transpalet</label>
                        </div>
                    </div>
                    <div className='row'>    
                        <div className="input-field col s6">
                            <input  id="provider"
                                    type="text"
                                    name="provider"
                                    onChange={onChange}
                                    value={provider}
                                    className="validate"/>

                            <label htmlFor="last_name">Proveedor</label>
                        </div>
                    </div>
                    <div className='row'>
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

                    <div className="row">
                        <input type="submit" className="waves-effect waves-light btn" value="Insertar"/>
                    </div>

                </form>
    )
}

export default Form