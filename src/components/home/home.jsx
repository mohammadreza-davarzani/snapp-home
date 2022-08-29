import OfferedDisCount from './offeredDiscount/offeredDiscount';
import QuickAccess from "../quickAccess/quickAccess";
import Promotion from './promotion/promotion';
import { useSelector } from "react-redux";
import Offers from './offers/offers';
import Slide from './slide/slide';
import './home.css'
const Home = () => {
  const isTheme = useSelector(state => state.theme)
  const theme = isTheme == false ;
  return (
    <>
      <div  className={theme ? "scrollbar2  " : "scrollbar2 bg-gray-900"} id="target">
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