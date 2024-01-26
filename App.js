
const heading = React.createElement(    //this heading is not a tag, its an object 
"h1", 
{id:"heading"}, 
"Hello World form React!");

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);

