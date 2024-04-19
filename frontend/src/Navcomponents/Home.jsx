import { Carousel } from "../Productpage/Carousel";
import Prohome from "../Productpage/Prohome";
import { slides } from "../Productpage/carouselData.json";
const Home=()=>
{
    return(
    <div>
        <div className="Carousel">
                <Carousel data={slides} />
        </div>
        <div>
            <Prohome/>
        </div>
    </div>)
}
export default Home;