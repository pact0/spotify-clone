import React from 'react'
import '../style/Login.css'
import { loginUrl } from "../spotify"

const Login = () => {
    return (
        <div className="login">
            {/* Logo */}
            <img
                src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
                alt="spotify-logo" className="spotify-logo" />
            {/* Login button */}
            <a href={`${loginUrl}`} className="button-login">LOGIN WITH SPOTIFY</a>
        </div>
    )
}

export default Login
