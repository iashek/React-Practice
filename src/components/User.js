import { useState } from "react";

const User = ({ name, location }) => {
    const [count, setCount] = useState(0);

    return (
        <div className="user-card m-4 p-4 bg-gray-50 rounded-lg">
            <h1>Count: {count}</h1>
            <h2>Name: {name}</h2>
            <h3>Location: {location}</h3>
            <h4>Contact: abhisheksingh.g07@gmail.com</h4>
        </div>
    );
};

export default User;