import { useEffect, useState } from "react";
import axios from "axios";
import ProCard from "./ProCard";

const Prokids = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const[kidspro,setkidspro]=useState([]);
    let categorie="Kids";
 
   
    
    useEffect(() => {
        axios.get(`http://localhost:5000/getData`)
            .then((res) => {
                setProducts(res.data);
                setLoading(false);
            })
            .catch((e) => console.log(e));
    }, []);

    //kids products filtration

    useEffect(()=>{

setkidspro(products.filter((temp)=>temp.Category.includes(categorie)))
    },[products])



    return (
        <div>
            
            {(loading==true) ? 
            <p>Kids products are Loading...</p>
            : 
            <div>
    
                 <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,300px)', justifyContent: 'space-evenly' }}>
                       
                       {
                        kidspro.map((temp)=><ProCard img={temp.img} ProductId={temp.ProductId} Brand={temp.Brand} Price={temp.Price} Size={temp.Size}/>)
                       }

                
                </div> 
            </div>
            }
        </div>
    );
};

export default Prokids;