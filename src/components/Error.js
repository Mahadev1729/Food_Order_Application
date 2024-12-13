/* The line `import { useRouteError } from "react-router-dom";` is importing the `useRouteError`
function from the "react-router-dom" library. This function is likely used to handle errors related
to routing in a React application. */
import { useRouteError } from "react-router-dom";
import { ERROR_IMG } from "../utils/constants";
const Error = () => {
    const err=useRouteError();
    console.log(err);
    return(
        
        <div>
              <h1>Ooop's Something is went wrong.........</h1>
              <h3>{err.status}:{err.statusText}</h3>
              <img className="error-imag" src={ERROR_IMG}/>
        </div>
        
    )
}
export default Error;
