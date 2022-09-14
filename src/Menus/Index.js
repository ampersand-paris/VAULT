// ====== REACT ELEMENTS ======
import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react"

 // ====== REACT COMPONENTS ======
import Home from "../Home";
import MarjiColeEssay from "../Essays/MarjiColeEssay";
import MeetingOneTranscript from "../Transcripts/MeetingOneTranscript";

const Index = (props) => {

    const openStyles = {
        display: (props.openDisplay),
    }

     const closedStyles = {
        display: (props.closedDisplay),
    }

    return (
        <>        
            <div style={openStyles} className="index-menu z-index h-one-hundred flex column space-btwn mint-green menu-left-border">
                <div className="flex flex-end vault-padding">
                    <h1>VAULT</h1>
                </div>
                <div className="index-entries flex column">
                    <h3 className="index-location-first">Chicago 2019:</h3>
                    <p className="index-sub-title">Chicago Attendees:</p>
                    <ul className="index-list">
                        <Link to="/marji-cole-bio"><li>Cole, Margi: Bio</li></Link>
                        <Link to="/marji-cole-essay"><li>Cole, Margi: Writing</li></Link>
                        <li>Houston-Jones, Ishmael: Bio</li>
                        <li>Houston-Jones, Ishmael: Writing</li>
                        <li>Miller, Bebe: Bio</li>
                        <li>Miller, Bebe: Writing</li>
                    </ul>
                    <p className="index-sub-title">Chicago Videos:</p>
                    <ul className="index-list">
                        <li>Chicago Meeting Notes</li>
                        <li>Bebe Miller on Methods</li>
                        <li>Rachel Boggia on Technology</li>
                    </ul>
                    <h3 className="index-location">Jacob's Pillow 2018:</h3>
                    <p className="index-sub-title">Jacob’s Pillow Attendees:</p>
                    <ul className="index-list">
                        <li>Boggia, Rachel: Bio</li>
                        <li>Boggia, Rachel: Writing</li>
                        <li>Miller, Bebe: Bio</li>
                        <li>Miller, Bebe: Writing</li>
                    </ul>
                    <p className="index-sub-title">Jacob's Pillow Videos:</p>
                    <ul className="index-list">
                        <li>Rachel Boggia, Ishmael Houston-Jones, Nena Couch on Gardening</li>
                    </ul>
                    <p className="index-sub-title">Jacob’s Pillow Meeting Transcription</p>
                    <h3 className="index-location">New York City 2017:</h3>
                    <p className="index-sub-title">New York City Attendees:</p>
                    <ul className="index-list">
                        <li>Houston-Jones, Ishmael: Bio</li>
                        <li>Houston-Jones, Ishmael: Writing</li>
                        <li>Miller, Bebe: Bio</li>
                        <li>Miller, Bebe: Writing</li>
                    </ul>
                    <p className="index-sub-title">New York City Meeting Notes</p>
                </div>  
                <img onClick={props.active} src="/Images/MenuTriangle.svg" className="triangle" id="triangle-index-close"/>
                <div className="flex flex-end">
                    <h3 className="vault-padding">&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;INDEX</h3>
                </div>
                <img onClick={props.active} src="/Images/MenuTriangle.svg" className="triangle" id="triangle-index-close"/>
            </div> 
            <div style={closedStyles} className="index-condensed-menu z-index h-one-hundred flex">
                <img onClick={props.active} src="/Images/MenuTriangle.svg" className="triangle-size" id="triangle-index-open"/>
                <div className="condensed-menu-width flex mobile-column jc-center al-center menu-left-border mint-green">
                    <h3>I</h3><h3>N</h3><h3>D</h3><h3>E</h3><h3>X</h3>        
                </div>
            </div>
        </>
    )
}

export default Index;