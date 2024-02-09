import React from "react";
import {lazy, Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body"
import { createBrowserRouter , RouterProvider, Outlet} from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
// import Grocery from "./components/Grocery";


// const heading = React.createElement(    //this heading is not a tag, its an object 
// "h1", 
// {id:"heading"}, 
// "Hello World form React!");



//Component composition, React element, Jsx, React components- functional vs class etc.., React Hooks(normal js functions)



//To distribute our app into chunks or differnet components, we can implement lazy loading, which will make our app fast, so we do this when our app bundle size is increasing and its taking a lot of time to load, like the grocery section is very big, and makes our app really slow...so we lazy load it, like loading it only when we click on it.
 const Grocery = lazy(()=>import("./components/Grocery"));  



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
            path: "/grocery",
            element:( <Suspense fallback={<h1>Loading...</h1>}><Grocery/></Suspense>),
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

