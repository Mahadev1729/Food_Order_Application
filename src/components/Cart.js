import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearItem } from "../Redux/cartSlice";

const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items);
    const dispatch=useDispatch();
    const handleClearCart=()=>{
        dispatch(clearItem());
    }

    return (
        <div className="text-center m-6 p-6">
            <h1 className="text-5xl font-bold">Your Cart</h1>
            <div className="w-6/12 m-auto p-4 bg-white rounded-lg shadow-md">
                <div className="divide-y divide-gray-200">
                    <button className="p-2 m-2 bg-black text-white" onClick={handleClearCart} >Clear Cart</button>
                    {cartItems.length==0 && <h1>Cart is empty </h1>}
                    <ItemList items={cartItems} />
                </div>
            </div>
        </div>
    );
}

export default Cart;

