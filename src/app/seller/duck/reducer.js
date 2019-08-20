import types from "./types";


const initState = {
    nameLine1: "Grzegorz KAsperski",
    nameLine2: "AMBER",
    addressLine1: "ul. Włodawska 2",
    addressLine2: "42-221 Częstochowa",
    nip: 5731403011,
    regon: 243364691
};

const sellerReducer = (state = initState, action) => {
    switch (action.type) {
        case types.CHANGE_SELLER:
            return {...state, ...action.item};
        default:
            return state;
    }
};

export default sellerReducer
