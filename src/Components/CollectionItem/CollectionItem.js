import React from "react";
import "./CollectionItem.scss";
import Button from "../Button/Button";
import { connect } from "react-redux";
import { addItem } from "../../Redux/Cart/CartActions";

function CollectionItem({ item, addItem }) {
  const { name, price, imageUrl } = item;
  return (
    <div className="collectionItem">
      <div
        className="collectionItem__background"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />

      <div className="collectionItem__data">
        <span className="collectionItem__name"> {name} </span>
        <span className="collectionItem__price"> {price} </span>
      </div>
      <Button onClick={() => addItem(item)} inverted>
        Add to Cart
      </Button>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
