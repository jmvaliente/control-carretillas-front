import React from 'react'

const Machine = ({machine}) => {
    return(
        <div className="col s2">
            <div className="column">
                <div className="m2">
                    <div className="card">
                        <div className="card-image">
                            <img src={machine.image}/>
                        </div>
                        <div className="card-content">
                            <p>Numero: <span>{machine.number}</span></p>
                            <p>Proveedor: <span>{machine.provider}</span></p>
                            <p>RFID: {machine.nfc ? 'OK' :'NO'}</p>
                        </div>
                        <div className="card-action">
                            <a href="!#">This is a link</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      
    )
}

export default Machine