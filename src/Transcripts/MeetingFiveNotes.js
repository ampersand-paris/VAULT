// ====== COMPONENTS ======
import { useLocation } from "react-router-dom";

const MeetingFiveNotes = (props) => {

    const location = useLocation()
    let background = 'var(--mint-green)';
    let textColor = 'black';
    let slash = '/Images/Slash.svg'

    if (location.state) {
        background = location.state.background
        textColor = location.state.textColor
        slash = location.state.slash
    } 

    return (
    <>
        <div style={{ backgroundColor: background, color: textColor }} className="flex column al-center top-padding essay-padding">
            <div className="w-one-hundred flex">
                <img className="transcript-slash" src={ slash } />
                <div className="column w-fifty">
                    <h2 className="transcription">Meeting Notes</h2>
                    <p className="transcription"><b>Vault Meeting #5</b></p>
                    <p className="transcription-details">January 18-19, 2020
                    <br></br>
                    Ann Hamilton and Michael Mercil's Studio, Columbus, OH</p>
                    <p className="transcription-details">Meeting Notes by Sarah Lass</p>
                    <p className="transcription-details">Participants: Ann Carlson, Dance Artist, Nena Couch, Head, Special Collections, Thompson Library, The Ohio State University, Lane Czaplinski, Director of Performing Arts, Wexner Center for the Arts, Mara Frazier, Curator of Dance, University Libraries, The Ohio State University, Melanie George, Dance Artist, Dramaturg, Angie Hauser, Associate Professor of Dance, Smith College, Lila Hurwitz, Artist Manager (Vault Project Manager; remote), Darrell Jones, Associate Professor, Dance Center Columbia College Chicago, Claudia LaRocco, Writer, Sarah Lass, Dance Artist (Documenter), Russell Lepley, Dance Artist, Gesel Mason, Dance Artist, Bebe Miller, Dance Artist (Vault Project Director), Cori Olinghouse, Dance Artist, Archivist, Imogen Smith, Director of Archiving and Preservation, Dance/USA, Alex Springer, Dance Artist (Research Assistant to Angie Hauser), Dana Whitco, Director, Tisch Initiative for Creative Research, Ni'Ja Whitson, Dance Artist, Jay Couch, Videographer, Camille and Jason, Crew, Adam Elliot, Producer and Lane’s associate</p>
                </div>
            </div>
            <section className="flex column al-center">
                <div>
                    <p><b>Pre-VAULT Questions</b></p>
                    <ol>
                        <li className="decimal"><b>How has your dance-making been affected (or not) by the virtual/digital availability of your work, in terms of both process and product?</b></li>
                        <li className="decimal"><b>What strategies and experiences can you share related to digital or analog archiving and your current practice?</b></li>
                        <li className="decimal"><b>What do you assume about audience in this regard?</b></li>
                        <li className="decimal"><b>Considering the spectrum from independent artist to supporting institutions, what are the directional shifts you’d like to see? Examples: funding for archiving; educational/training support; advocacy; networking between artists; a collective clearinghouse/library; public access; etc.</b></li>
                    </ol>
                    <h2 className="black-border-bottom">Saturday, January 18, 1-3:30pm</h2>
                    <h2><b>Convening and welcome (Bebe)</b></h2>
                    <p>"What matters, and what matters to whom? Could this question be a guiding principle in creating an archive?"</p>
                    <ul>
                        <li className="bullets">VAULT project synopsis (BM)</li>
                        <ul>
                            <li className="dashes">Started as a conversation in 2015, fueled by Lane’s excitement about Dance Fort and A History</li>
                            <li className="dashes">Is there another way of sharing? What else do we need to talk about?</li>
                            <li className="dashes">Recognition of gathering and proximity as a generative moment</li>
                            <li className="dashes">“Artist-driven archive” is a particular frame of reference that we don’t get access to or see</li>
                            <li className="dashes">The idea of archive gets at what matters and to whom</li>
                        </ul>
                        <li className="bullets">Collective charge for the weekend: coalescing ideas and generating new ideas related to an artist driven archive; finding a direction for dissemination and ongoing possibilities for the conversation in other directions with other artists, funders, scholars</li>
                        <ul>
                            <li className="dashes">Not so much about broadening as it is about directing</li>
                            <li className="dashes">Feels incomplete and always will</li>
                        </ul>
                        <li className="bullets">Noticing a generational component</li>
                        <ul>
                            <li className="dashes">Transition from paper to VHS to a generation where things are disseminated as quickly as they are made</li>
                            <ul>
                                <li className="bullets">Do we need another archive?  In many ways, the current moment is the reverse of that first generational process of archive</li>
                            </ul>
                            <li className="dashes">How and with whom we share is part of the question, but not the whole question</li>
                        </ul>
                        <li className="bullets">Return to the “something” of the live moment—archiving is not in replacement of choreographic voice and presence</li>
                        <ul>
                            <li className="dashes">“Accompaniment”:  In the world we’re living in now, what accompanies the live moment? How and when does it show up?</li>
                        </ul>
                        <li className="bullets">What connections exist with current archival practices/platforms/ideas? What is already out there?</li>
                    </ul>
                    <h2><b>Response to project beginnings (LC)</b></h2>
                    <ul>
                        <li className="bullets">An archive is not a substitute for live performance</li>
                        <li className="bullets">What is the work after the fact?</li>
                        <li className="bullets">Access issues</li>
                        <ul>
                            <li className="dashes">What are the “nodes” to get into and really see a work? Are there enough nodes? Are they the right nodes?</li>
                            <li className="dashes">Distribution questions also questions of access</li>
                        </ul>
                        <li className="bullets">What are the expressive outcomes of a choreographer?</li>
                        <ul>
                            <li className="dashes">And who gets to produce it and animate it? Who actually gets to see it? Can this involve privileging other voices, perspectives, and literacies</li>
                        </ul>
                        <li className="bullets">How to improve archival standards?</li>
                        <li className="bullets">Interest in archive as both historical and future-oriented</li>
                        <ul>
                            <li className="dashes">Archiving pivots into the future (AC)</li>
                        </ul>
                    </ul>
                    <h2><b>“Bring all your hats” to the first question: how has your dance-making been affected (or not) by the virtual/digital availability of your work, in terms of both process and product? (BM)</b></h2>
                    <ul>
                        <li className="bullets">Ongoingness to making and archiving (AC)</li>
                        <li className="bullets">Noticing evidence of constancy of process through social media, podcasts, etc. (BM)</li>
                        <ul>
                            <li className="dashes">This is reflected in the choreography—the camera shows up in the work</li>
                            <ul>
                                <li className="bullets">There is a sense of the camera following the work, the camera is still/always present as a close-up</li>
                                <li className="bullets">There is a sense of recognition that “I am in view, and parts of me have been in view all the way through this process”</li>
                                <ul>
                                    <li className="dashes">How does that feel?</li>
                                    <li className="dashes">Generational difference: to have video and look at it vs. to have video and just keep it </li>
                                </ul>
                                <li className="bullets">What does an eye which includes the camera do to what we have made and what we expect to see?</li>
                                <ul>
                                    <li className="dashes">What is that eye’s impact on an archival collection? (AC)</li>
                                    <ul>
                                        <li className="bullets">What we see (how the work gets made) is itself being seen</li>
                                        <ul>
                                            <li className="dashes">Scopophilic, Heiddeger theory: being observed changes it</li>
                                        </ul>
                                    </ul>
                                </ul>
                                <li className="bullets">How does living with being observed, expecting to be observed, and not being surprised by that show up on a body-level? (BM)</li>
                            </ul>
                        </ul>
                    </ul>
                    <h2><b>Answering first question from multiple perspectives: dancemaker, performer, academic, digital archive creator, etc. (GM)</b></h2>
                    <ul>
                        <li className="bullets">Gathering quality video of made or in-process work for grant and promotional purposes</li> 
                        <li className="bullets">Video is archival document in ongoing work</li>
                        <ul>
                            <li className="dashes">Working with artists who are not in the room; video archive as crucial point of process and sharing</li>
                            <li className="dashes">Video is a way of “keeping track” over longer rehearsal processes and/or long breaks</li>
                        </ul>
                        <li className="bullets">Questions of copyright, permission, access, storage </li>
                        <ul>
                            <li className="dashes">How to make work accessible to a wider audience?</li>
                        </ul>
                        <li className="bullets">As an academic, interest in finding and sharing full performances with students</li>
                        <ul>
                            <li className="dashes">The tremendous importance of seeing the current, full work </li>
                            <ul>                    
                                <li className="bullets">Limitation around access to OTB, rent-ability, etc.</li>
                            </ul>
                        </ul>
                        <li className="bullets">Embodiment, legacy, archive-in-performance</li>
                        <li className="bullets">Digital footprint, getting creative about digital product</li>
                        <li className="bullets">How can postcolonial practice inform/shape/articulate with archival science</li>
                        <li className="bullets">The magical artist: excitement about bringing artist knowledge to conversations with librarians and archivists </li>
                        <li className="bullets">What does it mean to consider the body as an archive? Where is live performance in relationship to that?</li>
                        <ul>
                            <li className="dashes">Who gets to tell the story and why?</li>
                            <li className="dashes">Recognizing all the artists/choreographers in one’s body</li>
                            <li className="dashes">Recognizing body as a degrading technology</li>
                            <li className="dashes">How does the archive stay alive and keep growing?</li>
                            <li className="dashes">Idea of archive as a living thing, not fixed, dated, on a shelf, unseen</li> 
                            <li className="dashes">How is performance a part of the archive? How is body a part of the archive?</li>
                            <li className="dashes">How can we rethink archival practices and include the people actually doing the work?</li> 
                            <ul>
                                <li className="bullets">How can the archive have a past, present, future sensibility?</li> 
                            </ul> 
                        </ul>
                        <li className="bullets">Potential for multidisciplinary access</li> 
                        <ul>
                            <li className="dashes">What is it that dance can do and how does it do it?</li> 
                            <ul>
                                <li className="bullets">OSU and Motionbank as examples</li> 
                                <ul>
                                    <li className="dashes">There are multiple ways we can be in conversation with a digital experience</li> 
                                </ul>
                            </ul>
                        </ul>
                    </ul>
                    <h2><b>Each of our roles reforms a triumvirate approach to what we do (BM)</b></h2>
                    <ul>
                        <li className="bullets">What does this embodied artform do outside of the theatrical expectations?</li> 
                    </ul>
                    <h2><b>Body as archive and body as analog (DJ)</b></h2>
                    <ul>                
                        <li className="bullets">How a physical aspect to accessing information shifts the experience of it</li> 
                        <li className="bullets">“Analog body” has a shelf life</li> 
                        <ul>
                            <li className="dashes">Body understands the things that have been made and the things that can be made (in a way that is different from emails, notes of processes/from processes, etc.)</li>
                        </ul>
                        <li className="bullets">Question of what is needed/wanted </li> 
                        <ul>
                            <li className="dashes">Holding onto everything doesn’t always serve the future of the material</li> 
                            <li className="dashes">The importance of editing in order to see what is really there </li> 
                        </ul>
                        
                    </ul>
                    <h2><b>The mobile-body-archive, an archive that is shifting (CLR)</b></h2>
                    <ul>
                        <li className="bullets">What is important about it is that it shifts</li> 
                        <li className="bullets">Interest in gaps and fragments</li> 
                        <ul>
                            <li className="dashes">How different forms talk to and misunderstand each other</li> 
                            <ul>
                                <li className="bullets">What is faulty and misunderstood is “the good stuff”</li> 
                            </ul>
                        </ul>
                    </ul>
                    <h2><b>Practices and works that depend on the hyper-experiential, spiritual action and intervention, and sensitivity to liveness, as in black improvisatory experiences (NW)</b></h2>
                    <ul>
                        <li className="bullets">The impossibility of documenting these works (example of current work in the dark)</li>  
                        <ul>
                            <li className="dashes">Rub of presenter/grant requirements with artistic intent</li>  
                            <ul>
                                <li className="bullets">With potential presenting partners, grants, applications, etc. there is language around dark video being “low quality”/indicative of some failing, but what if darkness is the artistic intent?</li>  
                            </ul>
                        </ul>                    
                        <li className="bullets">Conventional archival methodologies will not serve this kind of work</li>  
                        <ul>
                            <li className="dashes">Importance of not falling back on conventional archival practices for works that aren’t conventional</li>  
                        </ul>
                        <li className="bullets">Different works require us to invent new models of the archival</li>  
                        <ul>
                            <li className="dashes">Inventing something new in language and in form that doesn’t only get shelved, but is sent out for future</li> 
                        </ul>
                        <li className="bullets">Sharing online and continuously means growing relationship to that material</li>  
                    </ul>
                    <h2><b>(AH): The impossibility of the proposition gets back to question of what matters and to whom</b></h2>
                    <ul>
                        <li className="bullets">So much of what matters/what I want projected forward beyond the work is the chemistry of the room, the place, people, context; when it was made as it had its life in process and production</li>
                        <li className="bullets">There is something interesting about traditional/conventional ways of archiving: about the gathering of everything and allowing other people to bring their own questions or frames to it</li>
                        <ul>
                            <li className="dashes">Faith in possibilities of future unknowns: what is the future technology and what are the future brains who will contend with these issues (AC)</li>
                        </ul>
                    </ul>
                    <h2><b>Turbulence around idea of body as analog, feels potentially reductive (AC)</b></h2>
                    <ul>
                        <li className="bullets">The body is the object, it is “the thing we leave behind”</li>
                        <ul>
                            <li className="dashes">Delight of being able to be in relationship to someone who came before me (body is a part of this)</li>
                        </ul>
                        <li className="bullets">Somatic reality: our body is canvas, vessel… it is not just analog, but also electrical, part of our aliveness is our electrical impulses</li>
                        <ul>
                            <li className="dashes">Body, AI, the electric</li>
                        </ul>
                    </ul>
                    <h2><b>Adding to idea of body as object (AH)</b></h2>
                    <ul>
                        <li className="bullets">The dancer is both object and subject</li>
                        <ul>
                            <li className="dashes">We work with the ability to consider ourselves and parts of ourselves as object(s), making us both the subject and object of that consideration</li>
                            <li className="dashes">Making and presenting of the thing has the dual object-subject of the thing, it has “the dancer” in it</li>
                            <ul>
                                <li className="bullets">Can we add this into our consideration of the thing we are trying to archive?</li>
                            </ul>
                        </ul>
                    </ul>
                    <h2><b>Tangible and intangible aspects (IS)</b></h2>
                    <ul>
                        <li className="bullets">Body as a tangible thing, and also an intangible part of dance</li>
                        <ul>
                            <li className="dashes">The experience of the work—the experience of the artist performing and the person observing, watching, participating—can’t be seen, </li>
                            <li className="dashes">How can archiving begin to touch the intangible part?</li>
                        </ul>
                        <li className="bullets">The archive as the object and the process (IS)</li>
                        <ul>
                            <li className="dashes">How does the process of archiving interface with the process of artmaking?</li>
                        </ul>
                        <li className="bullets">Problems and deficits artists encounter in archiving</li>
                        <ul>
                            <li className="dashes">Obsolete deteriorating formats</li>
                            <li className="dashes">What’s lacking, missing, unorganized</li>
                            <ul>
                                <li className="bullets">The work of getting the stuff to a point where it can be used</li>
                            </ul>
                        </ul>
                        <li className="bullets">Seeing explosion of interest in archiving from artists, archivists now interested</li>
                        <ul>
                            <li className="dashes">Process of working on the archive can shifts an artist’s perception of their own work (example of David Gordon, who went on to develop his own idiosyncratic archiving methodology)</li>
                        </ul>
                    </ul>
                    <h2><b>How archiving affects future work (RL)</b></h2>
                    <ul>
                        <li className="bullets">Importance of social media</li>
                        <ul>
                            <li className="dashes">Choreographing for Instagram, making work for the person scrolling; documenting rehearsals not just for self, but for someone flipping through their phone</li>
                            <li className="dashes">Parts of the dance don’t arrive without the experience of documenting the process</li>
                            <li className="dashes">How do you think of that social media work? What is the life of that work? (NC)</li>
                            <ul>
                                <li className="bullets">There is a life, and still more interested in live performance (RL)</li>
                                <li className="bullets">Pragmatically, “social media work” is important to audience cultivation/connection right now and professional growth</li>
                                <ul>
                                    <li className="dashes">Job opportunities via Instagram</li>
                                    <li className="dashes">Whole way of thinking about that piece, how is that going to affect you in terms of jobs</li>
                                </ul>
                            </ul>
                            <li className="dashes">Part of some choreographer’s early digital history is on Instagram, stored somewhere (AC)</li>                    
                        </ul>
                    </ul>
                    <h2><b>Continuum between documentation and archiving—they are not the same thing (MG)</b></h2>
                    <ul>
                        <li className="bullets">Is the archive supposed to encompass everything? Is there some self-selection about what you want and don’t want?</li>
                        <li className="bullets">Dramaturgy and framing, how is the work framed and who helps frame it</li>
                        <ul>
                            <li className="dashes">What are the resources for artists and their framing?</li>
                            <li className="dashes">Framing is really important in order for it to be “artist-driven”</li>
                            <li className="dashes">Applying experience as a dramaturg, coming in at various times to work with various scopes</li>
                            <li className="dashes">Taking on writing on behalf of artist and framing their work as they want it to be perceived</li>
                            <ul>
                                <li className="bullets">What happens in print is never written from the artist’s perspective, someone else has decided what that work is</li>
                                <ul>
                                    <li className="dashes">Who contributes to that archive?</li>
                                </ul>
                            </ul>
                        </ul>
                        <li className="bullets">The difference between seeing and knowing materials</li>
                        <ul>
                            <li className="dashes">What is the archive beyond the visual documentation of the work? Goes back to the question of framing</li>
                            <li className="dashes">Often only have visual thing and what has been said about it</li>
                            <ul>
                                <li className="bullets">Are we being intentional about the curation of an archive?</li>
                                <li className="bullets">What are the politics of me framing my stuff vs. everyone just seeing it</li>
                                <li className="bullets">Why does it have to be so visual? Goes back to what NW and DJ were saying about body as analog, body as archive (MF)</li>  
                            </ul>
                        </ul>
                        <li className="bullets">Restaging works from notation (MF)</li>
                        <ul>
                            <li className="dashes">Centrality of knowledge in/of the coach’s body: the work has to go through a coach, don’t want performers to see video first (i.e. the score might be digital, but the body is analog</li>
                            <ul>
                                <li className="bullets">The score brings “data points” to dancers and the coach brings knowledge</li>
                                <ul>
                                    <li className="dashes">You can look at a score but that doesn’t give you a picture of what the work is</li>
                                </ul>
                            </ul>
                        </ul>
                        <li className="bullets">“Artist-driven” is about framing (MG) </li>
                        <ul>
                            <li className="dashes">Example from work with Raja Feather Kelly, and the friction of what’s written in the press and what the work actually is</li>
                            <ul>
                                <li className="bullets">Including MG’s program note in press kit</li>
                                <li className="bullets">What are the things that are accompanying us so that the work is in its time and in its context?</li>
                            </ul>
                        </ul>   
                        <li className="bullets">Archive as the way for artists to engage in an ongoing, multiyear conversation with their audiences, NYPL discussing this for years in relationship to “artist-driven archive” (DW)</li>
                        <ul>
                            <li className="dashes">Could we imagine a way for an audience to engage with the work and with its ephemeral materials?</li>
                            <li className="dashes">Motivation of an archive could be to deepen discursive experiences for an audience</li>
                            <li className="dashes">The frame is constantly shifting and impacted</li>
                            <li className="dashes">Possibility for empowerment of artists to be able to speak directly, out of time, out of the theater; possibility for audiences to drift in and out of relationship with choreographers</li>
                            <li className="dashes">It is not just about giving artists control over what gets put out there, but about artists as ongoing partners in the conversation</li> 
                        </ul>
                        <li className="bullets">As an artist, framing for yourself, not waiting for somebody to come do it late (GM)</li>
                        <ul>
                            <li className="dashes">Who has control over the framing?</li>
                            <ul>
                                <li className="bullets">There is a part that I get to frame with what I understand about this moment</li>
                            </ul> 
                            <li className="dashes">And also, I, as a performer, am not the definitive answer to what the work is</li>
                            <ul>
                                <li className="bullets">Embracing the multiplicity of ways people are engaging, not just privileging the visual</li>
                                <ul>
                                    <li className="dashes">Having scholars contextualize</li>
                                </ul>
                                <li className="bullets">There are multiple ways we are creating archives</li>
                            </ul>
                            <li className="dashes">A generative, unfixed archive</li>
                            <ul>
                                <li className="bullets">What is an archive’s ability to shift, especially in terms of how it’s engaging with other artists and performance and other disciplines</li>
                            </ul>
                        </ul>    
                        <li className="bullets">Criticism and disenchantment with criticism about work (CLR)</li>
                        <ul>
                            <li className="dashes">Empathy and connection and multiplicity vs. criticism</li>
                            <ul>
                                <li className="bullets">Criticism has a fatal misunderstanding and belief in objectivity and its value </li>
                            </ul>
                            <li className="dashes">As a performer in a work, you see other/certain things about/of the work</li>
                            <ul>
                                <li className="bullets">How to build context around videos</li>
                                <ul>
                                    <li className="dashes">OTB’s Duke grant to build context around videos, working with artists whose films were being used</li>
                                    <ul>
                                        <li className="bullets">Heather Kravas decided video document did violence to what the work was, so “footage” on OTB is an essay about why the video failed and an email from a performer with their perspective from inside the work</li>
                                    </ul>
                                </ul>   
                            </ul>
                        </ul>
                    </ul>
                    <h2><b>Could there be something that is ongoing, referential, emergent (BM)</b></h2>
                    <ul>
                        <li className="bullets">Began with Dance Fort and interest in the possibility to see it from the inside because that’s what makes the thing</li>
                        <ul>
                            <li className="dashes">BMC’s work has been trying to describe those moments inside</li>
                            <ul>
                                <li className="bullets">The tone of the room is so central to what gets made (what is in the studio, what are the jokes, etc. make the piece) and how can that be captured?</li>
                                <ul>
                                    <li className="dashes">Rachel Boggia: it’s the community in the room that’s the most important thing, how to archive that, trying to virtualize that, that’s what’s important to track</li>
                                    <ul>
                                        <li className="bullets">RB’s Meta-academy: digital space for movement, conversation, community (AH)</li>
                                    </ul>
                                </ul>
                            </ul>
                        </ul>
                    </ul>
                    <h2><b>Considering contributions to one’s own archive and to someone else’s archive (NW)</b></h2>
                    <ul>
                        <li className="bullets">Archiving one’s work requires conversation</li>
                        <li className="bullets">Post-transition body: how do you frame and archive someone else in an archive so that it honors them?</li>
                        <ul>
                            <li className="dashes">What happens to the representation of self as understandings of identity and self shift? How does self-determination impact this?</li>
                        </ul>
                    </ul>
                    <br></br>
                    <h2 className="black-border-bottom"><b>2:40pm BREAK</b></h2>
                    <h2 className="black-border-bottom-thin"><b>Breakout Groups</b></h2>
                    <p className="transcription-details no-padding"><b>Group 1:</b> DJ, DW, R, CR, NC, MG (recording)</p>
                    <p className="transcription-details no-padding"><b>Group 2:</b> (Alex Springer notes)</p>
                    <p className="transcription-details no-top-padding bottom-padding black-border-bottom-thin"><b>Group 3:</b> AC, NW, CO, BM (Sarah Lass notes)</p>
                    <h2><b>Group 3 Conversation</b></h2>
                    <h2><b>Starting up from NW’s last point</b></h2>
                    <ul>
                        <li className="bullets">Shared responsibility and concern for person experiencing transition (NW)</li>
                        <ul>
                            <li className="dashes">Thinking about being in others work and others being in their work</li>
                            <li className="dashes">How and if to include material that was written prior to transition</li>
                            <li className="dashes">How to contextualize self in works prior to transition </li>
                            <ul>
                                <li className="bullets">Images on website no longer representative of body and gender identity, how to represent those works? How public-facing are those works?</li>
                            </ul>
                            <li className="dashes">Artists who transition over the course of touring/traveling works and are documented at various stages of transition</li>
                            <ul>
                                <li className="bullets"><a id="excerpt-one"></a>How much agency as a performer do they have since it’s not their work and not their archive?</li>
                            </ul>
                        </ul>
                    </ul>
                    <h2><b>Brings up audience question: Am I imagining an audience? One that’s not there? What kind of ideal audience might I be imagining? (BM)</b></h2>
                    <ul>
                        <li className="bullets">Words about public facing, etc. have different assumptions of the wedge of public who will being engaging with the work</li>
                        <li className="bullets">No answers, just queries: who are we talking to? Who are we imagining? What side are they on? What do they know? What are they attuned to? </li>
                    </ul>
                    <h2><b>The imagined audience/viewer/outside eye and their presence in the process (AC)</b></h2>
                    <ul>
                        <li className="bullets">Documenting and representing the ineffable: the relationship between those involved</li>
                        <ul>
                            <li className="dashes">When we’re imagining them are we trying to bring in that relationship?</li>
                            <li className="dashes">Depends on one’s own relationship to their imagined audience/judge</li>
                            <ul>
                                <li className="bullets">Benevolent/kind audience vs  judgmental, cynical, “can-they-get-this” presence?</li>
                            </ul>
                        </ul>
                        <li className="bullets">An artist-facing room of making, elevating that sense of facing inward, that’s the thing to capture (BM)</li>
                    </ul>
                    <h2><b>What are the pragmatics of all this? What are the ethical guidelines that shape archivist engagement? (CO)</b></h2>
                    <ul>
                        <li className="bullets">In a library archive, there is a responsibility to the material, donor, and collection to provide unfettered research access and there is a necessity to shield and protect knowledge for the health of certain communities</li>
                        <ul>
                            <li className="dashes">Not actually true that full access is benevolent</li>
                            <ul>
                                <li className="bullets">Ex.: NYC Trans Oral History Project navigating tensions around people’s safety, how to take care and advocate for trans people</li>
                                <ul>
                                    <li className="dashes">Has involved changing names or not providing names in transcripts</li>
                                </ul>
                                <li className="bullets">Ex.: Student project with indigenous artist at Center for Curatorial Studies</li>
                                <ul>
                                    <li className="dashes">Created formal constraints which limited access (available for a limited period of time, timed blackouts, timed information shifts)</li>
                                </ul>
                            </ul>
                        </ul>
                        <li className="bullets">Having transitional sense of self proposes necessity of archives that are not fixed: what about transitional archives, unfixed archives</li>
                        <ul>
                            <li className="dashes">And such an archive might generate potential to think through some of the challenges of safety as artists</li>
                        </ul>
                        <li className="bullets">How to animate an archive with what is alive/living in the material?</li>
                    </ul>
                    <h2><b>Is the training of archivist changing? (AC)</b></h2>
                    <ul>
                        <li className="bullets">Several different schools of thought in archivist training, records management perspective perhaps not providing training for artist-driven archive</li>
                        <ul>
                            <li className="dashes">Experimental, embodied sensitivity vs. systems of standardization</li>
                            <li className="dashes">Often, time-based media archivists have more plastic way of thinking about dance archive than dancers</li>
                            <li className="dashes">Just getting the materials is not in line with the impulse to show them (BM)</li>
                            <li className="dashes">An artist archive is constantly changing and shifting, so when someone is trying to apply the logics of a fixed-timeline archive there’s a mismatch; archiving a shape-shifting reality (CO)</li>
                        </ul>
                    </ul>
                    <h2><b>Central question of 20 years of work: the effort of going back to the moment in the studio when something magical and unrepeatable happens (BM)</b></h2>
                    <ul>
                        <li className="bullets">Never solvable, never get back to that thing, but that is what the work is</li>
                        <li className="bullets">The instance of the true art: it’s in the room and it’s always elusive</li>
                        <ul>
                            <li className="dashes">Brings up questions of: do we show the almost getting? Can we capture the things around it to get the nature of thing without it becoming one thing or one perspective?</li>
                        </ul>
                        <li className="bullets">For BMC, the archival-creative-practice-mish-mash is a collective information sharing</li>
                        <li className="bullets">What’s reflective in an archive? What’s presented to be seen and shared? Only How Dancing is Built includes introspection of BM’s seeing </li>
                        <ul>
                            <li className="dashes">Goes back to NW’s questioning about if the archive is capturing who I am now?</li>
                            <ul>
                                <li className="bullets">Password protect or redact? How do you navigate? Is there something written into a contract? How to advocate for these needs? (CO)</li>
                                <li className="bullets">Experiences with institutions grabbing old images for announcements: where does that decision come from? Points to the institution’s desired frame of the artist (NW)</li>
                            </ul>
                        </ul>
                    </ul>  
                    <h2><b>Differences between to keep, to collect, to capture (NW)</b></h2>
                    <ul>
                        <li className="bullets">Different values and processes at play</li>
                        <li className="bullets">What is the foundational imperative in trying “to keep,” especially with works that are not designed to be kept? Versus “to capture,” which is a kind of keeping, but more abstractly temporal/flexible in temporality</li>
                        <ul>
                            <li className="dashes">All of it still requires particular framing</li>
                        </ul>
                    </ul>
                    <h2><b><a href="https://www.guggenheim.org/conservation/the-variable-media-initiative" target="_blank">Variable Media Project</a> (through Guggenheim) and associated publication (CO)</b></h2>
                    <ul>
                        <li className="bullets">Time-based media project from early 2000s that took up case studies of artist practices, artists, conservationists, curators, etc. in museum context</li>
                        <li className="bullets">Looked at installation work that had the problem of objects (material, medium-specific ex.: candy required, but what happens when the candy is no longer available)</li>
                        <li className="bullets">Centered artist in the representation and determination of how work is re-installed</li>
                        <li className="bullets">Preservation is an interpretive act</li>
                        <ul>
                            <li className="dashes">Cannot pigeon-hole works into media-specific categories, so started talking more about behaviors</li>
                            <ul>
                                <li className="bullets">Instead of media-specific categorization, think of the art works themselves: what are their behaviors and how can that be classified?</li>
                            </ul>
                        </ul>
                    </ul>    
                    <h2><b>Thinking about how much work revolves around improvisation (in dance-building and in the delivery of the piece itself) (BM)</b></h2> 
                    <ul>
                        <li className="bullets">Different rules apply with improvisation: are we talking about the score or the approach to a specific way of being?</li> 
                        <li className="bullets">This is what is set down vs. this is a state we’re trying to achieve</li> 
                        <ul>
                            <li className="dashes">Is that replicable? Is its ability to be replicated a basis of our archiving appetite?</li> 
                            <li className="dashes">What are we really holding onto? Is it my visage or is it who I am? How does that follow along with the work? </li> 
                            <ul>
                                <li className="bullets">Something about the aiming for the space between, which is not defined</li> 
                                <ul>
                                    <li className="dashes">Curious about it in terms of how that is “vaulted” (verb-based) as a dynamic</li> 
                                    <ul>
                                        <li className="bullets">Dynamic archive</li> 
                                    </ul>
                                </ul>
                            </ul>
                        </ul>
                    </ul>
                    <h2><b>What is the present moment behavior of the archive and the work? (AC)</b></h2>
                    <ul>
                        <li className="bullets">What if we think about how it might be “memoried,” remembered, held onto, saved, kept, collected, captured? How might we want things to be held? What is the structure that is specific to that work?</li> 
                        <ul>
                            <li className="dashes">“This work is best archived as a performative act with a light.”</li> 
                            <ul>
                                <li className="bullets">What if the archive is a whole other thing? </li> 
                                <ul>
                                    <li className="dashes">We’re seeing the movement towards that moment (that magical, present moment that happened in the studio) when we watch</li>
                                </ul>
                            </ul>
                            <li className="dashes">What’s going to be the best archival response to this thing that happened in the moment?</li> 
                        </ul>
                    </ul>
                    <h2><b>Recognizing two parts, a part that wants to wipe everything off and away, and a part that wants to save everything (AC)</b></h2>
                    <ul>
                        <li className="bullets">We don’t know what some futurity needs… so do we surrender our own history?</li> 
                        <li className="bullets">An artist-led archive makes me think of the possibility of accompaniment, sitting with another artist when they’re working (AC)</li>
                        <ul>
                            <li className="dashes">Ex.: AC relearning her solos (BM)</li> 
                            <li className="dashes">Stepping into old work, trying to grab a part of myself through old work;  goes back to the idea of body as archive (AC)</li> 
                        </ul>
                    </ul>
                    <h2><b>Maybe the archive does take/need a special place (BM)</b></h2>
                    <ul>
                        <li className="bullets">To look at this archive you have to do x, y, z;  there is some kind of unfolding of it</li>
                        <ul>
                            <li className="dashes">Does this go against how an archive might be an audience builder?</li>
                        </ul>
                        <li className="bullets">An unfolding archive relates to situational learning (CO)</li>
                        <ul>
                            <li className="dashes">What is it like to sit in a library and look through an archive? What is it like to do this in a space that hold an affective tone?</li>
                            <ul>
                                <li className="bullets">Ex.: Caroline Millard’s work (sculpture): creates spaces for group work</li>
                                <ul>
                                    <li className="dashes">Aesthetic infrastructures</li>
                                </ul>
                            </ul>
                            <li className="dashes">Situated learning: the classroom becomes the third teacher</li>
                            <li className="dashes">What is the environment of taking it in (AC)</li>
                            <ul>
                                <li className="bullets">Possibilities of working with emergent curators and including questions of design, architecture, and feel (CO)</li>
                                <ul>
                                    <li className="dashes">Different than working with archivists, where questions of archiving feel more document-based</li>
                                    <ul>
                                        <li className="bullets">Institutional frame: archivists have the weight of the institution living in some way in their body (AC)</li>
                                    </ul>
                                </ul>
                                <li className="bullets">Useful to build speculative projects as an exercise (CO)</li>
                            </ul>
                        </ul>
                    </ul>
                    <h2><b>What are the standards set by the market? (CO)</b></h2>
                    <ul>
                        <li className="bullets">Increasingly, cultural relationship to documentation is about the marketplace, but the marketplace’s aesthetic demands don’t always serve the work (CO)</li>
                        <ul>
                            <li className="dashes">This is not always in alignment in any way with the studio practice</li>
                            <li className="dashes">Ex.: low-fi is central to the documentation of clown therapy</li> 
                        </ul>
                        <li className="bullets">What are the concurrent practices of imagining the work that are not served by those standards? (NW)</li>
                        <ul>
                            <li className="dashes">The archiving of a work is not always in alignment with what I have to do to get the work supported</li> 
                            <ul>
                                <li className="bullets">Does this change or influence the marketing voice? (BM)</li> 
                                <ul>
                                    <li className="dashes">Field-wide relation to seeing invisibility is more flexible in other forms (NW)</li> 
                                    <ul>
                                        <li className="bullets">The need to shield and protect certain processes, like indigenous practices that don’t allow video at all</li> 
                                        <li className="bullets">In dance, if you don’t see the video, it didn’t happen/there’s lack of trust about what you’re saying about the work </li> 
                                    </ul>
                                </ul>
                            </ul>
                        </ul>
                        <li className="bullets">Ways to film the context around what you’re talking about (BM)</li>
                        <ul>
                            <li className="dashes">Our media and our marketplace understand how to be compelling even when it isn’t visual (ex.: Blair Witch Project)</li>
                            <li className="dashes">Recognizing that one’s relationship to the marketplace is different at different career stages</li>
                        </ul>
                        <li className="bullets">Constructing some kind of fictional archive, something with empty catalog records (CO)</li>
                        <ul>
                            <li className="dashes">How to play with the traditional archive’s rigidity, taking up stiffer mechanics of things to call attention to them </li>
                        </ul>
                        <li className="bullets">What are the attachments that are revealed through gatekeeping structures and presenting mechanisms (NW)</li>
                    </ul>
                    <h2 className="black-border-bottom"><b>4:00pm Reconvening:</b> reporting back from afternoon conversations and transition into presentations</h2>     
                    <h2 className="black-border-bottom-thin"><b>Group 1 Report (DW)</b></h2>
                    <ul>
                        <li className="bullets">Considering question of audience and archive</li>
                        <ul>
                            <li className="dashes">Instrumentalization of archive, economy of archive, gatekeeping and governance</li>
                            <li className="dashes">Who is your government?</li>
                        </ul>
                    </ul>  
                    <h2 className="black-border-bottom-thin"><b>Group 2 Report (GM)</b></h2>
                    <ul>
                        <li className="bullets">How do independent artists create collections/can these collections be created?</li>
                        <li className="bullets">Creating access and appetite</li>
                        <ul>
                            <li className="bullets">What are the ways appetite is created? (Potential of social media)</li>
                        </ul>
                        <li className="bullets">Multiple ways “in”</li>
                        <ul>
                            <li className="bullets">Creating access beyond the visual (through spoken word, articles, etc.)</li>
                        </ul>
                        <li className="bullets">Archiving process, not just product</li>
                        <li className="bullets">Archiving tone (AH’s thought)</li>
                        <ul>
                            <li className="bullets">Includes the experience of the dancers in the room</li>
                        </ul>
                        <li className="bullets">How do we create an online/archival presence that is about inclusivity?</li>
                        <li className="bullets">How are we inviting people in and letting people know what’s available?</li>
                    </ul>
                    <h2 className="black-border-bottom-thin"><b>Group 3 Report (AC)</b></h2>
                    <ul>
                        <li className="bullets">How the archive holds a changing self</li>
                        <li className="bullets">What is kept, collected, and captured</li>
                        <li className="bullets">Not allowing unfettered access to our work and the work of those with whom we are allied</li>
                        <ul>
                            <li className="bullets">Protection of work as essential to integrity of work and safety of artists</li>
                        </ul>
                        <li className="bullets">Different positions on replication of work</li>
                        <li className="bullets">Plastic approach to archiving in other disciplines</li>
                        <ul>
                            <li className="bullets">How does that serve the work and not serve the work?</li>
                        </ul>
                        <li className="bullets">How we go back to that magical moment that happens in process?</li>
                        <ul>
                            <li className="bullets">The work and the archive are really about that</li>
                        </ul>
                    </ul>
                    <h2><b>Approx. 4:15pm Presentations</b></h2>
                </div>
            </section>
        </div>
    </>
  );
}

export default MeetingFiveNotes;