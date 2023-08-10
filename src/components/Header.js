import download from "../download.png"
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { IconButton } from "@mui/material";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";


export default function Header() {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex shadow-lg bg-purple-200 justify-between">
      <div className="logo-container">
        <img className='w-56' src={download} alt="logo" />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">Online Status: {onlineStatus ? "✅" : "🔴"}</li>
          <li className="px-4"><Link to="/">Home</Link></li>
          <li className="px-4"><Link to="/about">About</Link></li>
          <li className="px-4">  <Link to="/contact">Contact Us</Link>          </li>
          <li className="px-4"><Link to="/grocery">Grocery</Link></li>

          <li className="px-4"><Link to="/cart">Cart - ({cartItems.length} items)</Link></li>
          <button
            className="px-4"
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>     
          <li className="px-4 ">{loggedInUser}</li>
   </ul>
      </div>
    </div>
  )
};