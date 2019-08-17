import React from 'react'
import {Paper} from "@material-ui/core";
import Input from "@material-ui/core/Input";
import {connect} from "react-redux";
import {invoiceActions} from "../duck";
import Button from "@material-ui/core/Button";
import NavigationContainer from "../../Navigation/NavigationContainer"

import {NavLink, Link, BrowserRouter as Router} from "react-router-dom";

const InvoiceContainer= (props)=>{
    const handleChange =(event)=>{
        props.change({[event.target.name]: event.target.value})
    };

    return <Paper>
            <Input name='number' type='text' placeholder='numer faktury' value={props.invoice.number} onChange={handleChange}/>

            <Input name='location' type='text' placeholder='miejscowość'value={props.invoice.location} onChange={handleChange}/>

            <Input name="date" type='date' value={props.invoice.date} onChange={handleChange}/>

            <Input name="sellDate" type='date' value={props.invoice.sellDate} onChange={handleChange}/>

        <NavigationContainer nextLink={'/seller'} prevLink={'/'}/>

    </Paper>
};
const mapStateToProps=(state)=>({
    invoice: state.invoice
});
const mapDispatchToProps=dispatch =>({
    change: (item) => dispatch(invoiceActions.change(item))
});
export default connect(mapStateToProps, mapDispatchToProps)(InvoiceContainer)
