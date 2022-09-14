// ====== COMPONENTS ======
import { useLocation } from "react-router-dom";

const MeetingTwoNotes = (props) => {


    return (
    <>
        <div className="top-padding flex column al-center sand">
            <div className="essay-width flex space-btwn evergreen-txt">
                <div className="column">
                    <h2 className="transcription">Meeting Notes</h2>
                    <p className="transcription"><b>Vault Meeting #2</b></p>
                    <p className="transcription-details">August 7, 2017
                    <br></br>
                    On the Boards, Seattle, WA</p>
                    <p className="transcription-details">Meeting Notes by Lila Hurwitz</p>
                    <p className="transcription-details">Participants: Betsey Brock, Alice Gosti, Pat Graney, Dayna Hanson, Angie Hauser, Ishmael Houston-Jones (via Zoom), Lila Hurwitz (via Zoom), Raja Feather Kelly, Tonya Lockyer, Bebe Miller</p>
                </div>
                <img className="transcript-slash" src="/Images/GreenSlash.svg" />
            </div>
            <section className="flex column al-center sand evergreen-txt">
                <div className="essay-width">
                    <p>Recording for OtB is an issue; can’t record without artists signing the release (so apropos to this conversation)</p>
                    <ul>
                        <li className="bullets">Shared ownership with OtB, and BMC has final sign-off</li>
                        <li className="bullets">Verbal understanding: BMC is watching out for everyone and may share this and will make sure everyone’s okay with it</li>
                        <li className="bullets">Does BMC own this?</li>
                        <li className="bullets">OtB will revise the release agreement</li>
                        <li className="bullets">Maybe OtB.TV can include this conversation in their bookshelves</li>
                    </ul>
                    <p><b>Bebe:</b></p>
                    <ul>
                        <li className="bullets">Already feel the performance of the conversation; we’re really talking with each other about our field</li>
                        <li className="bullets">Reminder to drop the filter if we can</li>
                        <li className="bullets">Background: convo with Lane; DanceFort; sharing about archiving process, archiving work over time; fast-forward to election, got curious about what/how are we doing with the new lens; work isn’t collected/dispersed in same way it used to—rub of two axes, vertical (former storage) and horizontal (current way of dispersal);</li>
                        <li className="bullets">Horizontal dispersal: e.g., Snapchat, new relationship to time and presence, and the tell—all of it goes into the making that changes it, it’s catalytic</li>
                    </ul>
                    <p><b>Pat:</b> immediacy and documentation way of sharing is everything</p>
                    <p><b>DH:</b> we think of media being inherently documentary and performance is inherently ephemeral</p>
                    <p><b>BB:</b> new ways of media might be more in alignment with live performance</p>
                    <p><b>TL:</b> interns now printing out things that were only online (chapbook, articles, etc.)</p>
                    <ul>
                        <li className="bullets">People watching FB live feeds while they’re happening, and also afterwards</li>
                    </ul>
                    <p><b>AG:</b> “documentation” is no longer happening just by you and controlled by you, others are documenting it</p>
                    <ul>
                        <li className="bullets">For her, she wants to know what the audience sees</li>
                        <li className="bullets">Hashtag has been a way to record an artist or brand</li>
                    </ul>
                    <p><b>RFK:</b> hashtag have always existed, it’s just more/different access to it</p>
                    <p><b>Bebe:</b> we’re not older or younger artists, we’re “current” artists</p>
                    <ul>
                        <li className="bullets">What are the tools available and how are we using them</li>
                    </ul>
                    <p><b>AH:</b> the scale of time, archiving beyond people that are living now, who had first touched those experiences</p>
                    <ul>
                        <li className="bullets">What is the thing you’re interested in preserving forward (not tapes, notes, etc.). What are the parts that are enough to share?</li>
                        <li className="bullets">Does the dissemination require a person to be there? Example of talk at Smith with movement and talking and etc.—pods of archiving</li>
                    </ul>
                    <p><b>TL:</b> as a dance history teacher, I want recordings of the stuff and reasons why it came to be</p>
                    <p><b>RFK:</b> what’s the value of going back; why archive, what’s the purpose of archiving? What kind of value do we place on that? How does that start to separate people? How well can we reimagine the experience? How is that used as currency?</p>
                    <p><b>AG:</b> who gets to choose who’s/what’s archived?</p>
                    <ul>
                        <li className="bullets">Another obsession with accumulation of things?</li>
                        <li className="bullets">Other side: cultures that get erased</li>
                    </ul>
                    <p><b>AH:</b> looking at what we have brought forward in the last century</p>
                    <ul>
                        <li className="bullets">Things that we’ve determined are important, but they’re just moments—videos of dances that happened to be pulled forward</li>
                        <li className="bullets">Some moments don’t mean anything without connection to experience</li>
                        <li className="bullets">Whole universe that hasn’t been picked up and moved forward</li>
                    </ul>
                    <p><b>RFK:</b> what is archive?</p>
                    <ul>
                        <li className="bullets">Description of archive is similar to description of making live performance: how to capture/encapsulate use the past four years of work into an hour</li>
                    </ul>
                    <p><b>BB:</b> synecdoche; things that connect you to deeper experience; part of something that refers to the whole of something</p>
                    <p><b>Pat:</b> triptych of old pieces at OtB</p>
                    <p><b>Bebe:</b> archive depends on who is archiving, as opposed to recipient</p>
                    <ul>
                        <li className="bullets">That’s why an artist-driven archive is important</li>
                    </ul>
                    <p><b>Ann Carlson:</b> relearning her work as a way of archiving them</p>
                    <p><b>Dayna:</b> beyond just digitizing 33 Fainting Spells but how to really archive it</p>
                    <ul>
                        <li className="bullets">Sounds more fun to get back into studio with people who you made piece with and see what you remember, without video to refer to</li> 
                        <li className="bullets">Less about verifying what it was when it happened</li>
                    </ul>
                    <p><b>Bebe:</b> reads her essay from Canada</p>
                    <p><b>AG:</b> not just archiving what we’re doing, but the reverse</p>
                    <ul>
                        <li className="bullets">Archiving the world, not just the work</li>
                    </ul>
                    <p><b>TL:</b> yes, artist-driven archive, but people on the outside might know more of what to include</p>
                    <ul>
                        <li className="bullets">Stories really capture what happened in Russia for her, not recordings</li>
                    </ul>
                    <p><b>IHJ:</b></p>
                    <ul>
                        <li className="bullets">Jennifer Monson remembering a piece in a way that didn’t happen (her washing John Berndt’s back, or vice-versa)</li>
                    </ul> 
                    <p><b>The Washcloth Gap</b></p>
                    <p><b>RFK:</b> empathy</p>
                    <ul>
                        <li className="bullets">Liz Oakley’s (sp?) documentary</li>
                    </ul>   
                    <p><b>AG:</b> “translation”</p>
                    <p><b>BB:</b> what’s different about archive and translation?</p>
                    <p><b>DH:</b> timing of OTB.TV recording; piece was edited/revised after recording</p>
                    <p><b>RFK:</b> archive can be complete opposite of what is done on stage</p>
                    <p><b>AG:</b> commercialization of SnapChat</p>
                    <ul>
                        <li className="bullets">Younger generation going back to more analog</li>
                    </ul>
                    <p><b>TL:</b></p>
                    <ul>
                        <li className="bullets">Distribution and context</li>
                        <li className="bullets">Documentary film: there’s a co-author; we know it’s not subjective</li>
                    </ul>
                    <br></br>
                    <p><b>BREAK</b></p>
                    <br></br>
                    <p><b>Bebe:</b> archive and process—is this really an issue?</p>
                    <ul>
                        <li className="bullets">Are we looking at how we make? Or that we make? Or something else?</li>
                    </ul>
                    <p><b>Pat:</b> communicating process is as important than the actual thing that’s seen</p>
                    <p><b>BB:</b> is it artists’ or institutions’ responsibility to archive? What gets archived, and for whom?</p>
                    <p><b>AH:</b> difference between traditional archiving and archival projects</p>
                    <ul>
                        <li className="bullets">Often talk about archive in relationship to one person; but it’s a super-collaborative activity</li>
                        <li className="bullets">Kind of goes in opposite direction than what we’re all working towards</li>
                    </ul>
                    <p><b>Bebe:</b> maybe at Vault we’re gathering other definitions of what archiving is</p>
                    <ul>
                        <li className="bullets">Implicit hierarchy in ownership of materials</li>
                    </ul>
                    <p><b>RFK:</b> has now heard two stories of how circumstances have led to things not able to learn in archives</p>
                    <p><b>Bebe:</b> maybe Vault offers a variety of framing devices</p>
                    <ul>
                        <li className="bullets">Maybe has nothing to do with institution; tools that artists can use</li>
                    </ul>
                    <p><b>Pat:</b> “Library of Water”</p>
                    <ul>
                        <li className="bullets">In dance, we always acquiesce, we never demand, but I want my work documented in this particular way</li>
                    </ul>
                    <p><b>RFK:</b> it’s “OTB’s archive,” but not the artists—re: how language changes it</p>
                    <ul>
                        <li className="bullets">Be clear in language about what it really is</li>
                        <li className="bullets">Graphic of cube, and every time it flips, you hear/see from the dramaturg, dancer, etc.</li>
                    </ul>
                    <p><b>AH:</b> Wooster Group’s “dailies”</p>
                    <ul>
                        <li className="bullets">Capturing the jokes, other fleeting moments</li>
                    </ul>    
                    <p><b>Dayna:</b> showed glyphs</p>
                    <p><b>LH:</b> conversations keeps veering mostly to how/what to archive of product and process</p>
                    <p><b>TL:</b> unsaid binary between institution and artist; how is binary helping us?</p>
                    <ul>
                        <li className="bullets">“curator” means “to care for”</li>
                        <li className="bullets">Cunningham/Cage already archiving from very beginning of their collaboration</li>
                    </ul>
                    <p><b>AG:</b> Sara Shelton Mann never been asked to be archived</p>
                    <ul>
                        <li className="bullets">Who decides who gets archived, and why</li>
                        <li className="bullets">Part of important family trees</li>
                    </ul>
                    <p><b>Bebe:</b> showed Dance Fort</p>
                    <p><b>AH:</b> As you’re trying to “fix” something, time is moving on</p>
                    <p><b>AH:</b> it took her making her own durational performance before she really experienced durational performance</p>
                    <p><b>RFK:</b> would other/news ways to archive, change the way work was made?</p>
                    <p><b>Bebe:</b> every moment is framed, how does that affect moment?</p>
                    <p><b>AH:</b> have gotten used to documenting and how that changes moment; we record ourselves a lot</p>
                    <p><b>RFK:</b> need an outside person to archive even beyond the videographers who are always there, since they’ve become part of the process, too</p>
                    <ul>
                        <li className="bullets">What’s the continuation of this conversation?</li>
                    </ul>
                    <p><b>Pat:</b> let’s get other kinds of people in there?</p>
                    <p><b>BB:</b> Claudia LaRocco, interested in documentation of thing, process</p>
                    <p><b>TL:</b> NY Library of Performing Arts, maybe they’re already doing something like this?</p>
                    <ul>
                        <li className="bullets">Jackie Davis</li>
                    </ul>
                    <p><b>Bebe:</b> Dance Heritage Coalition, publications, archives</p>
                    <p><b>RFK:</b> hasn’t gone to Statue of Library, because he’s know it’s always gonna be there—same with the performing arts library</p>
                    <p><b>AG:</b> everyone went to library before the internet</p>
                    <ul>
                        <li className="bullets">Has affected how we accessed info</li>
                    </ul>
                    <p><b>BB:</b> when Bebe went to look at work at library, was it an accurate representation of the work?</p>
                    <p>(Bebe says yes)</p>
                    <p><b>IHJ:</b> but it’s a portion of the work</p>
                    <ul>
                        <li className="bullets">Maryanna Charlton (sp?)</li>
                    </ul>
                    <p><b>Next question: about how it’s showing up in the work</b></p>
                </div>
            </section>
        </div>
    </>
  );
}

export default MeetingTwoNotes;