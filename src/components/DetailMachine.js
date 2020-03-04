import React, { useState, useEffect, Fragment, useContext } from 'react'
import Comments from './Comments'
import axios from 'axios'

const DetailMachine = (props) => {

    


    const [state,setState] = useState()

    

    const detailsMachine = async () =>{
        const machine = await axios.get(`http://localhost:3001/machine/${props.match.params.id}`)
        setState(machine)
    }
    

    useEffect( () => {

        detailsMachine()

    },[])

    console.log(state)

        if(state){

            return(
                
                <Fragment>
                    <div className="container">
                        <div className="row">
                        <div className="col s12 m12 card">
                        <div className="card blue-grey darken-1">
            
                            <div className="card-image">
                                <img src={state.data.image}/>
                            </div>
                            
                            <div className="card-content white-text">
                                <span className="card-title">{state.data.type}</span>
                            <p>Number: {state.data.number}</p>
                            <p>Provider: {state.data.provider}</p>
                            <p>Alta: {state.data.createdAt}</p>
                            
                            <div>
                                <span className="card-title">Comentarios</span>
                            </div>
                                <Comments 
                                    comments = {state.data.comments}
                                />
                            
                            </div>
                        </div>
                        </div>
                        </div>
                    </div>
                
                </Fragment>
            )
        } else {
            return(
                <h1>Cargando....</h1>
            )
        }
        
    

    
}

export default DetailMachine