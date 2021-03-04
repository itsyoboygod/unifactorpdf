import React from "react";
import Post from "../Post";

import "./style.css";

function Doc(props) {
  return (
    <div className="Doc">
      <Post props={props} />
    </div>
  );
}

export default Doc;
