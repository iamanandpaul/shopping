import React from "react";
import "./CollectionItem.scss";

function CollectionItem({ id, name, price, imageUrl }) {
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
    </div>
  );
}

export default CollectionItem;
