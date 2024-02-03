import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body"

// const heading = React.createElement(    //this heading is not a tag, its an object 
// "h1", 
// {id:"heading"}, 
// "Hello World form React!");



//Component composition, React element, Jsx, React components- functional vs class etc.., React Hooks(normal js functions)


    

const AppLayout =()=>{
    return <div className="app">
        <Header/>
        <Body/>
    </div>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);

