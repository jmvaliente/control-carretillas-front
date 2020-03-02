import React from 'react'

const Machine = ({machine}) => {

    const restTime = () => {
        const date = new Date()
    
        //Hour Charge complete
        const timeConnect = new Date(machine.dateActive)
        timeConnect.setHours(timeConnect.getHours()+8)
        
        const hoursRest = timeConnect.getHours()
        const minRest = timeConnect.getMinutes()

        //Time Rest

        timeConnect.setHours(timeConnect.getHours()- date.getHours())
        timeConnect.setMinutes(timeConnect.getMinutes() - date.getMinutes())
        timeConnect.setSeconds(timeConnect.getSeconds() - date.getSeconds())
        const hourTime = timeConnect.getHours()
        const minTime =  timeConnect.getMinutes()
        const secTime = timeConnect.getSeconds()

        
        return (`H. Recarga: ${hoursRest}:${minRest} Restante: ${hourTime}:${minTime}:${secTime}`)
    }

    return(
        <div className="col s2">
            <div className="column">
                <div className="m2">
                    <div className="card">
                        <div className="card-image">
                            <img src={machine.image}/>
                        </div>
                        <div className="card-content">
                            <p>Tipo: <span>{machine.type}</span></p>
                            <p>Numero: <span>{machine.number}</span></p>
                            <p>Proveedor: <span>{machine.provider}</span></p>
                            {machine.nfcActive ? <p><span>{restTime()}</span></p> :null}
                            <p>RFID: {machine.nfc ? 'OK' :'NO'}</p>
                        </div>
                        <div className="card-action">
                            <a href={`/machine/${machine._id}`}>Detalles</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      
    )
}

export default Machine