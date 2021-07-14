import React from "react";
// styling
import "./styles/empty.scss";
// icons
import empty from "../icons/box.svg";

const Empty = (e) => {
  return (
    <div className="empty">
          <img src={empty} alt="empty" />
          <div class="font-16">{e.text}</div>
    </div>
  );
};

export default Empty;
