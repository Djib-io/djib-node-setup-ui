import React from "react";
import "./../styles/Loading.css";

function Loading({ color, borderColor, size, borderSize, label, ...props }) {
  return (
    <div className={"loading-container"} {...props}>
      <div
        style={{
          ...(size && { width: size, height: size }),
          ...(borderSize && { borderWidth: borderSize }),
          ...(borderColor && { borderColor: borderColor }),
          ...(color && { borderTopColor: color }),
        }}
        className={"loading flex-col"}
      />
      {label && label}
    </div>
  );
}

export default Loading;
