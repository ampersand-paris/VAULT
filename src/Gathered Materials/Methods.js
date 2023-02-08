import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"; 
import { useEffect, useState } from "react";
import { HashLink as Hash } from 'react-router-hash-link'
import audio from "../Audio/Methods.mp3"
import ReactAudioPlayer from "react-audio-player";

const Methods = (props) => {

    const [scrollPosition, setScrollPosition] = useState(0)    
    const [loading, setLoading] = useState(false)

    const setPosition = () => {
        const container = document.getElementById('methods-position')
        const position = container.scrollLeft
        window.sessionStorage.setItem('methods', position)
        console.log('link', position)
    }

    useEffect(() => {
        const position = JSON.parse(window.sessionStorage.getItem('methods'))
        setScrollPosition(position)
        console.log('useeffect', position)
    }, [])

    useEffect(() => {
        console.log(scrollPosition)
        const xPosition = document.getElementById('methods-position')
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
                    color: black;
                }
                
                audio::-webkit-media-controls-time-remaining-display {
                    font-family: neuzeit-grotesk, sans-serif;
                    font-weight: 400;
                    font-style: normal;
                    background-color: rgba(255, 255, 255, 0);
                    color: black;
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
                background: var(--preserved-lemon); 
                border-radius: 10px;
                border: 2px solid var(--sand);
                }

                /* Handle on hover */
                .container::-webkit-scrollbar-thumb:hover {
                background: black; 
            `
            }
        </style>
        <div className="container preserved-lemon" id="methods-position">
            <div className="m-container-length h-one-hundred flex mobile-column">
                <div className="intro-panel-width flex flex-end mobile-jc-center">
                    <div className="intro-width flex space-btwn column vault-padding">
                        <div className="methods-margin">
                            <p>&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;<span className="display-none corporate"><b>SCROLL RIGHT</b></span></p>
                        </div>
                        <div className="flex column">
                            <p className="corporate only-bttm-padding"><b>AUDIO INTRO</b></p>
                            <ReactAudioPlayer
                                src={audio}
                                controls 
                            />
                            <p className="transcription-details corporate"><b>Methods. Is it digital or analog? Widely available online and through social media, or is it protected in some way? Is there a generational or historical perspective to consider? Is the work improvised or set? In the journey from initial concept to production, are all aspects of the process considered? You'll find a range of practices and concerns addressed in this section.</b></p>
                        </div>
                    </div>
                </div>
                <div className="methods-panel-1 panel-1400 flex double-padding mobile-column mobile-side-padding">
                    <h1 className="preserved-lemon-txt intro-title">METHODS</h1>
                    <img src="/Images/LemonSlash.svg" className="m-slash display-none"/>    
                </div>
                <div className="panel-1400 flex mobile-column mobile-jc-center space-around mobile-side-padding">
                    <div className="w-twenty-five-exempt flex column space-around">
                        <div className="flex column mobile-top-20px">
                            <div className="flex sand-gradient-50 w-one-hundred">
                                <Hash 
                                    onClick={setPosition}
                                    className="small-bttn left-margin-10px black sand-txt sand-border"
                                    to='/cori-olinghouse-writing'
                                    state={{ 
                                        background: "var(--preserved-lemon)",
                                        textColor: "black",
                                        slash: "/Images/Slash.svg" }}
                                    >Writing
                                </Hash>
                            </div>
                            <div className="sand w-one-hundred">
                                <p className="no-bottom-padding side-padding"><b>Cori Olinghouse:</b></p>
                                <p className="no-top-padding side-padding">In my process, I use haptic forms of note taking that allow a fluid movement between creating and reflecting.</p>
                            </div>
                        </div>
                        <div className="flex column mobile-top-20px">
                            <div className="flex sand-gradient-50 w-one-hundred">
                                <Hash 
                                    onClick={setPosition}
                                    className="small-bttn left-margin-10px black sand-txt sand-border"
                                    to='/tonya-lockyer-writing#excerpt-one'
                                    state={{ 
                                        background: "var(--preserved-lemon)",
                                        textColor: "black",
                                        slash: "/Images/Slash.svg" }}
                                    >Writing
                                </Hash>
                            </div>
                            <div className="sand w-one-hundred">
                                <p className="no-bottom-padding side-padding"><b>Tonya Lockyer:</b></p>
                                <p className="no-top-padding side-padding">Or perhaps, by the very act of so meticulously recording it, [John Cage] had helped manifest its importance.</p>
                            </div>
                        </div>
                        <div className="flex column mobile-top-20px">
                            <div className="flex sand-gradient-50 w-one-hundred">
                                <Hash 
                                    onClick={setPosition}
                                    className="small-bttn left-margin-10px black sand-txt sand-border"
                                    to='/jane-jerardi-writing#excerpt-one'
                                    state={{ 
                                        background: "var(--preserved-lemon)",
                                        textColor: "black",
                                        slash: "/Images/Slash.svg" }}
                                    >Writing
                                </Hash>
                            </div>
                            <div className="sand w-one-hundred">
                                <p className="no-bottom-padding side-padding"><b>Jane Jerardi:</b></p>
                                <p className="no-top-padding side-padding">I sometimes feel the desire to be selective about what I share with the world.</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-sixty flex column flex-end stnd-padding">
                        <h2 className="sand-txt txt-al-right"><b>&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;</b></h2>
                        <div className="sand-border flex mobile-column double-padding">
                            <div className="flex column w-seventy-five">
                                <img src="/Images/Pictures/DianaMuhammed.JPG" className="" />
                                <p className="no-bottom-padding "><b>Diana Muhammad:</b></p>
                                <p className="no-top-padding ">This availability [of video] provides easy access for study and reflection of a work.</p>
                                <Link 
                                    onClick={setPosition}
                                    className="small-bttn jc-center sand black-txt"
                                    to='/diana-muhammad-writing#excerpt-one'
                                    state={{ 
                                        background: "var(--preserved-lemon)",
                                        textColor: "black",
                                        slash: "/Images/Slash.svg" }}
                                    >WRITING
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="panel-1800 flex mobile-column mobile-side-padding top-mobile-sand-border">
                    <div className="w-twenty-five flex column space-around stnd-padding">
                        <div className="flex column al-flex-end mobile-al-center">
                            <div className="w-seventy-five flex sand-gradient-50 w-one-hundred">
                                <Hash 
                                    onClick={setPosition}
                                    className="small-bttn left-margin-10px black sand-txt sand-border"
                                    to='/jsun-howard-writing#excerpt-one'
                                    state={{ 
                                        background: "var(--preserved-lemon)",
                                        textColor: "black",
                                        slash: "/Images/Slash.svg" }}
                                    >Writing
                                </Hash>
                            </div>
                            <div className="w-seventy-five sand w-one-hundred">
                                <p className="no-bottom-padding side-padding"><b>J’Sun Howard:</b></p>
                                <p className="no-top-padding side-padding">Virtual Reality/Augmented Reality is becoming a new trend in dance…</p>
                            </div>
                        </div>
                        <div className="h-sixty flex column al-flex-end flex-end mobile-top-20px txt-al-right">
                            <p className="no-bottom-padding"><b>Angie Hauser, Jacob's Pillow:</b></p> 
                            <p className="no-top-padding"><em>…whatever direction I might go in, [in order to] participate in a conversation around archiving, and to build process around archives, it would be to align [archiving] with how dance is actually made</em></p>
                            <Link 
                                onClick={setPosition}
                                className="small-bttn jc-center sand black-txt"
                                to='/meeting-three-conversation-one'
                                state={{ 
                                    background: "var(--sand)",
                                    textColor: "black",
                                    videoColor: "var(--preserved-lemon)",
                                    startTime: "https://player.vimeo.com/video/738663854?h=83cfee6ba0#t=13m40s" 
                                }}
                                >VIDEO
                            </Link>
                            <div>
                                <iframe width="100%" height="100%" className="w-one-hundred txt-al-right only-top-padding" title="vimeo-player" src="https://player.vimeo.com/video/738663854?h=83cfee6ba0#t=13m40s" frameborder="0"></iframe>
                            </div>
                        </div>
                    </div>
                    <div className="w-seventy-five flex column stnd-padding">
                        <div className="h-fifty flex mobile-column space-btwn stnd-padding">
                            <div className="w-forty flex column space-around">
                                <div className="flex column">
                                    <div className="flex sand-gradient-50 w-one-hundred stnd-padding">
                                        <Hash 
                                            onClick={setPosition}
                                            className="small-bttn left-margin-10px black sand-txt sand-border"
                                            to='/jonathan-meyer-writing#excerpt-two'
                                            state={{ 
                                                background: "var(--preserved-lemon)",
                                                textColor: "black",
                                                slash: "/Images/Slash.svg" }}
                                            >Writing
                                        </Hash>
                                    </div>
                                    <div className="w-one-hundred sand stnd-padding">
                                        <p className="no-bottom-padding side-padding"><b>Jonathan Meyer:</b></p>
                                        <p className="no-top-padding side-padding">The onus is so often on artists rather than on the institutions that mean to support them.</p>
                                    </div>
                                </div>
                                <div className="flex column mobile-top-20px">
                                    <div className="flex sand-gradient-50 w-one-hundred stnd-padding">
                                        <Hash 
                                            onClick={setPosition}
                                            className="small-bttn left-margin-10px black sand-txt sand-border"
                                            to='/erin-kilmurray-writing#excerpt-one'
                                            state={{ 
                                                background: "var(--preserved-lemon)",
                                                    textColor: "black",
                                                    slash: "/Images/Slash.svg" }} 
                                            >Writing
                                        </Hash>
                                    </div>
                                    <div className="w-one-hundred sand stnd-padding">
                                        <p className="no-bottom-padding side-padding"><b>Erin Kilmurray:</b></p>
                                        <p className="no-top-padding side-padding">…peer/follower review + feedback + championing has been the active ingredient in pushing [my work] forward.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-sixty-exempt flex column mobile-top-20px">
                                <img src="/Images/Pictures/JonathanMeyer.JPG" className="side-padding" />
                            </div>
                        </div>
                        <div className="h-fifty w-eighty flex column jc-center stnd-padding">
                            <div className="sand">
                                <div className="sand flex mobile-column-reverse space-btwn baseline mobile-top-20px">
                                    <p className="no-bottom-padding side-padding"><b>Ishmael Houston-Jones:</b></p>
                                </div>
                                <p className="sand no-top-padding side-padding">The process of my practice seems so fragile and elusive to the idea of archive. My choreography is (almost) never set in the tradition of Modern Dance or Ballet. Therefore, in those infrequent times when I have revived work that was created earlier with a different cast, the new cast is recreating the old work anew. In reality, this is true of the revival of any dance work but this seems much more unambiguous when that work is improvised. Which is “the piece?” What defines a choreography that has no set movement? What are the archival tools available to capture this work? The scattered notes I made in random notebooks hidden away in random drawers and boxes? VHS video tape? Digital transfers? Reviews, previews, and interviews in print or on blogs? Memory?</p>
                            </div>
                            <div className="flex sand-gradient-50-down w-one-hundred">
                                <Hash 
                                    onClick={setPosition}
                                    className="small-bttn left-margin-10px preserved-lemon black-txt sand-border"
                                    to='/ishmael-houston-jones-writing#excerpt-one'
                                    state={{ 
                                        background: "var(--preserved-lemon)",
                                        textColor: "black",
                                        slash: "/Images/Slash.svg" }} 
                                    >Writing
                                </Hash>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="panel-1200 flex mobile-column mobile-al-center mobile-side-padding">
                    <div className="flex column w-eighty">
                        <div className="h-thirty-three flex mobile-column sand double-padding">
                            <div className="w-eighty flex column jc-center">
                                <p className="no-bottom-padding"><b>Bebe Miller, NYC:</b></p>
                                <p className="no-top-padding">As said by Michael Morris, you’re always dancing with your ancestors, you’re never alone. ...Darrell is extraordinary because he embraces that, brings out something about the whole Vault project for me… —the sense of the form and what the form is for, which has a lot to do with how we then document it and receive it.</p>
                                <Hash 
                                    onClick={setPosition}
                                    className="small-bttn preserved-lemon black-txt sand-border"
                                    to='/meeting-one-transcript#excerpt-five'
                                    state={{ 
                                        background: "var(--preserved-lemon)",
                                        textColor: "black",
                                        slash: "/Images/Slash.svg" }} 
                                    >Meeting Notes
                                </Hash>
                            </div>
                            <div className="flex column jc-center mobile-al-center">                       
                                
                            </div>
                        </div>
                        <div className="h-thirty-three flex al-center mobile-column space-btwn only-top-padding">
                            <div className="w-thirty flex column mobile-top-20px">
                                <div className="flex sand-gradient-50 w-one-hundred">
                                    <Hash 
                                        onClick={setPosition}
                                        className="small-bttn left-margin-10px black sand-txt sand-border"
                                        to='/ishmael-houston-jones-writing'
                                        state={{ 
                                            background: "var(--preserved-lemon)",
                                            textColor: "black",
                                            slash: "/Images/Slash.svg" }} 
                                        >Writing
                                    </Hash>
                                </div>
                                <div className="w-one-hundred sand">
                                    <p className="no-bottom-padding side-padding"><b>Ishmael Houston-Jones:</b></p>
                                    <p className="no-top-padding side-padding">…peer/follower review + feedback + championing has been the active ingredient in pushing [my work] forward.</p>
                                </div>
                            </div>
                            <div className="w-thirty flex column mobile-top-20px">
                                <div className="flex sand-gradient-50 w-one-hundred">
                                    <Hash 
                                        onClick={setPosition}
                                        className="small-bttn left-margin-10px black sand-txt sand-border"
                                        to='/darrell-jones-writing#excerpt-one'
                                        state={{ 
                                            background: "var(--preserved-lemon)",
                                            textColor: "black",
                                            slash: "/Images/Slash.svg" }} 
                                        >Writing
                                    </Hash>
                                </div>
                                <div className="w-one-hundred sand">
                                    <p className="no-bottom-padding side-padding"><b>Darrell Jones:</b></p>
                                    <p className="no-top-padding side-padding">I have a personal interest in cataloging [my father’s materials as a creative tool with applications in movement research…</p>
                                </div>
                            </div>
                        </div>
                        <div className="h-thirty-three flex">
                            <div className="flex jc-center">
                                <div className="w-eighty">
                                    <p className="no-bottom-padding"><b>Angie Hauser, Jacob's Pillow:</b></p>
                                    <p className="no-top-padding">The methodology of archiving [is] determined by the ephemera of the technology that’s available to you. Now, in a situation where we have so much information [... the] joy of finding archival contact sheets, etc. [and] seeing everything else that wasn’t selected, [can be lost.]</p>
                                    <Link // not in meeting notes
                                        onClick={setPosition}
                                        className="small-bttn sand black-txt sand-border"
                                        to='/meeting-three-notes'
                                        state={{ 
                                            background: "var(--preserved-lemon)",
                                            textColor: "black",
                                            slash: "/Images/Slash.svg" }} 
                                        >Meeting Notes
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex column flex-end al-center">
                        <img src="/Images/CreamOutlineSlash.svg" className="slash display-none"/>    
                    </div>
                </div>
                <div className="panel-1400 flex mobile-column mobile-al-center space-around mobile-side-padding">
                    <div className="w-twenty-five flex column space-around sand sand-border mobile-top-10px">
                        <div className="flex column mobile-top-20px">
                            <div className="flex black-gradient-50 w-one-hundred">
                                <Hash 
                                    onClick={setPosition}
                                    className="small-bttn left-margin-10px preserved-lemon black-txt sand-border"
                                    to='/bonnie-brooks-writing#excerpt-two'
                                    state={{ 
                                        background: "var(--preserved-lemon)",
                                        textColor: "black",
                                        slash: "/Images/Slash.svg" }} 
                                    >Writing
                                </Hash>
                            </div>
                            <div className="w-one-hundred preserved-lemon">
                                <p className="no-bottom-padding side-padding"><b>Bonnie Brooks:</b></p>
                                <p className="no-top-padding side-padding">The advent of personal, digital phones opened yet a wider avenue to cost-free recording and documentation.</p>
                            </div>
                        </div>
                        <div className="flex column mobile-top-20px">
                            <div className="flex black-gradient-50 w-one-hundred">
                                <Hash 
                                    onClick={setPosition}
                                    className="small-bttn left-margin-10px preserved-lemon black-txt sand-border"
                                    to='/lauren-slone-writing#excerpt-one'
                                    state={{ 
                                        background: "var(--preserved-lemon)",
                                        textColor: "black",
                                        slash: "/Images/Slash.svg" }} 
                                    >Writing
                                </Hash>
                            </div>
                            <div className="w-one-hundred preserved-lemon">
                                <p className="no-bottom-padding side-padding"><b>Lauren Slone:</b></p>
                                <p className="no-top-padding side-padding">…I also get into strange conversations with myself about “proving” to friends that I’m doing something.</p>
                            </div>
                        </div>
                        <div className="flex column mobile-top-20px">
                            <div className="flex black-gradient-50 w-one-hundred">
                                <Hash 
                                    onClick={setPosition}
                                    className="small-bttn left-margin-10px preserved-lemon black-txt sand-border"
                                    to='/dayna-hanson-writing#excerpt-two'
                                    state={{ 
                                        background: "var(--preserved-lemon)",
                                        textColor: "black",
                                        slash: "/Images/Slash.svg" }} 
                                    >Writing
                                </Hash>
                            </div>
                            <div className="w-one-hundred preserved-lemon">
                                <p className="no-bottom-padding side-padding"><b>Dayna Hanson:</b></p>
                                <p className="no-top-padding side-padding"><em></em>…it’s another example of a somewhat documentary impulse blurring into a creative one.</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-sixty flex column stnd-padding">
                        <div className="h-sixty sand-border flex mobile-column-reverse double-padding">
                            <div className="w-twenty-five flex jc-center">
                                <Link 
                                    onClick={setPosition}
                                    className="small-bttn jc-center sand black-txt"
                                    to='/meeting-three-conversation-one'
                                    state={{ 
                                        background: "var(--sand)",
                                        textColor: "black",
                                        videoColor: "var(--preserved-lemon)",
                                        startTime: "https://player.vimeo.com/video/738663854?h=83cfee6ba0#t=4m43s" }}
                                    >Video
                                </Link>
                            </div>
                            <div className="flex column w-seventy-five">
                                <iframe width="100%" height="100%" className="w-one-hundred" title="vimeo-player" src="https://player.vimeo.com/video/738663854?h=83cfee6ba0#t=4m43s" frameborder="0"></iframe>
                                <p className="side-padding no-bottom-padding "><b>Dana Whitco, Jacob's Pillow:</b></p>
                                <p className="side-padding no-top-padding "><em>…I was trying to figure out how to create a fundraising opportunity around process...lots of people are doing this.</em></p>
                            </div>
                        </div>
                        <div className="flex mobile-column space-btwn">
                            <p className="sand-txt">&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;</p>
                            <div className="flex column">
                                <div className="sand">
                                    <p className="no-bottom-padding side-padding"><b>Angie Hauser:</b></p>
                                    <p className="no-top-padding side-padding">…the archive that seems to be the most compelling, complex, and rich is the one that is my thinking body.</p>
                                </div>
                                <div className="flex sand-gradient-50-down w-one-hundred">
                                    <Hash 
                                        onClick={setPosition}
                                        className="small-bttn left-margin-10px preserved-lemon black-txt sand-border"
                                        to='/angie-hauser-writing#excerpt-one'
                                        state={{ 
                                            background: "var(--preserved-lemon)",
                                            textColor: "black",
                                            slash: "/Images/Slash.svg" }} 
                                        >Writing
                                    </Hash>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="panel-900 flex column space-btwn mobile-side-padding top-mobile-sand-border">
                    <div className="h-fifty vault-padding flex column mobile-top-20px">
                        <div className="flex column">
                            <div className="stnd-padding flex mobile-column space-btwn sand al-center mobile-al-start">
                                <p className="no-bottom-padding"><b>Mara Frazier:</b> I would like artists to feel more welcomed into archives…</p>
                                <div className="mobile-flex mobile-top-20px">
                                    <Hash 
                                        onClick={setPosition}
                                        className="small-bttn black-border black sand-txt"
                                        to='/mara-frazier-writing#excerpt-two'
                                        state={{ 
                                            background: "var(--preserved-lemon)",
                                            textColor: "black",
                                            slash: "/Images/Slash.svg" }} 
                                        >Writing
                                    </Hash>
                                </div>
                            </div>
                            <div className="stnd-padding flex mobile-column space-btwn sand al-center mobile-al-start">
                                <p className="w-seventy-five no-top-padding mobile-top-20px"><b>Ann Carlson:</b> I admit I have on-going resentment about the conflation of live performance and the mediated copy.</p>
                                <div className="mobile-flex mobile-flex-end">
                                    <Hash 
                                        onClick={setPosition}
                                        className="small-bttn black-border black sand-txt"
                                        to='/ann-carlson-writing#excerpt-one'
                                        state={{ 
                                            background: "var(--preserved-lemon)",
                                            textColor: "black",
                                            slash: "/Images/Slash.svg" }} 
                                        >Writing
                                    </Hash>
                                </div>
                            </div>
                        </div>
                        <div className="flex space-btwn al-center mobile-column mobile-al-start stnd-padding side-padding black-border-bottom no-mobile-border">
                            <div class="w-seventy-five flex column">
                                <p className="transcription-details no-bottom-padding"><b>Russell Lepley:</b></p> 
                                <p className="transcription-details no-top-padding">I am an early career dance-maker and have documentation of my complete works publicly available on streaming platforms YouTube and Vimeo… Attention to how my work is documented affects how institutions perceive my product which influences my future work directly… My work becomes more thoughtfully layered and more concise without those pressures.</p>
                            </div>
                            <Link // Hash not needed
                                onClick={setPosition}
                                className="small-bttn black-border black-txt"
                                to='/russell-lepley-writing'
                                state={{ 
                                    background: "var(--preserved-lemon)",
                                    textColor: "black",
                                    slash: "/Images/Slash.svg" }} 
                                >Writing
                            </Link>
                        </div>
                    </div>
                    <div className="h-fifty flex mobile-column space-around stnd-padding">
                        <div className="flex column stnd-padding black-border">
                            <p className="no-padding"><b>Rachel Boggia, Jacob’s Pillow:</b></p>
                            <div className="h-one-hundred flex column space-btwn">
                                <div className="flex column">                    
                                    <p className="transcription-details no-padding"><em>It's a challenge with any new technology to know whether to invent. I think in dance in the academic centers like Ohio State we're [...] often late adopters of technology because there's just not enough money for us to make big mistakes.</em></p>
                                    <div className="flex flex-end only-top-padding">
                                        <Link 
                                            onClick={setPosition}
                                            className="small-bttn black sand-txt"
                                            to='/meeting-three-conversation-two'
                                            state={{ 
                                                background: "var(--sand)",
                                                textColor: "black",
                                                videoColor: "var(--preserved-lemon)",
                                                startTime: "https://player.vimeo.com/video/738670370?h=ec662ab400#t=30m51s" }}
                                            >Video
                                        </Link>
                                    </div>
                                </div>
                                <div className="flex column">
                                    <p className="transcription-details no-bottom-padding"><em>I'm assuming that a lot of the structures that help decide who gets archived reinforce a lot of institutional privilege, right? And and so. One way of countering that—besides actively countering it within institutions, which is would be a good idea—would be to think about what structures, monied institutions, can offer to people to do this for themselves, to some degree, or do this for each other, like communities of archiving.</em></p>
                                    <div className="flex flex-end only-top-padding">
                                        <Link 
                                            onClick={setPosition}
                                            className="small-bttn black sand-txt"
                                            to='/meeting-three-conversation-two'
                                            state={{ 
                                                background: "var(--sand)",
                                                textColor: "black",
                                                videoColor: "var(--preserved-lemon)",
                                                startTime: "https://player.vimeo.com/video/738670370?h=ec662ab400#t=21m14s" }}
                                            >Video
                                        </Link>                                    
                                    </div>
                                </div>
                                <div className="flex column">                    
                                    <p className="transcription-details no-bottom-padding"><em>A lot of non-proscenium oriented dances [...] are really underprivileged by video documentation.</em></p>                                
                                    <div className="flex flex-end only-top-padding">
                                        <Link 
                                            onClick={setPosition}
                                            className="small-bttn black sand-txt"
                                            to='/meeting-three-conversation-two'
                                            state={{ 
                                                background: "var(--sand)",
                                                textColor: "black",
                                                videoColor: "var(--preserved-lemon)",
                                                startTime: "https://player.vimeo.com/video/738670370?h=ec662ab400#t=27m32s" }}
                                            >Video
                                        </Link>                                    
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-twenty-five-exempt flex sand">
                            <p className="txt-al-center">&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
}

export default Methods;