import Promen from "../Productpage/Promen";
import { Carousel } from "../Productpage/Carousel";
import { slides } from "../Productpage/carouselData.json";

const Men=()=>
{
    return(<>
        {/* <div className="Carousel">
            <Carousel data={slides} />
        </div> */}
        <div>
            <h1 style={{fontSize:'40px', fontWeight:'normal', textAlign: 'center', marginBottom: '50px', fontFamily: 'fantasy'}}>Men's Collection</h1>
            <Promen/>
        </div>
    </>)
}
export default Men;