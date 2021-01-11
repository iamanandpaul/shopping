import React from "react";
import "./CheckoutItem.scss";
import { connect } from "react-redux";
import {
  clearItemFromCart,
  addItem,
  removeItem,
} from "../../Redux/Cart/CartActions";

function CheckoutItem({ cartItem, clearItem, addItem, removeItem }) {
  const { name, price, quantity, imageUrl } = cartItem;
  return (
    <div className="checkoutItem">
      <div className="checkoutItem__image">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="checkoutItem__name">{name} </span>
      <span className="checkoutItem__quantity">
        <div
          className="checkoutItem__arrow"
          onClick={() => removeItem(cartItem)}
        >
          &#10094;
        </div>
        <span className="checkoutItem__value">{quantity}</span>
        <div className="checkoutItem__arrow" onClick={() => addItem(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className="checkoutItem__price">Rs.{price} </span>
      <div className="checkoutItem__remove" onClick={() => clearItem(cartItem)}>
        &#10005;
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItemFromCart(item)),
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
