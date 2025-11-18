import React from "react";
import Parent from "./Parent";

function App() {
  const message = "Hello from App component!";

  return (
    <div>
      <h2>App Component</h2>
      <Parent msg={message} />
    </div>
  );
}

export default App;
