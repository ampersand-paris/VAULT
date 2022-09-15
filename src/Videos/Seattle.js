// ====== COMPONENTS ======
import { useLocation } from "react-router-dom";

const Seattle = (props) => {

    const location = useLocation()
    let background = 'var(--mint-green';
    let startTime = 'https://player.vimeo.com/video/738669816?h=3e11a58d51'
    let textColor = 'black';

    if (location.state) {
        background = location.state.background
        textColor =  location.state.textColor
        startTime = location.state.startTime
    } 
    
    return (
    <>
        <div style={{ backgroundColor: background }} className="mobile-one-hundred-vh mobile-flex mobile-column mobile-al-center">
            <div className="flex flex-end top-padding sand">
                <div style={{ backgroundColor: textColor }} className="video-title-width flex column flex-end cobalt-gradient">
                    <h2 className="transcription txt-al-center sand-txt">VIDEO</h2>
                </div>
                <div style={{ backgroundColor: textColor }}  className="video">
                    <iframe title="vimeo-player" src={ startTime } frameborder="0" allowfullscreen></iframe>
                </div>
            </div>
            <div className="flex column al-center mobile-width sand">
                <div  className="essay-width flex column space-btwn">
                    <div style={{ color: textColor }}>
                        <p className="transcription"><b>Seattle Meeting:</b></p>
                        <p className="transcription-details">No date
                        <br></br>
                        Seattle, WA</p>
                        <p className="transcription-details"><b>Participants:</b> No information</p>                
                    </div>
                </div>
            </div>
        </div>
    </>
  );
}

export default Seattle;