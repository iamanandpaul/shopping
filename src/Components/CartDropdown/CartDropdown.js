import React from "react";
import "./CartDropdown.scss";
import Button from "../Button/Button";
import CartItems from "../CartItems/CartItems";
import { connect } from "react-redux";
import { selectCartItems } from "../../Redux/Cart/CartSelector";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";
import { toggleCartHidden } from "../../Redux/Cart/CartActions";

function CartDropdown({ cartItems, history, dispatch }) {
  return (
    <div className="cartDropdown">
      <div className="cartDropdown__items">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItems key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="cartDropdown__empty">Your cart is empty</span>
        )}
      </div>
      <Button
        onClick={() => {
          history.push("/checkout");
          dispatch(toggleCartHidden());
        }}
      >
        {" "}
        GO TO CHECKOUT
      </Button>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
