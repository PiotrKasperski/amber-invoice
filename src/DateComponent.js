import React from 'react';


export class DateComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            location: 'CZĘSTOCHOWA',
            date: new Date(),
            sellDate: new Date(),
        };

    }

    componentDidMount() {
        this.props.onInputChange(this.state);
    }


    handleChange = (event) => {
        console.log('target type', event.target.type);
        const target = event.target;
        const value = target.type === 'date' ? new Date(target.value) : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });


        this.props.onInputChange({
            name: name,
            value: value
        });
    };

    render() {
        return (
            <div className='DateComponent'>

                <label>MIEJSCOWOŚĆ:
                    <input name='location' type='text' placeholder='miejscowość' value={this.state.location}
                           onChange={this.handleChange}/>
                </label><br/>

                <label>DATA WYSTAWIENIA:
                    <input name="date" type='date' value={this.state.date.toISOString().substr(0, 10)}
                           onChange={this.handleChange}/>
                </label><br/>

                <label>DATA SPRZEDAŻY:
                    <input name="sellDate" type='date' value={this.state.sellDate.toISOString().substr(0, 10)}
                           onChange={this.handleChange}/>
                </label><br/>

            </div>
        )
    }
}
