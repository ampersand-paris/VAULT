// ====== COMPONENTS ======
import { useLocation } from "react-router-dom";

const MeetingFourNotes = (props) => {


    return (
    <>
        <div className="top-padding flex column al-center sand">
            <div className="essay-width flex space-btwn evergreen-txt">
                <div className="column">
                    <h2 className="transcription">Meeting Notes</h2>
                    <p className="transcription"><b>Vault Meeting #4</b></p>
                    <p className="transcription-details">November 16, 2019
                    <br></br>
                    Dance Center of Columbia College, Chicago, IL</p>
                    <p className="transcription-details">Meeting Notes by Lila Hurwitz</p>
                    <p className="transcription-details">Participants: Julia Antonick, Bonnie Brooks, Ellen Chenoweth, Margi Cole, Jenai Cutcher, Ginger Farley, J'sun Howard, Lila Hurwitz, Jane Jerardi, Darrell Jones, Erin Kilmurray, Jonathan Meyer, Bebe Miller, Diana Muhammad</p>
                </div>
                <img className="transcript-slash" src="/Images/GreenSlash.svg" />
            </div>
            <section className="flex column al-center sand evergreen-txt">
                <div className="essay-width">
                    <p><b>Diana:</b></p>
                    <ul>
                        <li className="bulllets">Who owns Vault?</li>
                        <li className="bulllets">Could be helpful for young dance-makers</li>
                    </ul>
                    <p><b>Darrell:</b> Going to the Wall DVD</p>
                    <p><b>Erin:</b> Define difference between digital and analog</p>
                    <p><b>Jane:</b></p>
                    <ul>
                        <li className="bulllets">Archiving is her job</li>
                        <li className="bulllets">Kind of ambivalent; archiving happening all the time now</li>
                        <li className="bulllets">Doesn’t ever dig into archives that are there; wants to, but no time; feels like a luxury</li>
                        <li className="bulllets">Resources: to pay people to be in piece; to pay people to document it; just buys another hard drive, tons sitting there</li>
                        <li className="bulllets">Live and analog experience becoming more important</li>
                        <li className="bulllets">Tino Sehgal: highly regulated archives, makes them more “valuable”</li>
                        <li className="bulllets">Should I be sharing process? Too much given away before show?</li>
                    </ul> 
                    <p><b>Bebe:</b> The idea of audience then is involved</p>
                    <p><b>Jonathan:</b></p>
                    <ul>
                        <li className="bulllets">Prejudice against digital; but rely on it for grant-writing, etc.</li>
                        <li className="bulllets">Hasn’t investigated possibilities of digital engagement for audiences</li>
                    </ul>
                    <p><b>Julia:</b></p>
                    <ul>
                        <li className="bullets">Always purging; what is more relevant to now; what do I have time/space to deal with?</li>
                        <li className="bullets">Editing for artistic project or for time/space management</li>
                        <li className="bullets">Baby boomer parents, history of getting rid of something</li>
                    </ul> 
                    <p><b>Margi:</b></p>
                    <ul>
                        <li className="bullets">24 years worth of stuff; necessity to let it go; how to choose; who it’s important to</li>
                        <li className="bullets">Discoveries of going through that material</li>
                        <li className="bullets">Bebe has said “co-presence”; M says it’s the archive itself, not tangible</li>
                    </ul>
                    <p><b>Ginger:</b></p>
                    <ul>
                        <li className="bullets">Dispersed collective memory</li>
                        <li className="bullets">“Remembering” a body word; any memory is already different between people; which pieces of memory did people take with them?</li>
                        <li className="bullets">Memory is an act of creation</li>
                        <li className="bullets">Various recording devices: human body with mind in it; digital technologies are cool but human memory is especially</li>
                        <li className="bullets"></li>
                    </ul>
                    <p><b>Diana:</b></p>
                    <ul>
                        <li className="bullets">Resource: keep videos as opportunity for reflection; that changed with YouTube: other people capturing their performances</li>
                        <li className="bullets">At 10-year anniversary of company, deciding what media to keep? Way easier these days.</li>
                    </ul>
                    <p><b>Erin:</b></p>
                    <ul>
                        <li className="bullets">Social media platforms as form of archive, by way of artist or audiences posting</li>
                        <li className="bullets">That peer support has been greater currency than analog archive of press or reviews</li>
                        <li className="bullets">Offers potential for relatability of work, expansion of audience base, artist sees work reflected back, using as tool for working/making</li>
                    </ul>
                    <p><b>J’sun:</b></p>
                    <ul>
                        <li className="bullets">Recent choreographer talking about Marie Kondo, seeking connection through phone</li>
                        <li className="bullets">What’s the point if not connecting to anyone; thinking of “hunger”</li>
                        <li className="bullets">Looking at Bebe Miller Company’s materials, researching his lineage</li>
                        <li className="bullets">Meat is in the process; would rather see mentor’s rehearsal than performance</li>
                    </ul>
                    <p><b>Darrell:</b></p>
                    <ul>
                        <li className="bullets">Is a body analog?</li>
                        <li className="bullets">The shelf life of materials; my memory, my body has a shelf life. What materials are escaping?</li>
                        <li className="bullets">What’s important to people around, what are they asking for (e.g., dad’s materials); figuring out what’s important by what’s requested</li>
                        <li className="bullets">“Couldn’t do it with him around”; dad had to go for materials to have life out there</li>
                        <li className="bullets">Jawole [Willa Jo Zollar] has similar recent convening about archiving; how to let materials go</li>
                    </ul> 
                    <p><b>Margi:</b></p>
                    <ul>
                        <li className="bullets">You’re the key translator of those materials; what happens if you’re not there to give them over?</li>
                    </ul>
                    <p><b>Bebe:</b></p>
                    <ul>
                        <li className="bullets">Archive is different than documentation</li>
                    </ul>
                    <p><b>Bonnie:</b></p>
                    <ul>
                        <li className="bullets">Fluidity/clarity of private v. public sphere (what do we make available)</li>
                        <li className="bullets">“Epistolic succession”; body to body teaching choreography, very different than doing it from documentation</li>
                        <li className="bullets">How do we prioritize what’s important? It’s deeply personal.</li>
                        <li className="bullets">50 years of writing journals might not survive her; currently are a resource to her</li>
                        <li className="bullets">To whom are these materials a resource?</li>
                        <li className="bullets">Historically have preserved the dances; now Bebe and others are preserving media as art-making resources themselves</li>
                    </ul>
                    <p><b>Ginger:</b></p>
                    <ul>
                        <li className="bullets">Long progression from historical presentation (for God) to where we are now</li>
                    </ul>
                    <p><b>Darrell:</b></p>
                    <ul>
                        <li className="bullets">Ownership of materials (Jawole); can artist still have access to them? Library of Congress v. university. Where do I want the home for these? Who are the gatekeepers?</li>
                    </ul>
                    <p><b>Ellen:</b></p>
                    <ul>
                        <li className="bullets">Liz Lerman/Dance Exchange: who owns the work?</li>
                        <li className="bullets">Hard to swim past emotional layer; death and mortality</li>
                    </ul>
                    <p><b>Jonathan:</b></p>
                    <ul>
                        <li className="bullets">Desire for immortality; does digital seduce you into thinking you can last forever?</li>
                    </ul>
                    <p><b>Ginger:</b></p>
                    <ul>
                        <li className="bullets">If everything was gone (giant digital fail), what would there be left?</li>
                    </ul>
                    <p><b>Margi:</b></p>
                    <ul>
                        <li className="bullets">Rely on others to remember</li>
                    </ul>
                    <p><b>Bebe:</b></p>
                    <ul>
                        <li className="bullets">Rachel Boggia: live bodies in room what is important; create virtual community, live people making work in time/space around world</li>
                        <li className="bullets">We are making threads of furthered information</li>
                    </ul> 
                    <p><b>Jenai:</b></p>
                    <ul>
                        <li className="bullets">Use studio as metaphor as archive; steeped in archiving all the time, last thing you wanna do is thinking about documenting/media management</li>
                        <li className="bullets">Accidental archivist; always been part of dance practice, way to catch up to peers b/c started training late</li>
                        <li className="bullets">Tap dancers are actively archiving in a specific way more than other dance forms.</li>
                        <li className="bullets">Think of digital as portal into materials; standing at threshold of studio</li>
                        <li className="bullets">Active, personal, living, breathing, generative</li>
                        <li className="bullets">What is my role as archivist in Chicago dance history? Facilitating documentation, story-telling, remembering</li>
                    </ul> 
                    <p><b>Bebe:</b></p>
                    <ul>
                        <li className="bullets">Importance is making the record</li>
                        <li className="bullets">Digital audience is varied/complex, not a singularity</li>
                        <li className="bullets">Ann Carlson: relearned her solos, as an archive; danced them for Margaret Jenkins, only person in room</li>
                        <li className="bullets">Have control over scale of access</li>
                        <li className="bullets">Humanity of it can’t be forgotten, even on digital side</li>
                    </ul> 
                    <p><b>Margi:</b></p>
                    <ul>
                        <li className="bullets">Richness of Ann Carlson, her doing that, we understand the richness of that; how do we quantify that to a funder?</li>
                        <li className="bullets">We know that smaller audience experiences permeates in way that’s not necessary tangible/fundable</li>
                        <li className="bullets">Their capacity to recognize the value of that exercise (relearning solos, etc.)</li>
                    </ul> 
                    <p><b>Bebe:</b></p>
                    <ul>
                        <li className="bullets">Funder has a job to do that’s not our job; ultimately, I don’t wanna fill in what funder wants</li>
                    </ul> 
                    <p><b>Ginger:</b></p>
                    <ul>
                        <li className="bullets">Politics of identity; about the one</li>
                        <li className="bullets">Smaller class size is more valuable</li>
                    </ul> 
                    <p><b>Diana:</b></p>
                    <ul>
                        <li className="bullets">Connecting, work in progress; adds to what is archived about particular work</li>
                    </ul> 
                    <p><b>Jane:</b></p>
                    <ul>
                        <li className="bullets">What value system are we ascribing to when we talk about archives?</li>
                        <li className="bullets">Western systems</li>
                        <li className="bullets">Camille Brown: what info is transmitted over generations?</li>
                        <li className="bullets">Analog, body to body, over generations, simultaneously as materials are being archived</li>
                    </ul> 
                    <p><b>Diana:</b></p>
                    <ul>
                        <li className="bullets">Is what is out there what the artist would have wanted to be out there? e.g., Katherine Dunham</li>
                    </ul> 
                    <p><b>J'Sun:</b></p>
                    <ul>
                        <li className="bullets">Aunt’s red velvet recipe: won’t give him recipe, why? Will he ever get recipe?</li>
                        <li className="bullets">Grandmother’s biscuits: approached by manufacturer, she said no; what’s precious about archive?</li>
                    </ul> 
                    <p><b>Bebe:</b></p>
                    <ul>
                        <li className="bullets">Recipe measurements aren’t digitizable</li>
                    </ul> 
                    <p><b>Ginger:</b></p>
                    <ul>
                        <li className="bullets">Like motion capture</li>
                    </ul> 
                    <p><b>Ellen:</b></p>
                    <ul>
                        <li className="bullets">Sense of embodiment in how recipe is captured (oil stains, handwriting)</li>
                        <li className="bullets">Throwing away archives feels like throwing away her; mark of the body in an archive</li>
                    </ul> 
                    <p><b>Ginger:</b></p>
                    <ul>
                        <li className="bullets">Reliquary</li>
                    </ul> 
                    <p><b>Bebe:</b></p>
                    <ul>
                        <li className="bullets">PBS documentary of African-American dance; what permission was given, what was captured?</li>
                        <li className="bullets">We’re asking that question now; any archive is subject to… it isn’t controllable</li>
                    </ul> 
                    <p><b>Margi:</b></p>
                    <ul>
                        <li className="bullets">Studied with particular teacher; now can see archived videos</li>
                    </ul> 
                    <p><em>Small groups of 4–5 people; use four questions as jumping-off point:</em></p>
                    <ol>
                        <li>What strategies and experiences can you share related to digital or analog archiving and your current practice?</li>
                        <li>How has (your) dance making been affected (or not) by the virtual/digital availability of your work?</li>
                        <li>What do you assume (in the best sense of the word) about audience and your practice?</li>
                        <li>What are some changes imaginable regarding company/independent artist strategies, audiences, funding and presenting structures?</li>
                    </ol>
                    <p><em>How would you want this info disseminated? What would be helpful? Sent to whom?</em></p>
                    <p><b>Bonnie:</b></p>
                    <ul>
                        <li className="bullets">Radical archiving; expanding canon of what’s considered archival work</li>
                        <li className="bullets">Power dynamics around how funding is distributed; needs advocacy and reimagining</li>
                    </ul>
                    <p><b>Ginger:</b></p>
                    <ul>
                        <li className="bullets">Close-in supporters that are influencers in the funding field (NDP, e.g.)</li>
                        <li className="bullets">Share with them what would help educate them about a more democratic process</li>
                        <li className="bullets">Annual meeting via Chicago Dance Forum; ongoing active exchange with artists</li>
                    </ul>
                    <p><b>Bebe:</b></p>
                    <ul>
                        <li className="bullets">MAP fund; modified how/who they fund in response to cultural shift; nimble</li>
                        <li className="bullets">Artists insisting on what they hold dear, and in that way changing funders’ perspective on what’s important</li>
                    </ul>
                    <p><b>Ellen:</b></p>
                    <ul>
                        <li className="bullets">Value of getting people in room for substantial amount of time; productive/generative</li>
                        <li className="bullets">CDF artists: we just wanna talk with each other</li>
                    </ul>
                    <p><b>Jane:</b></p>
                    <ul>
                        <li className="bullets">Themes from small group: real-life v digital; what do we want an 11-year-old to know? Future history in regards to materials. Pedagogy: what do we want another generation to be able to view. As opposed to what we value now.</li>
                        <li className="bullets">Intergenerationalness</li>
                    </ul>
                    <p><b>Diana:</b></p>
                    <ul>
                        <li className="bullets">How can info be used as a tool to educate those that come after us that want to be dance-makers?</li>
                    </ul>
                    <p><b>Bebe:</b></p>
                    <ul>
                        <li className="bullets">Center for Creative Research; Eiko, Ralph Lemon, M. Jenkins, etc.; 8 years; power in proximity, without knowing exactly what we’d do</li>
                        <li className="bullets">In the repeating of meeting that there’s implied furthering</li>
                    </ul>
                    <p><b>Ginger:</b></p>
                    <ul>
                        <li className="bullets">How does Bebe Miller Company share materials with Vault attendees?</li>
                        <li className="bullets">Jumping off point for generative work</li>
                        <li className="bullets">Recollection/reconstruction and generation</li>
                        <li className="bullets">Maybe it’s easier to archive work if it’s not your own</li>
                    </ul>
                    <p><b>Bebe:</b></p>
                    <ul>
                        <li className="bullets">Do these conversations change what happens when you go back to the studio?</li>
                    </ul>
                    <p><b>Jane:</b></p>
                    <ul>
                        <li className="bullets">Are there themes that have arisen in the conversations?</li>
                    </ul>
                    <p><b>Bebe:</b></p>
                    <ul>
                        <li className="bullets">Jacob’s Pillow Vault convening theme: Difference between documentation and archiving</li>
                        <li className="bullets">Chicago Vault convening theme: generational factors; contact with audience</li>
                        <li className="bullets">Any follow-up? Send us email</li>
                    </ul>
                    <p><b>Small group summaries:</b></p>
                    <p><b>Erin:</b></p>
                    <ul>
                        <li className="bullets">Lack of hub in Chicago for practice/presentation/conversation outside of learning institutions (like Gibney)</li>
                        <li className="bullets">Archiving as immortality; does that need to be solved? Do we try to change dance’s emphemerality?</li>
                        <li className="bullets">De-growth: compost back into sphere instead of more more more</li>
                    </ul>
                    <p><b>Darrell:</b></p>
                    <ul>
                        <li className="bullets">Customization (Bonnie’s word) of types of archival products depending on artist</li>
                        <li className="bullets">What is blue sky vision of Vault? (Jawole talked about that) (Bebe: rub of creative practice between analog and digital; what happens in the room when you’re making, knowing these two things are available? Needs second meeting of each group; and then what and then what…)</li>
                    </ul>
                    <p><b>Diana:</b></p>
                    <ul>
                        <li className="bullets">Jonathan: analog allows for risk and discomfort; digital offers information</li>
                        <li className="bullets">Diana: generational piece, how story is told, everyone receives different experience</li>
                        <li className="bullets">Jane: difference between work and document of work; everything has potential to grow into new work</li>
                        <li className="bullets">Jenai: what translation looks like; collecting history, improv</li>
                    </ul>
                    <p><b>Bebe:</b></p>
                    <ul>
                        <li className="bullets"></li>
                        <li className="bullets"></li>
                    </ul>
                    <p><b>Bonnie:</b> “Integrity” is at heart of the project; beyond their legacy, available resources, etc., all has to come back to integrity of how they wanna work and what DNA they leave behind.</p>
                    <p>“The curation of the documentation is the archive”</p>
                    <p>Hindsight is leading the viewer to follow where the artist chooses to go (it’s after the fact)</p>
                </div>
            </section>
        </div>
    </>
  );
}

export default MeetingFourNotes;