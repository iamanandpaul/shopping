import React from "react";
import SHOP_DATA from "./ShopData";
import PreviewCollection from "../PreviewCollection/PreviewCollection";

class ShopPage extends React.Component {
  constructor() {
    super();

    this.state = {
      collections: SHOP_DATA,
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div>
        {collections.map(({ id, ...otherCollectionProps }) => (
          <PreviewCollection key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}
export default ShopPage;
