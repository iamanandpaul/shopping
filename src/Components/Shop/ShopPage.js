import React from "react";
import CollectionOverview from "../CollectionOverview/CollectionOverview";
import { Route } from "react-router-dom";
import Collection from "../Collection/Collection";

const ShopPage = ({ match }) => (
  <div>
    <Route exact path={`${match.path}`} component={CollectionOverview} />
    <Route exact path={`${match.path}/:collectionId`} component={Collection} />
  </div>
);

export default ShopPage;
