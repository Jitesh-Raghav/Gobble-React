import { CDN_URL } from "../utils/constants";

const RestaurantCard= (props)=>{ 
    const{resData}= props;  //destructuring the object

    //const{name,cuisines,avgRating,costForTwo,deliveryTime}= resData?.info; //optional chaining read
    
    return (
        <div className="m-5 p-2 w-[260px] h-[500px] bg-gray-50 hover:bg-lime-100 rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl">
    
            <img className="rounded-lg h-[250px] w-[300px] object-cover" alt="res-logo" src={ CDN_URL +resData.info.cloudinaryImageId}/>
              <div className="flex-1 p-3">
                <h3 className="font-bold text-lg py-3">{resData.info.name}</h3>                      
                <h4>{resData.info.cuisines.join(", ")}</h4>
                <h4>{resData.info.avgRating} stars</h4>
                <h4>{resData.info.costForTwo}</h4>
                <h4>{resData.info.sla.deliveryTime} minutes</h4>
              </div>
                    
        </div>
    );                              
};

//  HIGHER ORDER COMPONENT

// INPUT-> RESTAURANT CARD ==>> RESTAURANT CARD PROMOTED
//Higher order function takes input of a component/function and returns a function/component

export const withPromotedLabel= (RestaurantCard)=>{
   return(props)=>{
     return(
        <div>
            <label className="absolute bg-gray-800 text-white rounded-lg p-1 m-2">Promoted</label>
            <RestaurantCard {...props}/>
        </div>
     );
   };
};


export default RestaurantCard;