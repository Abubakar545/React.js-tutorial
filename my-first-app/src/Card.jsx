import profilePic from "./assets/Abubakar_Siddiq.jpg"

function Card(){
    return(
        <div className="card">
            {/* <img src="https://via.placeholder.com/150" alt="Profile-Picture"></img> */}
            <img className="card-img" src={profilePic} alt="Profile-Picture"></img>
            <h2 className="card-title">Syed</h2>
            <p className="card-text">I'm a Developer as well as Cricketer</p>
        </div>
    );
}

export default Card