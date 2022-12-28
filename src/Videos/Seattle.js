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
        <div style={{ backgroundColor: background }} className="mobile-one-hundred-vh min-height-one-hundred-vh mobile-flex mobile-column mobile-al-center">
            <div className="flex flex-end top-padding sand">
                <div style={{ backgroundColor: videoColor }} className="video-title-width flex column flex-end sand-gradient">
                    <h2  style={{ color: textColor }}className="transcription txt-al-center">VIDEO</h2>
                </div>
                <div style={{ backgroundColor: videoColor }}  className="video">
                    <iframe className="iframe" title="vimeo-player" src={ startTime } frameborder="0" allowfullscreen></iframe>
                </div>
            </div>
            <div className="flex column al-center mobile-width">
                <div  className="essay-width flex column space-btwn">
                    <div style={{ color: textColor }}>
                        <p className="transcription"><b>Meeting #2, Part 1:</b></p>
                        <p className="transcription-details">August 7, 2017
                        <br></br>
                        On the Boards, Seattle, WA</p>
                        <p className="transcription-details"><b>Participants:</b> Betsey Brock, Alice Gosti, Pat Graney, Dayna Hanson, Angie Hauser, Ishmael Houston-Jones (via Zoom), Lila Hurwitz (via Zoom), Raja Feather Kelly, Tonya Lockyer, Bebe Miller</p>                
                    </div>
                </div>
            </div>
        </div>
    </>
  );
}

export default Seattle;