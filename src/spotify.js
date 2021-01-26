// Spotify Documnetation: - https://developer.spotify.com/
//documnetation/web-playback-sdk/quick-start/#

export const authEndpoint = "https://accounts.spotify.com/authorize"; 
const redirectUri = "https://spotify-clone-142dc.web.app/";
const clientId = "64767f20a68b4a04aa4205fb522bb1c3";

// Scopes:this allows you to get the correct permissions, to do things like play a song, get information from that users account
const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
];

export const getTokenFromURL= () => {
    return window.location.hash.substring(1).split('&').reduce((initial, item) => {
        let parts = item.split('=');
        initial[parts[0]] = decodeURIComponent(parts[1]);

        return initial
    }, {})
} 

export const loginURL = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`; 