// ====== COMPONENTS ======
import { useLocation } from "react-router-dom";

const Seattle = (props) => {

    const location = useLocation()
    let background = 'var(--sand)';
    let startTime = 'https://player.vimeo.com/video/738669816?h=3e11a58d51'
    let textColor = 'black';
    let videoColor = 'var(--mint-green)';


    if (location.state) {
        background = location.state.background
        textColor =  location.state.textColor
        startTime = location.state.startTime
        videoColor = location.state.videoColor
    } 
    
    return (
    <>
        <div style={{ backgroundColor: background }} className="mobile-one-hundred-vh mobile-flex mobile-column mobile-al-center">
            <div className="flex flex-end top-padding sand">
                <div style={{ backgroundColor: videoColor }} className="video-title-width flex column flex-end sand-gradient">
                    <h2  style={{ color: textColor }}className="transcription txt-al-center">VIDEO</h2>
                </div>
                <div style={{ backgroundColor: videoColor }}  className="video">
                    <iframe title="vimeo-player" src={ startTime } frameborder="0" allowfullscreen></iframe>
                </div>
            </div>
            <div className="flex column al-center mobile-width">
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