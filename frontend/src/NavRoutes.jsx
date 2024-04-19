import { Route, Routes } from "react-router-dom";
import Men from "./Navcomponents/Men";
import Home from "./Navcomponents/Home";
import Women from "./Navcomponents/Women";
import Kids from "./Navcomponents/Kids";
import About from "./Navcomponents/About";
import Contact from "./Navcomponents/Contact";
import Prodetails from "./Productpage/Prodetails";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import Auth from "./Navcomponents/Auth";

const NavRoutes=()=>
{

return(<div>


    <Routes>
       <Route  path="/"  element={<Home/>}  />
       <Route  path="/men"  element={<Men/>}/>
       <Route path="/men/product/:id" element={<Prodetails/>}/>
       <Route  path="/women"  element={<Women/>}  />
       <Route path="/women/product/:id" element={<Prodetails/>}/>
       <Route  path="/kids"  element={<Kids/>}  />
       <Route path="/kids/product/:id" element={<Prodetails/>}/>
       <Route  path="/about"  element={<About/>}  />
       <Route  path="/contact"  element={<Contact/>}  />
       <Route path="/product/:id" element={<Prodetails/>}/>
       <Route  path="/register"  element={<Register/>}  />
       <Route  path="/login"  element={<Login/>}  />
       <Route path="/auth" element={<Auth/>} />


    </Routes>





</div>)




}
export default NavRoutes;