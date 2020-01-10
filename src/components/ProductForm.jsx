import React from 'react'

const defaultProduct ={

        productName: '',
        description: '',
        price: 0
    
}

export default class ProductForm extends React.Component {
    state ={
        newProduct: {...defaultProduct}
    }

    // handleProductNameChange = (evt) => {
    // const  newProductName = evt.target.value
    // //make a copy of state
    // const newState = {...this.state}
    // newState.newProduct.productName = newProductName
    // //UPDATE THE STATE WITH NEW DATA
    // this.setState(newState)
    // }

    // handleProductDescriptionChange = (evt) => {
    //     const newProductDescription = evt.target.value
    //     const newState = {...this.state}
    //     newState.newProduct.description = newProductDescription
    //     this.setState(newState)
    // }

    // handleProductPriceChange = (evt) => {
    //     const newProductPrice = evt.target.value
    //     const newState = {...this.state}
    //     newState.newProduct.price = newProductPrice
    //     this.setState(newState)
    // }

    // OR FOR UNIVERSAL METHOD FOR ALL STATES...............................................................................................

    handleChange = (evt) => {
        const newValue = evt.target.value
        const field = evt.target.name

        const newState = {...this.state}
        newState.newProduct[field] = newValue
        this.setState(newState)
    }

    onSubmitForm = (evt) => {
        evt.preventDefault()
        const newProduct = {...this.state.newProduct}
        this.props.addNewProduct(newProduct)
        this.setState({newProduct: {...defaultProduct} })

    }

    render() {
        return(
           <div>
               <form onSubmit={this.onSubmitForm}>
                   <div>
                       <input 
                       type="text"
                       placeholder="Name"
                       name= 'productName' 
                       onChange={this.handleChange}
                       value={this.state.newProduct.productName}/>
                   </div>
                   
                   <div>
                       <input 
                       type="text"
                       placeholder="Description"
                       name = 'description'
                       onChange={this.handleChange}
                       value={this.state.newProduct.description}/>
                   </div>
                   <div>
                       <input 
                       type="number"
                       placeholder="Price"
                       name = "price"
                       min="0.00"
                       step="0.01"
                       onChange={this.handleChange}
                       value={this.state.newProduct.price}/>
                   </div>

                   <input type="submit" value="create"/>

               </form>
           </div> 
        )
    }
}