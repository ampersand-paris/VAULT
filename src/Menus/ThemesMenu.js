// ====== REACT ELEMENTS ======
import React from "react";
import { useState } from "react";

const ThemesMenu = (props) => {

    const contentStyles = {
        display: (props.display),
        opacity: (props.opacity)
    }

    return (
        <div style={contentStyles} className="themes-menu z-index h-one-hundred flex just-center mint-green">
            <div className="flex al-center vault-border vault-padding">
                <img className="ninety-vh" src="/Images/VAULT.svg" />
            </div>
            <div className="flex column">
                <h3 className="white menu">about</h3>
                <h3 className="white menu">skills</h3>
                <h3 className="white menu">portfolio</h3>
                <h3 className="white menu">experience</h3>
            </div>
        </div>
    )
}

export default ThemesMenu;