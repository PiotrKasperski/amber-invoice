import {Paper} from "@material-ui/core";
import Input from "@material-ui/core/Input";
import {connect} from "react-redux";
import React from "react";
import {customerActions} from "../duck";
import NavigationContainer from "../../Navigation/NavigationContainer";

const CustomerContainer = (props)=>{
    const handleChange =(event)=>{
        props.change({[event.target.name]: event.target.value})
    };
    return <Paper>
        <h2>NABYWCA</h2>
        <Input name={'nameLine1'} type={'text'} placeholder={'nazwa linia 1'} value={props.customer.nameLine1}
               onChange={handleChange}/><br/>
        <Input name={'nameLine2'} type={'text'} placeholder={'nazwa linia 2'} value={props.customer.nameLine2}
               onChange={handleChange}/><br/>
        <Input name={'addressLine1'} type={'text'} placeholder={'adres linia 1'} value={props.customer.addressLine1}
               onChange={handleChange}/><br/>
        <Input name={'addressLine2'} type={'text'} placeholder={'adres linia 2'} value={props.customer.addressLine2}
               onChange={handleChange}/><br/>
        <Input name={'nip'} type={'number'} placeholder={'nip'} value={props.customer.nip}
               onChange={handleChange}/><br/>
        <Input name={'regon'} type={'number'} placeholder={'regon'} value={props.customer.regon}
               onChange={handleChange}/>
        <NavigationContainer nextLink={'/products'} prevLink={'/seller'}/>
    </Paper>
};
const mapStateToProps=(state)=>({
    customer: state.customer
});
const mapDispatchToProps=dispatch =>({
    change: (item) => dispatch(customerActions.change(item))
});
export default connect(mapStateToProps, mapDispatchToProps)(CustomerContainer)
