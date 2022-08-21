import './home.css'
import QuickAccess from "../quickAccess/quickAccess";
import Slide from './slide/slide';
import OfferedDisCount from './offeredDiscount/offeredDiscount';
import Promotion from './promotion/promotion';
const Home = () => {
  return (
    <>
    
        <QuickAccess/>
        <Slide/>
        <OfferedDisCount/>
        <Promotion/>

    </>
    
    );
}

export default Home;