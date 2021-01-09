import React from "react";
import "./CartDropdown.scss";
import Button from "../Button/Button";

function CartDropdown() {
  return (
    <div className="cartDropdown">
      <div className="cartDropdown__items" />
      <Button> GO TO CHECKOUT</Button>
    </div>
  );
}

export default CartDropdown;
