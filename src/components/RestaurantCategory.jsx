import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import AccordianBody from './AccordianBody';
import { useState } from "react";

const RestaurantCategory=({data,showItems, setshowIndex})=>{
    //console.log(data);  

    // const [showItems, setshowItems]=useState(false);
    
    const handleClick=()=>{
         setshowIndex();
    };
    return(<div>
        {/* Header */}
        <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 ">
            <div className="flex justify-between cursor-pointer">
               <span className="font-bold text-lg text-gray-800" onClick={handleClick}>{data.title}({data.itemCards.length})</span>
               <span><FontAwesomeIcon icon={faChevronDown} /></span> 
            </div>
            
         {/* Accordian Body  */}
        { showItems && <AccordianBody items={data.itemCards}/>}
        </div>

       
    </div>);
};

export default RestaurantCategory;