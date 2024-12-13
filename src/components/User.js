/**
 * The `User` component in this code snippet displays user information and includes state variables for
 * count and count1.
 * @returns The `User` component is being returned, which contains JSX elements displaying the `count`,
 * `count1`, `name`, location, and contact information.
 */
import { useEffect, useState } from "react";

const User = ({name}) => {
    const [count,setCount]=useState(0);
    const [count1]=useState(1);
    useEffect(()=>{
       const timer=setInterval(() => {
        //  console.log("NAMASTE OP");
       }, 1000); 
      // console.log("called useeffect");
       return () =>{
        clearInterval(timer);
              // console.log("Called in useeffect")//unmounting phase
       }
    },[])
    // console.log("Called outside the useeffect");
    return (
      <div className="user-card">
        {/* <h2>Count={count}</h2>
        <h2>Count1={count1}</h2> */}
        <h2>Name:{name}</h2>
        <h3>Location:Bengaluru</h3>
        <h3>Contact:896797998979</h3>
        
      </div>
    );
}
 export default User;
