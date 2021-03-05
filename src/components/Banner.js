import React from 'react'
import '../style/Banner.css'

const Banner = ({ description }) => {
    return (
        <div className="banner">
            <div className="banner_info">
                <img src="a" alt="playlist-picture" className="playlist_picture" />

                <strong>PLAYLIST</strong>
                <h2>Discover Weekly</h2>
                <p>{description}</p>
            </div>

        </div>

    )
}

export default Banner
