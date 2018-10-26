import React, { Component } from 'react';
import Product from './../Product/Product';
import axios from 'axios';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
        
        }
    }

    //This function is used to display all products




    render() {
        return (
            <div>
                Dashboard Component
                <Product
                  makeThisShizWork={this.props.mapAllProducts}
                />
            </div>
        )
    }
}

export default Dashboard;