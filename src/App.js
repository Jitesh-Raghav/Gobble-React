import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body"
import { createBrowserRouter , RouterProvider, Outlet} from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";


// const heading = React.createElement(    //this heading is not a tag, its an object 
// "h1", 
// {id:"heading"}, 
// "Hello World form React!");



//Component composition, React element, Jsx, React components- functional vs class etc.., React Hooks(normal js functions)
   

const AppLayout =()=>{
    return <div className="app">
        <Header/>
        <Outlet/>
    </div>;
};



const AppRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        children:[
        {
            path: "/",
            element:<Body/>,
        },
        {
            path: "/about",
            element: <About/>,
        },
        {
            path: "/contact",
            element: <Contact/>,
        },
        {
            path: "/restaurants/:resId",
            element: <RestaurantMenu/>,
        }
     ],
        errorElement: <Error/>,
    },
    
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={AppRouter}/>);                   //<AppLayout/> it was here earlier

