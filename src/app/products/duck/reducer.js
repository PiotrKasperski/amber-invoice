import types from './types'
import currency from 'currency.js';


const initProducts = {
    list: [
        {
            key: 0,
            name: 'Kabel',
            symbol: '',
            unit: 'szt',
            count: 44,
            unitPrice: currency(12.50),
            nettoPrice: currency(550),
            vat:0.23,
            vatPrice: currency(126.50),
            bruttoPrice: currency(676.50)

        },
        {
            key: 1,
            name: 'gniazdo',
            symbol: '',
            unit: 'mb',
            count: 150,
            unitPrice: currency(4.60),
            nettoPrice: currency(690),
            vat: 0.23,
            vatPrice: currency(158.70),
            bruttoPrice: currency(848.70)

        }
    ]
};
const changeProduct = (state, item) => {
    console.log('change product', item);
    let newList = state.list;
    newList.forEach((product, index) => {
        if (product.key === item.key) {
            product = {...product, ...item};
            product.nettoPrice = product.unitPrice.multiply(product.count);
            product.vatPrice = product.nettoPrice.multiply(product.vat);
            product.bruttoPrice = product.nettoPrice.add(product.vatPrice);
            /* this.setState((state)=>({vatPrice: state.nettoPrice.multiply(state.vat)}));
           this.setState((state)=>({bruttoPrice: state.nettoPrice.add(state.vatPrice)}));*/
            newList[index] = product;
        }
    });
    return {
        ...state, list: newList
    };
};

const addProduct = (state, item) => {
    console.log('add item', item);
    if (!item) {
        item = {
            name: '',
            symbol: '',
            unit: '',
            count: 0,
            unitPrice: currency(0),
            nettoPrice: currency(0),
            vat: 0.23,
            vatPrice: currency(0),
            bruttoPrice: currency(0)

        }
    }
    item.key = new Date().getUTCSeconds().toString() + new Date().getUTCMilliseconds().toString();
    return {
        ...state, list: [...state.list, item]
    }
};

const deleteProduct = (state, key) => {
    let newList = state.list;
    newList.forEach((product, index) => {
        if (product.key === key) newList.splice(index, 1);
    });
    return {...state, list: newList};
};

const productsReducer = (state = initProducts, action) => {
    switch (action.type) {
        case types.ADD_PRODUCT:
            return addProduct(state, action.item);
        case types.DELETE_PRODUCT:
            return deleteProduct(state, action.key);
        case types.CHANGE_PRODUCT:
            return changeProduct(state, action.item);
        default:
            return state;
    }
};


export default productsReducer
