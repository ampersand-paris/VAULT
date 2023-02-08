import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"; 
import { useEffect, useState } from "react";
import { HashLink as Hash } from 'react-router-hash-link';
import audio from "../Audio/WhyItMatters.mp3";
import ReactAudioPlayer from "react-audio-player";

const WhyItMatters = (props) => {
    
    const [scrollPosition, setScrollPosition] = useState(0)    
    const [loading, setLoading] = useState(false)

    const setPosition = () => {
        const container = document.getElementById('why-position')
        const position = container.scrollLeft
        window.sessionStorage.setItem('why', position)
        console.log('link', position)
    }

    useEffect(() => {
        const position = JSON.parse(window.sessionStorage.getItem('why'))
        setScrollPosition(position)
        console.log('useeffect', position)
    }, [])

    useEffect(() => {
        const xPosition = document.getElementById('why-position')
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
                    color: var(--cobalt);
                }
                
                audio::-webkit-media-controls-time-remaining-display {
                    font-family: neuzeit-grotesk, sans-serif;
                    font-weight: 400;
                    font-style: normal;
                    background-color: rgba(255, 255, 255, 0);
                    color: var(--cobalt);
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
                background: var(--cobalt); 
                border-radius: 10px;
                border: 2px solid var(--sand);
                }

                /* Handle on hover */
                .container::-webkit-scrollbar-thumb:hover {
                background: black; 
            `
            }
        </style>
        <div className="container cobalt" id="why-position">
            <div className="w-container-length one-hundred-vh flex mobile-column mobile-al-center">
                <div className="intro-panel-width flex flex-end mobile-jc-center">
                    <div className="intro-width flex space-btwn column vault-padding sand-txt">
                        <div className="why-it-matters-margin">
                            <p>&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;<span className="display-none corporate"><b>SCROLL RIGHT</b></span></p>
                        </div>
                        <div className="flex column">
                            <p className="sand-txt corporate no-top-padding"><b>AUDIO INTRO</b></p>
                            <ReactAudioPlayer
                                src={audio}
                                controls 
                            />
                            <p className="transcription-details corporate"><b>Why it matters. Why the perspective of originating artists matters, is at the heart of all of the Vault convenings. The relevance of an artist driven archive depends on the performers and collaborators it serves, the audience it informs, as well as the legacy it may preserve. The discoveries made through artists' creative processes reveal a point of view that may not be captured in any other archival method.</b></p>
                        </div>
                    </div>
                </div>
                <div className="why-it-matters-panel-1 panel-1400 flex double-padding mobile-column mobile-side-padding">
                    <h1 className="cobalt-txt intro-title">WHY IT MATTERS</h1>
                    <img src="/Images/CobaltSlash.svg" className="w-slash display-none"/>    
                </div>
                <div className="panel-1800 flex mobile-column mobile-al-center space-around stnd-padding mobile-side-padding">
                    <div className="w-forty flex column flex-end">
                        <div className="flex mobile-column stnd-padding sand-txt">
                        <iframe width="100%" height="100%" className="w-one-hundred" title="vimeo-player" src="https://player.vimeo.com/video/738663854?h=83cfee6ba0#t=3m10s" frameborder="0"></iframe>
                            <div className="stnd-padding">
                                <p className="no-padding"><b>Angie Hauser, Jacob’s Pillow:</b></p>
                                <p className="no-top-padding"><em>Some of my favorite art has happened in the room with other art makers in a rehearsal, in a process situation. And that perhaps a performance is an archive of that…</em></p>
                                <Link 
                                    onClick={setPosition}
                                    className="small-bttn jc-center sand cobalt-txt"
                                    to='/meeting-three-conversation-one'
                                    state={{ 
                                        background: "var(--sand)",
                                        textColor: "var(--cobalt)",
                                        videoHeaderColor: "var(--sand)",
                                        videoColor: "var(--cobalt)",
                                        startTime: "https://player.vimeo.com/video/738663854?h=83cfee6ba0#t=3m10s" }}
                                    >Video
                                </Link>
                            </div>
                        </div>
                        <div className="h-fifty h-fifty-mobile-100 stnd-padding sand cobalt-txt">
                            <p className="no-padding"><b>Judy Hussie-Taylor, NYC:</b></p>
                            <p className="no-padding">Which brings up the “who,” who do you want to reach? During [Danspace Project’s] Lost & Found organizing meetings, we all felt such urgency. For me that platform was about that 17-year-old who found their way to one event and thought, “Oh, there’s a community of like minds?” I was at the Walker [Art Center], a mini-convening, showing Eiko’s work and Ishmael’s Lost & Found, someone asked about audiences and I said “this 17-year-old…” Olga Visu said at the White House [in 2015 when Ralph Lemon received the Medal of the Arts from President Obama], Ralph had never met Philip Glass. Glass said “I was at the Walker in the 70’s and there were only five people in the room, and I thought I’d never be invited back. And Ralph said “I was a 17-year-old in that room.” So, it got me thinking about audience on the seventh generation level.</p>
                            <div className="flex flex-end top-margin-10px">
                                <Hash 
                                    onClick={setPosition}
                                    className="small-bttn jc-center cobalt sand-txt"
                                    to='/meeting-one-transcript#excerpt-four'
                                    state={{ 
                                        background: "var(--cobalt)",
                                        textColor: "var(--sand)",
                                        slash: "/Images/CreamSlash.svg" }} 
                                    >Meeting Notes
                                </Hash>
                            </div>
                        </div>
                    </div>
                    <div className="relative w-sixty flex column mobile-al-center flex-end sand-txt">
                        <div className="h-fifty h-fifty-mobile-100 flex mobile-column mobile-al-center mobile-top-20px">
                            <div className="w-twenty-five"> 
                              <iframe width="100%" height="56%" className="w-one-hundred" title="vimeo-player" src="https://player.vimeo.com/video/738663854?h=83cfee6ba0#t=4m15s" frameborder="0"></iframe>
                            </div>
                            <div className="w-forty stnd-padding">
                                <p className="no-padding"><b>Dana Whitco, Jacob’s Pillow:</b></p> 
                                <p className="no-top-padding"><em>I do think there's something very radical about the idea of the performance being the documentation of the thing.</em></p>
                                <Link 
                                    onClick={setPosition}
                                    className="small-bttn jc-center sand cobalt-txt"
                                    to='/meeting-three-conversation-one'
                                    state={{ 
                                        background: "var(--sand)",
                                        textColor: "black",
                                        videoHeaderColor: "var(--sand)",
                                        videoColor: "var(--cobalt)",
                                        startTime: "https://player.vimeo.com/video/738663854?h=83cfee6ba0#t=4m15s" }}
                                    >Video
                                </Link>
                            </div>
                        </div>
                        <img src="/Images/Pictures/WhyItMattersImg2.png" className="why-it-matters-img-2 absolute z-index-10" />
                        <div className="white-box absolute stnd-padding sand-border-left">
                            <div className="display-none sand white-box ">
                            </div>
                        </div>
                        <div className="h-fifty flex mobile-column jc-baseline space-btwn z-index-11">
                            <div className="w-forty cobalt sand-txt stnd-padding">
                                <p className="no-padding"><b>Imogen Smith:</b></p>
                                <p className="no-padding">...artists often lack access to documentation they need to remount works…</p>
                                <Link //no need for hash
                                    onClick={setPosition}
                                    className="small-bttn jc-center sand cobalt-txt top-margin-10px"
                                    to='/imogen-smith-writing'
                                    state={{ 
                                        background: "var(--cobalt)",
                                        textColor: "var(--sand)",
                                        slash: "/Images/CreamSlash.svg" }} 
                                    >Writing
                                </Link>
                            </div> 
                        </div>
                    </div>
                </div>
                <div className="panel-1800 flex space-btwn mobile-column mobile-al-center mobile-side-padding top-mobile-sand-border">
                    <div className="w-thirty flex column mobile-jc-center space-around">
                        <div className="relative h-200px flex column mobile-al-center">
                            <Hash 
                                onClick={setPosition}
                                className="absolute small-bttn left-margin-10px cobalt sand-txt sand-border"
                                to='/ann-carlson-writing#excerpt-two'
                                state={{ 
                                    background: "var(--cobalt)",
                                    textColor: "var(--sand)",
                                    slash: "/Images/CreamSlash.svg" }} 
                                >Writing
                            </Hash>
                            <div className="h-150px w-ninety flex column jc-center stnd-padding sand-txt sand-border">
                                <p className="no-padding"><b>Ann Carlson:</b></p>
                                <p className="no-padding">I assume that there is a much larger audience/spectatorship for works that are mediated for viewing on a personal computer.</p>
                            </div>
                        </div>
                        <div className="flex column w-one-hundred h-fifty mobile-top-20px">
                            <iframe width="100%" height="100%" className="" title="vimeo-player" src="https://player.vimeo.com/video/738663854?h=83cfee6ba0#t=8m53s" frameborder="0"></iframe>
                            <div className="stnd-padding sand-txt">
                                <p className="no-padding"><b>Jaamil Olawale Kosoko, Jacob’s Pillow:</b></p> 
                                <p className="no-padding"><em>What's the criticality behind what my offering is? With that comes a kind of cultural diplomacy, or ambassadorship.</em></p>
                                <Link 
                                    onClick={setPosition}
                                    className="small-bttn jc-center sand cobalt-txt top-margin-10px"
                                    to='/meeting-three-conversation-one'
                                    state={{ 
                                        background: "var(--sand)",
                                        textColor: "var(--cobalt)",
                                        videoHeaderColor: "var(--sand)",
                                        videoColor: "var(--cobalt)",
                                        startTime: "https://player.vimeo.com/video/738663854?h=83cfee6ba0#t=8m53s" }}
                                    >Video
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="relative w-forty flex column flex-end sand-txt">
                        <div className="relative flex jc-center h-seventy overflow-hidden mobile-top-20px">
                            <img src="/Images/Pictures/GeselPresentation.png" className="h-one-hundred mobile-76vW"/>
                            <p className="absolute bottom-10px left-10px double-padding sand cobalt-txt"><b>Presentation: NO BOUNDARIES—Gesel Mason</b></p> 
                        </div>
                        <div className="h-fifty flex column z-index-11 no-top-padding">
                            <ul className="no-top-padding">
                                <li className="bullets">Legacy, representation</li>
                                <li className="bullets">Where and how the black dancing body appears and disappears in digital space</li>
                                <li className="bullets">Who gets to tell what stories?</li>
                                <li className="bullets">Real and imagined concerns around ownership, intellectual property, copyright, permission, and transmission</li>
                            </ul>
                            <div className="flex top-margin-10px">                            
                            <div className="sand-border-right ">
                                <Link 
                                    onClick={setPosition}
                                    className="small-bttn jc-center sand cobalt-txt right-margin-10px"
                                    to='/gesel-mason-presentation'
                                    state={{ 
                                        background: "var(--sand)",
                                        textColor: "var(--cobalt)",
                                        videoHeaderColor: "var(--sand)",
                                        videoColor: "var(--cobalt)",
                                        startTime: "https://player.vimeo.com/video/783391235?h=e03a3b92db" }}
                                    >Video
                                </Link>
                            </div>
                            <Link 
                                onClick={setPosition}
                                className="small-bttn jc-center sand cobalt-txt left-margin-10px"
                                to='/gesel-mason-presentation-notes'
                                state={{ 
                                    background: "var(--sand)",
                                    textColor: "var(--cobalt)",
                                    slash: "/Images/CreamSlash.svg" }}
                                >Notes 
                            </Link>
                            </div>
                        </div>
                        <div className="w-one-hundred flex column space-btwn stnd-padding">
                            <div className="flex column txt-al-right mobile-top-20px">
                                <div className="w-one-hundred sand-txt">
                                    <p>&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;</p>
                                    <h2 className="no-padding">Presentation: Cori Olinghouse</h2>
                                    <p className="no-top-padding">Different forms promote different modes of reception… Embodied practice gets to speak across body-document divide.</p>
                                    <div className="flex flex-end top-margin-10px">
                                        <div className="sand-border-right">
                                            <Link 
                                                onClick={setPosition}
                                                className="small-bttn cobalt sand-txt sand-border right-margin-10px"
                                                to='/cori-olinghouse-presentation'
                                                state={{ 
                                                    background: "var(--sand)",
                                                    textColor: "var(--cobalt)",
                                                    videoHeaderColor: "var(--sand)",
                                                    videoColor: "var(--cobalt)",
                                                    startTime: "https://player.vimeo.com/video/778223077?h=623e1db6fa" }}
                                                >Video
                                            </Link>
                                        </div>
                                        <Link 
                                            onClick={setPosition}
                                            className="small-bttn cobalt sand-txt sand-border left-margin-10px"
                                            to='/cori-olinghouse-presentation-notes'
                                            state={{ 
                                                background: "var(--sand)",
                                                textColor: "var(--cobalt)",
                                                slash: "/Images/CreamSlash.svg" }}
                                            >Notes
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-thirty flex column al-center space-btwn stnd-padding">
                        <div className="w-eighty flex column mobile-top-20px">
                            <div className="flex sand-gradient-50">
                                <Hash
                                    onClick={setPosition} 
                                    className="small-bttn left-margin-10px cobalt sand-txt sand-border"
                                    to='/erin-kilmurray-writing#excerpt-two'
                                    state={{ 
                                        background: "var(--cobalt)",
                                        textColor: "var(--sand)",
                                        slash: "/Images/CreamSlash.svg" }}
                                    >Writing
                                </Hash>
                            </div>
                            <div className="stnd-padding sand cobalt-txt">
                                <p className="no-padding txt-al-center"><b>Erin Kilmurray:</b></p>
                                <p className="no-top-padding txt-al-center">My own dance-making has bloomed to me over time, due to the wide availability of artists’ work beyond my own city limits.</p>
                            </div>
                        </div>
                        <img src="/Images/Pictures/GroupPhoto.JPG"  className="w-eighty stnd-padding"/>
                        <div className="w-eighty flex column mobile-top-20px">
                            <div className="flex sand-gradient-50 w-one-hundred">
                                <Hash 
                                    onClick={setPosition}
                                    className="small-bttn left-margin-10px cobalt sand-txt sand-border"
                                    to='/alex-springer-writing#excerpt-one'
                                    state={{ 
                                        background: "var(--cobalt)",
                                        textColor: "var(--sand)",
                                        slash: "/Images/CreamSlash.svg" }}
                                    >Writing
                                </Hash>
                            </div>
                            <div className="stnd-padding sand cobalt-txt">
                                <p className="no-padding txt-al-center"><b>Alex Springer:</b></p>
                                <p className="no-top-padding txt-al-center">We lose the radical “now” of live performance when we hyper-edit content…</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="panel-1200 flex mobile-column mobile-side-padding">
                    <div className="flex column space-around eighty">
                        <div className="flex mobile-column sand cobalt-txt double-padding">
                            <div className="flex column jc-center">
                                <p className="no-padding"><b>Betsey Brock, Seattle:</b></p>
                                <p className="no-padding">Is it artists’ or institutions’ responsibility to archive? What gets archived, and for whom? …Who is the audience, does the institution On the Boards get to decide? Are we beholden to the artists or to future generations, or ourself, or all of the above?</p>
                            </div>
                            <div className="flex column jc-center mobile-al-center">                       
                                <Hash 
                                    onClick={setPosition}
                                    className="small-bttn left-margin-10px cobalt sand-txt"
                                    to='/meeting-two-notes#excerpt-two'
                                    state={{ 
                                        background: "var(--sand)",
                                        textColor: "var(--cobalt)",
                                        slash: "/Images/CreamSlash.svg" }}
                                    >Meeting Notes
                                </Hash>
                            </div>
                        </div>
                        <div className="flex mobile-column space-around">
                            <div className="w-fifty-exempt mobile-al-center flex column mobile-top-20px">
                                <div className="relative h-200px  flex column mobile-al-center">
                                    <Link 
                                        onClick={setPosition}
                                        className="absolute small-bttn left-margin-10px cobalt sand-txt sand-border"
                                        to='/meeting-three-conversation-one'
                                        state={{ 
                                            background: "var(--sand)",
                                            textColor: "var(--cobalt)",
                                            videoHeaderColor: "var(--sand)",
                                            videoColor: "var(--cobalt)",
                                            startTime: "https://player.vimeo.com/video/738663854?h=83cfee6ba0#t=13m38s" }}
                                        >Video
                                    </Link>
                                    <div className="h-150px w-ninety flex column jc-center al-center side-padding sand-txt sand-border">
                                        <p className="no-bottom-padding txt-al-center"><b>Angie Hauser, Jacob’s Pillow:</b></p>
                                        <p className="no-top-padding txt-al-center"><em>…to participate in a conversation around archiving and to build process around archives—to align [archives] with how dance is actually made.</em></p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-fifty-exempt flex column mobile-top-20px">
                                <div className="relative h-200px flex column al-flex-end mobile-al-center">
                                    <Link 
                                        onClick={setPosition}
                                        className="absolute small-bttn right-margin-10px cobalt sand-txt sand-border"
                                        to='/meeting-three-conversation-one'
                                        state={{ 
                                            background: "var(--sand)",
                                            textColor: "var(--cobalt)",
                                            videoHeaderColor: "var(--sand)",
                                            videoColor: "var(--cobalt)",
                                            startTime: "https://player.vimeo.com/video/738663854?h=83cfee6ba0#t=12m11s" }}
                                        >Video
                                    </Link>
                                    <div className="h-150px w-ninety flex column jc-center al-center side-padding sand-txt sand-border">
                                        <p className="no-padding txt-al-center"><b>Jaamil Olawale Kosoko, Jacob’s Pillow:</b></p>
                                        <p className="no-top-padding txt-al-center"><em>…So how do you go about overcoming harsh review, especially if it's completely inaccurate?</em></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="h-fifty flex mobile-column space-around">
                            <div className="w-fifty-exempt flex column mobile-al-center space-around">
                                <div className="flex column  mobile-top-20px">
                                    <div className="relative h-150px  flex column mobile-al-center">
                                        <Link 
                                            onClick={setPosition}
                                            className="absolute small-bttn left-margin-10px cobalt sand-txt sand-border"
                                            to='/meeting-three-conversation-one'
                                            state={{ 
                                                background: "var(--sand)",
                                                textColor: "var(--cobalt)",
                                                videoHeaderColor: "var(--sand)",
                                                videoColor: "var(--cobalt)",
                                                startTime: "https://player.vimeo.com/video/738663854?h=83cfee6ba0#t=30m55s" }}
                                            >Video
                                        </Link>
                                        <div className="h-100px w-ninety flex column jc-center al-center stnd-padding sand-txt sand-border">
                                            <p className="no-bottom-padding txt-al-center"><b>Angie Hauser, Jacob’s Pillow:</b></p>
                                            <p className="no-padding txt-al-center"><em>…but you just can't hold on to all of it, so it's changing the methodology absolutely.</em></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex column mobile-top-20px">
                                    <div className="relative h-150px flex column flex-end mobile-al-center">
                                        <Link 
                                            onClick={setPosition}
                                            className="absolute top-30px small-bttn left-margin-10px cobalt sand-txt sand-border"
                                            to='/meeting-three-conversation-one'
                                            state={{ 
                                                background: "var(--sand)",
                                                textColor: "var(--cobalt)",
                                                videoHeaderColor: "var(--sand)",
                                                videoColor: "var(--cobalt)",
                                                startTime: "https://player.vimeo.com/video/738663854?h=83cfee6ba0#t=16m07s" }}
                                            >Video
                                        </Link>
                                        <div className="h-100px w-ninety flex column jc-center al-center stnd-padding sand-txt sand-border">
                                            <p className="no-bottom-padding txt-al-center"><b>Angie Hauser, Jacob’s Pillow:</b></p>
                                            <p className="no-padding txt-al-center"><em>Do you even think about archive at this point in your dance making?</em></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-fifty-exempt flex column overflow-hidden">
                                <img src="/Images/Pictures/Bonfire.png"  className="w-one-hundred stnd-padding"/>
                            </div>
                        </div>
                    </div>
                    <div className="flex column flex-end al-center">
                        <img src="/Images/CreamOutlineSlash.svg" className="slash display-none"/>    
                    </div>
                </div>
                <div className="panel-1800 flex mobile-column mobile-al-center space-around mobile-side-padding">
                    <div className="w-twenty-five flex column space-around sand sand-border">
                        <div className="flex column mobile-top-20px">
                            <div className="flex cobalt-gradient-50 w-one-hundred">
                                <Hash 
                                    onClick={setPosition}
                                    className="small-bttn left-margin-10px cobalt sand-txt sand-border"
                                    to='/russell-lepley-writing#excerpt-one'
                                    state={{ 
                                        background: "var(--sand)",
                                        textColor: "var(--cobalt)",
                                        slash: "/Images/CreamSlash.svg" }}
                                    >Writing
                                </Hash>
                            </div>
                            <div className="w-one-hundred cobalt sand-txt">
                                <p className="no-bottom-padding side-padding"><b>Russell Lepley:</b></p>
                                <p className="no-top-padding side-padding">We need clear and simply shot video…</p>
                            </div>
                        </div>
                        <div className="flex column mobile-top-20px">
                            <div className="flex cobalt-gradient-50 w-one-hundred">
                                <Hash 
                                    onClick={setPosition}
                                    className="small-bttn left-margin-10px cobalt sand-txt sand-border"
                                    to='/mara-frazier-writing#excerpt-one'
                                    state={{ 
                                        background: "var(--sand)",
                                        textColor: "var(--cobalt)",
                                        slash: "/Images/CreamSlash.svg" }}
                                    >Writing
                                </Hash>
                            </div>
                            <div className="w-one-hundred cobalt sand-txt">
                                <p className="no-bottom-padding side-padding"><b>Mara Frazier:</b></p>
                                <p className="no-top-padding side-padding">I assume that audiences have viewed at least a sample of a choreographer’s work before they buy a ticket.</p>
                            </div>
                        </div>
                        <div className="flex column mobile-top-20px">
                            <div className="flex cobalt-gradient-50 w-one-hundred">
                                <Hash 
                                    onClick={setPosition}
                                    className="small-bttn left-margin-10px cobalt sand-txt sand-border"
                                    to='/jonathan-meyer-writing#excerpt-one'
                                    state={{ 
                                        background: "var(--sand)",
                                        textColor: "var(--cobalt)",
                                        slash: "/Images/CreamSlash.svg" }}
                                    >Writing
                                </Hash>
                            </div>
                            <div className="w-one-hundred cobalt sand-txt">
                                <p className="no-bottom-padding side-padding"><b>Jonathan Meyer:</b></p>
                                <p className="no-top-padding side-padding">…I would say that the work fails when it’s not live.</p>
                            </div>
                        </div>
                        <div className="flex column mobile-top-20px">
                            <div className="flex cobalt-gradient-50 w-one-hundred">
                                <Hash 
                                    onClick={setPosition}
                                    className="small-bttn left-margin-10px cobalt sand-txt sand-border"
                                    to='/claudia-la-rocco-writing#excerpt-two'
                                    state={{ 
                                        background: "var(--sand)",
                                        textColor: "var(--cobalt)",
                                        slash: "/Images/CreamSlash.svg" }}
                                    >Writing
                                </Hash>
                            </div>
                            <div className="w-one-hundred cobalt sand-txt">
                                <p className="no-bottom-padding side-padding"><b>Claudia La Rocco:</b></p>
                                <p className="no-top-padding side-padding">I try to assume nothing about “audience."</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-forty flex column jc-center stnd-padding">
                        <div className="h-fifty h-fifty-mobile-100 sand cobalt-txt double-padding">
                            <div className="flex space-btwn mobile-column">
                                <h2 className="no-padding"><b>Ishmael Houston-Jones:</b></h2>
                                <Link  // no need for hash
                                    onClick={setPosition}
                                    className="small-bttn cobalt sand-txt"
                                    to='/ishmael-houston-jones-writing'
                                    state={{ 
                                        background: "var(--sand)",
                                        textColor: "var(--cobalt)",
                                        slash: "/Images/CreamSlash.svg" }}
                                    >Writing
                                </Link> 
                            </div>
                            <p className="transcription-details">In 2017, I find myself in my mid-60s and thinking much more about legacy. My own legacy and the legacy of my peers. Sadly, this was provoked by the recent deaths of several of those peers and my meditations led me to contemplate how will their (and my) contributions to this particular and peculiar subset of this art form, experimental dance, be remembered. Who will be able to access the archive of lifetimes of work? How will this archive be available? Formats and gatekeepers, what and who will they be, and do we have any control over either?</p>
                            <p className="transcription-details">So, do I want just anyone to have access to all of my work? Now? When I’m no longer here? I keep thinking that there is no parallel in writing. One writes a book and anyone can read it if they buy it or it is available in a library or online. Recorded music is much the same? There is a handful of exceptionally good writers writing on the subject of experimental dance. Is there some reason that there aren’t more efficient methods of archiving and disseminating our work to a greater public other than oblivious reviews or by YouTube and Vimeo?</p>
                        </div>
                        <div className="h-fifty overflow-hidden">
                            <img src="/Images/Pictures/Ishmael.svg" />    
                        </div>
                    </div>
                    <div className="w-forty flex column flex-end mobile-column stnd-padding sand-txt">
                        <p className="txt-al-right">&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;</p>
                        <h2 className="no-padding"><b>Columbus Post-It Wall of Questions:</b></h2>
                        <div className="flex column stnd-padding sand-border">
                            <div className="h-one-hundred flex column space-btwn">
                                <div className="flex mobile-column space-btwn sand-border-left-thin">                    
                                    <p className="transcription-details"><em>How can we incentivize archival behavior broadly?</em></p>                                
                                    <div className="flex flex-end al-center only-top-padding">
                                        <Link 
                                            onClick={setPosition}
                                            className="small-bttn sand cobalt-txt mobile-bottom-10px"
                                            to='/meeting-three-conversation-one'
                                            state={{ 
                                                background: "var(--sand)",
                                                textColor: "var(--cobalt)",
                                                videoHeaderColor: "var(--sand)",
                                                videoColor: "var(--cobalt)",
                                                startTime: "https://player.vimeo.com/video/747370875?h=8ab58f63bf#t=0m49s" }}
                                            >Video
                                        </Link>
                                    </div>
                                </div>
                                <div className="flex mobile-column space-btwn sand-border-left-thin">                    
                                    <p className="transcription-details"><em>What does a fieldwide funding strategy look like?</em></p>
                                    <div className="flex flex-end al-center only-top-padding">
                                        <Link 
                                            onClick={setPosition}
                                            className="small-bttn sand cobalt-txt mobile-bottom-10px"
                                            to='/meeting-three-conversation-one'
                                            state={{ 
                                                background: "var(--sand)",
                                                textColor: "var(--cobalt)",
                                                videoHeaderColor: "var(--sand)",
                                                videoColor: "var(--cobalt)",
                                                startTime: "https://player.vimeo.com/video/747370875?h=8ab58f63bf#t=2m04s" }}
                                            >Video
                                        </Link>
                                    </div>
                                </div>
                                <div className="flex mobile-column space-btwn sand-border-left-thin">
                                    <p className="transcription-details"><em>Digital archive...where the form has a relationship to embodied practices…</em></p>
                                    <div className="flex flex-end al-center only-top-padding">
                                        <Link 
                                            onClick={setPosition}
                                            className="small-bttn sand cobalt-txt mobile-bottom-10px"
                                            to='/meeting-three-conversation-one'
                                            state={{ 
                                                background: "var(--sand)",
                                                textColor: "var(--cobalt)",
                                                videoHeaderColor: "var(--sand)",
                                                videoColor: "var(--cobalt)",
                                                startTime: "https://player.vimeo.com/video/747370875?h=8ab58f63bf#t=2m33s" }}
                                            >Video
                                        </Link>
                                    </div>
                                </div>
                                <div className="flex mobile-column space-btwn sand-border-left-thin ">                    
                                    <p className="transcription-details"><em>...Anti-racist methods of dissemination, whether online or in digital space…</em></p>                                
                                    <div className="flex flex-end al-center only-top-padding">
                                        <Link 
                                            onClick={setPosition}
                                            className="small-bttn sand cobalt-txt mobile-bottom-10px"
                                            to='/meeting-three-conversation-one'
                                            state={{ 
                                                background: "var(--sand)",
                                                textColor: "var(--cobalt)",
                                                videoHeaderColor: "var(--sand)",
                                                videoColor: "var(--cobalt)",
                                                startTime: "https://player.vimeo.com/video/747370875?h=8ab58f63bf#t=4m57s" }}
                                            >Video
                                        </Link>
                                    </div>
                                </div>
                                <div className="flex mobile-column space-btwn sand-border-left-thin">                    
                                    <p className="transcription-details"><em>How might an archive be thought of as...dimensional?</em></p>                                
                                    <div className="flex flex-end al-center only-top-padding">
                                        <Link 
                                            onClick={setPosition}
                                            className="small-bttn sand cobalt-txt mobile-bottom-10px"
                                            to='/meeting-three-conversation-one'
                                            state={{ 
                                                background: "var(--sand)",
                                                textColor: "var(--cobalt)",
                                                videoHeaderColor: "var(--sand)",
                                                videoColor: "var(--cobalt)",
                                                startTime: "https://player.vimeo.com/video/747370875?h=8ab58f63bf#t=3m51s" }}
                                            >Video
                                        </Link>
                                    </div>
                                </div>
                                <div className="flex mobile-column space-btwn sand-border-left-thin">                    
                                    <p className="transcription-details"><em>How can we prevent experimental and obscure performance practices from erasure…?</em></p>                                
                                    <div className="flex flex-end al-center only-top-padding">
                                        <Link 
                                            onClick={setPosition}
                                            className="small-bttn sand cobalt-txt mobile-bottom-10px"
                                            to='/meeting-three-conversation-one'
                                            state={{ 
                                                background: "var(--sand)",
                                                textColor: "var(--cobalt)",
                                                videoHeaderColor: "var(--sand)",
                                                videoColor: "var(--cobalt)",
                                                startTime: "https://player.vimeo.com/video/747370875?h=8ab58f63bf#t=5m56s" }}
                                            >Video
                                        </Link>
                                    </div>
                                </div>
                                <div className="flex mobile-column space-btwn sand-border-left-thin">                    
                                    <p className="transcription-details"><em>Is there a better way to name an archive?</em></p>                                
                                    <div className="flex flex-end al-center only-top-padding">
                                        <Link 
                                            onClick={setPosition}
                                            className="small-bttn sand cobalt-txt mobile-bottom-10px"
                                            to='/meeting-three-conversation-one'
                                            state={{ 
                                                background: "var(--sand)",
                                                textColor: "var(--cobalt)",
                                                videoHeaderColor: "var(--sand)",
                                                videoColor: "var(--cobalt)",
                                                startTime: "https://player.vimeo.com/video/747370875?h=8ab58f63bf#t=6m22s" }}
                                            >Video
                                        </Link>
                                    </div>
                                </div>
                                <div className="flex mobile-column space-btwn">                    
                                    <p className="transcription-details"><em>What is the relationship between archiving and stewardship?</em></p>                                
                                    <div className="flex flex-end al-center only-top-padding">
                                        <Link 
                                            onClick={setPosition}
                                            className="small-bttn sand cobalt-txt mobile-bottom-10px"
                                            to='/meeting-three-conversation-one'
                                            state={{ 
                                                background: "var(--sand)",
                                                textColor: "var(--cobalt)",
                                                videoHeaderColor: "var(--sand)",
                                                videoColor: "var(--cobalt)",
                                                startTime: "https://player.vimeo.com/video/747370875?h=8ab58f63bf#t=5m39s" }}
                                            >Video
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
}

export default WhyItMatters;