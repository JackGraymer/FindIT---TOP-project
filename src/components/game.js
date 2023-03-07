import { useLocation } from "react-router"


function Game () {
    const location = useLocation()
    const {game} = location.state
    console.log(game)
    return(
        
        <div>{game.image.name}</div>
    )
}

export default Game