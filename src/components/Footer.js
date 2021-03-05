import React, { useStyles } from 'react'
import '../style/Footer.css'

import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import RepeatIcon from '@material-ui/icons/Repeat';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';
import Slider from '@material-ui/core/Slider';
import { Grid } from '@material-ui/core';


const Footer = () => {

    return (
        <div className="footer">
            <div className="footer_let">
                <img src="" alt="song-image" className="currently_playing" />
                <div className="footer_songInfo">
                    <h4>Title</h4>
                    <p>Artist</p>
                </div>
            </div>
            <div className="footer_mid">
                <ShuffleIcon className="footer_green" />
                <SkipPreviousIcon className="footer_icon" />
                <PlayCircleOutlineIcon fontSize="large" className="footer_icon" />
                <SkipNextIcon className="footer_icon" />
                <RepeatIcon className="footer_green" />
            </div>
            <div className="footer_right">
                <Grid
                    container
                    spacing={2}
                >
                    <Grid item>
                        <PlaylistPlayIcon />
                    </Grid>
                    <Grid item>
                        <VolumeDownIcon />
                    </Grid>
                    <Grid item xs>
                        <Slider />
                    </Grid>

                </Grid >

            </div>
        </div>
    )
}

export default Footer
