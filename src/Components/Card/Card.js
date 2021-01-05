import React from "react";
import "./Card.scss";
import { withRouter } from "react-router-dom";

function Card({ title, size, imageUrl, history, match, linkUrl }) {
  return (
    <div
      className={`${size} card`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <div
        className="card__background"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="card__titleBox">
        <h1 className="card__title">{title.toUpperCase()}</h1>
        <p className="card__subtitle">SHOP NOW</p>
      </div>
    </div>
  );
}

export default withRouter(Card);
