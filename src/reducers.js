import {combineReducers} from "redux";
import productsReducer from "./app/products/duck";
import sellerReducer from "./app/seller/duck";
import customerReducer from "./app/customer/duck";
import invoiceReducer from "./app/invoice/duck";


const rootReducer = combineReducers({
    products: productsReducer,
    seller: sellerReducer,
    customer: customerReducer,
    invoice: invoiceReducer
});

export default rootReducer
