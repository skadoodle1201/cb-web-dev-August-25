import React from "react";

const Button = ({ onClickFn, buttonStyles, buttonCTA }) => {
  return (
    <button className={buttonStyles} onClick={onClickFn}>
      {buttonCTA}
    </button>
  );
};

export default Button;
