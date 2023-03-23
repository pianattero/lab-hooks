import React from "react";

import "./PostItem.css";

export const PostItem = ({ title, body, id }) => {
  return (
    <div className="PostItem">
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body PostItem-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{body}</p>
        </div>
      </div>
    </div>
  );
};
