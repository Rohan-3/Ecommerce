

const CartCard=(props)=>
{
   
   
   
   
    return(
        <div className="Procard">
         <img src={props.img} style={{width:"200px",height:"250px"}} />
         <h4>ID-{props.ProductId}</h4>
         <h3>{props.Brand}</h3>
         <h4>Rs. {props.Price}</h4>
         <h4>Quantity:{props.Qty}</h4>
         <h4>Size:{props.Size}</h4>
         
        <button style={{backgroundColor:"blueviolet"}} onClick={()=>props.removeData(props.ProductId)}>Remove</button>

        </div>
    )
}


export default CartCard;