const CartPage=()=>
{
    const getData=()=>
    {
        axios.get("http://localhost:5000/getCart")
        .then((res)=>console.log(res))
        .catch((e)=>console.log(e))
    }

    useEffect(()=>{getData()},[])
    return(<div>

<h1>CART PAGE</h1>


    </div>)
}
export default CartPage