import classNames from "classnames";
import React, { forwardRef } from "react";
import "./../styles/Input.css";

const Input = forwardRef(
  ({ fullWidth, containerClassName, textarea, value, type, ...props }, ref) => {
    return (
      <div
        className={classNames("dinput", {
          "dinput-full-width": fullWidth,
          [containerClassName || ""]: containerClassName,
        })}
        ref={ref}
      >
        {textarea ? (
          <textarea {...props}>{value}</textarea>
        ) : (
          <input type={type} {...props} value={value} />
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
export default Input;
