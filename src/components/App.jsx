import React, { useState } from "react";

function App() {
  //boolean isMouseOver and function to set mouseover
  //initial state of mouseover is false as it is not over
  const [isMouseOver, setMouseOver] = useState(false);
  //whenever mouse is over turns it true
  function handleMouseOver() {
    setMouseOver(true);
  }
  //whenever mouse is out turn it back to false
  function handleMouseOut() {
    setMouseOver(false);
  }
  return (
    <div className="container">
      <h1>Hello</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        style={{
          //based on state whether the mouse is over/out
          //  button changes color black/white
          backgroundColor: isMouseOver ? "black" : "white",
        }}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
