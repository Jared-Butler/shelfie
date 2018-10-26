import React, { Component } from 'react';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import Form from './components/Form/Form';
import Header from './components/Header/Header';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
      prodName: '',
      price: 0,
      photo: ''
    }
  }
  componentDidMount(){
    this.getAllProducts()
    
  }

  getAllProducts() {
    axios.get('/api/inventory')
        .then(res => {
          console.log(res)
            this.setState({
                products: res.data
            })
        })
        .catch( err => console.log(err))
} 

  //Render all products with a map function.
  // mapAllProducts() {
  //   this.state.products.map(
  //     (obj, index) => {
  //       console.log(this.state);
  //       return (
  //         this.setState({
  //           prodName: obj.prod_name,
  //           price: obj.price,
  //           photo: obj.photo
  //         })
  //       )
  //     }
  //   )
  // }


  //This will run the get all products on mount to load all products on page load.

  // componentDidMount() {
  //   // this.getAllProducts();
  //   this.mapAllProducts();
  //   console.log(this.state);
  // }
 
  render() {
    console.log(this.state.products);
    function mapAllProducts() {
      this.state.products.map(
        (obj, index) => {
          // console.log(this.state);
          return (

            <div>
              <img src={obj.photo} />
              <h2>{obj.prodName}</h2>
              <h3>{obj.price}</h3>
            </div>


            // <Dashboard
            //   index={index}
            //   prodName={obj.prodName}
            //   price={obj.price}
            //   photo={obj.photo}
            // />
          )
        }
      )
    };


    return (
      <div className="App">
      {/* {this.state.products[0]? this.state.products[0].prod_name:""} */}
        <Header />
        <button onClick={this.getAllProducts} >Get all products</button>
        <Dashboard
          makeThisShizWork={mapAllProducts}
        />
        <Form />
      </div>
    );
  }
}

export default App;
