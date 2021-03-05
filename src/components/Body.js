import React from 'react'

import Header from './Header'
import Banner from './Banner'
import SongRow from './Songrow'
import '../style/Body.css'
import { useDataLayerValue } from '../DataLayer'


const Body = ({ spotify }) => {
    const [{ discover_weekly }, dispatch] = useDataLayerValue();
    return (
        <div className="body">
            <Header spotify={spotify} />

            <p>
                {discover_weekly?.description}
            </p>
            {discover_weekly?.tracks.items.map((item) => (
                < SongRow track={item?.track} />
            ))}

        </div>
    )
}

export default Body
