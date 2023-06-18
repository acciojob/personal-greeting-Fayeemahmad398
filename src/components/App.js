import React, { useState } from "react";
import "./../styles/App.css";

const App = () => {
  const [name, setName] = useState("");
  return (
    <div>
      {/* Do not remove the main div */}
      <h3>Enter your name:</h3>
      <input
        type="text"
        onChange={(event) => {
          setName(event.target.value);
        }}
      />

      {name && <p>Hello {name}!</p>}
    </div>
  );
};

export default App;
