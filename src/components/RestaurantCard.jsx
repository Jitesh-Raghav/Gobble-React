import { CDN_URL } from "../utils/constants";

const RestaurantCard= (props)=>{ 
    const{resData}= props;  //destructuring the object

    //const{name,cuisines,avgRating,costForTwo,deliveryTime}= resData?.info; //optional chaining read
    
    return (
        <div className="m-5 p-4 w-[260px] bg-gray-200 rounded-lg">
            <img className="rounded-lg" alt="res-logo" src={ CDN_URL +resData.info.cloudinaryImageId}/>
            <h3 className="font-bold text-lg py-3">{resData.info.name}</h3>                      
            <h4>{resData.info.cuisines.join(", ")}</h4>
            <h4>{resData.info.avgRating} stars</h4>
            <h4>{resData.info.costForTwo}</h4>
            <h4>{resData.info.sla.deliveryTime} minutes</h4>
        </div>
    );                              
};


export default RestaurantCard;