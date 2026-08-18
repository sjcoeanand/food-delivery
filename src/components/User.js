import { useState } from "react";

const User = ({name}) => {

    const [count, setCount] = useState(0);
    return (
        <div>
            <h2>User {name} Component {count}</h2>
            <button onClick={()=>{
                     setCount(prev => prev + 1);
                }}>Count Increase</button>
            <ul>
                <li>Anand Shendage</li>
                <li>Ankur Waghela</li>
                <li>Sundar Pichai</li>
            </ul>
        </div>
    )
}

export default User;