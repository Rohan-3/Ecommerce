import { Link, useNavigate } from "react-router-dom";
import "./App.css";
import Cookies from 'js-cookie';
const NavBar=()=>
{
    const nav = useNavigate();
    let userToken = Cookies.get('userToken');
    const handleLogout = () =>{
        Cookies.remove('user');
        Cookies.remove('userToken');
        nav("/");
        window.location.reload();
    }
    return(<div>
        <div className='Nav'>
            <h1>LOGO</h1>
            {
                userToken == null 
                ?
                <div className='Nav-left'> 
                    <Link to="/"><h3>HOME</h3> </Link>
                    <Link to="/men"><h3>MEN</h3></Link>
                    <Link to="/women"><h3>WOMEN</h3></Link>
                    <Link to="/kids"><h3>KIDS</h3></Link>
                    <Link to="/contact"><h3>CONTACT</h3></Link>
                    <Link to="/about"><h3>ABOUT</h3></Link>
                    <Link to="/auth"><h3>LOGIN/REGISTER</h3></Link>
                </div>
                :
                <div className='Nav-left'> 
                    <Link to="/"><h3>HOME</h3> </Link>
                    <Link to="/men"><h3>MEN</h3></Link>
                    <Link to="/women"><h3>WOMEN</h3></Link>
                    <Link to="/kids"><h3>KIDS</h3></Link>
                    <Link to="/contact"><h3>CONTACT</h3></Link>
                    <Link to="/about"><h3>ABOUT</h3></Link>
                    <Link to="/" onClick={handleLogout}><h3>LOGOUT</h3></Link>
                </div>
            }
            
        </div>
    </div>)
}
export default NavBar;