// ====== COMPONENTS ======
import { useLocation } from "react-router-dom";

const GeselMasonPresentation = (props) => {

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
        <div style={{ backgroundColor: background, color: textColor }} className="top-padding flex column al-center">
            <div className="essay-width flex space-btwn">
                <div className="column">
                    <h2 className="transcription">Presentation</h2>
                    <p className="transcription"><b>Vault Meeting #5</b></p>
                    <p className="transcription-details">January 18-19, 2020
                    <br></br>
                    Ann Hamilton and Michael Mercil's Studio, Columbus, OH</p>
                    <p className="transcription-details">Meeting Notes by Sarah Lass</p>
                    <p className="transcription-details">Presenter: Gesel Mason, Dance Artist</p>
                </div>
                <img className="transcript-slash" src={ slash } />
            </div>
            <section className="flex column al-center">
                <div className="essay-width">
                    <h2>Sunday, January 19, 10am-1pm</h2>
                    <p><b>Presentation: No Boundaries (Gesel Mason)</b></p>
                    <ul>
                        <li className="bullets">Legacy, representation</li>
                        <li className="bullets">Where and how the black dancing body appears and disappears in digital space</li>
                        <li className="bullets">Who gets to tell what stories?</li>
                        <ul>
                            <li className="bullets">Real and imagined concerns around ownership, intellectual property, copyright, permission, and transmission</li>
                        </ul>
                        <li className="bullets">Dancing body as archive</li>
                        <ul>
                            <li className="bullets">If the body is a repository, how might dance be a way of accessing that repository?</li>
                        </ul>
                        <li className="bullets">How do we capture live performance?</li>
                        <li className="bullets">How can we make an archive come alive? How can  we create a sense of aliveness in a digital archive?</li>
                        <li className="bullets">What can an archive do that live performance cannot and vice versa? What can a digital platform offer that a live performance cannot?</li>
                        <li className="bullets">Through adding to the repository, No Boundaries methodology developed</li>
                        <li className="bullets">Archive is not just documentation of choreography, it is a way for an audience to interact with choreographers as people</li>
                        <ul>
                            <li className="bullets">Many possible ways to experience these artifacts and this choreography</li>
                            <li className="bullets">Challenging methodologies embedded in traditional archival practices</li>
                        </ul>
                        <li className="bullets">Body and performance exist alongside digital content</li>
                        <ul>
                            <li className="bullets">Possibility for multiple forms: book, performance, museum exhibit, etc.</li>
                        </ul>
                        
                        <li className="bullets">How to point to the impossibility of capturing what happen in the room in the digital space, too</li>
                        <li className="bullets">Interrupting an audience experience in performance and onscreen</li>
                        <li className="bullets">Is there another way to get the kinesthetic and empathetic experience of the live moment?</li>
                        <li className="bullets">No Boundaries offers multiple access points, non-linear (MG)</li>
                        <ul>
                            <li className="bullets">Offers possibilities for college courses</li>
                            <ul>
                                <li className="bullets">Letting students see how someone places themselves in lineage of the canon</li>
                                <li className="bullets">Significant for people to see where and how you’re in conversation with these bodies and ideas (GM)</li>
                            </ul>
                            <li className="bullets">Emblematic of post-post-modern training models, nobody is one thing anymore (MG)</li>
                            <ul>
                                <li className="bullets">Archive as disturbing archetypes</li>
                            </ul>
                        </ul>
                        <li className="bullets">Head vs. gut knowledge (GM)</li>
                        <ul>
                            <li className="bullets">Learning the choreography is not the only thing</li>
                            <ul>
                                <li className="bullets">Embodying those works was embodying a state, remembering the rehearsal room, remembering watching the video, etc.</li>
                            </ul>
                            <li className="bullets">All of these people are still living in body, still communicating, not done with me</li>
                        </ul>
                        <li className="bullets">On a cellular level, the archive is rhythm-based, space-based, interior-based (BM)</li>
                        <li className="bullets">Dancer perspective within dancer-choreographer feedback loop is crucial to the work that is being made (AH)</li>
                        <ul>
                            <li className="bullets">That voice is still absent and needed</li>
                            <li className="bullets">The work of getting ready for the dance is the dance</li>
                        </ul>
                        <li className="bullets">What’s next for No Boundaries (GM)</li>
                        <ul>
                            <li className="bullets">Tour with other performers, interviewing them, including scholar to contextualize</li>
                            <ul>
                                <li className="bullets">Keeps growing No Boundaries through live performance and centering performer journey</li>
                            </ul>
                            <li className="bullets">Multiplicity keeps coming up: performance, conversation, text, dialogue</li>
                            <li className="bullets">Question of funding and resources for digital archive, lawyer fees, and copyright</li>
                            <li className="bullets">The Sentient Archive: how body as archive influences thinking about archival practices</li>
                        </ul>
                        <li className="bullets">All made “in relation”/we’re not alone, ever (AC)</li>
                        <ul>
                            <li className="bullets">Platforms of connectivity</li>
                            <li className="bullets">Sentient form (BM)</li>
                            <li className="bullets">Intimacy and personal-ness of archives (IS)</li>
                            <ul>
                                <li className="bullets">Artifacts that are important, and personally tender (GM)</li>
                                <li className="bullets">Honoring others involved in the project in the archiving</li>
                            </ul>
                            <li className="bullets">There are so many ways it can exist, there are places and ways we can share certain aspects (GM)</li>
                            <li className="bullets">No Boundaries is not the same as repertory</li>
                            <ul>
                                <li className="bullets">There’s something about the solo body</li>
                                <li className="bullets">Desired additions to archive: Ishmael Houston-Jones, Blondell Cummings, Marjani Forte-Saunders, Camille Brown, Diane Harvey, Nora Chipamuri, forms from African diaspora</li>
                                <li className="bullets">Voices need to be added, additional dancers need to be added</li>
                            </ul>
                        </ul>
                    </ul>
                    <p><b>Sticky Wall: refining and thinking towards dissemination (BM and AH) </b></p>
                    <ul>
                        <li className="bullets">Finding points of resonance and points to continue</li>
                        <li className="bullets">Outward facing; what are the ways of engaging this material that are not just about the people on the inside of it (AH)</li>
                        <li className="bullets">Stickies:</li>
                        <ul>
                            <li className="bullets">How can we incentivize archival behavior broadly? What’s the relationship between creation and production? Resources strategies and archival strategies?</li>
                            <li className="bullets">What do effective pedagogical strategies look like? I have some thoughts…</li>
                            <li className="bullets">What does a field-wide funding strategy look like? Local and regional and community? Leadership projects?</li>
                            <li className="bullets">Digital archive as portal (digital, live, print) where the form has a relationship to the embodied practices/histories that inscribe the work?</li>
                            <li className="bullets">Flat (digital space) and Portal (dimensional time travel); body as archive, behaves as conduit(s); lineage</li>
                            <li className="bullets">How might a digital archive—in its form—be thought of as a portal rather than index? Dimensional rather than flat to mirror or echo the way bodies hold pasts, presents, and futures?</li>
                            <li className="bullets">Constructing an archive of relations: across bodies, histories, material types, non-linear, multiple origin stories</li>
                            <li className="bullets">What might the relationship be between anti-racist methods of dissemination (online and in digital space) to experimental form, particularly black experimentalism?</li>
                            <li className="bullets">What is the relationship between archiving and stewardship?</li>
                            <li className="bullets">Archiving the edges: how we prevent experimental and obscure performance practices and artists from erasure and disappearance?</li>
                            <li className="bullets">Is there a better way to name an archive that modifies the word or that doesn’t so much connote the inert, static, and hegemonic?</li>
                            <li className="bullets">Why are we so worried in transmission about the definitive version? Why is it challenging or unpopular to allow for the concept of translation or recreation of works?</li>
                            <li className="bullets">How do we record and transmit a much richer experience of dance, one that is more dimensional and lusty and richer in who is represented?</li>
                            <li className="bullets">Ritual, objects, magic, spells: could this be a helpful scenario for discussing the archive, where the items are magic objects, the dances are the spells, and the magic is the performance?</li>
                            <li className="bullets">Surrendering to a life’s work we didn’t expect</li>
                            <li className="bullets">Ancestor work as archival practice/ research</li>
                            <li className="bullets">Archive and creative practice as feedback loop, co-terminate systems informing one another</li>
                            <li className="bullets">A dance as a living entity, moves and changes through time</li>
                            <li className="bullets">How would the archiving strategies and resources we envision change or affect dance making and the dance community? Who benefits and how? Who are we doing this for?</li>
                            <li className="bullets">In an artist-driven archive, (where) is there space for what the art is driving at that escapes/contradicts/subverts the artist’s understanding?</li>
                            <li className="bullets">Goal: a simple, flexible standard and template for online dance archives. It would be accessible and affordable to implement, but allow diverse, individual approaches. It would be developed by archivists and technologists with input from artists. Question: what work has already been done? What failures can we learn from?</li>
                            <li className="bullets">Could we talk more about safe space and how this concept could be communicated effectively to institutions that want open access?</li>
                            <li className="bullets">How to create space for generous, generative misunderstanding?</li>
                            <li className="bullets">Is there a nonlinear gap chronology? A format (ongoing) that includes the gaps in framing, addresses the gap between seeing and knowing the materials?</li>
                            <li className="bullets">(When) does the past get in the way of the present?</li>
                            <li className="bullets">Archival silences: the potential of gaps and the spaces in between</li>
                            <li className="bullets">The analog/digital divide is resonating. How do we continue to honor and include the analog (the body, memory, objects, kinesthetic experience) in an increasingly digital world?</li>
                            <li className="bullets">A Relatable Form, Re-Told: a digital format that takes into account time for review, reverie, and active/analog presence. </li>
                            <li className="bullets">Do we trust the digital? If we distrust it, how do we deal with that? </li>
                            <li className="bullets">Contemplating a different mode of documentation with an eye toward archiving</li>
                            <li className="bullets">What limitations does “body as analog” model place on us?</li>
                            <li className="bullets">Who’s paying for it? How can archival practices become part of creative practice?</li>
                            <li className="bullets">The narratives of the archivist as part of the process and product</li>
                            <li className="bullets">Politics of archival methodology: trans inclusivity, anti-racist, decolonial; how the archive can live and protect </li>
                            <li className="bullets">How can archive work and product create spaces for current issue conversation and action? Archive work: example is what GM is doing with No Boundaries. Archive product: examples are Motion Bank, Archiveology, traditional archives. Spaces: Workshops, courses, in/outreach programming, places/events where people come together. Current issue conversations and action: the heartbreaking horrifying reality of now…wicked problems of racism, climate crisis, violence</li>
                            <li className="bullets">How do we archive community?</li>
                            <li className="bullets">Gesel’s presentation and work allow the viewer to identify with someone exploring/living with an archive. This created appetite in a way that felt accessible to a broader audience. What are more ways to create appetite?</li>
                            <li className="bullets">Moving beyond the singular artist archive: the Google reach (and resources) with respectful limitations; a gathering of voices, collaborators, and responses</li>
                            <li className="bullets">For artist-driven archive, is “who is my audience” the first question to answer?</li>
                            <li className="bullets">Artist access to archiving resources and “audience” access to archives</li>
                            <li className="bullets">Politics of archival methodology</li>
                        </ul>
                        <li className="bullets">What has surfaced (BM)</li>
                        <ul>
                            <li className="bullets">Artist-driven archive</li>
                            <ul>
                                <li className="bullets">Archival methodology</li>
                                <ul>
                                    <li className="bullets">Archiving creative practice and the creative practice of archiving</li>
                                    <li className="bullets">Archiving methodology as creative practice (different than archiving creative practice)</li>
                                </ul>
                            </ul>
                            <li className="bullets">In those methodologies….</li>
                            <ol>
                                <li className="bullets">Politics: deep connection to politics (space, bodies, stories, physical and philosophical, of bodies involved); particular needs, the care we take</li>
                                <li className="bullets">Resources that already exist: resources for gathering and dissemination (dissemination, funding, storage); building on what is already here; connected to appetite for audience and artist</li>
                                <ul>
                                    <li className="bullets">Dissemination, funding, storage</li>
                                    <li className="bullets">These resources are responsible for appetite</li>
                                </ul>
                                <li className="bullets">Technologies: direction of the technologies involved</li>
                                <ul>
                                    <li className="bullets">Vessel and launch/dispersal, gathering and going deeper, gathering and fanning out into width, portals in and portals out, vault in and vault out (Google sized reach)</li>
                                    <li className="bullets">Outward facing towards accessible ways of engaging the material</li>
                                </ul>
                            </ol>
                        </ul>
                        <li className="bullets">All of these are aspects of the artist-driven archive (GM)</li>
                        <ul>
                            <li className="bullets">Our understanding of an artist-driven archive supports our ability to communicate needs/desires with those who might implement it</li>
                            <ul>
                                <li className="bullets">First, our relationship to these things, then the conversation</li>
                            </ul>
                        </ul>
                        <li className="bullets">Is there a place for an archivist? Just as there is for a dramaturg (AC)</li>
                        <ul>
                            <li className="bullets">Beginning of Dance Fort (IS)</li>
                            <ul>
                                <li className="bullets">Artist-driven necessitates question of what kind of relationships we need</li>
                                <ul>
                                    <li className="bullets">How do we envision the relationships we want, and how do we get to these?</li>
                                    <li className="bullets">Creating newness, intrusions (AC)</li>
                                </ul>
                            </ul>
                        </ul>
                        <li className="bullets">Expanding thinking about artist-driven to think about form</li>
                        <ul>
                            <li className="bullets">Include forms that are not from library sciences and methodologies (CO)</li>
                            <li className="bullets">Artists cannot always take on labor associated with archival practice</li>
                            <ul>
                                <li className="bullets">Calls for collaboration across the field, and includes curatorial folks</li>
                                <li className="bullets">Looking at larger ecosystems of interactions, including artists, curators, archivists, writers, dramaturgs</li>
                                <li className="bullets">Essential that artists are a part of forming their own representations and important to create room for artist’s work to be a part of larger conversations</li>
                                <ul>
                                    <li className="bullets">Creating space for some misbehavior to happen</li>
                                    <ul>
                                        <li className="bullets">An artist over-forming their representation can be detrimental, this forecloses an archive’s life and opportunities for irreverence</li>
                                        <ul>
                                            <li className="bullets">“I’m the artist” and there are things and ways of engagement that I don’t see (BM)</li>
                                            <ul>
                                                <li className="bullets">Feeling lack of resources in fully engaging this dilemma</li>
                                            </ul>
                                        </ul>
                                    </ul>
                                    <li className="bullets">There is a tension between control and ceding everything; tension between desire to control and desire to allow for openness (IS)</li>
                                </ul>
                            </ul>
                        </ul>
                        <li className="bullets">Artist-driven assumes choreographer and director, what about collaborators in the room (BM)</li>
                        <ul>
                            <li className="bullets">Keeping creative collaborators safe</li>
                            <li className="bullets">Talking so much about choreographer and choreographer-driven work, what about all the other forms of dance (IS)</li>
                            <ul>
                                <li className="bullets">In particular histories, narratives, and bodies curation is highly important and sacred (NW)</li>
                                <ul>
                                    <li className="bullets">It’s important to say no you don’t get that, and it’s important to listen to</li>
                                    <li className="bullets">Collaboration and trust: not just inviting anybody into the room</li>
                                    <li className="bullets">Artists and genres denying permission to engage</li>
                                    <ul>
                                        <li className="bullets">Trust, distrust, mistrust: how conversations are held and how those are archived or not</li>
                                        <ul>
                                            <li className="bullets">Having enough trust so that productive disagreements are made legible (CLR)</li>
                                            <li className="bullets">Flexibility, variability, preservation as interpretive act (CO)</li>
                                        </ul>
                                    </ul>                                
                                </ul>
                            </ul>
                        </ul>
                        <li className="bullets">Could personal, artist perspective be contained in something that also allowed for someone else’s reading, a reading which would also leave a trail? (BM)</li>
                        <ul>
                            <li className="bullets">Can something keep its forms and hold other engagements and readings?</li>
                            <ul>
                                <li className="bullets">Is that permission-based?</li>
                                <li className="bullets">Comments as rich resource (AC)</li>
                            </ul>
                        </ul>
                        <li className="bullets">Seeing beyond our own artform (MG)</li>
                        <ul>
                            <li className="bullets">Film retrospectives: reconsideration of film without reducing original film</li>
                            <ul>
                                <li className="bullets">Is our tension around archive tied to the ephemerality of dance?</li>
                            </ul>
                            <li className="bullets">Time-based media art is asking some of the same questions; looking to time-based media art for solutions (CO)</li>
                            <li className="bullets">Multiple lenses doesn’t change existence (MG)</li>
                            <ul>
                                <li className="bullets">Even if archive is framed around artist vision, this doesn’t limit my ability to go back in and read it my way, mess it up</li>
                                <li className="bullets">If the essence of a picture is the frame, multiple frames are needed, doesn’t need to be either/or</li>
                            </ul>
                        </ul>
                        <li className="bullets">Labor and human resource (AH)</li>
                        <ul>
                            <li className="bullets">Need for someone skilled at director-level, who can thread it together, pull forward ideas, meetings, etc. towards dissemination at company-level and project-based level</li>
                            <ul>
                                <li className="bullets">Part of the archive is organization of company manager</li>
                            </ul>
                        </ul>
                        <li className="bullets">What about not curating, not deciding where something needs to go and how (AH)</li>
                        <ul>
                            <li className="bullets">Something valuable in that methodology that is different than artist-driven archive</li>
                            <ul>
                                <li className="bullets">Allow for multiplicity, allow for the everything</li>
                                <ul>
                                    <li className="bullets">Value in conventional archiving</li>
                                </ul>
                                <li className="bullets">Driving it from a POV means you’re making choices</li>
                            </ul>
                            <li className="bullets">Are there other parts and companions to an archive?</li>
                            <li className="bullets">The importance of the why, why an archive: to encourage conversation and relation and we can invite more and more people to it</li>
                        </ul>
                        <li className="bullets">Distinction between project archive and artist body-of-work archive (NW)</li>
                        <ul>
                            <li className="bullets">Untouched body-of-work archives available for individual interface can create sense of deepening into someone and their work</li>
                            <li className="bullets">Artist project archive feels like a different kind of “going-in” </li>
                            <ul>
                                <li className="bullets">Hand of artist is critical in that</li>
                            </ul>
                            <li className="bullets">What about these two archives—body-of-work and project—together? There is overlap, but distinction</li>
                            <li className="bullets">Working on project-based archive with Jaamil Olawale Kosoko (LC)</li>
                            <ul>
                                <li className="bullets">Institutional response to provide resources to help JOK produce some aspects of this project-based archive</li>
                                <li className="bullets">How you position institutional strategy in relationship to these different approaches?</li>
                                <ul>
                                    <li className="bullets">This is more provocative than just showing the piece</li>
                                    <li className="bullets">More portal-like, more modulary (CO)</li>
                                    <ul>
                                        <li className="bullets">Being able to work with certain proportions/portions (zine, radio show, etc.)</li>
                                        <ul>
                                            <li className="bullets">Taken all together, there’s an archive</li>
                                        </ul>
                                    </ul>
                                </ul>
                                <li className="bullets">In order to do this, longer relationships are needed between presenter/producer and artist (LC)</li>
                            </ul>
                        </ul>
                        <li className="bullets">Archival ethics: not imposing viewpoint on work as an archivist (IS)</li>
                        <ul>
                            <li className="bullets">We’re not deciding what the future has access to</li>
                            <li className="bullets">An archive exists over time</li>
                            <ul>
                                <li className="bullets">Anticipating the reality of the life of the thing as an archivist</li>
                            </ul>
                            <li className="bullets">No Boundaries ended up doing both of those things (GM)</li>
                            <ul>
                                <li className="bullets">Choice-making around what is shown, but in “the vault” you can find the whole 3 hours</li>
                                <li className="bullets">Layers of interactivity</li>
                                <ul>
                                    <li className="bullets">What are the multiple ways of interacting so that they all keep unfolding?</li>
                                    <li className="bullets">What if/what is the archive that inspires a new work in relation to the archive (AC)</li>
                                    <ul>
                                        <li className="bullets">People might go into your archive to get at somebody else’s work (MG)</li>
                                        <ul>
                                            <li className="bullets">The thing is the thing that it is, but its uses are untold</li>
                                        </ul>
                                    </ul>
                                </ul>
                            </ul>
                        </ul>
                        <li className="bullets">How differently potent directional technology might be depending on where one is in their career (BM)</li>
                        <ul>
                            <li className="bullets">Value of having polyvalent, unfolding set of outcomes (DW)</li>
                            <ul>
                                <li className="bullets">Appreciated suggestion of having adaptable platform</li>
                                <li className="bullets">Acknowledging polyvalence as permanent as opposed to temporary solution to institutional problem</li>
                            </ul>
                        </ul>
                        <li className="bullets">Goes back to larger problematics of the definitive (AH)</li>
                        <ul>
                            <li className="bullets">There are things that live performance does really well, there are things an archive does really well, and we’re not trying to do everything</li>
                            <ul>
                                <li className="bullets">We’re making dance work and we’re archiving, but the archiving doesn’t need to do everything we care about</li>
                                <li className="bullets">Releasing ourselves from the pull to get everything we care about into the notion of “archive”</li>
                            </ul>
                            <li className="bullets">Different forms promote different modes of reception (CO)</li>
                            <ul>
                                <li className="bullets">Audience is variable in each of these contexts</li>
                                <ul>
                                    <li className="bullets">Embodied practice gets to speak across body-document divide</li>
                                    <li className="bullets">Proposing multiple methodologies</li>
                                </ul>
                                <li className="bullets">What might promote strategies of further looking?</li>
                            </ul>
                            <li className="bullets">Making legible someone else’s journey through the materials</li>
                            <ul>
                                <li className="bullets">Example of Harmony Bench’s work with Katherine Dunham, looking at the data-based visual representation (GM)</li>
                                <ul>
                                    <li className="bullets">It’s important/informative to follow someone else’s interest, desire, trail</li>
                                </ul>
                            </ul>
                        </ul>
                        <li className="bullets">Access outside of academia (BM)</li>
                        <ul>
                            <li className="bullets">Mike Vargas’s deck, Annie Parson’s, Brian Eno (Oblique Strategies)</li>
                            <li className="bullets">What are these other, tactile methodologies?</li>
                            <ul>
                                <li className="bullets">Extreme disembodied moment is creating appetite for tactile, for analog (CLR)</li>
                                <li className="bullets">With shifting funding landscape artists are also having to think in tangible (NW)</li>
                                <ul>
                                    <li className="bullets">Patreon, selling objects, selling episodes</li>
                                    <li className="bullets">Sharron Bridge Ford’s tarot deck created with Dat Black Mermaid Manlady</li>
                                    <ul>
                                        <li className="bullets">Back of cards have excerpts of text, connected to book, music, other ways of having a tangible object that speaks to live performance</li>
                                        <li className="bullets">Demonstrates layered way of engagement</li>
                                    </ul>
                                </ul>
                            </ul>
                        </ul>
                        <li className="bullets">Do we rely on people’s appetite to come to the work? Do we pay people to come? (AC)</li>
                        <ul>
                            <li className="bullets">Ex.: 3.5 month process with adult dance students, 22-74 age range (RL)</li>
                            <ul>
                                <li className="bullets">Way of activating and engaging audience, getting people to care without authoritarian methods</li>
                                <li className="bullets">Unfamiliar, but effective funding model (BM)</li>
                                <ul>
                                    <li className="bullets">As we talk about performance and archive, are we asking how these resources are going back and forth?</li>
                                </ul>
                            </ul>
                        </ul>
                    </ul>
                    <p><b>No Boundaries Test Case</b></p>
                    <ul>
                        <li className="bullets">How would we further No Boundaries? Taking No Boundaries as object to play with in imagining into/exploring some of these questions (BM)</li>
                        <ul>
                            <li className="bullets">Taking just one question and unpacking: who is going to do the tech component?</li>
                            <ul>
                                <li className="bullets">There is a challenge of finding the people who have the resources and the time (GM)</li>
                                <li className="bullets">NEA support, very specific things are needed to apply to this</li>
                                <li className="bullets">Need someone who can speak to the digital aspect, and someone who can be partner in imagining what this archive will actually look like</li>
                                <li className="bullets">Collective Access has examples: BAM, New Museum, Mark Morris (CO)</li>
                                <ul>
                                    <li className="bullets">Looking there to see what kinds of projects they’re doing to find who was involved</li>
                                    <li className="bullets">Looking into Open Source Technology Teams</li>
                                    <li className="bullets">Collective Access is a content management system (IS)</li>
                                    <ul>
                                        <li className="bullets">People looking to Collective Access for individual projects</li>
                                        <li className="bullets">This is where idea for standardized, flexible model arose</li>
                                    </ul>
                                </ul>
                                <li className="bullets">Pew Foundation funding (CO)</li>
                                <ul>
                                    <li className="bullets">Published The Sentient Archive</li>
                                    <li className="bullets">Which performance histories have affinities and overlap?</li>
                                </ul>
                                <li className="bullets">How is it sustainable and where does it live in the long term? (IS)</li>
                                <ul>
                                    <li className="bullets">Jacob’s Pillow is actually a built-out Wordpress site (GM)</li>
                                    <ul>
                                        <li className="bullets">Allows Jacob’s Pillow to add content</li>
                                    </ul>
                                    <li className="bullets">Working with Ransom Center so that they are holding the actual materials</li>
                                </ul>
                                <li className="bullets">Something like this really calls for an artistic director (AH)</li>
                                <ul>
                                    <li className="bullets">The performance aspect requires this</li>
                                    <li className="bullets">There is a No Boundaries methodology, so that feels important (GM)</li>
                                    <ul>
                                        <li className="bullets">Allows it to grow without GM (feels important to take the steps back as opposed to jump out)</li>
                                    </ul>
                                </ul>
                                <li className="bullets">Re: Rosas website (BM)</li>
                                <li className="bullets">Open-sourcing the work (AC)</li>
                                <li className="bullets">Something intriguing about that transfer of a way of knowledge which gets you to a knowledge (BM)</li>
                                <ul>
                                    <li className="bullets">Documenting methodology in a way that exists alongside the context (AH)</li>
                                    <ul>
                                        <li className="bullets">Methodology not currently documented in No Boundaries, but it will be (GM)</li>
                                        <li className="bullets">Necessity of documenting the dancer experience</li>
                                    </ul>
                                </ul>
                                <li className="bullets">What pieces need to be included?</li>
                                <ul>
                                    <li className="bullets">Simplicity of interacting with the material</li>
                                    <ul>
                                        <li className="bullets">What is too much for the online archive to actually handle? Questions of density of materials matters (AH)</li>
                                        <ul>
                                            <li className="bullets">What if there were pathways, which were curated, directs you through the material in a certain way?</li>
                                            <ul>
                                                <li className="bullets">Invite other people’s pathways through the materials, this is a part of the project itself</li>     
                                                <li className="bullets">Multiple journeys and multiple jumping off points (GM)</li>
                                                <ul>
                                                    <li className="bullets">Connecting outwards (IS)</li>
                                                </ul>
                                            </ul>
                                        </ul>
                                    </ul>
                                </ul>
                                <li className="bullets">Necessity of project manager in this situation (MG)</li>
                                <ul>
                                    <li className="bullets">Helpful to look at digital humanities scholars (CO)</li>
                                </ul>
                                <li className="bullets">Including information about folks who have contributed to the project; focusing on people who have been in conversation with the work and their own practices (NW)</li>
                                <ul>
                                    <li className="bullets">Provides openings to other places</li>
                                    <li className="bullets">Highlights and makes visible relationships and degrees of remove</li>
                                </ul>
                                <li className="bullets">Advocating for compensation strategy for GM and for other people in the project (LC)</li>
                                <ul>
                                    <li className="bullets">Not so much about a project as it is an institute</li>
                                    <li className="bullets">Network of people who come out of this lineage who can contribute and support (MG)</li>
                                    <ul>
                                        <li className="bullets">Don’t need to become an expert in everything in order to get project going</li>
                                    </ul>
                                </ul>
                                <li className="bullets">Tangential voices looking at the work, which brings ina live sense of companionship (BM)</li>
                                <ul>
                                    <li className="bullets">“Companion ways “to how we break open, look at, address a work</li>
                                </ul>
                                <li className="bullets">Look into NEH’s call for institutes (DW)</li>
                            </ul>
                        </ul>
                    </ul>
                </div>
            </section>
        </div>
    </>
  );
}

export default GeselMasonPresentation;