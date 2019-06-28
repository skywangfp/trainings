import React from 'react';
import './BookNew.css';

class BookNew extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            author: '',
            price: 0.0
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {
        alert('this.state: ' + this.state.name);
        event.preventDefault();
    }

    render() {
        const state = this.state;
        return (
            <form onSubmit={this.handleSubmit} >
                <input type="text" name="name" value={state.name} onChange={this.handleChange} />
                <input type="text" name="author" value={state.author} onChange={this.handleChange} />
                <input type="text" name="price" value={state.price} onChange={this.handleChange} />

                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default BookNew;
