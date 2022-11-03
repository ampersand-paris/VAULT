import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"; 
import ReactAudioPlayer from "react-audio-player";
import audio from "../Audio/ArchivalThinking.mp3"

const ArchivalThinking = (props) => {
        
    const [scrollPosition, setScrollPosition] = useState(0)    
    const [loading, setLoading] = useState(false)

    const setPosition = () => {
        const container = document.getElementById('arc-think')
        const position = container.scrollLeft
        window.sessionStorage.setItem('position', position)
        console.log('link', position)
    }

    useEffect(() => {
        const position = JSON.parse(window.sessionStorage.getItem('position'))
        setScrollPosition(position)
        console.log('useeffect', position)
      
     
    }, [])

    useEffect(() => {
        const xPosition = document.getElementById('arc-think')
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
                    background-color:: var(--pumpkin);
                
                }
                
                audio::-webkit-media-controls-current-time-display {
                    font-family: neuzeit-grotesk, sans-serif;
                    font-weight: 400;
                    font-style: normal;
                    background-color: rgba(255, 255, 255, 0);
                    color: var(--pumpkin);
                }
                
                audio::-webkit-media-controls-time-remaining-display {
                    font-family: neuzeit-grotesk, sans-serif;
                    font-weight: 400;
                    font-style: normal;
                    background-color: rgba(255, 255, 255, 0);
                    color: var(--pumpkin);
                }
                
                audio::-webkit-media-controls-timeline {
                    background-color: rgba(255, 255, 255, 0);
                }

                /* width */
                .container::-webkit-scrollbar {
                width: 25px !important;
                }

                /* Track */
                .container::-webkit-scrollbar-track {
                border-radius: 10px;
                background-color: var(--sand);
                }
                
                /* Handle */
                .container::-webkit-scrollbar-thumb {
                background: var(--pumpkin); 
                border-radius: 10px;
                border: 2px solid var(--sand);
                }

                /* Handle on hover */
                .container::-webkit-scrollbar-thumb:hover {
                background: black; 
}
            `
            }
        </style>
        <div className="container pumpkin">
            <div className="ar-container-length one-hundred-vh flex mobile-column">
                <div className="intro-panel-width flex flex-end mobile-jc-center">
                    <div className="intro-width flex space-btwn column vault-padding">
                        <div>
                            <p className="sand-txt">&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;</p>
                        </div>
                        <div className="flex column">
                            <ReactAudioPlayer
                                src={audio}
                                controls 
                            />
                            <p className="transcription-details sand-txt corporate"><b>Here you’ll find materials about choice-making—what to keep, who keeps it and how to keep it—along with information about how we might map an artist’s creative practice. You’ll find references to aspects of creative practice that are available outside, or even alongside the product—the dance—itself.</b></p>
                        </div>
                    </div>
                </div>
                <div className="ar-panel-1 panel-1400 flex space-btwn double-padding mobile-column mobile-side-padding">
                    <h1 className="pumpkin-txt intro-title">ARCHIVAL THINKING</h1>
                    <img src="/Images/OrangeSlash.svg" className="ar-slash display-none"/>
                    <div className="h-one-hundred flex column">
                        <div className="flex column al-center jc-center top-100px">
                            <h2 className="pumpkin-txt no-bottom-padding"><em>How are we viewing the archive?</em></h2>
                            <div className="flex">
                                <div className="button-div-height flex jc-center al-center">
                                <Link 
                                    className="small-bttn pumpkin sand-txt"
                                    to='/meeting-three-small-group-two'
                                    state={{ 
                                        background: "var(--sand)",
                                        textColor: "var(--pumpkin)",
                                        startTime: "https://player.vimeo.com/video/738663854?h=83cfee6ba0#t=3m44s"
                                    }}
                                    >Video
                                </Link>
                                </div>
                            </div>
                        </div>
                        <div className="h-fifty relative mobile-flex mobile-column bottom-100px mobile-top-100px">
                            <div className="z-index-10 relative w-fifty sand stnd-padding">
                                <h3 className="no-bottom-padding pumpkin-txt">Ishmael Houston-Jones:</h3> 
                                <p className="no-top-padding pumpkin-txt">The process of my practice seems so fragile and elusive to the idea of archive</p>
                                <Link 
                                    className="small-bttn pumpkin sand-txt"
                                    to='/ishmael-houston-jones-writing'
                                    state={{ 
                                        background: "var(--pumpkin)",
                                        textColor: "var(--sand)",
                                        slash: "/Images/CreamSlash.svg" }}
                                    >Writing
                                </Link>
                            </div>
                            <img src="/Images/Pictures/Ishmael.svg" className="ishmael mobile-width"/>
                        </div>
                    </div>     
                </div>
                <div className="panel-700 flex column mobile-side-padding">
                    <div className="h-fifty stnd-padding sand pumpkin-txt">
                        <p className="no-bottom-padding"><b>Dayna Hanson, Seattle:</b></p>
                        <p className="no-top-padding"><em>[We] think about media as being inherently archival, and inherently lasting; and we work in live forms that are inherently ephemeral. So [...] there's something rich and unexpected to me about these digital forms like Snapchat or like Instagram Live that expire so quickly [...] That's somehow good, maybe. Maybe it's placing a [value] judgment.</em></p>
                        <Link 
                            className="small-bttn pumpkin sand-txt"
                            to='/seattle'
                            state={{ 
                                background: "var(--sand)",
                                textColor: "var(--pumpkin)",
                                startTime: "https://player.vimeo.com/video/738669816?h=3e11a58d51#t=16m45s"
                                }}
                            >Video
                        </Link>
                    </div>
                    <div className="h-fifty stnd-padding sand-txt">
                        <p className="no-bottom-padding"><b>Bebe Miller, NYC:</b></p> 
                        <p className="no-top-padding sand-border-right no-mobile-border">There’s now a very different horizontal platform in the idea of archiving... The immediacy of the archive now—broadcast it, be done with it, let it be absorbed into the artistic mindset of the culture—even at the beginning of conceiving of the idea/event/artwork. In that difference between the vertical and horizontal, on a fascial/body level, is there a difference in the work we make, do we need to support both axes or yet a new direction?</p>
                        <Link 
                            className="small-bttn sand pumpkin-txt"
                            to='/meeting-one-transcript'
                            state={{ 
                                background: "var(--pumpkin)",
                                textColor: "var(--sand)",
                                slash: "/Images/CreamSlash.svg" }}
                            >Meeting Notes
                        </Link>
                    </div>
                </div>
                <div className="panel-900 flex column mobile-side-padding top-mobile-sand-border">
                    <div className="h-fifty vault-padding ">
                        <div className="stnd-padding sand-txt sand-border-bottom no-mobile-border">
                            <p className="no-bottom-padding"><b>Ann Carlson, NYC:</b></p> 
                            <p className="no-top-padding">The search for the right word [...] is interesting. “Archiving is really not quite right….” What I hear in the search for the word, and also in the fascia, is value; trapping, mapping understanding value. You’re also immediately saying ‘the lifetime of this effort that I’m putting out in the world, what is its resonance?” I love the looking for the word that is the thing, the embodied connection…what is fascia? It changes, responds differently between body and bone, it’s self-supporting… Something about the word resonant, resonant meaning perhaps – what we are, what we do… I love the reach for the word. The horizontal and vertical thing, it’s the present-moment awareness that the song will keep going.</p>
                            <Link 
                                className="small-bttn sand pumpkin-txt"
                                to='/meeting-one-transcript'
                                state={{ 
                                    background: "var(--pumpkin)",
                                    textColor: "var(--sand)",
                                    slash: "/Images/CreamSlash.svg" }}
                                >Meeting Notes
                            </Link>
                        </div>
                    </div>
                    <div className="h-fifty flex mobile-column space-btwn stnd-padding sand-txt">
                        <div className="w-forty w-forty-seven-split">
                            <iframe  width="100%" height="56%" className="w-one-hundred" title="vimeo-player" src="https://player.vimeo.com/video/738666979?h=de936851e2&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479#t=3m40s" frameborder="0"></iframe>
                            <div className="stnd-padding border-radius sand pumpkin-txt">
                                <p className="transcription-details no-bottom-padding"><b>Reggie Wilson, Seattle:</b></p>
                                <p className="transcription-details no-top-padding"><em>Is this for our own dramaturgy? Is this for another choreographer’s dramaturgy? Is this for historians?</em></p>
                                <div className="flex flex-end">
                                    <Link 
                                        className="small-bttn pumpkin sand-txt"
                                        to='/meeting-three-small-group-conclusion'
                                        state={{ 
                                            background: "var(--sand)",
                                            textColor: "var(--pumpkin)",
                                            startTime: "https://player.vimeo.com/video/738666979?h=de936851e2#t=3m40s"
                                            }}
                                        >Video
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="w-forty w-forty-seven-split">
                            <iframe  width="100%" height="56%" className="w-one-hundred" title="vimeo-player" src="https://player.vimeo.com/video/738669816?h=3e11a58d51&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479#t=20m33s" frameborder="0"></iframe>
                            <div className="stnd-padding border-radius sand pumpkin-txt">
                                <p className="transcription-details no-bottom-padding"><b>Dana Whitco:</b></p>
                                <p className="transcription-details no-top-padding"><em>That choreography could be thought of not as the creation of steps that have its own sort of logic, but that it is a wayfinding technique In the world.</em></p>
                                <div className="flex flex-end">
                                    <Link 
                                        className="small-bttn pumpkin sand-txt"
                                        to='/seattle'
                                        state={{ 
                                            background: "var(--sand)",
                                            textColor: "var(--pumpkin)",
                                            startTime: "https://player.vimeo.com/video/738669816?h=3e11a58d51#t=20m33s"
                                            }}
                                        >Video
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="panel-1400 flex column mobile-side-padding">
                    <div className="h-fifty flex mobile-column">
                        <div className="w-seventy sand-border-right">
                            <div className="flex space-btwn mobile-column">
                                <div className="flex mobile-column w-seventy">
                                    <div className="w-fifty stnd-padding">
                                        <img src="/Images/Pictures/LaRocco.svg" />
                                    </div>
                                    <div className="relative stnd-padding">
                                        <div className="flex column jc-center double-padding sand pumpkin-txt">
                                            <p className="transcription-details side-padding no-padding"><b>Claudia La Rocco:</b></p>
                                            <p className="transcription-details side-padding no-padding">There is often anxiety around documentation.</p>
                                        </div>
                                        <div className="flex jc-center sand-gradient-50-down w-one-hundred">
                                            <Link 
                                                className="small-bttn pumpkin sand-txt sand-border"
                                                to='/claudia-la-rocco-writing'
                                                state={{ 
                                                    background: "var(--pumpkin)",
                                                    textColor: "var(--sand)",
                                                    slash: "/Images/CreamSlash.svg"                                                    
                                                }}
                                                >Writing
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-forty stnd-padding">
                                    <iframe width="100%" height="56%" title="vimeo-player" src="https://player.vimeo.com/video/738663854?h=83cfee6ba0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479#t=16m45s" frameborder="0"></iframe>
                                    <div className="sand pumpkin-txt stnd-padding border-radius">
                                        <p className="transcription-details no-padding"><b>Ginger Farley</b></p>
                                        <p className="transcription-details no-top-padding"><em>Is there a way to enlist [funders] in learning from this process…</em></p>
                                        <div className="flex flex-end">
                                            <Link 
                                                className="small-bttn pumpkin sand-txt"
                                                to='/chicago'
                                                state={{ 
                                                    background: "var(--sand)",
                                                    textColor: "var(--pumpkin)",
                                                    startTime: "https://player.vimeo.com/video/738669235?h=b3498dfda6"
                                                    }}
                                                >Video
                                            </Link>
                                        </div>
                                    </div>
                                </div>                    
                            </div>
                        </div>
                        <div className="w-twenty-five stnd-padding">
                            <iframe width="100%" height="56%" title="vimeo-player" src="https://player.vimeo.com/video/738663854?h=83cfee6ba0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479#t=16m45s" frameborder="0"></iframe>
                            <div className="sand pumpkin-txt border-radius stnd-padding">
                                <p className="no-padding transcription-details"><b>Jaamil Olawale Kosoko</b></p> 
                                <p className="no-top-padding transcription-details"><em>...as the archivist, as the curator, as the maker, I'm just showing you my ways in which I'm maneuvering through certain materials.</em></p>
                                <div className="flex flex-end">
                                    <Link 
                                        className="small-bttn pumpkin sand-txt"
                                        to='/meeting-three-small-group-two'
                                        state={{ 
                                            background: "var(--sand)",
                                            textColor: "var(--pumpkin)",
                                            startTime: "https://player.vimeo.com/video/738663854?h=83cfee6ba0#t=16m45s"
                                        }}
                                    >Video
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="h-fifty flex mobile-column">
                        <div className="w-sixty">
                            <div className="flex h-one-hundred mobile-column">
                                <div className="bebe-seattle w-forty-seven mobile-w-forty-seven-border-adjust stnd-padding">
                                    <div className="flex flex-end mobile-h-250px">
                    
                                    </div>
                                </div>
                                <div className="w-forty-seven stnd-padding sand-txt sand-border">
                                    <p className="no-bottom-padding"><b>Bebe Miller, Seattle:</b></p> 
                                    <p className="no-top-padding">Did we grow into this archiving of process? 30 years ago we only documented performance even though all that process was there. We have learned to love it and want to share that. When we stop wanting to do that, share that ephemeral aspect of what we love about process? What else is there? Our attention to process is a kind of thing.</p>
                                    <Link 
                                        className="small-bttn sand pumpkin-txt"
                                        to='/meeting-two-notes'
                                        state={{ 
                                            background: "var(--pumpkin)",
                                            textColor: "var(--sand)",
                                            slash: "/Images/CreamSlash.svg"                                                    
                                        }}
                                        >Meeting Notes
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="w-forty flex column space-btwn al-center double-padding w-one-hundred">
                            <div className="flex flex-end mobile-jc-center w-one-hundred stnd-padding">
                                <img className="w-forty" src="/Images/Pictures/Jaamil.svg" />
                            </div>
                            <div className="flex column">
                                <div className="flex jc-center sand-gradient-50 w-one-hundred">
                                    <Link 
                                        className="small-bttn pumpkin sand-txt sand-border"
                                        to='/danya-hanson-writing'
                                        state={{ 
                                            background: "var(--pumpkin)",
                                            textColor: "var(--sand)",
                                            slash: "/Images/CreamSlash.svg"                                                    
                                        }}
                                        >Writing
                                    </Link>
                                </div>
                                <div className="sand pumpkin-txt w-one-hundred">
                                    <p className="no-bottom-padding side-padding"><b>Dayna Hanson:</b></p>
                                    <p className="no-top-padding side-padding">…documentation has become more of an aesthetic pursuit…</p>
                                </div>
                                <h3 className="vault-padding sand-txt">&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;&#x2f;</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="panel-700 flex column mobile-side-padding">
                    <div className="h-fifty flex space-btwn stnd-padding">
                        <div className="w-forty-seven w-forty-seven-split">
                                <div className="sand-txt">
                                    <p className="no-bottom-padding"><b>Raja Feather Kelly, Seattle:</b></p>
                                    <p className="no-top-padding">Would other/newer ways to archive, change the way work was made?</p>
                                    <div className="flex">
                                        <Link 
                                            className="small-bttn sand pumpkin-txt"
                                            to='/meeting-two-notes'
                                            state={{ 
                                                background: "var(--pumpkin)",
                                                textColor: "var(--sand)",
                                                slash: "/Images/CreamSlash.svg"                                                    
                                            }}
                                            >Meeting notes
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="w-forty-seven w-forty-seven-split">
                                <iframe width="100%" height="56%" title="vimeo-player" src="https://player.vimeo.com/video/738663854?h=83cfee6ba0#t=16m45s&showinfo=0&controls=0" frameborder="0"></iframe>
                                <div className="stnd-padding border-radius sand pumpkin-txt">
                                    <p className="transcription-details no-bottom-padding"><b>Bebe Miller:</b></p>
                                    <p className="transcription-details no-top-padding"><em>…there's something about the immediacy of [social media's] dispersal of information...</em></p>
                                    <div className="flex flex-end">
                                    <Link 
                                        className="small-bttn pumpkin sand-txt"
                                        to='/seattle'
                                        state={{ 
                                            background: "var(--sand)",
                                            textColor: "var(--pumpkin)",
                                            startTime: "https://player.vimeo.com/video/738669816?h=3e11a58d51#t=13m40s"
                                        }}
                                        >Video
                                    </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    <div className="h-fifty flex column jc-center sand pumpkin-txt stnd-padding">
                        <p className="no-bottom-padding"><b>Judy Hussie-Taylor, NYC: </b></p>
                        <p className="no-top-padding">Intersection between what are we doing, what are we saving, what are we collecting, what are we not doing—always at play in our work at least on the curatorial side. We’re making interventions, we’re making choices. What we all feel every day: whatever it is we value is under attack, in so many ways. A war on certain kinds of value systems. Maybe this is different than how/what we archive but these choices point to what we value.</p>
                        <Link 
                            className="small-bttn pumpkin sand-txt"
                            to='/meeting-one-transcript'
                            state={{ 
                                background: "var(--pumpkin)",
                                textColor: "var(--sand)",
                                slash: "/Images/CreamSlash.svg"                                                    }}
                            >Meeting notes
                        </Link>
                    </div>        
                </div>
                <div className="panel-900 flex column-reverse mobile-side-padding top-mobile-sand-border">
                    <div className="h-fifty vault-padding ">
                        <div className="stnd-padding sand-txt no-mobile-border sand-border-bottom">
                            <p className="no-bottom-padding"><b>Raja Feather Kelly, Seattle:</b></p> 
                            <p className="no-top-padding">What’s the nature of what we’re archiving? What are the layers important to us? Then the curator and teacher of dance history in me zoomed out further: What are the politics of inclusion? Who and what might be missing? … Who do we want to be in conversation with, now and 100 years from now?</p>
                            <Link 
                                className="small-bttn sand pumpkin-txt"
                                to='/meeting-two-notes'
                                state={{ 
                                    background: "var(--pumpkin)",
                                    textColor: "var(--sand)",
                                    slash: "/Images/CreamSlash.svg" }}
                                >Meeting Notes
                            </Link>
                        </div>
                        <div className="stnd-padding sand-txt no-mobile-border">
                            <p className="no-bottom-padding"><b>Bonnie Brooks:</b></p> 
                            <p className="no-top-padding">…over time these platforms have become largely digital…</p>
                            <Link 
                                className="small-bttn sand pumpkin-txt"
                                to='/bonnie-brooks-writing'
                                state={{ 
                                    background: "var(--pumpkin)",
                                    textColor: "var(--sand)",
                                    slash: "/Images/CreamSlash.svg" }}
                                >Writing
                            </Link>
                        </div>
                    </div>
                    <div className="h-fifty flex mobile-column space-btwn stnd-padding sand-txt">
                        <div className="w-forty w-forty-seven-split">
                            <iframe  width="100%" height="56%" title="vimeo-player" src="https://player.vimeo.com/video/738670370?h=ec662ab400#t=19m40s" frameborder="0"></iframe>
                            <div className="stnd-padding border-radius sand pumpkin-txt">
                                <p className="transcription-details no-padding"><b>Jaamil Olawale Kosoko, Jacob's Pillow:</b></p>
                                <p className="transcription-details no-top-padding">Is this for our own dramaturgy? Is this for another choreographer’s dramaturgy? Is this for historians?</p>
                                <div className="flex flex-end">
                                    <Link 
                                        className="small-bttn pumpkin sand-txt"
                                        to='/seattle'
                                        state={{ 
                                            background: "var(--sand)",
                                            textColor: "var(--pumpkin)",
                                            startTime: "https://player.vimeo.com/video/738670370?h=ec662ab400#t=19m40s"
                                            }}
                                        >Video
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="w-forty w-forty-seven-split">
                            <iframe  width="100%" height="56%" className="w-one-hundred" title="vimeo-player" src="https://player.vimeo.com/video/738670370?h=ec662ab400#t=0m33s" frameborder="0"></iframe>
                            <div className="stnd-padding border-radius sand pumpkin-txt">
                                <p className="transcription-details no-padding"><b>Nena Couch, Jacob's Pillow:</b></p>
                                <p className="transcription-details no-top-padding">There are different ways that we choose what to keep.</p>
                                <div className="flex flex-end">
                                    <Link 
                                        className="small-bttn pumpkin sand-txt"
                                        to='/seattle'
                                        state={{ 
                                            background: "var(--sand)",
                                            textColor: "var(--pumpkin)",
                                            startTime: "https://player.vimeo.com/video/738670370?h=ec662ab400#t=0m33s"
                                            }}
                                        >Video
                                    </Link>
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

export default ArchivalThinking;