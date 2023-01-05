import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"; 
import ReactAudioPlayer from "react-audio-player";
import audio from "../Audio/Context.mp3"
import { useEffect, useState } from 'react'
import { HashLink as Hash } from 'react-router-hash-link'

const Context = (props) => {

    const [scrollPosition, setScrollPosition] = useState(0)    
    const [loading, setLoading] = useState(false)

    const setPosition = () => {
        const container = document.getElementById('context-postion')
        const position = container.scrollLeft
        window.sessionStorage.setItem('context', position)
        console.log('link', position)
    }

    useEffect(() => {
        const position = JSON.parse(window.sessionStorage.getItem('context'))
        setScrollPosition(position)
        console.log('useeffect', position)
      
     
    }, [])

    useEffect(() => {
        const xPosition = document.getElementById('context-postion')
        xPosition.scrollLeft = scrollPosition
    }, [scrollPosition])

    return (
    <>
        <style>
            {
                `
                audio {
                    width: 200px;
                }

                audio::-webkit-media-controls-panel {
                    background-color: var(--sand);
                }
                
                audio::-webkit-media-controls-play-button {
                    background-color: rgba(255, 255, 255, 0);
                
                }
                
                audio::-webkit-media-controls-current-time-display {
                    font-family: neuzeit-grotesk, sans-serif;
                    font-weight: 400;
                    font-style: normal;
                    background-color: rgba(255, 255, 255, 0);
                    color: var(--evergreen);
                }
                
                audio::-webkit-media-controls-time-remaining-display {
                    font-family: neuzeit-grotesk, sans-serif;
                    font-weight: 400;
                    font-style: normal;
                    background-color: rgba(255, 255, 255, 0);
                    color: var(--evergreen);
                }
                
                audio::-webkit-media-controls-timeline {
                    background-color: rgba(255, 255, 255, 0);
                
                }

                /* width */
                .container::-webkit-scrollbar {
                width: 25px;

                }

                /* Track */
                .container::-webkit-scrollbar-track {
                border-radius: 10px;
                background-color: var(--sand);
                }
                
                /* Handle */
                .container::-webkit-scrollbar-thumb {
                background: var(--evergreen); 
                border-radius: 10px;
                border: 2px solid var(--sand);
                }

                /* Handle on hover */
                .container::-webkit-scrollbar-thumb:hover {
                background: black; 
            `
            }
        </style>

        <div className="container evergreen" id="context-postion">
            <div className="c-container-length one-hundred-vh flex mobile-column">
                <div className="intro-panel-width flex flex-end mobile-jc-center sand-txt">
                    <div className="intro-width flex space-btwn column vault-padding">
                        <div className="context-margin">
                            <p>&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;</p>
                        </div>
                        <div className="flex column">
                            <ReactAudioPlayer
                                src={audio}
                                controls 
                            />
                            <p className="transcription-details corporate"><b>We found that context depends on the perspective of the archive: artist-driven, institutional curation, the involvement of collaborating artists, dance improvisation as well as choreographic form. Documentation, the politics behind the impulse to archive, and the systems in which it occurs are also included.</b></p>
                        </div>
                    </div>
                </div>
                <div className="context-panel-1 panel-1400 flex space-btwn double-padding mobile-column mobile-side-padding">
                    <h1 className="evergreen-txt intro-title">CONTEXT</h1>
                    <img src="/Images/GreenSlash.svg" className="c-slash display-none"/>
                    <div className="w-twenty-five sand-txt flex column space-btwn">
                        <div>
                            <p className="no-bottom-padding"><b>Tonya Lockyer, Seattle:</b></p>    
                            <p className="no-top-padding">Stories really capture what happened. In Russia, in 1998 there was a conversation about CI. Two people began to dance together, but for one of them it was only about concrete shapes—moving from one to the next. They didn’t realize it was a moving form. They had only seen the photographs, not recordings.</p>
                            <Hash 
                                onClick={setPosition}
                                className="small-bttn sand evergreen-txt sand-border"
                                to='/meeting-two-notes#excerpt-one'
                                state={{ 
                                    background: "var(--evergreen)",
                                    textColor: "var(--sand)",
                                    slash: "/Images/CreamSlash.svg" }}
                                >Meeting Notes
                            </Hash>
                        </div>
                        <div className="relative mobile-flex mobile-column mobile-al-center mobile-top-100px stnd-padding sand evergreen-txt txt-al-center">
                            <p className="no-bottom-padding"><b>Margi Cole:</b></p>    
                            <p className="no-top-padding">Create a valid space to move away from product-driven work.</p>
                            <Hash 
                                onClick={setPosition}
                                className="absolute mobile-relative left-negative-100px top-10px small-bttn evergreen sand-txt sand-border"
                                to='/marji-cole-writing#excerpt-one'
                                state={{ 
                                    background: "var(--evergreen)",
                                    textColor: "var(--sand)",
                                    slash: "/Images/CreamSlash.svg" }}
                                >Writing
                            </Hash>
                        </div>
                    </div>
                </div>
                <div className="panel-1400 flex mobile-column mobile-side-padding">
                    <div className="w-sixty flex column space-around stnd-padding">
                        <iframe  width="100%" height="56%" className="w-one-hundred" title="vimeo-player" src="https://player.vimeo.com/video/738669816?h=3e11a58d51#t=15m12s" frameborder="0"></iframe>
                        <div className="flex mobile-column">
                            <div className="w-fifty flex column sand-txt">
                                <p className="no-bottom-padding"><b>Pat Graney, Seattle:</b></p> 
                                <p className="no-top-padding"><em>There's an assumption with certain generations and folks who are younger sometimes, that immediacy is the documentation, is the experience.</em></p>
                                <Link 
                                    onClick={setPosition}
                                    className="small-bttn sand evergreen-txt sand-border"
                                    to='/seattle'
                                    state={{ 
                                        background: "var(--sand)",
                                        textColor: "var(--evergreen)",
                                        startTime: "https://player.vimeo.com/video/738669816?h=3e11a58d51#t=15m12s"
                                        }}
                                    >Video
                                </Link>
                            </div>
                            <div className="w-fifty flex column al-flex-end mobile-top-100px">
                                <div className="w-seventy-five flex sand-gradient-50 w-one-hundred">
                                    <Hash 
                                        onClick={setPosition}
                                        className="small-bttn left-margin-10px evergreen sand-txt sand-border"
                                        to='/jsun-howard-writing#excerpt-two'
                                        state={{ 
                                            background: "var(--evergreen)",
                                            textColor: "var(--sand)",
                                            slash: "/Images/CreamSlash.svg" }}
                                        >Writing
                                    </Hash>
                                </div>
                                <div className="w-seventy-five w-one-hundred sand evergreen-txt">
                                    <p className="no-bottom-padding side-padding"><b>J’Sun Howard:</b></p>
                                    <p className="no-top-padding side-padding">…more incubation residencies with full support…</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-forty flex column stnd-padding">
                        <div className="flex sand-txt">
                            <div>
                                <p className="no-bottom-padding"><b>Dayna Hanson:</b></p> 
                                <p className="no-top-padding">Over time, I’ve noticed that documentation has become more of an aesthetic pursuit for me, as the lines between the original work and its archival document have increasingly blurred.</p>
                                <Link // no need for hash 
                                    onClick={setPosition}
                                    className="small-bttn sand evergreen-txt sand-border"
                                    to='/dayna-hanson-writing'
                                    state={{ 
                                        background: "var(--evergreen)",
                                        textColor: "var(--sand)",
                                        slash: "/Images/CreamSlash.svg" }}
                                    >Writing
                                </Link>
                            </div>
                            <div className="display-none w-fifty flex column jc-center">
                                <img className="small-slash" src="/Images/CreamSlash.svg" />
                            </div>
                        </div>
                        <div className="top-100px double-padding sand-border sand-txt">
                            <p className="no-bottom-padding"><b>Pat Graney, Seattle:</b></p> 
                            <p className="no-top-padding"><em>To me, the most important thing about archives [...] is the context [they provide].</em></p>
                            <div className="flex flex-end">
                                <Link 
                                    onClick={setPosition}
                                    className="small-bttn sand evergreen-txt sand-border"
                                    to='/seattle'
                                    state={{ 
                                        background: "var(--sand)",
                                        textColor: "var(--evergreen)",
                                        startTime: "https://player.vimeo.com/video/738669816?h=3e11a58d51#t=42m35s"
                                        }}
                                    >Video
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="panel-1800 flex mobile-column mobile-side-padding top-mobile-sand-border">
                    <div className="w-forty-seven flex mobile-column stnd-padding">
                        <div className="flex column space-around sand-border double-padding">
                            {/* Deleted completely  12.21.22 */}
                            {/* <div className="flex mobile-column jc-center stnd-padding">
                                <div className="w-fifty sand-txt">
                                    <p className="no-bottom-padding"><b>Pat Graney, Seattle:</b></p>
                                    <p className="no-top-padding"><em>What do we want people to learn and know about...</em></p>
                                    <Link 
                                        onClick={setPosition}
                                        className="small-bttn sand evergreen-txt"
                                        to='/seattle'
                                        state={{ 
                                            background: "var(--sand)",
                                            textColor: "var(--evergreen)",
                                            startTime: "https://player.vimeo.com/video/738669816?h=3e11a58d51#t=22m35s"
                                            }}
                                        >Video
                                    </Link>
                                </div>
                                <div className="w-forty">
                                    <iframe  width="100%" height="100%" className="w-one-hundred mobile-top-20px" title="vimeo-player" src="https://player.vimeo.com/video/738669816?h=3e11a58d51#t=22m35s" frameborder="0"></iframe>
                                </div>
                            </div> */}
                            <div className="flex mobile-column jc-center">
                                <div className="w-fifty sand-txt">
                                    <p className="no-bottom-padding"><b>Angie Hauser, Seattle:</b></p>
                                    <p className="no-top-padding"><em>[I'm thinking] about archiving in the scale of history, [in] that includes multiple generations beyond the people that are living now.</em></p>
                                    <Link 
                                        onClick={setPosition}
                                        className="small-bttn sand evergreen-txt"
                                        to='/seattle'
                                        state={{ 
                                            background: "var(--sand)",
                                            textColor: "var(--evergreen)",
                                            startTime: "https://player.vimeo.com/video/738669816?h=3e11a58d51#t=22m35s"
                                            }}
                                        >Video
                                    </Link>
                                </div>
                                <div className="w-fifty flex">
                                    <iframe  width="100%" height="100%" className="w-one-hundred mobile-top-20px" title="vimeo-player" src="https://player.vimeo.com/video/738669816?h=3e11a58d51#t=22m35s" frameborder="0"></iframe>
                                </div>
                            </div>
                            <div className="flex mobile-column jc-center">
                                <div className="w-fifty sand-txt">
                                    <p className="no-bottom-padding no-top-padding"><b>Ishmael Houston-Jones, Jacob’s Pillow:</b></p>
                                    <p className="no-top-padding"><em>I think there is something about the accidentalness of what gets left, and what gets found, and what remains.</em></p>
                                    <Link 
                                        onClick={setPosition}
                                        className="small-bttn sand evergreen-txt"
                                        to='/meeting-three-conversation-two'
                                        state={{ 
                                            background: "var(--sand)",
                                            textColor: "var(--evergreen)",
                                            startTime: "https://player.vimeo.com/video/738670370?h=ec662ab400#t=4m56s"
                                            }}
                                        >Video
                                    </Link>
                                </div>
                                <div className="w-fifty flex">
                                    <iframe  width="100%" height="100%" className="w-one-hundred mobile-top-20px" title="vimeo-player" src="https://player.vimeo.com/video/738670370?h=ec662ab400#t=4m56s" frameborder="0"></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-forty-seven relative flex column stnd-padding  mobile-jc-center">
                        <div className="relative h-fifty w-seventy flex flex-end evergreen-txt">
                            <div className="relative w-seventy flex column">
                                <div className="flex sand-gradient-50 w-one-hundred">
                                    <Hash 
                                        onClick={setPosition}
                                        className="small-bttn left-margin-10px evergreen sand-txt sand-border"
                                        to='/jane-jerardi-writing#excerpt-two'
                                        state={{ 
                                            background: "var(--evergreen)",
                                            textColor: "var(--sand)",
                                            slash: "/Images/CreamSlash.svg" }}
                                        >Writing
                                    </Hash>
                                </div>
                                <div className="w-one-hundred sand">
                                    <p className="no-bottom-padding side-padding"><b>Jane Jerardi:</b></p>
                                    <p className="no-top-padding side-padding">I think it would be interesting to test out more networked structures.</p>
                                </div>
                            </div>
                        </div>
                        <div className="w-one-hundred h-fifty flex  mobile-column-reverse mobile-top-20px space-btwn">
                            <div className="w-fifty-exempt h-one-hundred flex column flex-end">
                                <div className="sand evergreen-txt double-padding">
                                    <p className="no-bottom-padding no-top-padding"><b>Cori Olinghouse:</b></p>
                                    <p className="no-top-padding">I often take up each project as a hybrid archival-curatorial intervention, built with a particular context and audience in mind, in connection to the needs and interests of the artist and the communities the work inhabits.</p>
                                </div>
                                <div className="double-padding">
                                    <Hash 
                                        onClick={setPosition}
                                        className="small-bttn sand evergreen-txt"
                                        to='/cori-olinghouse-writing#excerpt-one'
                                        state={{ 
                                            background: "var(--evergreen)",
                                            textColor: "var(--sand)",
                                            slash: "/Images/CreamSlash.svg" }}
                                        >Writing
                                    </Hash>
                                </div>
                            </div>
                            <div className="z-index-10 w-forty-exempt al-flex-end flex column jc-center">
                                <div className="evergreen sand-border sand-txt double-padding txt-al-right">
                                    <p className="no-bottom-padding no-top-padding"><b>Ni’Ja Whitson, Columbus:</b></p>
                                    <p className="no-top-padding">How much agency does a performer have since it’s not their work and not their archive?</p>
                                    <Hash 
                                        onClick={setPosition}
                                        className="small-bttn sand-border sand-txt evergreen"
                                        to='/meeting-five-notes#excerpt-one'
                                        state={{ 
                                            background: "var(--evergreen)",
                                            textColor: "var(--sand)",
                                            slash: "/Images/CreamSlash.svg" }}
                                        >Meeting Notes
                                    </Hash>
                                </div>
                            </div>
                        </div>
                        <img src="/Images/CreamOutlineSlash.svg" className="display-none absolute large-slash display-none"/>    
                    </div>
                </div>
                <div className="panel-1800 flex mobile-column mobile-side-padding mobile-jc-center">
                    <div className="w-forty-exempt flex column sand-txt">
                        <div className="h-fifty flex column jc-center ">
                            <div className="sand-border stnd-padding">
                                <p className="no-bottom-padding"><b>Tonya Lockyer:</b></p>
                                <p className="no-top-padding">Yes, archives need to collect all this important stuff. But archives also need to tell good stories. Or, another way of putting it: archives are never objective. Just as a researcher’s race, gender or class influences their interpretation of an archive; how the archive is constructed, located and monitored influences the researcher. If you are creating an archive to resist disappearance and erasure, it helps to have strategies for manipulating the system.</p>
                                <Hash 
                                    onClick={setPosition}
                                    className="small-bttn evergreen sand-txt sand-border"
                                    to='/tonya-lockyer-writing#excerpt-two'
                                    state={{ 
                                        background: "var(--evergreen)",
                                        textColor: "var(--sand)",
                                        slash: "/Images/CreamSlash.svg" }}
                                    >Writing
                                </Hash>
                            </div>
                        </div>
                        <div className="h-fifty">
                            <div className="flex column">
                                <div className="stnd-padding sand evergreen-txt al-center">
                                    <p className="no-bottom-padding"><b>Raja Feather Kelly, Seattle:</b></p>
                                    <p className="no-top-padding">I keep trying to think about what like what's my personal relationship with the idea or story, like what is archive? And when I heard when I heard you say this like I those words I was like if he knows the words that we would use when we describe like how we make performance. You know like can we can we get? All of our you know, year two year, four year process into this hour into this 50 minutes. How can we get all of this exploration of movement into this one movement so that it represents this thing?</p>
                                    <Hash 
                                        onClick={setPosition}
                                        className="small-bttn evergreen sand-txt"
                                        to='/meeting-two-notes'
                                        state={{ 
                                            background: "var(--evergreen)",                                                textColor: "var(--sand)",
                                            slash: "/Images/CreamSlash.svg" }}
                                        >Meeting Notes
                                    </Hash>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-sixty-exempt flex column space-btwn left-margin-20px-desktop-only">
                        <div className="h-one-hundred flex space-around">
                            <div className="w-fifty flex column stnd-padding sand-border sand-txt">
                                <h2 className="no-padding"><b>Jacob’s Pillow</b> &#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;</h2>
                                <div className="h-one-hundred flex column space-btwn">
                                    <div className="flex column space-btwn">
                                        <p className="no-padding mobile-top-10px"><b>Dana Whitco:</b></p>
                                        <div className="flex mobile-column space-btwn no-top-padding">
                                            <p className="w-sixty no-padding "><em>[When you mentioned] creating for yourself or maintaining for yourself a mode of hyper-contextuality, I wondered whether that is a resistance to some forces that you feel in the world?</em></p>
                                            <Link 
                                                onClick={setPosition}
                                                className="small-bttn sand evergreen-txt mobile-top-10px"
                                                to='/meeting-three-conversation-one'
                                                state={{ 
                                                    background: "var(--sand)",
                                                    textColor: "var(--evergreen)",
                                                    startTime: "https://player.vimeo.com/video/738663854?h=83cfee6ba0#t=6m4s"
                                                    }}
                                                >Video
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="flex column space-btwn">
                                        <p className="no-padding mobile-top-10px"><b> Reggie Wilson:</b></p>
                                        <div className="flex mobile-column space-btwn no-top-padding">
                                            <p className="w-sixty no-padding"><em>Is this for our own dramaturgy? Is this for another choreographers dramaturgy? Is this for historians?</em></p>
                                            <div className="flex flex-end">
                                            <Link 
                                                onClick={setPosition}
                                                className="small-bttn sand evergreen-txt mobile-top-10px"
                                                to='/meeting-three-conclusion'
                                                state={{ 
                                                    background: "var(--sand)",
                                                    textColor: "var(--evergreen)",
                                                    startTime: "https://player.vimeo.com/video/738666979?h=de936851e2#t=3m40s"
                                                    }}
                                                >Video
                                            </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex column space-btwn">
                                        <p className="no-padding mobile-top-10px"><b>Angie Hauser:</b></p>
                                        <div className="flex mobile-column space-btwn no-top-padding">
                                            <p className="w-sixty no-padding"><em>I think the moment of improvisation is a certain kind of archive, maybe in quotes or italics or something that it is the archive of the practice.</em></p>
                                            <Link 
                                                onClick={setPosition}
                                                className="small-bttn sand evergreen-txt mobile-top-10px"
                                                to='/meeting-three-conversation-one'
                                                state={{ 
                                                    background: "var(--sand)",
                                                    textColor: "var(--evergreen)",
                                                    startTime: "https://player.vimeo.com/video/738663854?h=83cfee6ba0#t=2m33s"
                                                    }}
                                                >Video
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="flex column space-btwn">
                                        <p className="no-padding mobile-top-10px"><b>Rachel Boggia:</b></p>
                                        <div className="flex mobile-column space-btwn no-top-padding">
                                            <p className="w-sixty no-padding"><em>A lot of non-proscenium oriented dances [...] are really underprivileged by video documentation.</em></p>
                                            <div className="flex flex-end">
                                            <Link 
                                                onClick={setPosition}
                                                className="small-bttn sand evergreen-txt mobile-top-10px"
                                                to='/meeting-three-conversation-two'
                                                state={{ 
                                                    background: "var(--sand)",
                                                    textColor: "var(--evergreen)",
                                                    startTime: "https://player.vimeo.com/video/738670370?h=ec662ab400#t=27m31s"
                                                    }}
                                                >Video
                                            </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex column space-btwn">
                                        <p className="no-padding mobile-top-10px"><b>Jaamil Olawale Kosoko:</b></p>
                                        <div className="flex mobile-column space-btwn no-top-padding">
                                            <p className="w-sixty no-padding"><em>I feel like this hyper-contextuality is a part of me defending my own perspective.</em></p>
                                            <Link 
                                                onClick={setPosition}
                                                className="small-bttn sand evergreen-txt mobile-top-10px"
                                                to='/meeting-three-conversation-one'
                                                state={{ 
                                                    background: "var(--sand)",
                                                    textColor: "var(--evergreen)",
                                                    startTime: "https://player.vimeo.com/video/738663854?h=83cfee6ba0#t=10m57s"
                                                    }}
                                                >Video
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="display-none w-fifty flex column al-flex-end">
                                <iframe  width="100%" height="100%" className="w-one-hundred" title="vimeo-player" src="https://player.vimeo.com/video/778224113?h=c6f6d6dc05" frameborder="0"></iframe>
                                <p className="txt-al-right sand-txt">&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;</p>
                            </div>
                        </div>           
                    </div>
                </div>
            </div>
        </div>
    </>
  );
}

export default Context;