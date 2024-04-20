import CartCard from "./CartCard"
import axios from "axios";
import {useEffect, useState} from "react";

const CartPage=()=>
{

    let [dataCart, setDataCart] = useState([]);
    let [amt,setAmt] = useState();
    const getDataCart=()=>
    {
        axios.get("http://localhost:5000/getCart")
        .then((res)=>{
            setDataCart(res.data.data);
            setAmt(res.data.amount);
        })
        .catch((e)=>console.log(e))
    }

    const removeData=(ProductId)=>
    {
        axios.delete(`http://localhost:5000/removeCart/${ProductId}`)
        .then((res)=>console.log(res.data))
        .catch((e)=>console.log(e))
    }


    useEffect(()=>{getDataCart()},[dataCart])

    return(<div>
        
        {
            dataCart.length>0
            ?
            <div>
             <h1>Total:{amt}</h1>
             {
            dataCart.map((temp)=>{
                    return <CartCard img={temp.img} ProductId={temp.ProductId} Brand={temp.Brand} Price={temp.Price} Qty={temp.Qty} Size={temp.Size} removeData={removeData}/>
            })
             }

            </div>
            :
            <h1>Cart is empty</h1>
        }

    </div>)
}


export default CartPage