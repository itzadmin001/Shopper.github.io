import React, { createContext, forwardRef, useState } from 'react';
import all_product from '../Components/Assets/all_product';


export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    all_product.forEach((product) => {
        cart[product.id] = 0;
    });
    return cart;
}

const ShopContextProvider = (props) => {

    const [cartItem, setcartItem] = useState(getDefaultCart());


    const addTocart = (itemId) => {
        setcartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
    
    const addRemovecart = (itemId) => {
        setcartItem((prev) => ({ ...prev, [itemId]: Math.max(0, prev[itemId] - 1) }));
    }
    const gettotalCartAmout = () => {
        let totalAmout = 0;
        for (const item in cartItem) {
            if (cartItem[item] > 0) {
                let itemInfo = all_product.find((product) => product.id === Number(item))
                totalAmout += itemInfo.new_price * cartItem[item]
            }
        }
        return totalAmout;
    }

    const gettotalCartitem = () => {
        let totalItem = 0;
        for (const item in cartItem) {
            if (cartItem[item] > 0) {
                totalItem += cartItem[item];
            }
        }
        return totalItem;
    }
    
    const contextvalue = { all_product,gettotalCartitem,gettotalCartAmout, cartItem, addTocart, addRemovecart }

    return (
        <ShopContext.Provider value={contextvalue}>
            {props.children}
        </ShopContext.Provider>
    )


}
export default ShopContextProvider;