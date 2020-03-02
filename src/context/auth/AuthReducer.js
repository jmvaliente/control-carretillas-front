import {REGISTER_SUCCESS,
        REGISTER_ERROR,
        LOGIN_SUCCESS,
        LOGIN_ERROR,
        USER_SUCCESS,
        LOGOUT_SUCCESS} from '../../types/index'


export default (state,action) => {  // generate Reducer 3
    switch(action.type){

        case REGISTER_SUCCESS:
            localStorage.setItem('token', action.payload.token)

            return {
                ...state,
                auth: true,
                msg: null
            }
        case LOGIN_ERROR:
        case REGISTER_ERROR:
            localStorage.removeItem('token')
            return{
                ...state,
                token: null,
                msg: action.payload
                }


        default:
            return state
    }
}