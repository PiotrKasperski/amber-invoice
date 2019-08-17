import types from "./types";
const initCustom={};

const sellerReducer = (state=initCustom, action) => {
    switch (action.type) {
        case types.CHANGE_CUSTOMER:
            return {...state, ...action.item};
        default:
            return state;
    }
};

export default sellerReducer
