// ====== REACT ELEMENTS ======
import React from "react";
import { useState } from "react";

const ThemesMenu = (props) => {

    const contentStyles = {
        display: (props.display),
        opacity: (props.opacity)
    }

    return (
        <>        
            <div style={contentStyles} className="themes-menu z-index h-one-hundred flex just-center mint-green">
                <div className="flex al-center mint-green menu-right-border vault-padding">
                    <img className="ninety-vh" src="/Images/VAULT.svg" />
                </div>
                <div className="relative flex column space-btwn mint-green menu-right-border">
                    <div className="flex column">
                        <div className="menu-bttn flex jc-center pumpkin sand-txt">
                            <h3>archival thinking</h3>
                        </div>
                        <div className="menu-bttn flex jc-center evergreen sand-txt">
                            <h3>context</h3>
                        </div>
                        <div className="menu-bttn flex jc-center preserved-lemon sand-txt">
                            <h3>methods</h3>
                        </div>
                        <div className="menu-bttn flex jc-center cobalt sand-txt">
                            <h3>why it matters</h3>
                        </div>
                    </div>  
                    <img src="/Images/MenuTriangle.svg" className="triangle" id="triangle-theme-close"/>
                    <h3 className="vault-padding">MENU&#x2f;&#x2f;&#x2f;&#x2f;</h3>
                </div>
            </div>
        </>

    )
}

export default ThemesMenu;