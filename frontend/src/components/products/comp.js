import React, { Component } from 'react';
import './style.css'


class Product extends Component{
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name ? this.props.name : '',
            image: this.props.image ? this.props.image : '',
            price: this.props.price? this.props.price : 0.0,
            category: this.props.category ? this.props.category : null,
            brand: this.props.brand ? this.props.brand : ''
        }
    }

    render() {
        return (
            <div>
                <img src={this.state.image} width='50' height='50' />
                <label>{this.state.name}</label>
                <label>{this.state.price}</label>
                <label>{this.state.brand}</label>
                <hr />
               
            </div> 

        );
    }

}

export default Product;