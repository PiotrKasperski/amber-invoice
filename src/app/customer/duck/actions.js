import types from "./types";

const change = item => ({
    type: types.CHANGE_CUSTOMER, item
});

export default {
    change
}
