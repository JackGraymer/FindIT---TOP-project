import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom'
import './header.css'
import github from './square-github.svg'
import loupe from './loupe.png'

let startTime = Date.now()

function Header () {

    const [timer, setTimer] = useState(null)

    /* useEffect(() => {
        setInterval(function() {
            let time = ((Date.now() - startTime)/1000).toFixed(2)
            setTimer(time);
        },100 );
            
    }) */

    return(
        <div className="header">
            <div className='title'>
                <Link className='title' to='/'>
                    🅵🅸🅽🅳<span className='title-it'>🅸🆃</span>
                    <img className='loupe' src={loupe} alt='Github Link'></img>
                </Link>
            </div>
            <div className='timer'>Timer {timer}</div>
            <div className='links'>
                <NavLink to='leaderboard'>Leaderboard</NavLink> 
                <Link to='https://github.com/JackGraymer/FindIT-TOP-project' className='git-link' target={'_blank'}><img src={github} alt='Github Link'></img></Link>
            </div>
        </div>
    )
}

export default Header