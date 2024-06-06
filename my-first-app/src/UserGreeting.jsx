// import PropTypes from 'prop-types'
function UserGreeting(props){

    const welcomeMessage = <h2 className="welcome-message">Welcome {props.userName}</h2>
    const loginPrompt = <h2 className="login-prompt">Please, LogIn to continue..</h2>
    return(
        props.isLoggedIn ? welcomeMessage : loginPrompt
                           
    );
}

// UserGreeting.proptypes = {
//     isLoggedIn : PropTypes.bool,
//     userName : PropTypes.string
// }

// UserGreeting.defaultProps = {
//     isLoggedIn : false,
//     userName : "Guest"
// }
export default UserGreeting





// function UserGreeting(props){
//     if(props.isLoggedIn){
//         return(
//             <h2>Welcome {props.userName}</h2>
//         )
//     } 
    
//         return(<h2>Please, LogIn to continue..</h2>)
        
// }

// export default UserGreeting