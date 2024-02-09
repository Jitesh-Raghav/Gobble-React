import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header= () =>{

    const onlineStatus= useOnlineStatus();
    // let btnName = "Logout";
    const[btnName,setbtnName]= useState("Logout");
    return(
        <div className="header">
            <div className="logo-container"> 
                <img className="logo"src={LOGO_URL} />
            </div>
            <div className="nav-items">
             <ul>
                <li>Online Status: {onlineStatus? "🟢":"🔴"}</li>
                <li><Link to="/">Home</Link></li> 
                <li><Link to="/grocery">Grocery</Link></li>             
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>           
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