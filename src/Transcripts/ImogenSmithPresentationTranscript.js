// ====== COMPONENTS ======
import { useLocation } from "react-router-dom";

const ImogenSmithPresentationNotes = (props) => {

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
                    <p className="transcription-details">Presenter: Imogen Smith</p>
                </div>
                <img className="transcript-slash" src={ slash } />
            </div>
            <section className="flex column al-center">
                <div className="essay-width">
                <p><b>Presentation 1:</b></p>
                    <ul>
                        <li className="bullets">Thinking about this topic influenced by journey: librarian with NYPL, working in traditional archive setting</li>
                        <li className="bullets">Interested in the question: what is a dance archive, since dance is a live, intangible artform</li>
                        <ul>
                            <li className="bullets">A dance archive is built around an absence</li>
                            <li className="bullets">Dissatisfaction with video as the way to represent and archive</li>
                            <ul>
                                <li className="bullets">Dance archive must be made up of many different things</li>
                            </ul>
                        </ul>
                        <li className="bullets">Dance Heritage Coalition: working directly with artists</li>
                        <ul>
                            <li className="bullets">How are artists involved in creating their archives?</li>
                            <li className="bullets">How do these archives tell their stories?</li>
                            <li className="bullets">How is archiving itself a creative process?</li>
                            <li className="bullets">How can dance and archiving be integrated?</li>
                            <li className="bullets">How do artists engage with their legacy materials?</li>
                        </ul>
                        <li className="bullets">Practical aspect (i.e. getting things to a point where they can be archived</li>
                        <ul>
                            <li className="bullets"><a href="https://www.danceusa.org/archiving-preservation-artists-legacy-toolkit" target="_blank">Artist’s Legacy Toolkit</a>: suite of practical tools and guides and information about archiving</li>
                            <li className="bullets">How can we help independent artists? Support, funding, resources for this work tend to go to biggest, wealthiest companies. Looking to provide solutions that do not assume a great deal of money and time; resources for people at all career stages</li>
                            <li className="bullets">Archive consultants</li>
                        </ul>
                        <li className="bullets">Reinventing the archive wheel: sustainability and connect-ability are important; create possibilities for different archives to speak to each other</li>
                        <ul>
                            <li className="bullets">There is a need for a simple, stream-lined, flexible platform and a set of standards to create databases and ways of sharing work</li>
                            <ul>
                                <li className="bullets">Not a lot of existing standards and platforms in the field</li>
                                <li className="bullets">Not about a one-size-fits-all, but many needs are the same</li>
                            </ul>
                        </ul>
                        <li className="bullets">The possibility of disappearance also create opportunities for conversation</li>
                        <ul>
                            <li className="bullets">Shift from analog to digital = a shift in the way we think about archive and archival needs</li>
                            <li className="bullets">Digital life = constant turnover of platforms = potential for loss and system incompatibility</li>
                        </ul>
                        <li className="bullets">“Archive brought to life”</li>
                        <ul>
                            <li className="bullets">Engaging with an archive can become a part of the creative process and influence new works (David Gordon example)</li>
                            <ul>
                                <li className="bullets">Archiveography: DG’s biography through his archive</li>
                                <li className="bullets">Live Archiveography, show, live performance, archival images, etc.</li>
                            </ul>
                        </ul>
                        <li className="bullets">Access and appetite</li>
                        <ul>
                            <li className="bullets">Appetite of audience to access archives + appetite of artists to share their work; two appetites coming together (Eiko and Koma example)</li>         
                        </ul>
                        <li className="bullets">How to bring the body into the archive?</li>
                        <ul>
                            <li className="bullets">Artform that is passed down from body to body, constant shift of material through different bodies (Gene Butler and Our Steps, Our Story)</li>
                            <ul>
                                <li className="bullets">Brought in students and former teachers, teaching the dances and talking through them (included public component, film, audio)</li>
                            </ul>
                        </ul>
                        <li className="bullets">Questions</li>
                        <ul>
                            <li className="bullets">Strategies for old videos? How to transfer them into more modern formats? (Mitchell Rose)</li>
                            <ul>
                                <li className="bullets">Two parts (IS)</li>
                                <ol>
                                    <li className="bullets">Digitization: material is deteriorating and window is closing</li>
                                    <ul>
                                        <li className="bullets">This is a question of funding</li>
                                        <ul>
                                            <li className="bullets">Regranting money, especially for independent artists </li>
                                        </ul>
                                    </ul>
                                    <li className="bullets">Repository: Who steps up to be the repository so that as formats change the safety of files is not compromised</li>
                                    <li className="bullets">Need for field to come together to decide what it wants and needs</li>
                                </ol>
                            </ul>
                            <li className="bullets">Gaps in terms of which artists are archived and which artists are not? (MG)</li>
                            <ul>
                                <li className="bullets">How do we go back and repair those gaps? (IS)</li>
                                <li className="bullets">Concept of archival sciences: when you go to an archive, what is missing?</li>
                                <li className="bullets">What are the strategies or methodologies for archiving the gaps?</li>
                            </ul>
                        </ul>
                    </ul>
                </div>
            </section>
        </div>
    </>
  );
}

export default ImogenSmithPresentationNotes;