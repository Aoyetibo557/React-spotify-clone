import React from 'react'
import './LongTileCards.css';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';

function LongTileCards({image, title, link}) {
    return (
        <div className="_tileCard">
            <img className="_tile__image" src={image} alt={title} />
            <div className="_tile__info">
                <h3>{title}</h3>
                <a className="_tile__link" href={link} target="_blank">
                    <PlayCircleFilledIcon fontSize="large" />
                </a>
            </div>
        </div>
    )
}

export default LongTileCards
