import types from "./types";

const initCustom = {
    nameLine1: "Orlen",
    nameLine2: "Spólka Cywilna",
    addressLine1: "42-200 Częstochowa",
    addressLine2: "ul. Kowalskiego 8/13",
    nip: 5493813448,
    regon: null
};

const sellerReducer = (state=initCustom, action) => {
    switch (action.type) {
        case types.CHANGE_CUSTOMER:
            return {...state, ...action.item};
        default:
            return state;
    }
};

export default sellerReducer
