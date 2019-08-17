import React from 'react';


import './App.css';
import ProductConteiner from "./app/products/components/ProductContainer";
import SellerContainer from "./app/seller/components/SellerContainer";
import CustomerContainer from "./app/customer/components/CustomerContainer";
import InvoiceContainer from "./app/invoice/components/invoiceContainer";
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import Button from "@material-ui/core/Button";


function App() {
    const routes =[{id: 1, route:'/invoice', component:{InvoiceContainer}}];

    return (

        <Router>
            <header>
                <link rel="stylesheet"
                      href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"/>
            </header>

            <Link to={'/invoice'}><Button>Start</Button></Link>

            <Route path='/invoice' component={InvoiceContainer} />
            <Route path="/seller" component={SellerContainer}/>
            <Route path="/customer" component={CustomerContainer}/>
            <Route path="/products" component={ProductConteiner}/>

        </Router>

    );
}

export default App;
