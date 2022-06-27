// ====== REACT ELEMENTS ======
import React from "react";
import { useState } from "react";
import { BrowserRouter as Router,
    Routes,
    Route,
    Link } from "react-router-dom";

 // ====== REACT COMPONENTS ======
import Home from "../Home";
import MarjiColeEssay from "../Essays/MarjiCole";
import MeetingOne from "../Transcripts/MeetingOne";

const Index = (props) => {

    const contentStyles = {
        display: (props.display),
        opacity: (props.opacity)
    }

    return (
        <>        
            <Router>
                <div style={contentStyles} className="index-menu z-index h-one-hundred flex column space-btwn mint-green menu-left-border">
                    <div className="flex flex-end vault-padding">
                        <h1>VAULT</h1>
                    </div>
                    <div className="index-entries flex column">
                        <h3 className="index-location-first">Chicago 2019:</h3>
                        <p className="index-sub-title">Chicago Attendees:</p>
                        <ul>
                            <Link to="/marji-cole-essay"><li>Cole, Margi: Bio</li></Link>
                            <li>Cole, Margi: Writing</li>
                            <li>Houston-Jones, Ishmael: Bio</li>
                            <li>Houston-Jones, Ishmael: Writing</li>
                            <li>Miller, Bebe: Bio</li>
                            <li>Miller, Bebe: Writing</li>
                        </ul>
                        <p className="index-sub-title">Chicago Videos:</p>
                        <ul>
                            <li>Chicago Meeting Notes</li>
                            <li>Bebe Miller on Methods</li>
                            <li>Rachel Boggia on Technology</li>
                        </ul>
                        <h3 className="index-location">Jacob's Pillow 2018:</h3>
                        <p className="index-sub-title">Jacob’s Pillow Attendees:</p>
                        <ul>
                            <li>Boggia, Rachel: Bio</li>
                            <li>Boggia, Rachel: Writing</li>
                            <li>Miller, Bebe: Bio</li>
                            <li>Miller, Bebe: Writing</li>
                        </ul>
                        <p className="index-sub-title">Jacob's Pillow Videos:</p>
                        <ul>
                            <li>Rachel Boggia, Ishmael Houston-Jones, Nena Couch on Gardening</li>
                        </ul>
                        <p className="index-sub-title">Jacob’s Pillow Meeting Transcription</p>
                        <h3 className="index-location">New York City 2017:</h3>
                        <p className="index-sub-title">New York City Attendees:</p>
                        <ul>
                            <li>Houston-Jones, Ishmael: Bio</li>
                            <li>Houston-Jones, Ishmael: Writing</li>
                            <li>Miller, Bebe: Bio</li>
                            <li>Miller, Bebe: Writing</li>
                        </ul>
                        <p className="index-sub-title">New York City Meeting Notes</p>
                    </div>  
                    <img src="/Images/MenuTriangle.svg" className="triangle" id="triangle-index-close"/>
                    <div className="flex flex-end">
                        <h3 className="vault-padding">&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;INDEX</h3>
                    </div>
                </div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/marji-cole-essay" element={<MarjiColeEssay />} />
                    <Route path="/meeting-one" element={<MeetingOne />} />
                </Routes>
            </Router>
        </>

    )
}

export default Index;