import React from 'react'
import {connect} from "react-redux";
import actions from "../duck/actions";
import currency from 'currency.js';
import {Paper} from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import Input from "@material-ui/core/Input";
import ProductTableHead from "./ProductTableHead";
import Select from "@material-ui/core/Select";
import MenuItem from '@material-ui/core/MenuItem';
import NavigationContainer from "../../Navigation/NavigationContainer";

const ProductConteiner = (props) => {

    const addButtonClick = (event) => {
        event.preventDefault();
        props.add();

    };

    const handleChange = (event, child) => {
        props.change({
            key: !child ? event.target.id : child.props.id,
            [event.target.name]: event.target.name === 'unitPrice' ? currency(event.target.value) : event.target.value
        })
    };

    const onDelete = (event) => {
        props.delete(event.target.id)
    };

    return <Paper>
        <Table>
            <ProductTableHead/>
            <TableBody>
                {props.products.list.map((product, index) => (
                    <TableRow>
                        <TableCell size={"small"} align="left">{index + 1}</TableCell>

                        <TableCell>
                            <Input id={product.key} type={'text'} placeholder={'nazwa towaru lub usługi'} name={'name'}
                                   value={product.name} onChange={handleChange}/>
                        </TableCell>

                        <TableCell size={"small"} align="right">
                            <Input fullWidth={true} id={product.key} type={'text'} placeholder={'symbol PKWiU PKOB'}
                                   name={'symbol'} value={product.symbol} onChange={handleChange}/>
                        </TableCell>

                        <TableCell size={"small"} align="right">
                            <Input fullWidth={true} id={product.key} type={'text'} placeholder={'jednostka miary'}
                                   name={'unit'} value={product.unit} onChange={handleChange}/>
                        </TableCell>

                        <TableCell size={"small"} align="right">
                            <Input fullWidth={true} id={product.key} type={'number'} placeholder={'ilość'}
                                   name={'count'} value={product.count === 0 ? '' : product.count}
                                   onChange={handleChange}/>
                        </TableCell>

                        <TableCell size={"small"} align="right">
                            <Input fullWidth={true} id={product.key} type={'number'} placeholder={'cena netto '}
                                   name={'unitPrice'}
                                   value={product.unitPrice.value === 0 ? '' : product.unitPrice.value}
                                   onChange={handleChange}/>
                        </TableCell>

                        <TableCell size={"small"} align="right">
                            {product.nettoPrice.value}
                        </TableCell>

                        <TableCell size={"small"} align="right">
                            <Select id={product.key} name={'vat'} value={product.vat} onChange={handleChange}>
                                <MenuItem id={product.key} value={0.23}>23</MenuItem>
                                <MenuItem id={product.key} value={0.08}>8</MenuItem>
                            </Select>
                        </TableCell>

                        <TableCell size={"small"} align="right">
                            {product.vatPrice.value}
                        </TableCell>

                        <TableCell size={"small"} align="right">
                            {product.bruttoPrice.value}
                        </TableCell>

                        <TableCell>
                            <button id={product.key} onClick={onDelete}>-</button>
                        </TableCell>

                    </TableRow>))}

                <TableRow>
                    <button onClick={addButtonClick}>+</button>
                </TableRow>

            </TableBody>
        </Table>
        <NavigationContainer nextLink={'/invoice'} prevLink={'/customer'}/>
    </Paper>
};

const mapStateToProps = (state) => ({
    products: state.products
});

const mapDispatchToProps = dispatch => ({
    add: (product) => dispatch(actions.add(product)),
    change: (item, value) => dispatch(actions.change(item, value)),
    delete: (key) => dispatch(actions.deleteProduct(key))

});
export default connect(mapStateToProps, mapDispatchToProps)(ProductConteiner);

