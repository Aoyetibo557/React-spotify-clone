import React, { useEffect }  from 'react'
import Body from './Body';
import { useDataLayerValue } from './DataLayer';
import Header from './Header';
import './Home.css';
import LongTileCards from './LongTileCards';


function Home({spotify}) {
    const [{ top_artists, item }, dispatch] = useDataLayerValue();

    useEffect(() => {
      spotify.getMyTopArtists().then((response) =>{
      console.log("response: ", response)
        dispatch({
          type: "SET_TOP_ARTISTS",
          top_artists: response,
        })
    });

    },[])
    
    return (
        <div className="_home">
            <Header spotify={spotify} />
            <h1>Top Artists</h1>
           
            <div className="_home__content__top">
                {top_artists?.items?.map(top_artist => (
                    <LongTileCards image={top_artist?.images[1].url} title={top_artist.name} link={top_artist?.external_urls?.spotify} />
                ))}    
            </div>
            <div>
                <Body spotify={spotify} />
            </div>
        </div>
    )
}

export default Home
