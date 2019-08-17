import types from "./types";

const change=item =>({
    type: types.CHANGE_INVOICE, item
});

export default {
    change
}
