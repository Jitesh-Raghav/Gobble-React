import RestaurantCard from "./RestaurantCard";
import AllResData from "../utils/mockData";
import { useState , useEffect } from "react";                    //react hook is normal js function, like a utility function
import Shimmer from "./Shimmer";                                  //useState react hook or a utility function which keeps data and ui layer in sync.
import {Link} from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus";

const Body= () =>{

    const [listOfRestaurant, setlistOfRestaurant]= useState([]);     //Here, I have removed AllResData from the arg  of useState, cuz now we have live data from api, initially what it was doing that, it was loading the ResCards from allResData then afterwards using the useEffect hook to load the liive data after re-rendering, but now we don't load anything, as we are passing the empty list, so screen reamins white for the time live data loads. In that buffer time we can add a loading animation or shimmer animation..
    const [FilteredlistOfRes, setFilteredlistOfRes]= useState([]);   //created this second list cuz of a bug, i.e when we were filtering for 2nd time then it was filtering from the already filtered list of Res, so i made a copy of original list...and just see the code flow..

    const [searchText, setsearchText]= useState("");

     useEffect(()=>{                                                //if no dependency array[], useEffect called on every render 
      fetchData();                                                  //if dependency array[] empty, useEffect called on initial render only(just once)
     },[]);                                                         //if dependency array [btnName], useEffect called when btnName is updated..

     const fetchData=async ()=>{      //try using corsproxy.io here..
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.6148698&lng=73.8729867&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

      const json= await data.json();
      console.log(json);
      setlistOfRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);  //optionall chaining 
      setFilteredlistOfRes(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    
    //conditional rendering
    // if(listOfRestaurant.length==0){
    //   return <Shimmer/>;  
    // }

    const onlineStatus= useOnlineStatus();
    if(onlineStatus==false) return <h1>Looks like you're offline, check the internet conncetion and try again</h1>

    return listOfRestaurant.length==0 ? (
            <Shimmer/>
     ) : (
       <div className="body">
         <div className="filter flex">
          <div className="search m-4 p-4">
            <input type="text" className="border border-solid border-black" value={searchText} onChange={(e)=>{   //did this cuz i want the value user enters in the search text
              setsearchText(e.target.value);
            }}/>
            <button className="px-4 py-2 m-4 bg bg-green-100 shadow rounded-lg" onClick={()=>{
              //filter the restaurant cards and update the UI

              console.log(searchText);
              const FilteredRes=listOfRestaurant.filter(
                (res)=> res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setFilteredlistOfRes(FilteredRes);                             //updating the filteredList taaki original list na change ho..

            }}>search</button>
          </div>
           <div className="px-4 py-2 m-4 flex items-center">
           <button className="m-4 p-4 flex bg bg-gray-100 shadow rounded-lg" onClick={()=>{                     //here call js code is written in {}, and inside it there is a callback function ()=>{} which does something onClick

                        const filteredList= listOfRestaurant.filter(
                        (res)=> res.info.avgRating>4);
                        setlistOfRestaurant(filteredList);                           //whenever a state variable changes react re-renders the components and keeps the ui and data layer in sync

                      }}>Top Rated Restaurants</button>
           </div>
          </div>

           <div className="flex flex-wrap">
             {FilteredlistOfRes.map((restaurant)=>(                              //This is basically the iteration of all the restaurants     //study map,filter,reduce...
             <Link key={restaurant.info.id} to={"/restaurants/"+ restaurant.info.id}><RestaurantCard resData={restaurant}/></Link>  //every card should have a unique key, bina uske bhi ho jayega but it should have keys...
           ))}
          </div>
       </div>
 
    );
 };

 export default Body;