import { Link } from "react-router-dom";
import "./ProCard.css"
import 'boxicons'
import axios from "axios";
<script src="https://unpkg.com/boxicons@2.1.4/dist/boxicons.js"></script>


const ProCard=(props)=>
{
    const addToCart=(ProductId,img,Brand,Price,Size)=>
    {
        axios.post("http://localhost:5000/addCart",{ProductId,img,Brand,Price,Qty:1,Size})
        .then((res)=>console.log(res.data))
        .catch((e)=>console.log(e))
    }
    return(
        <div className="Procard">
         <img src={props.img[0]} style={{width:"200px",height:"250px"}} />
         <h4>ID-{props.ProductId}</h4>
         <h3>{props.Brand}</h3>
         <h4>Rs. {props.Price}</h4>
         
        <Link to={`product/${props.ProductId}`}> <button style={{marginRight:"50px"}}><box-icon name='show' animation='tada-hover' size='md' ></box-icon></button> </Link>
        <button onClick={()=>addToCart(props.ProductId,props.img[0],props.Brand,props.Price, props.Size[0])}><box-icon name='cart-add' type='solid' animation='tada-hover' size='md' ></box-icon></button>


        </div>




    )
}
export default ProCard;