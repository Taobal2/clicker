import React, { useState } from "react";

const Button = (props) => {
  return (
    <div>
      <button onClick={() => props.handleClick()}>click me</button>
    </div>
  );
};

export default Button;
