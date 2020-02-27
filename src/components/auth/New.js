import React, {useState} from 'react'
import {Link} from 'react-router-dom'



const New = () => {

    const [login, setLogin] = useState({
        name: '',
        user: '',
        email : '',
        password : ''
    })

    const { email, password, name, user } = login




    const onChange = (e) => {
        setLogin({
            ...login,
            [e.target.name] : e.target.value
        })
    }

    const onSubmit = (e) =>{

        e.preventDefault();

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

                    <label htmlFor="user">Nombre</label>
                </div>
            </div>

            <div className="row">
                <div className="input-field col s12">
                    <input  id="user"
                            type="text"
                            name="user"
                            value={user}
                            onChange={onChange}
                            className="validate"/>

                    <label htmlFor="user">Usuario</label>
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

                    <label htmlFor="user">email</label>
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