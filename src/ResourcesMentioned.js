// ====== REACT ELEMENTS ======
import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react"

 // ====== REACT COMPONENTS ======

const ResourcesMentioned = (props) => {


    return (
        <div className="top-padding mint-green">        
            <div className="flex jc-center al-center space-btwn">
                <h1 className="resources-title-padding">&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;RESOURCES MENTIONED</h1>
            </div>
            <div className="flex column jc-center al-center space-btwn">    
                <div className="resources-width">
                    <h2 className="resources-subtitle neuzit">Bebe Miller Company</h2>
                    <ul className="resources-list">
                        <li><a target="_blank" href="https://bebemillercompany.org/works/a-history/#:~:text=A%20HISTORY%20is%20a%20dance,Wexner%20Center%20for%20the%20Arts">A History</a></li>
                        <li><a target="_blank" href="http://themakingroom.org/">The Making Room</a></li>
                        <li><a target="_blank" href="http://motionbank.org/en/content/two-bebe-miller-thomas-hauert.html">TWO (Motion Bank)</a></li>
                        <li><a target="_blank" href="https://bebemillercompany.org/projects/in-a-rhythm-e-book/">How Dancing is Built: The Making of In A Rhythm (ebook)</a></li>
                        <li><a target="_blank" href="https://www.youtube.com/watch?v=l6Xtu6r3MPY">Necessary Beauty (Angie Hauser solo)</a></li>
                        <li><a target="_blank" href="https://bebemillercompany.org/projects/dancefort/">Dance Fort: A History (ebook)</a></li>
                    </ul>
                    <h2 className="resources-subtitle neuzit">Artists/Companies</h2>
                    <ul className="resources-list">
                        <li><a target="_blank" href="http://davidgordon.nyc/about-archiveography">David Gordon's Archiveography</a></li>
                        <li><a target="_blank" href="https://www.nytimes.com/2010/01/24/arts/dance/24boards.html">“Recording Staged Works for All the World to See,” Claudia La Rocco</a></li>
                        <li><a target="_blank" href="https://vimeo.com/channels/uncoveringthearchives">Uncovering the Archives, Doug Varone</a></li>
                        <li><a target="_blank" href="https://theportal.place/about/">The Portal, Cori Olinghouse</a></li>
                        <li><a target="_blank" href="https://grasshopperfilm.com/film/bronx-gothic/">Bronx Gothic, Okwui Okpokwasili</a></li>
                        <li><a target="_blank" href="https://www.geselmason.com/no-boundaries">No Boundaries: Dancing the Visions of Contemporary Black Choreographers, Gesel Mason Performance Projects</a></li>
                        <li><a target="_blank" href="https://nancystarksmith.com/underscore/">The Underscore, Nancy Stark Smith</a></li>
                        <li><a target="_blank" href="https://www.improvisingwhileblack.com/about">Improvising While Black, mayfield brooks</a></li>
                        <li><a target="_blank" href="http://28problems.daynahanson.com/">28 Problems, Dayna Hanson</a></li>
                        <li><a target="_blank" href="https://www.daynahanson.com/filmtv/improvementclub">Improvement Club, Dayna Hanson</a></li>
                        <li><a target="_blank" href="https://www.ishmaelhouston-jones.com/berndvariations">Variations on Themes from Lost and Found: Scenes from a Life and Other Works by John Bernd, Ishmael Houston-Jones</a></li>
                        <li><a target="_blank" href="https://www.ishmaelhouston-jones.com/them">THEM, Ishmael Houston-Jones</a></li>
                        <li><a target="_blank" href="https://www.shericohendance.com/projects/room/">ROOM, Tonya Lockyer et al.</a></li>
                        <li><a target="_blank" href="https://thewoostergroup.org/blog/dailies/all-dailies/">Dailies, Wooster Group</a></li>
                        <li><a target="_blank" href="https://joegoode.org/">Joe Goode</a></li>
                    </ul>
                    <h2 className="resources-subtitle neuzit">Institutions</h2>
                    <ul className="resources-list">
                        <li><a target="_blank" href="https://mancc.org/">MANCC (Maggie Allesee National Center for Choreography)</a></li>
                        <li><a target="_blank" href="https://danceinteractive.jacobspillow.org/">Jacob’s Pillow Dance Interactive</a></li>
                        <li><a target="_blank" href="https://www.ontheboards.tv/">OntheBoards.tv</a></li>
                        <li><a target="_blank" href="https://www.danceusa.org/dhc-integration">Dance Heritage Coalition</a></li>
                        <li><a target="_blank" href="https://www.danceusa.org/archiving-and-preservation">Dance/USA Archiving & Preservation</a></li>
                        <li><a target="_blank" href="https://www.danceusa.org/archiving-preservation-artists-legacy-toolkit">Dance/USA Artist's Legacy Toolkit</a></li>
                        <li><a target="_blank" href="https://culturaldata.org/">DataArts</a></li>
                        <li><a target="_blank" href="https://www.nypl.org/locations/lpa/jerome-robbins-dance-division">The New York Public Library for the Performing Arts' Jerome Robbins Dance Division</a></li>
                        <li><a target="_blank" href="https://mapfundblog.org/">MAP Fund</a></li>
                        <li><a target="_blank" href="http://www.dancenotation.org/">Dance Notation Bureau</a></li>
                    </ul>
                    <h2 className="resources-subtitle neuzit">Specific Projects</h2>
                    <ul className="resources-list">
                        <li><a target="_blank" href="http://www.dance-tech.net/">Dance-tech</a></li>
                        <li><a target="_blank" href="http://www.dance-tech.net/profile/MetaAcademyLab">Meta-Academy</a></li>
                        <li><a target="_blank" href="https://www.mercecunningham.org/media/media-detail/?title=Mondays+with+Merce">Mondays with Merce, Cunningham Trust</a></li>
                        <li><a target="_blank" href="https://theiterationproject.org/">The Iteration Project</a></li>
                        <li><a target="_blank" href="https://dancecapsules.mercecunningham.org/">Merce Cunningham Dance Capsules, Cunningham Trust</a></li>
                        <li><a target="_blank" href="http://motionbank.org/">Motion Bank</a></li>
                        <li><a target="_blank" href="https://www.dunhamsdata.org/">Dunham’s Data</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ResourcesMentioned;