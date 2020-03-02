import React, {useReduce, useReducer} from 'react'
import AuthReducer from './AuthReducer'
import AuthContext from './AuthContext'
import ClientAxios from '../../services/clientAxios'

import {REGISTER_SUCCESS,
    REGISTER_ERROR,
    LOGIN_SUCCESS,
    LOGIN_ERROR,
    USER_SUCCESS,
    LOGOUT_SUCCESS} from '../../types/index'
import clientAxios from '../../services/clientAxios'

const AuthState = props => {

    const initialState = {
        token: localStorage.getItem('token'),
        auth: null,
        user: null,
        msg: null
    }

    const [ state, dispatch ] = useReducer(AuthReducer, initialState)

    // funcion create user

    const createUser = async data => {
        try{
            const respon = await clientAxios.post('/mant/create', data)

            dispatch({
                type: REGISTER_SUCCESS,
                payload: respon.data
            })


        } catch (error) {           /// completar error

            dispatch({
                type: REGISTER_ERROR
            })
        }
    }

    // return user auth

    const userAuth = async () =>{
        const token = localStorage.getItem('token')
        if(token){
            //enviar token por headers
        }

        try{
            const respon = await clientAxios.get('')

        }catch (error){

            dispatch({
                type: LOGIN_ERROR
            })
        }
    }

    // login user 

    const loginSession = async data =>{
        try{ 

            const respon = await clientAxios.post('/mant/login', data)
            console.log(respon)
            
        } catch (error) {
            console.log(error)
        }
    }
 
    return(
        <AuthContext.Provider
            value={{
                token: state.token,
                auth: state.auth,
                user: state.user,
                msg: state.msg,
                
                createUser,
                loginSession
            }}
        >
            {props.children}

        </AuthContext.Provider>


    )

}

export default AuthState