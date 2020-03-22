import React, { useState, useContext, useEffect } from 'react'
import MachineContext from '../context/machine/machineContext'
import axios from 'axios'


//// modal
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';

function getModalStyle() {  /// ubicacion
    const top = 50 ;
    const left = 50;
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles(theme => ({  ///styles
    paper: {
      position: 'absolute',
      width: 600,
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
}));

////modal






const Machine = ({machine}) => {
    
    //Use Context
    const machineContext = useContext(MachineContext) // useContext 2
    const { updateCompleteCharge} = machineContext  //Extraer state

    useEffect( () =>{

            updateCompleteCharge(machine)
             
    },[])
   
   
   
   
   
   
    ///// Config Modal
    const [modalStyle] = useState(getModalStyle)
    const [open, setOpen] = useState(false)

    const classes = useStyles()

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
        
    }
    ///////Config Modal
    

    ///////////control Time/////////

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

        if(hourTime>=8){
            return(
            <div>
                <h5 className="green-text">Carga Completa</h5>
                <a 
                    href={`/machine/${machine._id}`}
                    className="waves-effect waves-light btn"
                >
                    Detalles
                </a>
            </div>
            )
        }else{
            
            return (
                <div>
                <p>{`H. Recarga: ${hoursRest}:${minRest} Restante: ${hourTime}:${minTime}:${secTime}`}</p>
                        <button 
                            type="button"
                            className="waves-effect waves-light btn"
                            onClick={ () =>{
                                handleOpen()
                            }}
                            >Desconectar
                            </button>
                            <a 
                            href={`/machine/${machine._id}`}
                            className="waves-effect waves-light btn"
                            >
                            Detalles
                            </a>
            </div>
            )
        }
        
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
                            <p>RFID: {machine.nfc ? 'OK' :'NO'}</p>
                            {machine.nfcActive ? <p><span>{restTime()}</span></p>
                                                :
                                                <div>
                                                    <a 
                                                        href={`/machine/${machine._id}`}
                                                        className="waves-effect waves-light btn"
                                                    >
                                                        Detalles
                                                    </a>
                                                </div>
                                                }
                        </div>
                            <Modal
                                open={open}
                                onClose={() => {
                                    handleClose()
                                }}
                                onClick={() => {
                                    handleClose()
                                }}
                            >
                                <div style={modalStyle} className={classes.paper}>
                                <h2>Ciclo de Carga incompleto</h2>
                                <h5>Tec. Mantenimiento / operario</h5>
                                <input/>
                                <input type="submit" className="waves-effect waves-light btn" value="Insertar"/>
                                </div>
                            </Modal>
                    </div>
                </div>
            </div>
        </div>
      
    )
}

export default Machine