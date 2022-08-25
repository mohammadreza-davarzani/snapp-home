import OfferedDisCount from './offeredDiscount/offeredDiscount';
import QuickAccess from "../quickAccess/quickAccess";
import Promotion from './promotion/promotion';
import Offers from './offers/offers';
import Slide from './slide/slide';
import './home.css'
const Home = () => {
  return (
    <>
      <div  className="scrollbar2  " id="target">
        <div className="force-overflow">
            <QuickAccess/>
            <Slide/>
            <OfferedDisCount/>
            <Promotion/>
            <Offers/>
        </div>
      </div>
       
    </>
    
    );
}

export default Home;