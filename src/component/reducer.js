export const initialState = {
    user: null,
    spotify: null,
    playlists: [],
    playing: false,
    top_artists: null,
    discover_weekly: null,
    item: null,
    // REMEBER TO SET IT TO NULL AFTER DEVELOPMENT
    // token: "BQDP4iCCmuYgb4OvmL89oz4qvOAccBJoBTeggdNVeUM88ROHXeHqzvPn-C71N4i9R9bdO1bxJtCm_CWliWCG5NZw5ZxgBJDSohiUgBgPixjsU3EjVWN70QSCXcf9vTKNzJx2z-HyALzRkhmhUnx98p-z2g",
};


/**
 * State - how the initialState looks like
 * Action - how we manipulate the state data
 * action has(type and payload)
 */
const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            };
         
        case 'SET_TOKEN':
            return{
                ...state,
                token: action.token
            };
        
        case 'SET_PLAYLISTS': 
        return{
            ...state,
            playlists: action.playlists,
        };

        case 'SET_DISCOVER_WEEKLY':
            return {
                ...state,
                discover_weekly: action.discover_weekly,
            };

        case 'SET_PLAYING':
            return  {
                ...state,
                playing: action.playing,
            };
        
        case 'SET_TOP_ARTISTS':
            return {
                ...state,
                top_artists: action.top_artists,
            };
        
         case 'SET_SPOTIFY':
            return {
                ...state,
                spotify: action.spotify,
            };

        case 'SET_ITEM':
            return {
                ...state,
                item: action.item,
            };

        default:
            return state;
    }
}

export default reducer;