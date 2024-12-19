import { useState, useEffect, useContext } from "react";
import { useSelector } from "react-redux";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");

  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);

  // Accessing cart items from the Redux store
  const cartItems = useSelector((store) => store.cart.items);
   console.log(cartItems);
  return (
    <div className="flex justify-between bg-pink-100 shadow-lg mb-2 sm:bg-yellow-200">
      <div className="logo-container bg-pink-200">
        <img className="w-50" src={LOGO_URL} alt="Logo" />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4 text-xl text-sky-600 font-extrabold">
            Online Status: {onlineStatus ? "🟩" : "🔴"}
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
            <Link to="/grocery">Grocery</Link>
          </li>

          <li className="px-4 text-xl text-sky-600 font-extrabold">
            <Link to="/cart">Cart ({cartItems.length} items)</Link>
          </li>
          <button
            className="hover:bg-blue-300 rounded-lg text-2xl font-extrabold px-4"
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
          <li className="px-4 text-xl text-sky-600 font-extrabold">
            {loggedInUser}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
