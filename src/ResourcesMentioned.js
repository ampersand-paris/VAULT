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
                        <li>A History</li>
                        <li>The Making Room</li>
                        <li>TWO (Motion Bank)</li>
                        <li>How Dancing is Built: The Making of In A Rhythm (ebook)</li>
                        <li>Necessary Beauty (Angie Hauser solo)</li>
                        <li>Dance Fort: A History (ebook)</li>
                    </ul>
                    <h2 className="resources-subtitle neuzit">Artists/Companies</h2>
                    <ul className="resources-list">
                        <li>David Gordon's Archiveography</li>
                        <li>“Recording Staged Works for All the World to See,” Claudia La Rocco</li>
                        <li>Uncovering the Archives, Doug Varone</li>
                        <li>The Portal, Cori Olinghouse</li>
                        <li>Bronx Gothic, Okwui Okpokwasili</li>
                        <li>No Boundaries: Dancing the Visions of Contemporary Black Choreographers, Gesel Mason Performance Projects</li>
                        <li>The Underscore, Nancy Stark Smith</li>
                        <li>Improvising While Black, mayfield brooks</li>
                        <li>28 Problems, Dayna Hanson</li>
                        <li>Improvement Club, Dayna Hanson</li>
                        <li>Variations on Themes from Lost and Found: Scenes from a Life and Other Works by John Bernd, Ishmael Houston-Jones</li>
                        <li>THEM, Ishmael Houston-Jones</li>
                        <li>ROOM, Tonya Lockyer et al.</li>
                        <li>Dailies, Wooster Group</li>
                        <li>Joe Goode</li>
                    </ul>
                    <h2 className="resources-subtitle neuzit">Institutions</h2>
                    <ul className="resources-list">
                        <li>MANCC (Maggie Allesee National Center for Choreography)</li>
                        <li>Jacob’s Pillow Dance Interactive</li>
                        <li>OntheBoards.tv</li>
                        <li>Dance Heritage Coalition</li>
                        <li>Dance/USA Archiving & Preservation</li>
                        <li>Dance/USA Artist's Legacy Toolkit</li>
                        <li>DataArts</li>
                        <li>The New York Public Library for the Performing Arts' Jerome Robbins Dance Division</li>
                        <li>MAP Fund</li>
                        <li>Dance Notation Bureau</li>
                    </ul>
                    <h2 className="resources-subtitle neuzit">Specific Projects</h2>
                    <ul className="resources-list">
                        <li>Dance-tech</li>
                        <li>Meta-Academy</li>
                        <li>Mondays with Merce, Cunningham Trust</li>
                        <li>The Iteration Project</li>
                        <li>Merce Cunningham Dance Capsules, Cunningham Trust</li>
                        <li>Motion Bank</li>
                        <li>Dunham’s Data</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ResourcesMentioned;