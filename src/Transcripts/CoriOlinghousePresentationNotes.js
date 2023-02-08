// ====== COMPONENTS ======
import { useLocation } from "react-router-dom";

const CoriOlinghousePresentationNotes = (props) => {

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
        <div style={{ backgroundColor: background, color: textColor }} className="top-padding essay-padding flex column al-center">
            <div className="w-one-hundred flex">
                <img className="transcript-slash" src={ slash } />
                <div className="column w-fifty">
                    <h2 className="transcription">Presentation</h2>
                    <p className="transcription"><b>Vault Meeting #5</b></p>
                    <p className="transcription-details">January 18-19, 2020
                    <br></br>
                    Ann Hamilton and Michael Mercil's Studio, Columbus, OH</p>
                    <p className="transcription-details">Meeting Notes by Alex Springer</p>
                    <p className="transcription-details">Presenter: Cori Olinghouse, Dance Artist</p>
                </div>
            </div>
            <section className="flex column al-center">
                <div>
                    <p><b>Presentation 3:</b></p>
                    <ul>
                        <li className="bullets">Interdisciplinary artist. In 2017 developed The Portal, currently working on it, not yet online. Excited to be in a room with so many exciting thoughts about preservation to issues of representation and beyond. Thank you Bebe!</li>
                    </ul>
                    <ul>
                        <li className="bullets">Much of the work Cori does moves in and out of museum, school, stage. Interface with archivists, artists, scholars. See gaps in ways different spaces are constructed. The Portal is a container to advocate for ways of knowing that come up in artist’s practice and facilitate that knowledge.</li>    
                    </ul>
                    <ul>
                        <li className="bullets">Performance is processual by nature. Needs to be a shift away from ideas of original or reproduction. Translation and interpretation.</li>
                    </ul>
                    <ul>
                        <li className="bullets">Rebecca Schneider – talks about reenactment. Performance remaining but remaining differently.</li>
                        <li className="bullets">What’s fraught when we are trying to have the document live up to original.</li>
                        <li className="bullets">Let the newly generated material behave differently…</li>
                        <li className="bullets">How different media are behaving as forms to themselves?</li>
                    </ul>
                    <ul>
                        <li className="bullets">Drawing from background in improvisation. Iterative and processual.</li>
                    </ul>
                    <ul>
                        <li className="bullets">The Portal arose from need</li>
                        <li className="bullets">What does it mean to archive a performance and for what future? What is archive as an ethical and embodied practice?</li>
                        <li className="bullets">Grounded in practice and are artist-driven. Hearing this word a lot today.</li>
                        <li className="bullets">For Cori – co-created artist to artist. Relational dynamics</li>
                        <li className="bullets">Process of archiving is not separate from creative process. Extending imagination.</li>
                        <li className="bullets">Not always about preservation, but about creating active feedback loop that moves and oscillates</li>
                        <li className="bullets">Not treating them as binaries – co-constituted.</li>
                        <li className="bullets">Quality of regeneration, something that is living or form that is living. Leads back to improvisation.</li>
                    </ul>
                    <ul> 
                        <li className="bullets">To do this work requires tremendous resource. Playing with partiality and the resources available. When working in the Trisha Brown archive it was a multi-year project covering a 50-year history. Working in one artist’s 50 years of work.</li>
                    </ul>
                    <ul>    
                        <li className="bullets">Project with Melinda Ring: we took a series of photographs of found objects she discards or returns after each performance. Something that isn’t saved?</li>
                        <li className="bullets">Understand invaluable ways of knowing that show up in artist process that do not show up in process. Impossibility to take up as a practice worth practicing.</li>
                    </ul>
                    <ul>     
                        <li className="bullets">Archive reveala art attachments. Memories or attachment to objects. Began in childhood, endlessly fascinated with land contours and topographical maps. Father devised musical scores based on maps and characters, the Wooleys.</li>
                    </ul>
                    <ul>
                        <li className="bullets">Kathleen Stewart reference – being IN SOMETHING</li>
                    </ul>
                    <ul>
                        <li className="bullets">Body as a type of TOPO, a topography, a site something that moves.</li>
                    </ul>
                    <ul>
                        <li className="bullets">Ways of knowing that emerge from creative practice.</li>
                    </ul>
                    <ul>
                        <li className="bullets">Trisha Brown archive – 50 years of archival materials.</li>
                        <li className="bullets">Practice with Trisha – throwing and catching – give material and dancers to interpret. Live process of editing. Distillation of…</li>
                        <li className="bullets">Kinetic process of call and response. Call and response shows up in many forms. Call and response is one methodology important to call into practice.</li>
                    </ul>
                    <ul>
                        <li className="bullets">Trisha said, “Asking someone to dance like her is like asking someone to sneeze like I do…”</li>
                    </ul>
                    <ul>
                        <li className="bullets">Haptic notating and analog material that was creating feedback loop. Going between page and writing and dancing. To build and internalize lexicon of movement as it is being developed. Notebooks not meant to be seen. Find their way onto paper video and film.</li>
                    </ul>
                    <ul>    
                        <li className="bullets">Presence of writing and language in her archive is not something people know about her. Her archive enables multiple narratives to emerge.</li>
                        <li className="bullets">References falling on croquet stick when she is 5, it is one of the gestures that shows up in Water Motor. Language for transmission becomes mechanical, anatomical within studio process. Poetic language that was showing up in her own creative process. It was indexing what she was thinking while making. Space of poetics important because it shows how the kind of language that is used means something and neuronally incites in the body.</li>
                    </ul>
                    <ul>    
                        <li className="bullets">Trisha’s influence of Leon James and complexity in upper body lower body. What it says about culture, race, etc.…</li>
                        <li className="bullets">Go through process of deep listening by way of trying to understanding kinship to the way an artist is working. Carolyn Lucas writing abbreviated language that shows code and texture and nuance of the work. Details that get lost or are missing from the archive. Carolyn’s notes describe a daily record of what is on the tapes. Database maps movement, phrases, or gestures where you can search for language.</li>
                    </ul>
                    <ul>
                        <li className="bullets">Language conjures something in the body.</li>
                    </ul>
                    <ul>
                        <li className="bullets">Melinda Ring Impossible Dance: From 50-year history to no resource. Cori invited Melinda to gift a dance to another dancer Kai Kleinbard. The dance was the last time Melinda improvised on stage. She translated it to Kai. Wanted him to retain his own gestural vocabulary. Melinda more upright, Kai lower to ground.</li>
                    </ul>
                    <ul>   
                        <li className="bullets">Process of gifting/exchange, gifted her way of improvisation to another artist. Melinda was coming with a set of unusual influences. Worked in diverse range of influences embedded in her body that had never been transmitted in this way. Attempted to set it up in a non-hierarchical way, coming from repertory where attempting to get to a definitive movement to create room for translation and interpretation. Like literary translation, letting it vibrate to keep the essence alive. Taking the project up as a book so future dances can continue to be transmitted. </li>
                    </ul>
                    <ul>   
                        <li className="bullets">Usual forms of documentation are not always aesthetically serving the work. Creating messy assemblages rather than upright wide shot. Experimenting and letting the clown impulse be a part of the process. Objects were documenting the scene as well with GoPro cameras. Looking into ways of documenting that capture the life within the work.</li>
                    </ul>
                    <ul>
                        <li className="bullets">Out of this Melinda created a six-person version. Realized that all her dances are Impossible Dances – has become an education project that she can take with her.</li>
                    </ul>
                    <ul>
                        <li className="bullets">Trisha Brown archives will be accessible soon. The database will be a digital object that people can explore, along with the archives being placed at the New York Public Library for the Performing Arts. Looking to build collective access database that lives on its own site.</li>
                    </ul>
                    <ul>    
                        <li className="bullets">Fetishized terms…</li>
                    </ul>
                    <ul>
                        <li className="bullets">Body as archive</li>
                        <li className="bullets">Body to body transmission (this is only step one)</li>
                    </ul>
                    <ul>
                        <li className="bullets">Really asking how transmission is happening – not same for every artist. How is that emerging?</li>
                    </ul>
                    <ul>
                        <li className="bullets">Multiple origin stories in creation process. Borders are messy. </li>
                    </ul>
                </div>
            </section>
        </div>
    </>
  );
}

export default CoriOlinghousePresentationNotes;