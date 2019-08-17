import React from 'react'
import {Paper} from "@material-ui/core";
import {connect} from "react-redux";
import Input from "@material-ui/core/Input";
import actions from "../duck/actions";
import NavigationContainer from "../../Navigation/NavigationContainer";
const SellerContainer = (props)=>{
    const handleChange =(event)=>{
        props.change({[event.target.name]: event.target.value})
    };
    return <Paper>
        <h2>SPRZEDAWCA</h2>
        <Input name={'nameLine1'} type={'text'} placeholder={'nazwa linia 1'} value={props.seller.nameLine1}
               onChange={handleChange}/><br/>
        <Input name={'nameLine2'} type={'text'} placeholder={'nazwa linia 2'} value={props.seller.nameLine2}
               onChange={handleChange}/><br/>
        <Input name={'addressLine1'} type={'text'} placeholder={'adres linia 1'} value={props.seller.addressLine1}
               onChange={handleChange}/><br/>
        <Input name={'addressLine2'} type={'text'} placeholder={'adres linia 2'} value={props.seller.addressLine2}
               onChange={handleChange}/><br/>
        <Input name={'nip'} type={'number'} placeholder={'nip'} value={props.seller.nip}
                           onChange={handleChange}/><br/>
        <Input name={'regon'} type={'number'} placeholder={'regon'} value={props.seller.regon}
                             onChange={handleChange}/>
                             <NavigationContainer nextLink={'/customer'} prevLink={'/invoice'}/>
    </Paper>
};
const mapStateToProps=(state)=>({
    seller: state.seller
});
const mapDispatchToProps=dispatch =>({
   change: (item) => dispatch(actions.change(item))
});
export default connect(mapStateToProps, mapDispatchToProps)(SellerContainer)
