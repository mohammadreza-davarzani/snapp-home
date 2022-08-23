import './home.css'
import QuickAccess from "../quickAccess/quickAccess";
import Slide from './slide/slide';
import OfferedDisCount from './offeredDiscount/offeredDiscount';
import Promotion from './promotion/promotion';
import Offers from './offers/offers';
const Home = () => {
  return (
    <>
    
        <QuickAccess/>
        <Slide/>
        <OfferedDisCount/>
        <Promotion/>
        <Offers/>
    </>
    
    );
}

export default Home;