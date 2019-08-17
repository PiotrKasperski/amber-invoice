import React from 'react';
import currency from 'currency.js';
import {TableRow} from "@material-ui/core";
import TableCell from "@material-ui/core/TableCell";

export class ProductComponent extends React.Component {
    constructor(props) {
        super(props);
        console.log('unit', this.props.product);
        this.state = this.props.product;

    }

    componentDidMount() {
        this.countTax(this.state);
    }

    countTax() {
        this.setState((state) => ({nettoPrice: state.unitPrice.multiply(state.count)}));
        this.setState((state) => ({vatPrice: state.nettoPrice.multiply(state.vat)}));
        this.setState((state) => ({bruttoPrice: state.nettoPrice.add(state.vatPrice)}));
    }

    handleChange = (event) => {
        const name = event.target.name;
        const value = name === 'unitPrice' ? currency(event.target.value) : event.target.value;
        console.log(event);
        /*  this.setState({
              [event.target.name]: value
          },()=>{
              this.props.onProductChange({
                  key: this.state.key,
                  name: name,
                  value: this.state
              });
          });*/
        // this.countTax();
        /*  this.props.onProductChange({
              key: this.state.key,
              name: name,
              value: value
          });*/
    };

    render() {
        return (
            <TableRow key={this.state.key} className='ProductComponent'>
                <TableCell>{this.state.key}</TableCell>
                <TableCell><input type={'text'} placeholder={'nazwa towaru lub usługi'} name={'name'}
                                  value={this.state.name} onChange={this.handleChange}/></TableCell>
                <TableCell><input type={'text'} placeholder={'symbol PKWiU PKOB'} name={'symbol'}
                                  value={this.state.symbol} onChange={this.handleChange}/></TableCell>
                <TableCell><input type={'text'} placeholder={'jednostka miary'} name={'unit'} value={this.state.unit}
                                  onChange={this.handleChange}/></TableCell>
                <TableCell><input type={'number'} placeholder={'ilość'} name={'count'} value={this.state.count}
                                  onChange={this.handleChange}/></TableCell>
                <TableCell><input type={'number'} placeholder={'cena netto '} name={'unitPrice'}
                                  value={this.state.unitPrice.value} onChange={this.handleChange}/></TableCell>
                <TableCell>{this.state.nettoPrice.value}</TableCell>
                <TableCell><select name={'vat'} value={this.state.vat} onChange={this.handleChange}>
                    <option value={0.23}>23</option>
                    <option value={0.08}>8</option>
                </select></TableCell>

                <TableCell>{this.state.vatPrice.value}</TableCell>
                <TableCell>{this.state.bruttoPrice.value}</TableCell>
            </TableRow>
        )
    }
}
