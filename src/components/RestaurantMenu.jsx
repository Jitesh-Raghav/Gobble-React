import Shimmer from "./Shimmer"; 
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";


const RestaurantMenu =()=>{

   const{ resId }= useParams();

  //You can also create a useState hook here and directly fetch ResMenu, but its better to use custom hooks.
  const ResInfo= useRestaurantMenu(resId);

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