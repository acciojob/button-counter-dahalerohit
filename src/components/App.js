
import React from "react";
import './../styles/App.css';
import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Button clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click Me
      </button>
    </div>
  );
};

export default App;

