import types from "./types";

const invoiceReducer = (state ={}, action)=>{
    switch(action.type){
        case types.CHANGE_INVOICE:
            return {...state, ...action.item};
        default:
            return state;
    }
};

export default invoiceReducer
