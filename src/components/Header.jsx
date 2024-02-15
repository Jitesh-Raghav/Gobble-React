import { useState } from "react";
import { LOGO_URL } from "../utils/constants";  //won't using the logo url now, direct png using
import logo from "../images/logo.png";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";

const Header= () =>{

    const onlineStatus= useOnlineStatus();
    // let btnName = "Logout";
    const[btnName,setbtnName]= useState("Logout");


    //SUBSCRIBING THE HEADER TO THE STORE USING A SELECTOR...
    const cartItems = useSelector((store)=>store.cart.items);
    console.log(cartItems);

    return(
        <div className="flex justify-between shadow-lg bg-gradient-to-b from-lime-500 to-lime-200 ">
            <div className="logo-container"> 
                <img className="w-40"src={logo} />
            </div>
            <div className="flex align items-center">
             <ul className="flex p-5 m-4 text-l">
                <li className="px-4 font-bold font-sans text-gray-700 hover:text-black">Online Status: {onlineStatus? "🟢":"🔴"}</li>
                <li className="px-4 font-bold text-gray-700 hover:text-black"><Link to="/">Home</Link></li> 
                <li className="px-4 font-bold text-gray-700 hover:text-black"><Link to="/grocery">Grocery</Link></li>             
                <li className="px-4 font-bold text-gray-700 hover:text-black"><Link to="/about">About Us</Link></li>
                <li className="px-4 font-bold text-gray-700 hover:text-black"><Link to="/contact">Contact Us</Link></li>           
                <li className="px-4 font-bold text-gray-700 hover:text-black cursor-pointer"><Link to="/cart">Cart({cartItems.length} items)</Link></li>
                <button  className="button font-bold text-gray-700 hover:text-black" 
                onClick={()=>{
                    // btnName="Login";

                    btnName == "Logout" ? 
                    setbtnName("Login"):     //if btnname== logout, then change to login, else change to logout
                    setbtnName("Logout");

                    console.log(btnName)
                }}
                >{btnName}</button>
             </ul>
            </div>
        </div>
    );
  
};

export default Header;