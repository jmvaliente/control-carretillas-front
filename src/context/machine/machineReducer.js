import { LIST_MACHINE, CHARGE_MACHINE, USE_MACHINE } from '../../types/index'


export default (state,action) => {  // generate Reducer 3
    switch(action.type){

        case LIST_MACHINE: 
            return {
                ...state,
                machine: action.payload
            }
        case CHARGE_MACHINE:
            return{
                ...state,
                machineCharge: action.payload
            }
        case USE_MACHINE:
            return{
                ...state,
                machineUse: action.payload
            }


        default:
            return state
    }
}