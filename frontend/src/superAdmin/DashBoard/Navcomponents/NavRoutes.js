import { Route, Routes } from "react-router-dom";
import Men from "./Navcomponents/Men";
import Home from "./Navcomponents/Home";
import Women from "./Navcomponents/Women";
import Kids from "./Navcomponents/Kids";
import About from "./Navcomponents/About";
import Contact from "./Navcomponents/Contact";

const NavRoutes=()=>
{

return(<div>


    <Routes>
       <Route  path="/"  element={<Home/>}  />
       <Route  path="/men"  element={<Men/>}  />
       <Route  path="/women"  element={<Women/>}  />
       <Route  path="/kids"  element={<Kids/>}  />
       <Route  path="/about"  element={<About/>}  />
       <Route  path="/contact"  element={<Contact/>}  />


    </Routes>





</div>)




}
export default NavRoutes;