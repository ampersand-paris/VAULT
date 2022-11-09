// ====== COMPONENTS ======
import { useLocation } from "react-router-dom";

const BebeMillerPresentationNotes = (props) => {

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
                    <p className="transcription-details">Presenter: Bebe Miller</p>
                </div>
                <img className="transcript-slash" src={ slash } />
            </div>
            <section className="flex column al-center">
                <div className="essay-width">
                <p><b>Presentation 2:</b></p>
                    <ul>
                        <li className="bullets">Recognizing the generative and infectious element of community and of gathering</li>
                        <li className="bullets">Could what matter and what matters to whom be a guiding principle?</li>
                        <li className="bullets">What’s sustainable? What can be left out?</li>
                        <li className="bullets">Can our emphasis be on our creative practice rather than creative product, and in so doing recognize our analog body?</li>
                        <li className="bullets">What can co-presence bring to the digital?</li>
                        <ul>
                            <li className="bullets">What’s unique about co-presence? What’s unique about the digital?</li>
                        </ul>
                        <li className="bullets">Looking at How Dancing is Built</li>
                        <ul>
                            <li className="bullets">Realized there’s a collection of points of view that live in the studio and are very much a part of that piece</li>
                            <li className="bullets">What else happens besides what we present? What do we do with that?</li>
                            <li className="bullets">Capturing the nature of something over the product</li>
                            <ul>
                                <li className="bullets">Could we capture the memory/history of work?</li>
                            </ul>
                            <li className="bullets">Looking at other aspects of archive besides the physical</li>
                            <ul>
                                <li className="bullets">Overlapping processes and connective tissue between works</li>
                            </ul>
                            <li className="bullets">Retracing partnering work, something in how the body-to-body moves</li>
                            <ul>
                                <li className="bullets">Is there a way to look at that besides the performance itself?</li>
                                <li className="bullets">Looking at development of kinetic vocabulary over the years</li>
                                <li className="bullets">Who are we in this work? How did we get here? What have we done?</li>
                            </ul>
                            <li className="bullets">Making Dance Fort = making structural map with personal contributions, key points of entry, language, experiences, narrative, interior stories, jokes, thematics, how and when things emerge</li>
                            <li className="bullets">Narration of A History duet: slipperiness of what it took to find that</li>
                            <ul>
                                <li className="bullets">Not looking at it as stand-alone choreographic artifact</li>
                                <li className="bullets">Something about how it was made is inherent in what is happening</li>
                                <li className="bullets">Arrival: the threshold of the present moment</li>
                            </ul>
                            <li className="bullets">Difference between the live performance and Dance Fort = desire to communicate how BM saw AH and DJ</li>
                        </ul>
                        <li className="bullets"><a href="http://motionbank.org/" target="_blank">Motion Bank</a> experience</li>
                        <ul>
                            <li className="bullets">Identifying motion-oriented score</li>
                            <li className="bullets">The fact that “Risky Weight” could be a choreographic tool was unknown until it was seen on video</li>
                            <ul>
                                <li className="bullets">Different frame leads to different visibility; things became visible after seeing it in this new way (AH)</li>
                                <li className="bullets">Unpacking the lineage and history of “Risky Weight” (BM)</li>
                                <ul>
                                    <li className="bullets">Ted Johnson duet, motion capture experience</li>
                                    <li className="bullets">Realization that when the weight is in motion, we understand; the reveal of our personage in the weight</li>
                                </ul>
                            </ul>
                        </ul>
                        <li className="bullets">Started <em><a href="https://bebemillercompany.org/projects/in-a-rhythm-e-book/" target="_blank">How Dancing is Built</a></em> to show chronology</li>
                        <ul>
                            <li className="bullets">Satisfaction of retrospective construction</li>
                            <li className="bullets">Embrace of subjective retelling rather than objective look-at-the-process</li>
                        </ul>
                        <li className="bullets">Susan Rethorst’s relationship to the project? (MG)</li>
                        <ul>
                            <li className="bullets">It was a question of could we have parallel processes? Not co-choreographing, but in relationship to each other (BM)</li>
                            <ul>
                                <li className="bullets">The conversation did not really happen because of other factors, but two pieces were shown, and Sue’s materials are in The Making Room</li>
                            </ul>
                            <li className="bullets">“The Making Room” website feels more like an archive as opposed to the In A Rhythm ebook, which feels more perspective-d (AH)</li>
                        </ul>
                    </ul>
                </div>
            </section>
        </div>
    </>
  );
}

export default BebeMillerPresentationNotes;