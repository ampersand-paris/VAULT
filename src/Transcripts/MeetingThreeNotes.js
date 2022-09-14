// ====== COMPONENTS ======
import { useLocation } from "react-router-dom";

const MeetingThreeNotes = (props) => {

    const location = useLocation()
    let background = 'var(--mint-green';
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
                    <h2 className="transcription">Meeting Notes</h2>
                    <p className="transcription"><b>Vault Meeting #3</b></p>
                    <p className="transcription-details">May 6-7, 2018
                    <br></br>
                    Jacob's Pillow, Becket, MA</p>
                    <p className="transcription-details">Meeting Notes by Sarah Lass</p>
                    <p className="transcription-details">Participants: Rachel Boggia (RB); mayfield brooks (mb); Nena Couch (NC); Angie Hauser (AH); Ishmael Houston Jones (IHJ); Jaamil Olawale Kosoko (JOK); Sarah Lass (SL),  documenter (notes); Ellen Maynard (EM), documenter (video); Bebe Miller (BM); Lauren Slone (LS); Dana Whitco (DW); Reggie Wilson (RW)</p>
                </div>
                <img className="transcript-slash" src={ slash } />
            </div>
            <section className="flex column al-center">
                <div className="essay-width">
                    <p className="no-bottom-padding"><b>Summary of Events</b></p>
                    <p className="no-bottom-padding no-top-padding">Sunday, May 6: opening meeting/discussion, artist-artist interviews, evening work sharing, bonfire</p>
                    <p className="no-top-padding">Monday, May 7: continuing discussion, Jacob’s Pillow Archive tour with Norton Owen, closing thoughts</p>
                    <h2>Sunday, May 6</h2>
                    <p><b>Opening Meeting (1:30-3:45pm)</b></p>
                    <p><b>In attendance:</b></p>
                    <p >Rachel Boggia (RB), mayfield brooks (mb), Nena Couch (NC), Angie Hauser (AH), Ishmael Houston Jones (IHJ), Jaamil Olawale Kosoko (JOK), Sarah Lass (SL), documenter (notes), Ellen Maynard (EM), documenter (video), Bebe Miller (BM), Lauren Sloane (LS), and Dana Whitco (DW)</p>
                    <p><b>Summary of Events</b></p>
                    <p className="transcription-details">Participants introduce themselves; BM shares current thoughts on VAULT and this particular coming together; participants respond to homework questions and offer initial thoughts and interests in the ideation, practice, and artifact of archive; participants identify questions for artist-artist interviews</p>
                    <p><b>Central Points of Discussion</b></p>
                    <p>BM introduction</p>
                    <ul>
                        <li className="bullets">VAULT beginnings with Dance Fort; influence of the election and the current political climate; importance of coming together to discover the central question(s); end goal of some kind of sharing of finding-lookings</li>
                    </ul>
                    <p>Homework Question Responses</p>
                    <ul>
                        <li className="bullets">Idea of the “artist-driven archive” and subsequent questions around access and the dissemination of resources (DW)</li>
                        <li className="bullets">Questioning how to archive improvisational work (IHJ)</li>
                        <li className="bullets">Questioning how to navigate the change of context when reimagining works (IHJ)</li>
                        <li className="bullets">Blood memory (JOK), the living body as archive (JOK), individual memory as archive (IHJ)</li>
                        <li className="bullets">Questions around the public domain, criticism/reviews, and the public archive; who’s making the archive? (JOK)</li>
                        <li className="bullets">The potential and the pitfalls of multimedia versus single media representation of works; the dance documenter as “conjuring” the work (RB)</li>
                        <li className="bullets">What is unique about co-presence and what is unique about digital/online spaces? (RB)</li>
                        <li className="bullets">Rights issues, questions of access, and the conditions of archiving in large versus small institutions (NC)</li>
                        <li className="bullets">Recognizing archiving as a multifaceted activity: preservation, reformatting, active archiving (NC)</li>
                        <li className="bullets">Working with the unspeakable and illegible; how to tell stories that can’t be told (mb)</li>
                        <li className="bullets">Influence of social media (mb)</li>
                        <li className="bullets">Importance and place of the imaginary (i.e. when to live in the imaginary, not in historical detail) (mb)</li>
                        <li className="bullets">The impossibility of archive as a catalyzing force and the idea of the dance as the archive (AH)</li>
                        <li className="bullets">Interest in what and how we bring things forward with us in our lives (as people, as artists) (AH)</li>
                        <li className="bullets">As improvisers, how does our work put itself in conversation with fixity? (AH)</li>
                        <li className="bullets">How to support all kinds of art-making and art-making people when the making is not easily understood within existing institutions? (AH)</li>
                        <li className="bullets">What keeps coming back and what place does this have? (BM)</li>
                        <li className="bullets">Idea of capturing the forms that upturn the feeling (BM)</li>
                        <li className="bullets">Are there possibilities for hybrid presenting structures? How can presenters support archival work? (LS)</li>
                        <li className="bullets">Recognizing a move away from single-person, single-perspective curator/presenter (LS)</li>
                    </ul>
                    <p>Conclude by identifying central themes and discussion categories to take into artist-artist interviews: third-person versus artist-driven archive; kinesthetic sense and archive; conversation between co-presence and digital; how do we choose what we hold onto; gaps in archiving and archives; legibility and archive; to whom does it matter</p>
                    <p><b>Artist-Artist Interviews (4-6:30pm)</b></p>
                    <p><b>In attendance:</b></p>
                    <p className="transcription-details">Rachel Boggia (RB), mayfield brooks (mb), Nena Couch (NC), Angie Hauser (AH), Ishmael Houston Jones (IHJ). Jaamil Olawale Kosoko (JOK), Sarah Lass, documenter (notes) (SL), Ellen Maynard, documenter (video) (EM), Bebe Miller (BM), Lauren Sloane (LS), Dana Whitco (DW), and Reggie Wilson (RW)</p>
                    <p><b>Summary of Events</b></p>     
                    <p className="transcription-details">Determining the form the interviews will take (two artists with one witness); example/demonstration with BM and LS interviewing and mb witnessing; split into two groups with four floaters; regroup, download, and thoughts on moving forward</p>
                    <p><b>Central Points of Discussion</b></p>
                    <p>BM, LS, mb demonstration</p>
                    <ul>
                        <li className="bullets">Speaking to the questions of “to whom does it matter”</li>
                        <li className="bullets">Artist as arbiter; how to shift funding so that the artist decides what matter (LS)</li>
                        <li className="bullets">The question of “what matters” also depends on what is happening in the world (mb) and the question of what matters feels immediate and important in the current political climate (BM)</li>
                        <li className="bullets">Interest in the conversation between references built in the studio and the happenings outside of the studio</li>
                    </ul>
                    <p>Two groups for artist-artist interviews:</p>
                    <ul>
                        <li className="bullets">1) NC, IHJ, RB</li>
                        <li className="bullets">2) AH, DW, JOK</li>
                        <li className="bullets">Floaters: BM, mb, LS, RW</li>
                    </ul>
                    <p>NC and IHJ interview with RB as witness</p>
                    <ul>
                        <li className="bullets">Speaking to question of how we choose what to archive</li>
                        <ul>
                            <li className="bullets">Differences between static and growing collections (NC)</li>
                            <li className="bullets">What are the materials of the archive? What best documents it and what are its meaningful pieces (NC)</li>
                            <li className="bullets">What do I keep, what is important, and who chooses this; non-strategic and accidental archiving (IHJ)</li>
                            <li className="bullets">Disagreement as creative force—how to capture “the organ of disagreement” (RB)</li>
                            <li className="bullets">How to represent multiple voices within documentation of work; cacophony of voices versus concision in the archive (RB)</li>
                            <li className="bullets">Recognizing implicit bias; what is the role of the archivist? (RB)</li>
                        </ul>
                        <li className="bullets">Speaking to question of how to document work that is not easily documented/does not fit easily fit into archival processes</li>
                        <ul>
                            <li className="bullets">Is there a method of archiving improvisational work that actually addresses what is being addressed in the work? (IHJ)</li>
                            <li className="bullets">What can the archive do for something like improvisation? (NC)</li>
                            <li className="bullets">Identifying the gap that results from institutional policies that determine archival priorities and practices (NC and IHJ)</li>
                            <ul>
                                <li className="bullets">Importance of addressing privilege in institutions and how to more freely disseminate procedures of archiving (RB)</li>
                            </ul>
                            <li className="bullets">Under-privileging of non-proscenium works (RB)</li>
                            <li className="bullets">Other points: augmented reality in exhibitions, 3D film technology, “directionality” of archive (collecting or pushing out) </li>
                        </ul>
                        <li className="bullets">Regroup and thoughts to take forward</li>
                        <ul>
                            <li className="bullets">Difference between documentation and preservation (RW)</li>
                            <li className="bullets">What are the choices archivists are making and what are the guidelines for that?</li>
                            <li className="bullets">Who is the archive for?</li>
                            <li className="bullets">Interest in “the noun of it” (archive) and the idea of archive as “a way of encounter” (BM)</li>
                        </ul>
                    </ul>
                    <p><b>Work Sharing (8-9:30pm)</b></p>
                    <p><b>Summary of Events</b></p>
                    <p className="transcription-details">BM discusses work with/ideation around archive with online examples; Gwen Seemel TED Talk viewing; questions around ownership, transference, and bodily archive</p>
                    <p><b>Central Points of Discussion</b></p>
                    <p>BM discusses A History and Motion Bank</p>
                    <ul>
                        <li className="bullets">Interest in engaging what occupies most of our time—the making, not the showing</li>
                        <li className="bullets">AH talks about ACCAD motion capture of “story state”; evidence of transmission, artist-artist conversation, and finding of common ground</li>
                    </ul>
                    <p>BM discusses The Making Room (website and ebook)</p>
                    <ul>
                        <li className="bullets">Finding a home for all the stuff not explicitly in the piece</li>
                        <li className="bullets">BM talks about collaboration with Lily Skove and the priority of documenting experience as opposed to the work itself</li>
                        <ul>
                            <li className="bullets">Questions of changing “uses” of archive re-emerge (RW), ownership of objects of archive, collection of evidence versus the act/intention to collect</li>
                        </ul>
                    </ul>
                    <p>Body-body transference and bleeding of influence (mb, AH, BM)</p>
                    <ul>
                        <li className="bullets">Recognizing differences in dance communities and the predominance of online exchanges in some (RB)</li>
                    </ul>
                    <p>Bringing in non-improvisation-based work that engages with cultural forms (RW)</p>
                    <p>Questions of ownership, archiving, and access (RW)</p>
                    <p>How to go about conveying/transferring creative process (mb)</p>
                    <h2>Monday, May 7</h2>
                    <p><b>Breakfast Meeting (9:30-11:15am)</b></p>
                    <p><b>Summary of Events</b></p>
                    <p className="transcription-details">BM lays out topics for initial conversation culled from Sunday’s discussions and the agenda for the day; Zoom call with Pamela Tatge; group discussion</p>
                    <p><b>Central Points of Discussion</b></p>
                    <p>“Activist archive”</p>
                    <ul>
                        <li className="bullets">Archivist actively providing context, not just collecting artifacts; how can someone else understand the work?</li>
                        <li className="bullets">The emergent strategy of archiving that is specific to each artist (JOK, discussing Cori Olinghouse’s master’s thesis)</li>
                        <li className="bullets">Who gets to have an archive and the role of institutions and collection practices on this (DW and NC)</li>
                        <ul>
                            <li className="bullets">Archiving with artist-centered organizations like Movement Research (RB and JOK)</li>
                        </ul>
                        <li className="bullets">How do we capture our own work? (RW)</li>
                        <li className="bullets">Catalogues, zines, etc. (Danspace and Judy Hussie-Taylor’s work) and archive as accompaniment, not representation</li>
                    </ul>
                    <p>Possibility of a 360-degree view of our work and accessibility of that? (BM)</p>
                    <p>Curation (choice-making in collecting and arranging) and circumstance as curator (AH)</p>
                    <p>The archive that becomes its own presentation (JOK)</p>
                    <ul>
                        <li className="bullets">The archive has its own personality and drivers and the live performance has its own personality and drivers (AH)</li>
                    </ul>
                    <p>New ecology between artist and audience that the archive can engage with (BM)</p>
                    <p>Institutional determination of importance versus artist determination of importance as not always aligned and crucial to address (LS)</p>
                    <p>“Meta Academy: Embodied Online Co-Creativity” and the possibilities for the internet as a “wilderness” space (RB)</p>
                    <p><b>Jacob’s Pillow Archive Tour (11:15-12:30)</b></p>
                    <p><b>Summary of Events</b></p>
                    <p className="transcription-details">Discussion with Norton Owen about Pillow’s approach to archiving; tour of Pillow’s Dance Interactive</p>
                    <p><b>Central Points of Discussion</b></p>
                    <p>Who is coming/engaging informs the archive’s configuration</p>
                    <p>How can archives facilitate discovery?</p>
                    <p>Dual activity of preservation and engagement</p>
                    <p>Important of creating opportunities for information to be meaningful (not just about having it and making it available)</p>
                    <p><b>Closing Discussion (1:30-2pm)</b></p>
                    <p><b>Summary of Events</b></p>
                    <p className="transcription-details">Closing thoughts with eye towards what might be next</p>
                    <p><b>Central Points of Discussion</b></p>
                    <p>Importance of our sensing field and our trading of/in process (BM)</p>
                    <p>Possibility of artist-initiated repository</p>
                    <p>Relationship between documentarian and the work/the artist (EM)</p>
                    <p>Possibilities for archiving from the “front end” (AH)</p>
                    <p>Involvement of funders in gatherings as crucial (LS)</p>
                    <p>Funding for creative documentation projects?</p>
                    <p>Individual, dancer documentation</p>
                </div>
            </section>
        </div>
    </>
  );
}

export default MeetingThreeNotes;