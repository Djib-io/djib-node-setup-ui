import React, { useCallback, useState } from "react";
import "./../styles/Button.css";
import classNames from "classnames";
import Loading from "./Loading";

const Button = React.forwardRef(
  (
    {
      children,
      onClick,
      className,
      light,
      borderButton,
      extraLight,
      startIcon,
      active,
      fullWidth,
      style,
      withLoading,
      onClickCapture,
      isDisabled,
      color = "primary",
    },
    ref
  ) => {
    const [loading, setLoading] = useState(false);


    return (
      <div
        style={style}
        ref={ref}
        className={classNames("dbutton", `dbutton-${color}`, {
          "dbutton-light": light,
          "dbutton-extraLight": extraLight,
          "dbutton-borderButton": borderButton,
          "dbutton-active": active,
          "dbutton-fullWidth": fullWidth,
          "dbutton-isDisabled": isDisabled,
          [className || ""]: className,
        })}

        onClick={onClick}
        // {...(onClickCapture && { onClickCapture: handleClick })}
      >
        {startIcon}
        {loading && withLoading ? (
          <Loading
            size={18}
            borderSize={2}
            color={extraLight ? "#0074e5" : "#fff"}
            borderColor={extraLight ? "#EBF5FF" : "#ffffff40"}
          />
        ) : (
          children
        )}
      </div>
    );
  }
);

Button.displayName = "Button";
export default Button;
