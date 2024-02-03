import RestaurantCard from "./RestaurantCard";
import AllResData from "../utils/mockData";
import { useState } from "react";                    //react hook is normal js function, like a utility function



const Body= () =>{

    const [listOfRestaurant, setlistOfRestaurant]= useState(AllResData);      //useState react hook or a utility function which keeps data and ui layer in sync.

    return (
       <div className="body">
         <div className="filter">
           <button className="filter-btn" onClick={()=>{                     //here call js code is written in {}, and inside it there is a callback function ()=>{} which does something onClick

             const filteredList= listOfRestaurant.filter(
                (res)=> res.info.avgRating>4);
                setlistOfRestaurant(filteredList);                           //whenever a state variable changes react re-renders the components and keeps the ui and data layer in sync

             }}>Top Rated Restaurants</button>
          </div>
          
           <div className="res-container">
             {listOfRestaurant.map((restaurant)=>(                              //This is basically the iteration of all the restaurants     //study map,filter,reduce...
             <RestaurantCard key={restaurant.info.id} resData={restaurant}/>  //every card should have a unique key, bina uske bhi ho jayega but it should have keys...
           ))}
          
           </div>
       </div>
 
    );
 };

 export default Body;