import React from "react";
import "./CartItems.scss";

function CartItems({ item: { imageUrl, name, price, quantity } }) {
  return (
    <div className="cartItems">
      <img src={imageUrl} alt="item" />
      <div className="cartItems__details">
        <span className="cartItems__name">{name}</span>
        <span>
          {quantity} x Rs.{price}
        </span>
      </div>
    </div>
  );
}

export default CartItems;
