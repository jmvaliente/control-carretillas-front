import { LIST_MACHINE } from '../../types/index'


export default (state,action) => {  // generate Reducer 3
    switch(action.type){

        case LIST_MACHINE: 
            return {
                ...state,
                machinePrueba: action.payload
            }


        default:
            return state
    }
}