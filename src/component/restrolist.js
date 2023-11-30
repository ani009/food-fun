import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./shimmer";

const Restromenu=()=>{

    const { id }=useParams();
const[restro,setrestro]=useState(null);


useEffect(()=>{
    getrestroinfo();
},[]);

async function getrestroinfo(){
    const data= await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.1702401&lng=72.83106070000001&&submitAction=ENTER&restaurantId="+id
    );
    const json= await data.json();
    const restaurantData =
          json?.data?.cards
            ?.map((x) => x.card)
            ?.find((x) => x && x.card["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.Restaurant")?.card
            ?.info || null;
            setrestro(restaurantData);
}

return (!restro)?<Shimmer/>:(
    <div className="container1">
        <div className="restro-info">
            <div className="restro-img">
            <img className="imgrestro"src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+restro.cloudinaryImageId}/>
            </div>
        <div className="restro-loc">
        <h1>restro.id:{id}</h1>
        <h1>{restro?.name}</h1>
        <h2>{restro?.city}</h2>
        {/* <h1>this is location area</h1> */}
        </div>
        </div>
        <div className="menu-items">
            <h1>menu items</h1>
        </div>
        
    </div>
);
};

export default Restromenu;