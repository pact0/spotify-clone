import React from 'react'

const Songrow = ({ track }) => {
    return (
        <div>
            <img src={track.album.images[0].url} alt="" className="album" />
            <h1>{track.name}</h1>
            <p>
                {track.artists.map((artist) => artist.name).join(", ")}
                {track.album.name}
            </p>
        </div>
    )
}

export default Songrow
