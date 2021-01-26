import React from 'react'
import './Player.css';
import Sidebar from './Sidebar';
import Body from './Body';
import Footer from './Footer';
import Home from './Home';


function Player({ spotify }) {
    return (
        <div className="_player">
            <div className="_player__body">
                <Sidebar />
                <Home spotify={spotify} />
                {/* <Body spotify={spotify} /> */}
            </div>
            <Footer spotify={spotify}/>
        </div>
    )
}

export default Player
