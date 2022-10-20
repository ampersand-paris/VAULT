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
            <div style={openStyles} id="index-menu-open" className="index-menu z-index h-one-hundred flex column space-btwn mint-green menu-left-border">
                <div className="flex flex-end vault-padding">
                    <h1>VAULT</h1>
                </div>
                <div className="index-entries flex column">
                    <h3 className="index-location-first">Meeting #1</h3>
                    <h4 className="index-location-first">Café Orlin</h4>
                    <h4 className="index-location-first">New York City, NY</h4>
                    <h4 className="index-location-first">March 10, 2017:</h4>
                    <p className="index-sub-title">New York City Attendees:</p>
                    <ul className="index-list">
                        <Link to="/ann-carlson-bio"><li>Carlson, Ann: Bio</li></Link>
                        <Link to="/ann-carlson-writing"><li>Carlson, Ann: Writing</li></Link>
                        <Link to="/ishmael-houston-jones-bio"><li>Houston-Jones, Ishmael: Bio</li></Link>
                        <Link to="/ishmael-houston-jones-writing"><li>Houston-Jones, Ishmael: Writing</li></Link>
                        <Link to="/judy-hussie-taylor-bio"><li>Hussie-Taylor, Judy: Bio</li></Link>
                        <Link to="/bebe-miller-bio"><li>Miller, Bebe: Bio</li></Link>
                        <Link to="/jaamil-olawale-kosoko-bio"><li>Olawale Kosoko, Jaamil: Bio</li></Link>
                    </ul>
                    <p className="index-sub-title">New York City Transcription:</p>
                    <ul className="index-list">
                        <Link to="/meeting-one-transcript"><li>Meeting #1</li></Link>
                    </ul>
                    <h3 className="index-location-first">Meeting #2</h3>
                    <h4 className="index-location-first">On the Boards</h4>
                    <h4 className="index-location-first">Seattle, WA</h4>
                    <h4 className="index-location-first">August 7, 2017:</h4>
                    <p className="index-sub-title">Seattle Attendees:</p>
                    <ul className="index-list">
                        <Link to="/betsey-brock-bio"><li>Brock, Betsey: Bio</li></Link>
                        <Link to="/alice-gosti-bio"><li>Gosti, Alice: Bio</li></Link>
                        <Link to="/pat-graney-bio"><li>Graney, Pat: Bio</li></Link>
                        <Link to="/dayna-hanson-bio"><li>Hanson, Dayna: Bio</li></Link>
                        <Link to="/dayna-hanson-writing"><li>Hanson, Dayna: Writing</li></Link>
                        <Link to="/angie-hauser-bio"><li>Hauser, Angie: Bio</li></Link>
                        <Link to="/angie-hauser-writing"><li>Hauser, Angie: Writing</li></Link>
                        <Link to="/ishmael-houston-jones-bio"><li>Houston-Jones, Ishmael: Bio</li></Link>
                        <Link to="/ishmael-houston-jones-writing"><li>Houston-Jones, Ishmael: Writing</li></Link>
                        <Link to="/lila-hurwitz-bio"><li>Hurwitz, Lila: Bio</li></Link>
                        <Link to="/raja-feather-kelly-bio"><li>Kelly, Raja Feather: Bio</li></Link>
                        <Link to="/tonya-lockyer-bio"><li>Lockyer, Tonya: Bio</li></Link>
                        <Link to="/tonya-lockyer-writing"><li>Lockyer, Tonya: Writing</li></Link>
                        <Link to="/bebe-miller-bio"><li>Miller, Bebe: Bio</li></Link>
                    </ul>
                    <p className="index-sub-title">Seattle Meeting Notes:</p>
                    <ul className="index-list">
                        <Link to="/meeting-two-notes"><li>Meeting #2</li></Link>
                    </ul>
                    <p className="index-sub-title">Seattle Video:</p>
                    <ul className="index-list">
                        <Link to="/seattle"><li>Seattle Meeting</li></Link>
                    </ul>
                    <h3 className="index-location">Meeting #3</h3>
                    <h4 className="index-location-first">Jacob's Pillow</h4>
                    <h4 className="index-location-first">Becket, MA</h4>
                    <h4 className="index-location-first">May 6–7, 2018:</h4>
                    <p className="index-sub-title">Jacob’s Pillow Attendees:</p>
                    <ul className="index-list">
                        <Link to="/rachel-boggia-bio"><li>Boggia, Rachel: Bio</li></Link>
                        <Link to="/mayfield-brooks-bio"><li>brooks, mayfield: Bio</li></Link>
                        <Link to="/nena-couch-bio"><li>Couch, Nena: Bio</li></Link>
                        <Link to="/angie-hauser-bio"><li>Hauser, Angie: Bio</li></Link>
                        <Link to="/angie-hauser-writing"><li>Hauser, Angie: Writing</li></Link>
                        <Link to="/ishmael-houston-jones-bio"><li>Houston-Jones, Ishmael: Bio</li></Link>
                        <Link to="/ishmael-houston-jones-writing"><li>Houston-Jones, Ishmael: Writing</li></Link>
                        <Link to="/jaamil-olawale-kosoko-bio"><li>Olawale Kosoko, Jaamil: Bio</li></Link>
                        <Link to="/sarah-lass-bio"><li>Lass, Sarah: Bio</li></Link>
                        <Link to="/bebe-miller-bio"><li>Miller, Bebe: Bio</li></Link>
                        <Link to="/lauren-ree-slone-bio"><li>Slone, Lauren: Bio</li></Link> 
                        <Link to="/lauren-slone-writing"><li>Slone, Lauren: Writing</li></Link>
                        <Link to="/dana-whitco-bio"><li>Whitco, Dana: Bio</li></Link>
                        <Link to="/reggie-wilson-bio"><li>Wilson, Reggie: Bio</li></Link> 
                    </ul>
                    <p className="index-sub-title">Jacob's Pillow Meeting Notes:</p>
                    <ul className="index-list">
                        <Link to="/meeting-three-notes"><li>Meeting #3</li></Link>
                    </ul>
                    <p className="index-sub-title">Jacob's Pillow Videos:</p>
                    <ul className="index-list">
                        <Link to="/meeting-three-small-group-two"><li>Meeting #3 Small Group 2</li></Link>
                        <Link to="/meeting-three-small-group-three"><li>Meeting #3 Small Group 3</li></Link>
                        <Link to="/meeting-three-small-group-conclusion"><li>Meeting #3 Conclusion</li></Link>
                    </ul>
                    <h3 className="index-location-first">Meeting #4</h3>
                    <h4 className="index-location-first">Dance Center Columbia College</h4>
                    <h4 className="index-location-first">Chicago, IL</h4>
                    <h4 className="index-location-first">November 16, 2019:</h4>
                    <p className="index-sub-title">Chicago Attendees:</p>
                    <ul className="index-list">
                        <Link to="/julia-rae-antonick-bio"><li>Antonick, Julia: Bio</li></Link>
                        <Link to="/bonnie-brooks-bio"><li>Brooks, Bonnie: Bio</li></Link>
                        <Link to="/bonnie-brooks-writing"><li>Brooks, Bonnie: Writing</li></Link>
                        <Link to="/ellen-chenoweth-bio"><li>Chenoweth, Ellen: Bio</li></Link>
                        <Link to="/ellen-chenoweth-writing"><li>Chenoweth, Ellen: Writing</li></Link>
                        <Link to="/marji-cole-bio"><li>Cole, Margi: Bio</li></Link>
                        <Link to="/marji-cole-writing"><li>Cole, Margi: Writing</li></Link>
                        <Link to="/jenai-cutcher-bio"><li>Cutcher, Jenai: Bio</li></Link>
                        <Link to="/ginger-farley-bio"><li>Farley, Ginger: Bio</li></Link>
                        <Link to="/jsun-howard-bio"><li>Howard, J'sun: Bio</li></Link>
                        <Link to="/jsun-howard-writing"><li>Howard, J'sun: Writing</li></Link>
                        <Link to="/lila-hurwitz-bio"><li>Hurwitz, Lila: Bio</li></Link>
                        <Link to="/jane-jerardi-bio"><li>Jerardi, Jane: Bio</li></Link>
                        <Link to="/jane-jerardi-writing"><li>Jerardi, Jane: Writing</li></Link>
                        <Link to="/darrell-jones-bio"><li>Jones, Darrell: Bio</li></Link>
                        <Link to="/darrell-jones-writing"><li>Jones, Darrell: Writing</li></Link>
                        <Link to="/erin-kilmurray-bio"><li>Kilmurray, Erin: Bio</li></Link>
                        <Link to="/erin-kilmurray-writing"><li>Kilmurray, Erin: Writing</li></Link>
                        <Link to="/jonathan-meyer-bio"><li>Meyer, Jonathan: Bio</li></Link>
                        <Link to="/jonathan-meyer-writing"><li>Meyer, Jonathan: Writing</li></Link>
                        <Link to="/bebe-miller-bio"><li>Miller, Bebe: Bio</li></Link>
                        <Link to="/diana-muhammad-bio"><li>Muhammad, Diana: Bio</li></Link>
                        <Link to="/diana-muhammad-bio"><li>Muhammad, Diana: Writing</li></Link>
                    </ul>
                    <p className="index-sub-title">Chicago Meeting Notes:</p>
                    <ul className="index-list">
                        <Link to="/meeting-four-notes"><li>Meeting #4</li></Link>
                    </ul>
                    <p className="index-sub-title">Chicago Videos:</p>
                    <ul className="index-list">
                        <Link to="/chicago"><li>Chicago Meeting</li></Link>
                    </ul>
                    <h3 className="index-location-first">Meeting #5</h3>
                    <h4 className="index-location-first">Ann Hamilton & Michael Mercil’s Studio</h4>
                    <h4 className="index-location-first">Columbus, OH</h4>
                    <h4 className="index-location-first">January 18–19, 2020:</h4>
                    <p className="index-sub-title">Columbus Attendees:</p>
                    <ul className="index-list">
                        <Link to="/ann-carlson-bio"><li>Carlson, Ann: Bio</li></Link>
                        <Link to="/ann-carlson-writing"><li>Carlson, Ann: Writing</li></Link>
                        <Link to="/nena-couch-bio"><li>Couch, Nena: Bio</li></Link>
                        <Link to="/lane-czaplinski-bio"><li>Czaplinski, Lane: Bio</li></Link>
                        <Link to="/mara-frazier-bio"><li>Frazier, Mara: Bio</li></Link>
                        <Link to="/mara-frazier-writing"><li>Frazier, Mara: Writing</li></Link>
                        <Link to="/melanie-george-bio"><li>George, Melanie: Bio</li></Link>
                        <Link to="/angie-hauser-bio"><li>Hauser, Angie: Bio</li></Link>
                        <Link to="/angie-hauser-writing"><li>Hauser, Angie: Writing</li></Link>
                        <Link to="/lila-hurwitz-bio"><li>Hurwitz, Lila: Bio</li></Link>
                        <Link to="/darrell-jones-bio"><li>Jones, Darrell: Bio</li></Link>
                        <Link to="/darrell-jones-writing"><li>Jones, Darrell: Writing</li></Link>
                        <Link to="/claudia-la-rocco-bio"><li>LaRocco, Claudia: Bio</li></Link>
                        <Link to="/claudia-la-rocco-writing"><li>LaRocco, Claudia: Writing</li></Link>
                        <Link to="/sarah-lass-bio"><li>Lass, Sarah: Bio</li></Link>
                        <Link to="/russell-lepley-bio"><li>Lepley, Russell: Bio</li></Link>
                        <Link to="/russell-lepley-writing"><li>Lepley, Russell: Writing</li></Link>
                        <Link to="/gesel-mason-bio"><li>Mason, Gesel: Bio</li></Link>
                        <Link to="/bebe-miller-bio"><li>Miller, Bebe: Bio</li></Link>
                        <Link to="/cori-olinghouse-bio"><li>Olinghouse, Cori: Bio</li></Link>
                        <Link to="/cori-olinghouse-writing"><li>Olinghouse, Cori: Writing</li></Link>
                        <Link to="/imogen-smith-bio"><li>Smith, Imogen: Bio</li></Link>
                        <Link to="/imogen-smith-writing"><li>Smith, Imogen: Writing</li></Link>
                        <Link to="/alex-springer-bio"><li>Springer, Alex: Bio</li></Link>
                        <Link to="/alex-springer-writing"><li>Springer, Alex: Writing</li></Link>
                        <Link to="/dana-whitco-bio"><li>Whitco, Dana: Bio</li></Link>
                        <Link to="/nija-whitson-bio"><li>Whitson, Ni'Ja: Bio</li></Link>
                    </ul>
                    <p className="index-sub-title">Columbus Meeting Notes:</p>
                    <ul className="index-list">
                        <Link to="/meeting-five-notes"><li>Meeting #5</li></Link>
                    </ul>
                    <p className="index-sub-title">Columbus Videos:</p>
                    <ul className="index-list">
                        <Link to="/columbus"><li>Columbus Meeting</li></Link>
                    </ul>
                </div>  
                <img onClick={props.active} src="/Images/MenuTriangle.svg" className="triangle" id="triangle-index-close"/>
                <div className="flex flex-end">
                    <h3 className="vault-padding">&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;INDEX</h3>
                </div>
                <img onClick={props.active} src="/Images/MenuTriangle.svg" className="triangle" id="triangle-index-close"/>
            </div> 
            <div style={closedStyles} id="index-menu-closed" className="index-condensed-menu z-index relative h-one-hundred flex">
                <div className='relative width-40px'>
                    <img onClick={props.active} src="/Images/MenuTriangle.svg" className="triangle-size" id="triangle-index-open"/>
                </div>
                <div className="condensed-menu-width flex mobile-column jc-center al-center menu-left-border mint-green">
                    <div onClick={props.active} className="flex mobile-column cursor">
                        <h3>I</h3><h3>N</h3><h3>D</h3><h3>E</h3><h3>X</h3>  
                    </div>      
                </div>
            </div>
        </>
    )
}

export default Index;