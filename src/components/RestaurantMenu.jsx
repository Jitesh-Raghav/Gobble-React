import { useEffect , useState } from "react";
import Shimmer from "./Shimmer"; 
import { useParams } from "react-router-dom";


const RestaurantMenu =()=>{

   const{ resId }= useParams();

   const[ResInfo,setResInfo]= useState(null);

   useEffect(()=>{
        fetchMenu();
   },[]);

   const fetchMenu= async ()=>{
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.61610&lng=73.72860&restaurantId="+resId);
        const json = await  data.json();
        console.log(json);

        setResInfo(json.data);
  
    };

    if(ResInfo==null) return <Shimmer/>;

    // const {name, cuisines, costForTwo} = ResInfo?.cards[0]?.card?.card?.info;

    const {itemCards}= ResInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    console.log(itemCards);
    
    return (
        <div className="MenuInfo">
            <h1>{ResInfo?.cards[0]?.card?.card?.info.name}</h1>                   {/*//here i haven't used the .data after ResInfo, cuz i already updated its value with json.data in setResInfo, so that's the reason...*/}
            <p>{ResInfo?.cards[0]?.card?.card?.info.cuisines.join(", ")} : {ResInfo?.cards[0]?.card?.card?.info.costForTwoMessage}</p>
            <p>{ResInfo?.cards[0]?.card?.card?.info.locality}, {ResInfo?.cards[0]?.card?.card?.info.sla.lastMileTravelString}</p>
            <p>{ResInfo?.cards[0]?.card?.card?.info.avgRating} {ResInfo?.cards[0]?.card?.card?.info.totalRatingsString}</p>
            <h2>Menu</h2>
            <ul>
               {itemCards.map(item=>
               <li key={item.card.info.id}>{item.card.info.name}- {" Rs "} {item.card.info.price/100 || item.card.info.defaultPrice/100}</li>)}
            </ul>
        </div>
    );
};

export default RestaurantMenu;