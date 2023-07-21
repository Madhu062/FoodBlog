import download from "../download.png"
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

export default function Header() {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  const onlineStatus = useOnlineStatus();
  return (
    <div className="flex shadow-lg bg-purple-300 justify-between">
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

          <li className="px-4">Cart</li>
          <button
            className="px-4"
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>        </ul>
      </div>
    </div>
  )
};