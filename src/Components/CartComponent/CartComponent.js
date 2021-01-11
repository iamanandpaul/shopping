import React from "react";
import "./CartComponent.scss";
import { ReactComponent as ShoppingIcon } from "../../Assets/shopping-bag.svg";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../Redux/Cart/CartActions";
import { selectCartItemsCount } from "../../Redux/Cart/CartSelector";
import { createStructuredSelector } from "reselect";

function CartComponent({ toggleCartHidden, itemCount }) {
  return (
    <div className="cartComponent" onClick={toggleCartHidden}>
      <ShoppingIcon className="cartComponent__icon" />
      <span className="cartComponent__count">{itemCount}</span>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

export default connect(mapStateToProps, mapDispatchToProps)(CartComponent);
