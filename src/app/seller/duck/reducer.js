import types from "./types";




const sellerReducer = (state={}, action) => {
    switch (action.type) {
        case types.CHANGE_SELLER:
            return {...state, ...action.item};
        default:
            return state;
    }
};

export default sellerReducer
