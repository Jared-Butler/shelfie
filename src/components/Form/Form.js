import React, {Component} from 'react';

class Form extends Component{
    constructor(){
        super();
        this.state = {
            inputName: '',
            inputPrice: 0,
            inputImg: ''
        }
    }
    
    //This method will reset state on the even of clicking the "cancel" button
    clearInputs(){
        this.setState({
            inputName: '',
            inputPrice: 0,
            inputImg: ''
        });
        document.getElementById("prodInputForm").reset();
    }

    // addProduct(){ 

    // }

    render(){
        return(
            
            <div>
                <form id="prodInputForm">

                <h3>Image URL:</h3>
                <input onChange={ e => this.setState({inputImg: e.target.value}) } />
                <h3>Product Name:</h3>
                <input onChange={ e => this.setState({inputName: e.target.value}) } />
                <h3>Price:</h3>
                <input  onChange={ e => this.setState({inputPrice: e.target.value}) } />
                </form>
                <div>
                <button onClick={ () => this.clearInputs()}>Cancel</button>
                <button >Add to Inventory</button>
                </div>
                {console.log(this.state)}
            </div>
        )
    }
}

export default Form;