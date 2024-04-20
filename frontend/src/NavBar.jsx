import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import axios from "axios";
import { useState,useEffect } from "react";
import "./App.css";
const NavBar=()=>
{
    let [items,setItems]= useState();
    let [data,setData] = useState([]);

    const Cartitems=()=>
    {
        axios.get("http://localhost:5000/getCart")
        .then((res)=>{setItems(res.data.items);
           setData(res.data.data)
        })
        .catch((e)=>console.log(e))
    }

    useEffect(()=>{Cartitems()},[data])

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
               <Link to="/cart"><h3><span style={{position:"absolute", top:"0", right:"6%"}}>{items}</span><FiShoppingCart style={{height:"18px", width:"50px", position:"absolute", top:"17px"}}/></h3></Link>

            </div>
        </div>
       
    </div>)
}
export default NavBar;