import React, {useState, useContext, useEffect} from 'react'
import {Link} from 'react-router-dom'
import AuthContext from '../../context/auth/AuthContext'



const New = (props) => {

    const authContext = useContext(AuthContext)
    const  { auth, createUser } = authContext

    const [login, setLogin] = useState({
        name: '',
        surname: '',
        email : '',
        password : ''
    })

    useEffect ( () =>{

        if(auth){
            props.history.push('/')
        }

    },[auth,props.history])



    const { email, password, name, surname } = login




    const onChange = (e) => {
        setLogin({
            ...login,
            [e.target.name] : e.target.value
        })
    }

    const onSubmit = (e) =>{

        e.preventDefault();

        createUser({
            email,
            password,
            name,
            surname
        })

    }


    return(
        <form
            onSubmit={onSubmit}
        >
            <div className="row">
                <div className="input-field col s12">
                    <input  id="name"
                            type="text"
                            name="name"
                            value={name}
                            onChange={onChange}
                            className="validate"/>

                    <label htmlFor="name">Nombre</label>
                </div>
            </div>

            <div className="row">
                <div className="input-field col s12">
                    <input  id="surname"
                            type="text"
                            name="surname"
                            value={surname}
                            onChange={onChange}
                            className="validate"/>

                    <label htmlFor="surname">Apellidos</label>
                </div>
            </div>

            <div className="row">
                <div className="input-field col s12">
                    <input  id="email"
                            type="email"
                            name="email"
                            value={email}
                            onChange={onChange}
                            className="validate"/>

                    <label htmlFor="email">email</label>
                </div>
            </div>

            <div className="row">
                <div className="input-field col s12">
                    <input  id="password"
                            type="password"
                            name="password"
                            value={password}
                            onChange={onChange}
                            className="validate"/>

                    <label htmlFor="password">Password</label>
                </div>
            </div>
            <div className="row">
                <input type="submit" className="waves-effect waves-light btn" value="Iniciar Sesion"/>
            </div>
            <Link to="/new-user">Registrarse</Link>
        </form>
    )
}

export default New