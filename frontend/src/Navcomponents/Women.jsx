import Prowomen from "../Productpage/Prowomen";
import { Carousel } from "../Productpage/Carousel";
import { slides } from "../Productpage/carouselData.json";
const Women=()=>
{


    return(<>
        {/* <div className="Carousel">
            <Carousel data={slides} />
        </div> */}
        <div>
        <h1 style={{fontSize:'40px', fontWeight:'normal', textAlign: 'center', marginBottom: '50px', fontFamily: 'fantasy'}}>Women's Collection</h1>
            <Prowomen/>
        </div>
    </>)
}
export default Women;