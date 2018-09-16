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
            <div width='auto' height='auto'>
                <img src={this.state.image} className='product-image' />
                <label title={this.state.name} className='product-name'>{this.state.name.substring(0, 60) + ' ...'}</label>
                <label className='product-price'>Price: {this.state.price}</label>
                <br/>
                <label className='product-cat-brand'>Brand: {this.state.brand}</label>
                <br/>
                <label className='product-cat-brand'>Category: {this.state.category.name}</label>
                
                <hr />
               
            </div> 

        );
    }

}

export default Product;