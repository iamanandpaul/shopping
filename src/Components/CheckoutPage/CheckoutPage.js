import React from "react";
import "./CheckoutPage.scss";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectCartItems,
  selectCartTotal,
} from "../../Redux/Cart/CartSelector";
import CheckoutItem from "../CheckoutItem/CheckoutItem";
import StripeButton from "../StripeButton/StripeButton";

function CheckoutPage({ cartItems, total }) {
  return (
    <div className="checkout">
      <div className="checkout__header">
        <div className="checkout__block">
          <span>Product</span>
        </div>
        <div className="checkout__block">
          <span>Description</span>
        </div>
        <div className="checkout__block">
          <span>Quantity</span>
        </div>
        <div className="checkout__block">
          <span>Price</span>
        </div>
        <div className="checkout__block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}

      <div className="checkout__total">
        <span>TOTAL: Rs.{total}</span>
      </div>
      <div className="checkout__testWarning">
        *Please use the following test credit card for payments*
        <br />
        4242 4242 4242 4242 - Exp: 01/22 - CVV: 123
      </div>

      <StripeButton price={total} />
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
