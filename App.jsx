import React, { useState } from 'react';
import './App.css'; // Import CSS for styling

// function App() {
//   // State to manage the list of products and the items in the cart
//   const [products, setProducts] = useState([
//     { id: 1, name: 'Product 1', description: 'Description for Product 1', addedToCart: false },
//     { id: 2, name: 'Product 2', description: 'Description for Product 2', addedToCart: false },
//     { id: 3, name: 'Product 3', description: 'Description for Product 3', addedToCart: false }
//   ]);
//   const [cart, setCart] = useState([]);
  
//   // Function to handle adding an item to the cart
//   const addToCart = (product) => {
//     const updatedCart = [...cart, product];
//     setCart(updatedCart);
//     updateProductStatus(product.id, true);
//   };
  
//   // Function to handle removing an item from the cart
//   const removeFromCart = (productId) => {
//     const updatedCart = cart.filter(item => item.id !== productId);
//     setCart(updatedCart);
//     updateProductStatus(productId, false);
//   };
  
//   // Function to update the status of the product (added to cart or not)
//   const updateProductStatus = (productId, added) => {
//     const updatedProducts = products.map(product => {
//       if (product.id === productId) {
//         return { ...product, addedToCart: added };
//       }
//       return product;
//     });
//     setProducts(updatedProducts);
//   };

  function ShopHomepage() {
    return (
      <div className="shop-container">
        <ProductItem name="Fancy Product" price="$40.00 - $80.00" sale={true} />
        <ProductItem name="Special Item" price="$20.00 $18.00" sale={true} />
        <ProductItem name="Sale Item" price="$50.00 $25.00" sale={true} />
        <ProductItem name="Popular Item" price="$40.00" sale={true} />
        <ProductItem name="Sale Item" price="$50.00 $25.00" sale={true} />
        <ProductItem name="Fancy Product" price="$120.00 - $280.00" sale={true} />
        <ProductItem name="Special Item" price="$20.00 $18.00" sale={false} />
        <ProductItem name="Popular Item" price="$40.00" sale={true} />
      </div>
    );
  }
  
  function ProductItem({ name, price, sale }) {
    return (
      <div className="product-item">
        <h2>{name}</h2>
        <p>{price}</p>
        {sale && <p>Sale...</p>}
      </div>
    );
  }
  
  export default ShopHomepage;