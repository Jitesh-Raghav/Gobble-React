const User=(props)=>{
    return (
      <div className="user-info">
        <h2>Name: Jitesh Kumar Raghav</h2>
        <h3>Location: {props.locate}</h3>
        <h4>Email: hellogal@hotmail.com</h4>
      </div>
    );
};

export default User;