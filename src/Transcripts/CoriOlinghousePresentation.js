// ====== COMPONENTS ======
import { useLocation } from "react-router-dom";

const CoriOlinghousePresentation = (props) => {

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
                    <h2 className="transcription">Presentation</h2>
                    <p className="transcription"><b>Vault Meeting #5</b></p>
                    <p className="transcription-details">January 18-19, 2020
                    <br></br>
                    Ann Hamilton and Michael Mercil's Studio, Columbus, OH</p>
                    <p className="transcription-details">Meeting Notes by Sarah Lass</p>
                    <p className="transcription-details">Presenter: Cori Olinghouse, Dance Artist, Archivist</p>
                </div>
                <img className="transcript-slash" src={ slash } />
            </div>
            <section className="flex column al-center">
                <div className="essay-width">
                    <p><b>Presentation 3: Cori Olinghouse</b></p>
                    <ul>
                        <li className="bullets">Interdisciplinary practitioner and artist</li>
                        <li className="bullets">The Portal: in development, currently without website</li>
                        <ul>
                            <li className="bullets">It is an answer to interdisciplinary gaps; a place to show ways of knowing that are happening in different artistic practices</li>
                        </ul>
                        <li className="bullets">Performance as processual and iterative vs. object and documented-oriented field of archiving </li>
                        <ul>
                            <li className="bullets">Shift away from thinking about an original and a reproduction towards thinking about ideas of translation and interpretation</li>
                        </ul>
                        <li className="bullets">“Behavior” and artist driven archive</li>
                        <ul>
                            <li className="bullets">Performance remains, but remains differently through its documentation</li>
                            <ul>
                                <li className="bullets">Trouble arises when documentation is expected to “behave” the same way as the actual performance</li>
                                <ul>
                                    <li className="bullets">How to let the adjacent or related materials behave differently?</li>
                                    <ul>
                                        <li className="bullets">Translation and interpretation: a way to take up form differently</li>
                                        <li className="bullets">Drawing from histories in improvisation enables thinking about form as living, iterative, processual, and systems-oriented</li>
                                    </ul>
                                </ul>
                            </ul>
                            <li className="bullets">Process of archiving is not separated from creative process</li>
                            <ul>
                                <li className="bullets">Archiving is behaving separately and affects the process as a whole</li>
                                <li className="bullets">Not always about preservation or memorialization, but about creating active feedback loop between archiving and performance</li>
                                <li className="bullets">About evoking a quality or regeneration</li>
                            </ul>
                        </ul>
                        <li className="bullets">Archiving for what future?</li>
                        <li className="bullets">How does embodied practice come alive in archive?</li>
                        <li className="bullets">Artist-driven archive is co-creative</li>
                        <li className="bullets">Permission to discard? Permission for impermanence?</li>
                        <li className="bullets">Archiving requires proximity and intimacy with artists and their practices</li>
                        <ul>
                            <li className="bullets">Ways of knowing from inside processes</li>
                            <li className="bullets">Archives reveal fraught space of attachments, there is a psychological aspect</li>
                            <li className="bullets">Embodied ways of knowing and world-ing</li>
                        </ul>
                        <li className="bullets">Engaging in ways that account for emergence and atmospheric attunements</li>
                        <ul>
                            <li className="bullets">A way to account for the various perspectives that are involved in and show up in archives</li>
                        </ul>
                        <li className="bullets">Archiving and body as living repository of knowledge</li>
                        <ul>
                            <li className="bullets">Body as topos: changes, ages, remembers, ultimately disappears</li>
                        </ul>
                        <li className="bullets">Kinetic dialogue of call and response (present in many improvisational forms)</li>
                        <ul>
                            <li className="bullets">Call and response as a methodology that is important to consider when entering questions of archiving</li>
                        </ul>
                        <li className="bullets">Analog materials (like Trisha Brown and Carolyn’s haptic note-taking, drawing, scribbling) hold textures and dimensionality of work, and are details that are often omitted from works</li>
                        <ul>
                            <li className="bullets">Archiving language development</li>
                            <li className="bullets">Language means something to the body </li>
                        </ul>
                        <li className="bullets">Melinda Ring’s Impossible Dance</li>
                        <ul>
                            <li className="bullets">Gifting the dance</li>
                            <ul>
                                <li className="bullets">Reinterpretation by other artists vs. the experience of being in a repertory company, where focus is on definitive form</li>
                                <ul>
                                    <li className="bullets">How to move away from the definitive towards ideas of translation and interpretation?</li>
                                    <li className="bullets">Letting the work abberate in its transmission</li>
                                </ul>
                            </ul>
                        </ul>
                        <li className="bullets">Haptic forms of documentation vs. market-based forms of documentation (which aren’t always serving the work)</li>
                        <li className="bullets">Forms of documentation that capture something of the live-ness of the works</li>
                        <ul>
                            <li className="bullets">One-minute oral histories from the performer</li>
                        </ul>
                        <li className="bullets">Doing work that provides insight into process might reveal deep tensions between how artist wanted to present work vs. what was actually going on in the room (IS)</li>
                        <ul>
                            <li className="bullets">Including multiple origin stories in the archiving of works (CO)</li>
                            <ul>
                                <li className="bullets">Impossibility of representing enigma of what was in the room, but it is possible to experiment with form and methods of translation</li>
                                <ul>
                                    <li className="bullets">Speaking adjacent to and nearby, but can’t make the thing behave like it behaved at the time, in the room</li>
                                </ul>
                            </ul>
                            <li className="bullets">Practices for “slow encounters” </li>
                            <ul>
                                <li className="bullets">How do we look with the body, not at the body?</li>
                                <li className="bullets">Donna Harraway, “Situated Knowledges”</li>
                            </ul>
                        </ul> 
                    </ul>
                </div>
            </section>
        </div>
    </>
  );
}

export default CoriOlinghousePresentation;