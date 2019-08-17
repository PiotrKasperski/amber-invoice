import React from 'react';


export class SellerComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nameLine1: this.props.nameLine1,
            nameLine2: this.props.nameLine2,
            addressLine1: this.props.addressLine1,
            addressLine2: this.props.addressLine2,
            nip: this.props.nip,
            regon: this.props.regon,
            isSeller: this.props.isSeller,
        }


    }

    componentDidMount() {
        this.props.onInputChange({
            name: this.state.isSeller === true ? 'seller' : 'buyer',
            value: this.state
        })
    }


    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
        this.props.onInputChange({
            name: this.state.isSeller ? 'seller' : 'buyer',
            value: this.state
        });
    };

    render() {
        return (
            <div className='SellerComponent'>
                <h2>{this.state.isSeller === true ? 'SPRZEDAWCA' : 'NABYWCA'}:</h2>
                <input name={'nameLine1'} type={'text'} placeholder={'nazwa linia 1'} value={this.state.nameLine1}
                       onChange={this.handleChange}/><br/>
                <input name={'nameLine2'} type={'text'} placeholder={'nazwa linia 2'} value={this.state.nameLine2}
                       onChange={this.handleChange}/><br/>
                <input name={'addressLine1'} type={'text'} placeholder={'adres linia 1'} value={this.state.addressLine1}
                       onChange={this.handleChange}/><br/>
                <input name={'addressLine2'} type={'text'} placeholder={'adres linia 2'} value={this.state.addressLine2}
                       onChange={this.handleChange}/><br/>
                <label>NIP: <input name={'nip'} type={'number'} placeholder={'nip'} value={this.state.nip}
                                   onChange={this.handleChange}/></label>
                <label>REGON: <input name={'regon'} type={'number'} placeholder={'regon'} value={this.state.regon}
                                     onChange={this.handleChange}/></label><br/>
            </div>
        )
    }
}
