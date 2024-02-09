import React from "react";

class UserClass extends React.Component {

    constructor(props){
        super(props);

        
    this.state={
        userInfo:{             //created a state variable...
            name: "dummt",
            location:"dummy",
            avatar_url:"http://dummy.daafa"
        },
    };
    }

    

   async componentDidMount(){
        const data = await fetch("  https://api.github.com/users/Jitesh-Raghav");
        const json= await data.json();

        console.log(json);

        this.setState({
            userInfo: json,
        });

    }

    render(){
        return(
        <div className="user-info">
        <img src={this.state.userInfo.avatar_url}></img>
        <h2>Name: {this.state.userInfo.name}</h2>                                 {/* //this.props.lame, by using props, this can be written... */}
        <h3>Location: {this.state.userInfo.location}</h3>
        <h4>Email: hellogal@hotmail.com</h4>
      </div>
        );
    }
}

export default UserClass;