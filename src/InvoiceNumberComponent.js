import React from 'react';


export class InvoiceNumberComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            invoiceNumber: "1\\" + new Date().getMonth().toString() + '\\' + new Date().getFullYear().toString()
        };
    }

    componentDidMount() {
        this.props.onInputChange(this.state);
    }


    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
        this.props.onInputChange({
            name: event.target.name,
            value: event.target.value
        });
    };

    render() {
        return (
            <div className='InvoiceNumberComponent'>
                <label>FAKTURA VAT NR
                    <input name='invoiceNumber' type='text' value={this.state.invoiceNumber}
                           onChange={this.handleChange}/>
                </label>
            </div>
        )
    }
}
