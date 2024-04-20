import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Prodetails.css';
import 'boxicons';
<script src="https://unpkg.com/boxicons@2.1.4/dist/boxicons.js"></script>

const Prodetails=()=>
{
    const {id}=useParams();
    
    
    
    
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedQuantity, setSelectedQuantity] = useState(1);
    const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);
    const [isDesc, setIsDesc] = useState(false);
    const [selectedSize,setSelectedSize] = useState("");
    
    
    useEffect(() => {
        axios.get(`http://localhost:5000/specificProduct/${id}`)
            .then((res) => {
                setProducts(res.data);
                setLoading(false);
            })
            .catch((e) => console.log(e));
    }, [id]);

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed:10000
      };

      const incrementQuantity = () => {
        setSelectedQuantity(selectedQuantity + 1);
      };
    
      const decrementQuantity = () => {
        if (selectedQuantity > 1) {
          setSelectedQuantity(selectedQuantity - 1);
        }
      };

      const toggleDescription = () => {
        setIsDescriptionVisible(!isDescriptionVisible);
      };

      const toggleDesc= () => {
        setIsDesc(!isDesc);
      }

      const addToCart=(ProductId,img,Brand,Price,Qty,Size)=>
    {
        if(selectedSize!=="")
        {
          axios.post("http://localhost:5000/addCart",{ProductId,img,Brand,Price,Qty,Size})
        .then((res)=>console.log(res.data))
        .catch((e)=>console.log(e))
    }
        else
        {
          alert("Please select size")
        }
    }


    return(<div>

        {(loading==true) ? 
        <p>Loading...</p>
        : 
        <div className="prodetail-container">

             {
                  <div className="slider-container">
                <Slider {...sliderSettings} className="custom-slider">
                  
                {
                products[0].img.map((image, index) => (
                  <div key={index}>
                    <img src={image} alt={`Image ${index + 1}`} style={{width:"200px",height:"250px"}} />
                  </div>
                ))
                }
                
              </Slider>

              
              </div>
             }

             <div className="prodetail-info">

             
             <h1 className="brand">{products[0].Brand}</h1>
             <h3 className="pr">PRICE: Rs.{products[0].Price}</h3>
             

             <select id="size" onChange={(e)=>setSelectedSize(e.target.value)} >
          <option value="">CHOOSE SIZE</option>
          {products[0].Size.map((size, index) => (
            <option key={index} value={size} >{size}</option>
          ))}
        </select>
        <div className="Prodetail-quantity">
          <h3>QUANTITY:</h3>
        <button onClick={decrementQuantity}>-</button>
        <input type="numeric" id="quantity" min="1" value={selectedQuantity} style={{width:"40px"}} />
        <button onClick={incrementQuantity}>+</button>
        </div>


        
       <div>
        <button className="btn" onClick={()=>addToCart(parseInt(id),products[0].img[0],products[0].Brand,products[0].Price,selectedQuantity,selectedSize)}>ADD TO CART </button>
        <button className="btn">BUY NOW</button>
       </div>


     <div className="dropdown">
        <div className={`dropdown-header ${isDescriptionVisible ? 'clicked' : ''}`} onClick={toggleDescription}>Details <box-icon name='message-detail' animation='fade-down' color='#fcf7f7' ></box-icon></div>
        {isDescriptionVisible && (
          <div className="dropdown-content">
           <p>{products[0].Description.map((temp)=><h1><box-icon name='t-shirt' type='solid' color='#1c1a1a' size='sm'></box-icon>{temp}</h1>)}</p>
          </div>
        )}
      </div>

      

      

      </div>  
             
        </div>
        }
    </div>)
}

export default Prodetails;