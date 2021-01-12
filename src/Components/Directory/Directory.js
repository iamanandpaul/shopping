import React from "react";
import "./DIrectory.scss";
import Card from "../Card/Card";
import { connect } from "react-redux";
import { selectDirectorySections } from "../../Redux/Directory/DirectorySelector";
import { createStructuredSelector } from "reselect";

const Directory = ({ sections }) => (
  <div className="directory">
    {sections.map(({ title, imageUrl, size, id, linkUrl }) => (
      <Card
        key={id}
        title={title}
        imageUrl={imageUrl}
        size={size}
        linkUrl={linkUrl}
      />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
