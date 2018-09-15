import React, { Component } from 'react';
import './style.css'
import './service'
import '../products/comp'
import Product from '../products/comp';
import SearchBarService from './service';


class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            noResultsFound: 'No results found!',
            showNotFound: false
        }
        this.service = new SearchBarService();
    }

    handleInputChange(e) {
        let comp = this;
       
        this.setState({
            products: []
        })
        this.service.getAllProductsByName(e.target.value, function (products) {
            debugger;
            if (products.length > 0) {
                comp.setState({
                    products: products
                });
            } else {
                comp.setState({
                    showNotFound: true
                });
            }
        })

    }
    render() {
        return (
            <div>
                    <input
                        placeholder="Search for..."
                        ref={input => this.search = input}
                        onChange={this.handleInputChange.bind(this)}
                    />
                    {
                        this.state.products && this.state.products.length > 0 ?
                            this.state.products.map((product, i) =>
                                <Product
                                    key={i}
                                    name={product.name}
                                    image={product.image}
                                    category={product.category}
                                    price={product.price}
                                    brand={product.brand} />) : ''
                    }
                    <h1 hidden={!this.state.showNotFound}>{this.state.noResultsFound}</h1>
            </div>

        );
    }

}

export default SearchBar;