import { useState } from "react";

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
    
    
};
export default counter;
