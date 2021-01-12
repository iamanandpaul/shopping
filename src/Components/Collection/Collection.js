import React from "react";
import "./Collection.scss";
import { connect } from "react-redux";
import { selectCollection } from "../../Redux/Shop/ShopSelector";
import CollectionItem from "../CollectionItem/CollectionItem";

function Collection({ collection }) {
  const { title, items } = collection;
  return (
    <div className="collection">
      <h2 className="collection__title">{title}</h2>
      <div className="collection__items">
        {items.map((item) => (
          <CollectionItem
            className="collection__item"
            key={item.id}
            item={item}
          />
        ))}
      </div>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(Collection);
