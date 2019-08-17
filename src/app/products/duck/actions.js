import types from './types'

const add = item => ({
    type: types.ADD_PRODUCT, item
});

const change = (item) => ({
    type: types.CHANGE_PRODUCT, item
});

const deleteProduct = (key) => ({
    type: types.DELETE_PRODUCT, key
});
export default {
    add,
    change,
    deleteProduct
}
