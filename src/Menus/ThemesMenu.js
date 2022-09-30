// ====== REACT ELEMENTS ======
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const ThemesMenu = (props) => {

    const openStyles = {
        display: (props.openDisplay),
    }

     const closedStyles = {
        display: (props.closedDisplay),
    }

    return (
        <>        
            <div style={openStyles} id="themes-menu-open" className="themes-menu z-index h-one-hundred flex just-center mint-green">
                <div className="flex al-center mint-green menu-right-border vault-padding">
                    <img className="ninety-vh" src="/Images/VAULT.svg" />
                </div>
                <div className="relative flex column space-btwn mint-green menu-right-border">
                    <div className="flex column">
                        <Link className="no-underline sand-txt" to="/archival-thinking">
                            <div className="menu-bttn flex jc-center pumpkin sand-txt">
                                    <h3>archival thinking</h3>
                            </div>
                        </Link>
                        <Link className="no-underline sand-txt" to="/context">
                            <div className="menu-bttn flex jc-center evergreen sand-txt">
                                <h3>context</h3>
                            </div>
                        </Link>
                        <Link className="no-underline black-txt" to="/methods">
                            <div className="menu-bttn flex jc-center preserved-lemon">
                                <h3>methods</h3>
                            </div>
                        </Link>
                        <Link className="no-underline sand-txt" to="/why-it-matters">
                            <div className="menu-bttn flex jc-center cobalt sand-txt">
                                <h3>why it matters</h3>
                            </div>
                        </Link>
                    </div>
                    <img onClick={props.active} src="/Images/MenuTriangle.svg" className="triangle" id="triangle-theme-close"/> 
                    <h3 className="vault-padding"><a href="/" className="no-underline black-txt">HOME</a>&#x2f;&#x2f;&#x2f;&#x2f;</h3>
                </div>
            </div>
            <div style={closedStyles} id="themes-menu-closed" className="theme-condensed-menu relative z-index h-one-hundred flex">
                <div className="condensed-menu-width flex jc-center al-center mobile-column menu-right-border mint-green">
                    <div onClick={props.active} class="flex mobile-column cursor">
                        <h3>M</h3><h3>E</h3><h3>N</h3><h3>U</h3> 
                    </div>       
                </div>
                <div className='relative'>
                    <img onClick={props.active} src="/Images/MenuTriangle.svg" className="triangle" id="triangle-theme-open"/>
                </div>
            </div>
        </>

    )
}

export default ThemesMenu;