import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
    const [btnNameReact, setBtnNameReact] = useState("Login");
    console.log("Header Render");

    const onlineStatus = useOnlineStatus();
    
    const data =  useContext(UserContext);
    console.log(data)

    // Subscribing to the store using a selector Selector
    const cartItems = useSelector((store) => store.cart.items);
    console.log(cartItems)

    return (
        <div className="flex justify-between bg-pink-100 shadow-lg mb-2 sm:bg-yellow-50">
            <div className="logo-container">
                <img className="w-56" src={LOGO_URL}></img>
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-4">Online Status: {onlineStatus? "✅" : "🔴" }</li>
                    <li className="px-4"><Link to="/">Home</Link></li>
                    <li className="px-4"><Link to="about">About Us</Link></li>
                    <li className="px-4"><Link to="contact">Contact Us</Link></li>
                    <li className="px-4"><Link to="grocery">Grocery</Link></li>
                    <button className="login" onClick={() => {btnNameReact === "Login"? setBtnNameReact("Logout") : setBtnNameReact("Login")}}>{btnNameReact}</button>
                    <li className="px-4 font-bold"><Link to="cart">Cart ({cartItems.length})</Link></li>
                    <li className="font-bold">{data?.loggedInUser}</li>
                </ul>
            </div>
        </div>
    );
};

export default Header;