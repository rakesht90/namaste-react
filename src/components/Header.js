import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";

export const Header = () => {
  const onlineStatus = useOnlineStatus();
  const [btnName, setBtnName] = useState("Login");
  return (
    <div className="flex bg-pink-200 p-4 m-4 justify-between items-center">
      <div className="w-24">
        <img alt="logo" className="" src={LOGO_URL} />
      </div>
      <div className="">
        <ul className="flex">
          <li className="px-2">Online Status: {onlineStatus ? "🟢" : "🔴"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/contactUs">Contact Us</Link>
          </li>

          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">Cart</li>
          <button
            className="px-4 bg-green-300 border rounded-lg "
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};
export default Header;
