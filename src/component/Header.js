import React from 'react'
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import { Avatar } from '@material-ui/core';
import { useDataLayerValue } from './DataLayer';

function Header() {
    const [{user}, dispatch] = useDataLayerValue();

    return (
        <div className="_header">
            <div className="_header__left">
                <SearchIcon />
                <input type="text" placeholder="Search for Artists, Songs, or Playlists" />
            </div>

            <div className="_header__right">
                <button className="_header__btn">Upgrade</button>
                <Avatar src={user?.images[0]?.url} alt={user?.display_name} />
                <h4>{user?.display_name}</h4>
            </div>
        </div>
    )
}

export default Header
