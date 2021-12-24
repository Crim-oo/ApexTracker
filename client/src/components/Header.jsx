import React from 'react'

const Header = () => {
    const logo = require("../assets/Logo.png")
    return (
        <header>
            <img src={logo} alt='Apex Legend Logo'/>
        </header>
    )
}

export default Header
