import types from "./types";

const initState = {
    number: '1/05/2015',
    location: 'Częstochowa',
    sellDate: "2019-08-15",
    date: "2019-08-15"
};
const invoiceReducer = (state = initState, action) => {
    switch(action.type){
        case types.CHANGE_INVOICE:
            return {...state, ...action.item};
        default:
            return state;
    }
};

export default invoiceReducer
