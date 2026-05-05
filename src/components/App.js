
import React from "react";
import './../styles/App.css';

const App = () => {
  return (
    <div>
      const counter = () => {
    const [count, setcount] = useState(0);
    const onAdd = () => {
        setcount(count + 1);
    };
    return (
        <div>
            <p>Button Click {count} times</p>
            <button onClick={onAdd}>Click me</button>
        </div>
    )
    
    </div>
  )
}

export default App
