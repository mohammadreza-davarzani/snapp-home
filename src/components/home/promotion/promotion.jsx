import React from "react";
import "./promotion.css"
import axios from "axios";
import PromotionCard from "./promotionCard";

const Promotion = () =>{
    const [data,setData] = React.useState([])
    const getData = () =>{
        axios.get('http://localhost:3002/data')
        .then((res) => {
           // handle success
           setData(res.data);
           console.log(res.data)
         })
    }
    React.useEffect(() => {
        getData()
       
    }, [])
    return(
        <>
        {
            data.map((items)=>(
                <PromotionCard key={items.id}  items={items}/>
            ))
        }
            
           
           



        </>
    )
}

export default Promotion