import { Link } from "react-router-dom"

function Home () {
    const today = new Date();
const milliseconds = today.getMilliseconds();

    return(
        <div className="home">
            <h1>Home</h1>
            <Link to='/leaderboard'><button> Leaderboard</button></Link> 
            {}
        </div>
    )
}

export default Home