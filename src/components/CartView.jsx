import React, { Component } from "react";

export default class CartView extends Component {
  render() {
    return (
      <div>
        <h1>Shopping Cart</h1>
        {this.props.shoppingListCart.map((product,i) => {
          return (
            <div>
              <h5>{product.productName}</h5>
              <div>{product.description}</div>
              <div>{product.price}</div>
              <button onClick={() => this.props.deleteCartItem(product)}>
                  DELETE
              </button>
            </div>
          );
        })}
      </div>
    );
  }
}
