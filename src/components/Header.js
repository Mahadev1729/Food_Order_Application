/**
 * The `Header` component in this JavaScript code displays a header with a logo, navigation items,
 * online status indicator, and a login/logout button that toggles its text.
 * @returns The `Header` component is being returned. It consists of a header section with a logo,
 * navigation items, online status indicator, and a login/logout button. The online status is displayed
 * as a green or red indicator emoji based on the `onlineStatus` state. The button text toggles between
 * "Login" and "Logout" when clicked.
 */

import { useState,useEffect,useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");

  const onlineStatus=useOnlineStatus();

  const {loggedInUser}= useContext(UserContext)

  console.log(loggedInUser);
  
  useEffect(()=>{
   
  },[btnNameReact]);
  return (
    <div className="flex justify-between bg-pink-100 shadow-lg mb-2 sm:bg-yellow-200 ">
      <div className="logo-container bg-pink-200">
        <img className="w-50" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4 text-xl text-sky-600 font-extrabold">
            Online Status:{onlineStatus ? "🟩" : "🔴"}
          </li>
          <li className="px-4 text-xl text-sky-600 font-extrabold">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4 text-xl text-sky-600 font-extrabold">
            <Link to="/about">About</Link>
          </li>
          <li className="px-4 text-xl text-sky-600 font-extrabold">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4 text-xl text-sky-600 font-extrabold">
            <Link to="/grocery">Grocerys</Link>
          </li>
          <li className="px-4 text-xl text-sky-600 font-extrabold">Cart</li>
          <button
            className="hover:bg-blue-300 rounded-lg text-2xl font-extrabold px-4"
            onClick={() => {
              btnNameReact == "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
          <li className="px-4 text-xl text-sky-600 font-extrabold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
