import React from "react";
import "./PreviewCollection.scss";
import CollectionItem from "../CollectionItem/CollectionItem";

function PreviewCollection({ title, items }) {
  return (
    <div className="previewCollection">
      <h1 className="previewCollection__title">{title}</h1>
      <div className="previewCollection__items">
        {items
          .filter((item, index) => index < 4)
          .map(({ id, ...otherItemProps }) => (
            <CollectionItem key={id} {...otherItemProps} />
          ))}
      </div>
    </div>
  );
}

export default PreviewCollection;
