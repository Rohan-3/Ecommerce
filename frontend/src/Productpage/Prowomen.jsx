import { useEffect, useState } from "react";
import axios from "axios";
import ProCard from "./ProCard";

const Prowomen = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const[womenpro,setWomenpro]=useState([]);
    let categorie="Women"
 
   
    
    useEffect(() => {
        axios.get(`http://localhost:5000/getData`)
            .then((res) => {
                setProducts(res.data);
                setLoading(false);
            })
            .catch((e) => console.log(e));
    }, []);

    //Men products filtration

    useEffect(()=>{

setWomenpro(products.filter((temp)=>temp.Category.includes(categorie)))
    },[products])



    return (
        <div>
            
            {(loading==true) ? 
            <p>Women page is Loading...</p>
            : 
            <div>
    
                 <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,300px)', justifyContent: 'space-evenly' }}>
                       
                       {
                        womenpro.map((temp)=><ProCard img={temp.img} ProductId={temp.ProductId} Brand={temp.Brand} Price={temp.Price} Size={temp.Size}/>)
                       }

                
                </div> 
            </div>
            }
        </div>
    );
};

export default Prowomen;