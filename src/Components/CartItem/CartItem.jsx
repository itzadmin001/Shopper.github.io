import React, { useContext } from 'react';
import "./CartItem.css"
import { ShopContext } from '../../Context/ShopContext';
import removeIcon from "../Assets/cart_cross_icon.png";

const SingleCartItem = ({ product }) => {
    const { cartItem, addRemovecart } = useContext(ShopContext);
    if (cartItem[product.id] > 0) {
        return (
            <>
                <div key={product.id}>
                    <div className="CartItem-format CartItem-format-main">
                        <img src={product.image} alt="" className='CartIcon-product-icon' />
                        <p>{product.name}</p>
                        <p>${product.new_price}</p>
                        <button className='CartItem-quantity'>{cartItem[product.id]}</button>
                        <p>${product.new_price * (cartItem[product.id] || 0)}</p>
                        <img
                            className='cartItem-remove-icon'
                            onClick={() => { addRemovecart(product.id); }}
                            src={removeIcon}
                            alt=""
                        />
                    </div>
                    <hr />
                </div>
            </>
        );
    } else {
        return null;
    }
};

const CartItem = () => {
    const { all_product, gettotalCartAmout } = useContext(ShopContext);

    return (
        <div className='CartItems'>
            <div className="CartItem-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {all_product.map((product) => (
                <SingleCartItem key={product.id} product={product} />
            ))}
            <div className="cartitem-down">
                <div className="cartitem-total">
                    <h1>Cart Total</h1>
                    <div>
                        <div className="cartitem-total-item">
                            <p>SubTotal</p>
                            <p>${gettotalCartAmout()}</p>
                        </div>
                        <hr />
                        <div className="cartitem-total-item">
                            <p>Shipping fee</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className="cartitem-total-item">
                            <h3>Total</h3>
                            <h3>${gettotalCartAmout()}</h3>
                        </div>
                    </div>
                    <button>PROCEED TO CHECKOUT</button>
                </div>
                <div className="cartitem-promocode">
                    <p>If You Have a Promo Code, Enter it here</p>
                    <div className="cartitem-promoBox">
                        <input type="text" placeholder='promo code' />
                        <button>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartItem;
