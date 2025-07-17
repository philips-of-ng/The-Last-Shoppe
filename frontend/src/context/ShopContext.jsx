import React, { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets/assets";
import { exist } from "joi";
import { json } from "react-router-dom";

export const ShopContext = createContext();

export const ShopProvider = ({ children }) => {
  // Universal Variables
  const currency = '$';

  const [allProducts] = useState(products);

  const [menClothing, setMenClothing] = useState([]);
  const [womenClothing, setWomenClothing] = useState([]);
  const [childrenClothing, setChildrenClothing] = useState([]);
  const [bestSellers, setBestSellers] = useState([]);

  const [categories, setCategories] = useState([]);

  // Filter products and update state
  useEffect(() => {
    const men = products.filter(item => item.category.toLowerCase() === 'men');
    const women = products.filter(item => item.category.toLowerCase() === 'women');
    const kids = products.filter(item => item.category.toLowerCase() === 'kids');
    const best = products.filter(item => item.bestseller);

    setMenClothing(men);
    setWomenClothing(women);
    setChildrenClothing(kids);
    setBestSellers(best);

    // Update categories
    const updatedCategories = [
      { name: 'Men', length: men.length, products: men },
      { name: 'Women', length: women.length, products: women },
      { name: 'Kids', length: kids.length, products: kids },
      { name: 'Best Sellers', length: best.length, products: best },
    ];
    setCategories(updatedCategories);

    console.log('Categories logged in context file', categories);
  }, []); // Empty dependency array since products are static


  const [cartItems, setCartItems] = useState([])
  const [totalCartItems, setTotalCartItems] = useState(null)

  useEffect(() => {

    console.log(JSON.parse(localStorage.getItem('cartInfo')));
    

    // const temp = JSON.parse(localStorage.getItem('cartInfo'))

    // console.log('TEMP', temp);
    
  }, [])


  useEffect(() => {
    console.log('This is the latest CART', cartItems);
    const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
    setTotalCartItems(totalItems)

    localStorage.setItem('cartInfo', JSON.stringify(cartItems))
  }, [cartItems])



  const addToCart = (product, newQuantity) => {
    setCartItems((prevItems) => {
      const existing = prevItems.find((item) => item._id === product._id)
      if (existing) {
        return prevItems.map(item =>
          item._id === product._id ? { ...item, quantity: item.quantity + (newQuantity || 1) } : item
        )
      } else {
        return [...prevItems, { ...product, quantity: 1 }]
      }
    })

  }

  return (
    <ShopContext.Provider value={{
      currency,
      allProducts,
      menClothing,
      womenClothing,
      childrenClothing,
      bestSellers,
      categories,
      cartItems,
      addToCart,
      totalCartItems
    }}>
      {children}
    </ShopContext.Provider>
  );
};

