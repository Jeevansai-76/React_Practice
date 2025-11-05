
function UserGreeting(props){
//    if(props.isLoggedIn){
//      return <h2>Welcome {props.username}</h2>
//    }
//    else{
//      return <h2>Please Login to Continue</h2>
//    }

    const welcomeMessage = <h2 className="welcome-message">Welcome {props.username}</h2>;

    const loginPromt = <h2 className="login-prompt">Please Login to Continue</h2>;

    return (props.isLoggedIn ? welcomeMessage : loginPromt)
    
}

export default UserGreeting