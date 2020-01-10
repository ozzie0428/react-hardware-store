import React, { Component } from "react";
import ProductForm from './ProductForm'

export default class AdminView extends Component {
  state = {};

  render() {
    return (
      <div>
        <h1>Admin View</h1>
        <h2>Products</h2>
        {this.props.productList.map((product,i) => {
          return (
            <div>
              <h5>{product.productName}</h5>
              <div>{product.description}</div>
              <div>{product.price}</div>
              <button onClick={ () => this.props.deleteProduct(i)}>
                  DELETE
              </button>
            </div>
          );
        })}
        <h2>Create a New Product</h2>
        {/* create product form goes here */}

        <ProductForm addNewProduct={this.props.addNewProduct}/>
      </div>
    );
  }
}
