// ====== COMPONENTS ======
import { useParams, useLocation } from "react-router-dom";

const Seattle = (props) => {
    const background = useLocation().state.background

    return (
    <>
        <div className="mobile-one-hundred-vh one-hundred-vh mobile-flex mobile-column mobile-al-center sand">
            <div className="flex flex-end top-padding sand">
                <div style={{ backgroundColor: background }} className="video-title-width flex column flex-end cobalt-gradient">
                    <h2 className="transcription txt-al-center sand-txt">VIDEO</h2>
                </div>
                <div style={{backgroundColor: background}}  className="video">
                    <iframe title="vimeo-player" src="https://player.vimeo.com/video/738669816?h=3e11a58d51" width="640" height="360" frameborder="0" allowfullscreen></iframe>            
                </div>
            </div>
            <div className="flex column al-center mobile-width sand">
                <div  className="essay-width flex column space-btwn evergreen-txt">
                    <div>
                        <p style={{ color: background }} className="transcription cobalt-txt"><b>Seattle Meeting:</b></p>
                        <p style={{ color: background }} className="transcription-details cobalt-txt">No date
                        <br></br>
                        Seattle, WA</p>
                        <p style={{ color: background }} className="cobalt-txt transcription-details"><b>Participants:</b> No information</p>                
                    </div>
                </div>
                <section className="flex column al-center sand evergreen-txt">
                    
                </section>
            </div>
        </div>
    </>
  );
}

export default Seattle;