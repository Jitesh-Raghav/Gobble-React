import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header= () =>{

    const onlineStatus= useOnlineStatus();
    // let btnName = "Logout";
    const[btnName,setbtnName]= useState("Logout");

    return(
        <div className="flex justify-between bg bg-pink-100 shadow-lg m-1">
            <div className="logo-container"> 
                <img className="w-40"src={LOGO_URL} />
            </div>
            <div className="flex align items-center">
             <ul className="flex p-5 m-4">
                <li className="px-4">Online Status: {onlineStatus? "🟢":"🔴"}</li>
                <li className="px-4"><Link to="/">Home</Link></li> 
                <li className="px-4"><Link to="/grocery">Grocery</Link></li>             
                <li className="px-4"><Link to="/about">About Us</Link></li>
                <li className="px-4"><Link to="/contact">Contact Us</Link></li>           
                <li>Cart</li>
                <button  className="button" 
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