import classNames from "classnames";
import React from "react";
import "./../styles/Box.css";
function Box({ children, className, ...props }) {
  return (
    <div className={classNames("box", className)} {...props}>
      {children}
    </div>
  );
}

export default Box;
