import React from "react";
import "./CartComponent.scss";
import { ReactComponent as ShoppingIcon } from "../../Assets/shopping-bag.svg";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../Redux/Cart/CartActions";

function CartComponent({ toggleCartHidden }) {
  return (
    <div className="cartComponent" onClick={toggleCartHidden}>
      <ShoppingIcon className="cartComponent__icon" />
      <span className="cartComponent__count">0</span>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(null, mapDispatchToProps)(CartComponent);
