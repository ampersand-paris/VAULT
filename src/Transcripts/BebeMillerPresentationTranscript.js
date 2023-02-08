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
        <div style={{ backgroundColor: background, color: textColor }} className="top-padding essay-padding flex column al-center">
            <div className="w-one-hundred flex">
                <img className="transcript-slash" src={ slash } />
                <div className="column w-fifty">
                    <h2 className="transcription">Presentation</h2>
                    <p className="transcription"><b>Vault Meeting #3</b></p>
                    <p className="transcription-details">May 6–7, 2018
                    <br></br>
                    Jacob’s Pillow, Becket, MA</p>
                    <p className="transcription-details">Meeting Notes by Sarah Lass</p>
                    <p className="transcription-details">Presenter: Bebe Miller</p>
                </div>
            </div>
            <section className="flex column al-center">
                <div>
                    <p>Bebe discusses <a href="https://bebemillercompany.org/works/a-history/" target="_blank">A History</a> and <a href="https://bebemillercompany.org/projects/motion-bank/" target="_blank">Motion Bank</a></p>
                    <ul>
                        <li className="bullets">Interest in engaging what occupies most of our time—the making, not the showing</li>
                        <li className="bullets">Angie talks about ACCAD motion capture of “story state”; evidence of transmission, artist-artist conversation, and finding of common ground</li>
                    </ul>
                    <p>Bebe discusses <a href="https://bebemillercompany.org/works/a-history/" target="_blank">The Making Room</a> (website and ebook)</p>
                    <ul>
                        <li className="bullets">Finding a home for all the stuff not explicitly in the piece</li>
                        <li className="bullets">Collaboration with Lily Skove and the priority of documenting experience as opposed to the work itself</li>
                        <ul>
                            <li className="bullets">Questions of changing “uses” of archive re-emerge (Reggie), ownership of objects of archive, collection of evidence versus the act/intention to collect</li>
                        </ul>
                    </ul>
                    <p>Body-body transference and bleeding of influence (mayfield; Angie; Bebe)</p>
                    <ul>
                        <li className="bullets">Recognizing differences in dance communities and the predominance of online exchanges in some (Rachel)</li>
                    </ul>
                    <p>Bringing in non-improvisation-based work that engages with cultural forms (Reggie)</p>
                    <p>Questions of ownership, archiving, and access (Reggie)</p>  
                    <p>How to go about conveying/transferring creative process (mayfield)</p>      
                </div>
            </section>
        </div>
    </>
  );
}

export default BebeMillerPresentationNotes;