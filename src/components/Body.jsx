import RestaurantCard from "./RestaurantCard";
import AllResData from "../utils/mockData";
import { useState , useEffect } from "react";                    //react hook is normal js function, like a utility function
                                                                 //useState react hook or a utility function which keeps data and ui layer in sync.


const Body= () =>{

    const [listOfRestaurant, setlistOfRestaurant]= useState([]);     //Here, I have removed AllResData from the arg  of useState, cuz now we have live data from api, initially what it was doing that, it was loading the ResCards from allResData then afterwards using the useEffect hook to load the liive data after re-rendering, but now we don't load anything, as we are passing the empty list, so screen reamins white for the time live data loads. In that buffer time we can add a loading animation or shimmer animation..

     useEffect(()=>{
      fetchData();
     },[]);

     const fetchData=async ()=>{
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.6148698&lng=73.8729867&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING      ");

      const json= await data.json();
      console.log(json);
      setlistOfRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);  //optionall chaining 
     };

    if(listOfRestaurant.length==0){
      return <h1>Loading...</h1>
    }

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