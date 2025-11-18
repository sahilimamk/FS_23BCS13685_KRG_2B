import React from "react";

function Child({ message }) {
  return (
    <div>
      <h4>Child Component</h4>
      <p>Message: {message}</p>
    </div> 
  );
}

export default Child;
