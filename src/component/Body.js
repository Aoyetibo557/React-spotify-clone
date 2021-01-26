import React from 'react'
import Header from './Header';
import './Body.css';
import { useDataLayerValue } from './DataLayer';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import FavouriteIcon from '@material-ui/icons/Favorite';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import SongRow from './SongRow';


function Body({ spotify }) {
    const [{discover_weekly }, dispatch] = useDataLayerValue();
    return (
        <div className="_body">
            {/* <Header spotify={ spotify } /> */}

            <div className="_body__info">
                <img src={discover_weekly?.images[0].url}  />
                <div className="_body__infoText">
                     <strong>PLAYLIST</strong>
                     <h2>Disney Songs</h2>
                     <p>{discover_weekly?.description}</p>
                </div>
            </div>

            <div className="_body__songs">
                <div className="_body__icons">
                    <PlayCircleFilledIcon className="_body__shuffle" />
                    <FavouriteIcon fontSize="large" />
                    <MoreHorizIcon />
                </div>

                {discover_weekly?.tracks.items.map(item => (
                    <SongRow track={item.track} />
                ))}
            </div>
        </div>
    )
}

export default Body
