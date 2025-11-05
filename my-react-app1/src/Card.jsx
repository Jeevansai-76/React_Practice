import Profilepic from './assets/profile.jpg'

function Card(){

    return(
        <div className="card">
            <img className="card-image" src={Profilepic} alt="profile picture"></img>
            <h2 className="card-title">Bro Code</h2>
            <p className="card-text">Playing with code and games</p>
        </div>
    );
}

export default Card