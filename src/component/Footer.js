import React, { useState, useEffect } from 'react'
import './Footer.css';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
// import ShuffleIcon from '@material-ui/icons/Shuffle';
import { TiArrowShuffle } from 'react-icons/ti'

// import RepeatIcon from '@material-ui/icons/Repeat';
import { FiRepeat } from 'react-icons/fi';
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";
import {Grid, Slider} from '@material-ui/core';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';
import SpotifyWebApi from 'spotify-web-api-js';

import { useDataLayerValue } from './DataLayer';


const spotify = new SpotifyWebApi();


function Footer({ spotify }) {
    const [{ token, item, playing }, dispatch] = useDataLayerValue();

    useEffect(() => {
    spotify.getMyCurrentPlaybackState().then((r) => {
            console.log(r);

            dispatch({
                type: 'SET_PLAYING',
                playing: r.is_playing,
            });

            dispatch({
                type: 'SET_ITEM',
                item: r.item,
            });
        });
    }, [spotify]);


    const handlePlayPause = () => {
        if (playing) {
        spotify.pause();
        dispatch({
            type: "SET_PLAYING",
            playing: false,
        });
        } else {
        spotify.play();
        dispatch({
            type: "SET_PLAYING",
            playing: true,
        });
        }
    };

    const skipNext = () => {
        spotify.skipToNext();
        spotify.getMyCurrentPlayingTrack().then((r) => {
        dispatch({
            type: "SET_ITEM",
            item: r.item,
        });
        dispatch({
            type: "SET_PLAYING",
            playing: true,
        });
        });
    };

    const skipPrevious = () => {
        spotify.skipToPrevious();
        spotify.getMyCurrentPlayingTrack().then((r) => {
        dispatch({
            type: "SET_ITEM",
            item: r.item,
        });
        dispatch({
            type: "SET_PLAYING",
            playing: true,
        });
        });
    };

    return (
        <div className="_footer">
            <div className="_footer__left">
                <img className="_footer__albumLogo" src={item?.album.images[0].url} alt={item?.name} />
               {item ? (
                    <div className="footer__songInfo">
                        <h4>{item.name}</h4>
                        <p>{item.artists.map((artist) => artist.name).join(", ")}</p>
                    </div>
                    ) : (
                    <div className="footer__songInfo">
                        <h4>No song is playing</h4>
                        <p>...</p>
                    </div>
                )}
            </div>

            <div className="_footer__center">
                <TiArrowShuffle className="_footer__green" />
                <SkipPreviousIcon onClick={skipNext} className="_footer__icon" />
                {playing ? (
                    <PauseCircleOutlineIcon
                        onClick={handlePlayPause}
                        fontSize="large"
                        className="footer__icon"
                    />
                    ) : (
                    <PlayCircleOutlineIcon
                        onClick={handlePlayPause}
                        fontSize="large"
                        className="footer__icon"
                    />
                )}
                <SkipNextIcon onClick={skipPrevious} className="_footer__icon" /> 
                <FiRepeat className="_footer__green" />
            </div>

            <div className="_footer__right">
               <Grid container spacing={2} >
                   <Grid item>
                       <PlaylistPlayIcon />
                   </Grid>
                    <Grid item>
                       <VolumeDownIcon />
                   </Grid>
                    <Grid item xs>
                       <Slider aria-labelledby="continuous-slider"  />
                   </Grid>
               </Grid>
            </div>
        </div>
    )
}

export default Footer
