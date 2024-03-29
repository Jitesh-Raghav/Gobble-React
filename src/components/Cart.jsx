import { useDispatch, useSelector } from "react-redux";
import AccordianBody from "./AccordianBody";
import { clearCart } from "../utils/cartSlice";

const Cart=()=>{

    const cartItems= useSelector((store)=>store.cart.items);  //here only subscribing to specific part of store, so cartItems only update when store.cart.items change 

    // const store= useSelector((store)=>store);    //Above useSelector and this is same, the difference is that, this is very less efficient, tell this in interview
    // const cartItems=store.cart.items;            //cuz we only want cartItems then why to subscribe to whole store. 

    const dispatch= useDispatch();

    const handleClearCart =()=>{
        dispatch(clearCart());
    }; 


    return (
        <div className="text-center m-4 p-4">
          <h1 className="text-2xl font-bold">Cart</h1>
          <div className="w-6/12 m-auto">
            <button className="m-2 p-2 bg-gray-500 text-white rounded-lg hover:text-red-600 hover:bg-gray-300" 
            onClick={handleClearCart}>

              Clear Cart</button>
              {cartItems.length==0 && (<h1>Your cart is Empty, Add your favourite dishes to checkout!!😋🍔🍕</h1>)}
            <AccordianBody items={cartItems}/>
          </div>
        </div>
    );
};

export default Cart;