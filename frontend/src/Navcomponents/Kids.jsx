import Prokids from "../Productpage/Prokids";
import { Carousel } from "../Productpage/Carousel";
import { slides } from "../Productpage/carouselData.json";

const Kids=()=>
{
    return(<>
        {/* <div className="Carousel">
            <Carousel data={slides} />
        </div> */}
        <div>
        <h1 style={{fontSize:'40px', fontWeight:'normal', textAlign: 'center', marginBottom: '50px', fontFamily: 'fantasy'}}>Kid's Collection</h1>
            <Prokids/>
        </div>
    </>)
}
export default Kids;