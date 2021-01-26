import React, { useEffect, useState }  from 'react';
import './App.css';
import Login from './component/Login';
import { getTokenFromURL } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './component/Player';
import { useDataLayerValue } from './component/DataLayer'

const spotify = new SpotifyWebApi();

function App() {

  const [{ user, token }, dispatch]  = useDataLayerValue();

  // Run code based on given condition
  useEffect(() => {
    const hash = getTokenFromURL();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      dispatch({
        type: 'SET_TOKEN',
        token: _token,
      })

      spotify.setAccessToken(_token);

      //get user data
      spotify.getMe().then((user) => {
        dispatch({
          type: 'SET_USER',
          user: user,
        })
      });

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: 'SET_PLAYLISTS',
          playlists: playlists,
        })
      })
      spotify.getPlaylist('1vVaAxIGzmLFdlCNpHKxlG').then(response => {
        dispatch({
          type: 'SET_DISCOVER_WEEKLY',
          discover_weekly: response,
        })

      });

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists,
        });
      });

      spotify.getMyTopArtists().then((response) =>{
        dispatch({
          type: "SET_TOP_ARTISTS",
          top_artists: response,
        })
      });

      dispatch({
        type: "SET_SPOTIFY",
        spotify: spotify,
      });
    }
    
  }, [token, dispatch])

  return (
    <div className="App">
      {/* If logged in show olayer else show login component */}
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App;
