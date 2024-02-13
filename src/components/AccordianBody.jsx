import { CDN_URL } from "../utils/constants";

const AccordianBody=({items})=>{
    console.log(items)
    return (
        <div>

            {items.map((item)=>(
              <div  key={item.card.info.id} className="m-2 p-2 border-gray-300 border-b-2 text-left flex">
               
             <div className="w-9/12">
                <div className="py-2">
                    
                    <span className="font-bold text-gray-900">{item.card.info.name}</span>
                    <span> -₹ {item.card.info.price/100}</span>   

                </div>
                <p className="text-xs">{item.card.info.description}</p>
             </div>
             <div className="p-4 w-3/12 object-cover">
                <div className="absolute"><button className="bg-white p-2 mx-8 my-20 shadow-xl rounded-lg text-green-700 font-bold text-sm">Add +</button></div>
                <div><img src={CDN_URL + item.card.info.imageId}/></div>
            </div>
            
              </div>
           ))}

        </div>
    );
};

export default AccordianBody;