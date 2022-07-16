import React, { useState } from "react";
import Button from "./components/button";

const App = () => {
  const handleClick = () => {
    console.log("i was clicked");
  };

  return (
    <div>
      <Button handleClick={handleClick} />
    </div>
  );
};

export default App;
