import User from "./User";
import {Component} from "react";
import UserClass from "./UserClass";

class About extends Component{

    constructor(props){
        super(props);
    }


    componentDidMount(){
        console.log("Parent component did mount")
    }
    
    render(){
    return (
        <div>
            <h1>About us</h1>
            <h2>This is a Gobble Food app made with love in India</h2>
            <UserClass lame={"Jitesh Raghav"} location={"Gurgaon"}/>
            {/* <User locate={"Kherla"}/> */}
        </div>
      );
    }
};

export default About;