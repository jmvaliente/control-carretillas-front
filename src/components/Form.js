import React, {Fragment} from 'react'

const Form = () => {
    return(
        <Fragment>

            <div className='container'>
                <form className='col s12'>
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="first_name" type="text" className="validate"/>
                            <label htmlFor="first_name">Numero Transpalet</label>
                        </div>
                    </div>
                    <div className='row'>    
                        <div className="input-field col s6">
                            <input id="last_name" type="text" className="validate"/>
                            <label htmlFor="last_name">Proveedor</label>
                        </div>
                    </div>
                    <div className='row'>
                        <div className="switch">
                            <label>
                            Activar RFID: Off
                            <input type="checkbox"/>
                            <span className="lever"></span>
                            On
                            </label>
                        </div>
                    </div>

                </form>

            </div>
        </Fragment>
        
    )
}

export default Form