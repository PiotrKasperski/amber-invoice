import React from "react";
import {DateComponent} from "./DateComponent";
import {InvoiceNumberComponent} from "./InvoiceNumberComponent";
import {SellerComponent} from "./SellerComponent";
import {ProductListComponent} from "./ProductListComponent";

export class InvoiceComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            location: '',
            date: new Date(),
            sellDate: new Date(),
            invoiceNumber: '',
            seller: {},
            buyer: {}
        }
    }

    handleComponentChange = (dataObj) => {
        dataObj.name ? this.setState({[dataObj.name]: dataObj.value}) : this.setState(dataObj);
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('INVOICE STATE AFTER UPDATE', this.state);
    }


    render() {
        return (

            <div className='InvoiceComponent'>
                <DateComponent onInputChange={(dataObj) => this.handleComponentChange(dataObj)}/>
                <InvoiceNumberComponent onInputChange={(dataObj) => this.handleComponentChange(dataObj)}/>
                <SellerComponent
                    isSeller="true"
                    nameLine1="GRZEGORZ KASPERSKI"
                    addressLine1="ul. Włodawska 2"
                    addressLine2={"42-221 Częstochowa"}
                    nip={"5731403011"}
                    regon={"243364691"}
                    onInputChange={(dataObj) => this.handleComponentChange(dataObj)}/>
                <SellerComponent isSeller={"false"}
                                 onInputChange={(dataObj) => this.handleComponentChange(dataObj)}/><br/>
                <ProductListComponent/>
            </div>

        )
    }
}
