import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import './home.css'
import Leaderboard from "./leaderboard"
import img1 from './img/1.jpg'
import img2 from './img/2.jpg'
import img3 from './img/3.jpg'


function Home () {
    const [images, setImages] = useState([
        {name:'Video Game Fighters',
            img: img1},
        {name:'All Time Heroes',
            img: img2},
        {name:'Anime Main Characters',
            img: img3},
    ])
    const [mousePos, setMousePos] = useState({});

    function handleMouseMove (event) {
        setMousePos({ x: event.clientX - event.currentTarget.getBoundingClientRect().x, y: event.clientY - event.currentTarget.getBoundingClientRect().y});
      };
    useEffect(() => {

    }, [mousePos]);
      return(
        <div className="home" onMouseMove={handleMouseMove}>
            <div className="selector">
                {images.map((image) => (
                    <Link className="card" to={`/game/${image.name}`.replace(/ /g, "")} state={{game: {image}}} key={crypto.randomUUID()}>
                        <img className="card-img" src={image.img} alt="Card Image Thumbnail"></img>
                        <div className="card-details">
                            <h2>{image.name}</h2>
                            <h3>targets</h3>
                        </div>
                    </Link>
                ))}
                
                <h1>Home</h1>
                    <Link to='/leaderboard'><button> Leaderboard</button></Link> 
                    <p>X: {mousePos.x} Y:{mousePos.y}</p>
            </div>
            
        </div>
    )
}

export default Home