import React, { Component } from "react";
import CartView from "./CartView";

export default class ShoppingView extends Component {
  render() {
    return (
      <div>
        {this.props.productList.map((product, i) => {
          return (
            <div>
              <h3>{product.productName}</h3>
              <h3>{product.description}</h3>
              <h3>{product.price}</h3>
              <div>
                <button onClick={() => this.props.addToCart(product)}>
                  Add to Cart
                </button>
              </div>
            </div>
          );
        })}
        <CartView
          productList={this.props.productList}
          shoppingListCart={this.props.shoppingListCart}
          deleteCartItem={this.props.deleteCartItem}
        />
      </div>
    );
  }
}
