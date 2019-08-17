import React from 'react';
import {Paper} from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import {ProductComponent} from "./ProductComponent";
import currency from 'currency.js';


export class ProductListComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            productList: [{
                key: '1',
                name: '',
                symbol: '',
                unit: '',
                count: 88,
                unitPrice: currency(3.90),
                nettoPrice: currency(0),
                vat: 0.23,
                vatPrice: currency(0),
                bruttoPrice: currency(0)
            }, {
                key: '2',
                name: '',
                symbol: '',
                unit: '',
                count: 44,
                unitPrice: currency(12.50),
                nettoPrice: currency(0),
                vat: 0.23,
                vatPrice: currency(0),
                bruttoPrice: currency(0)
            }],
            bruttoSum: currency(0)
        };
    }

    componentDidMount() {
        this.getBruttoSum();
    }

    getBruttoSum() {
        this.setState((state) => {
            state.bruttoSum = state.productList.reduce((a, b) => {
                console.log(a, b);
                return currency(a).add(b.bruttoPrice).value
            }, 0);
            return {bruttoSum: state.bruttoSum}
        });


    }

    handleProductChange(productObj) {
        console.log('pobj', productObj);
        this.setState(state => {
            const productList = state.productList.map((product, index) => {
                if (productObj.key === product.key) {
                    return product = productObj.value
                } else return product
            });
            return {productList}
        });
        this.getBruttoSum();

    }

    render() {
        return (
            <Paper>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Lp.</TableCell>
                            <TableCell>Nazwa towaru lub usługi</TableCell>
                            <TableCell>Symbol PKWiU PKOB</TableCell>
                            <TableCell size={"small"}>j.m.</TableCell>
                            <TableCell size={"small"}>ilość</TableCell>
                            <TableCell size={"small"}>cena netto zł</TableCell>
                            <TableCell size={"small"}>wartość netto zł</TableCell>
                            <TableCell size={"small"}>stawka podatku %</TableCell>
                            <TableCell size={"small"}>wartość podatku zł</TableCell>
                            <TableCell>wartość brutto zł</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.state.productList.map(product => (
                            <ProductComponent key={product.key} product={product}
                                              onProductChange={(productObj) => this.handleProductChange(productObj)}/>
                        ))}
                        <TableRow>
                            <TableCell rowSpan={1} colSpan={8} align={"right"}>RAZEM BRUTTO</TableCell>
                            <TableCell colSpan={2} align={"right"}>{this.state.bruttoSum.value}zł</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </Paper>
        )
    }
}
