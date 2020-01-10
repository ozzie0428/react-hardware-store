import React, { Component } from "react";
import AdminView from "./AdminView";
import ShoppingView from "./ShoppingView";

export default class HomePage extends Component {
  state = {
    itemCurrentlyOnSale: "A Hammer",
    editSaleItem: true,
    adminActive: false,
    productList: [
      {
        productName: "Hammer",
        description: "Issa hammer",
        price: 12.3
      },
      {
        productName: "Nail",
        description: "Issa nail",
        price: 0.12
      }
    ],

    shoppingListCart: []
  };

  addNewProduct = newProduct => {
    //lets copy state
    const newState = { ...this.state };
    //lets push a new product to productList
    newState.productList.push(newProduct);
    this.setState(newState);
  };

  deleteProduct = index => {
    const newState = { ...this.state };
    newState.productList.splice(index, 1);
    this.setState(newState);
  };

  deleteCartItem = i => {
      const newState = {...this.state};
      newState.shoppingListCart.splice(i,1);
      this.setState(newState)
  }

  addToCart = newProduct => {
      
    const newState = { ...this.state };
    newState.shoppingListCart.push(newProduct);
    this.setState(newState);
  };

  toggleEditSaleItem = () => {
    const newEditSaleItem = !this.state.editSaleItem;
    this.setState({
      editSaleItem: newEditSaleItem
    });
  };

  toggleAdminButton = () => {
    const adminActive = !this.state.adminActive;
    this.setState({
      adminActive
    });
  };

  handleItemCurrentlyOnSaleChange = evt => {
    const itemCurrentlyOnSale = evt.target.value;
    this.setState({ itemCurrentlyOnSale });
  };

  handleCart = evt => {
    const addToCart = evt.target.value;
    this.setState({ addToCart });
  };

  handleDelete = evt => {
      const deleteProduct = evt.target.value
      this.setState({deleteProduct})
  }

  render() {
    return (
      <div>
        <h1>My Hardware Store</h1>
        <span>Currently On Sale: {this.state.itemCurrentlyOnSale}</span>

        <div>
          <button onClick={this.toggleEditSaleItem}>
            {this.state.editSaleItem ? "hide" : "Edit Sale Item"}
          </button>
        </div>
        <div>
          {this.state.editSaleItem === true ? (
            <input
              onChange={this.handleItemCurrentlyOnSaleChange}
              value={this.state.itemCurrentlyOnSale}
              type="text"
            />
          ) : null}
        </div>

        {this.state.adminActive === true ? (
          <button onClick={this.toggleAdminButton}>show Shopping View</button>
        ) : (
          <button onClick={this.toggleAdminButton}> show Admin View</button>
        )}

        {this.state.adminActive === true ? (
          <AdminView
            productList={this.state.productList}
            addNewProduct={this.addNewProduct}
            deleteProduct={this.deleteProduct}
            handleDelete={this.handleDelete}
          />
        ) : (
          <ShoppingView
            productList={this.state.productList}
            addToCart={this.addToCart}
            shoppingListCart={this.state.shoppingListCart}
            deleteCartItem={this.deleteCartItem}
           
          />
        )}
      </div>
    );
  }
}
