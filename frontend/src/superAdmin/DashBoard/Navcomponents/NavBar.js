import { Link } from "react-router-dom";
import "./App.css";
const NavBar=()=>
{
    return(<div>

        <div className='Nav'>

            <h1>LOGO</h1>
            <div className='Nav-left'> 

               <Link to="/"><h3>HOME</h3> </Link>
               <Link to="/men"><h3>MEN</h3></Link>
               <Link to="/women"><h3>WOMEN</h3></Link>
               <Link to="/kids"><h3>KIDS</h3></Link>
               <Link to="/contact"><h3>CONTACT</h3></Link>
               <Link to="/about"><h3>ABOUT</h3></Link>
               

            </div>



        </div>
       
    </div>)
}
export default NavBar;