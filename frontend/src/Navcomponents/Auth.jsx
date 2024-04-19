import { useState } from "react"
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";

const Auth = () => {
    const [flag, setFlag] = useState(false);
    return(<div>
        <button onClick={()=>setFlag(true)}>Register</button>
        <button onClick={()=>setFlag(false)} className="ml-5">Login</button>
        {flag === false ? <Login/> : <Register/>}
    </div>)
}
export default Auth