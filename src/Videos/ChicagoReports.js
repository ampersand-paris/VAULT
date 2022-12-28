// ====== COMPONENTS ======
import { useLocation } from "react-router-dom";

const ChicagoReports = (props) => {

    const location = useLocation()
    let background = 'var(--sand)';
    let startTime = 'https://player.vimeo.com/video/783389817?h=2817758fb1'
    let textColor = 'black';
    let videoColor = 'var(--mint-green)';

    if (location.state) {
        background = location.state.background
        startTime = location.state.startTime
        textColor = location.state.textColor
        videoColor = location.state.videoColor
    } 

    return (
    <>    
        <div style={{ backgroundColor: background }} className="mobile-one-hundred-vh min-height-one-hundred-vh mobile-flex mobile-column mobile-al-center">
            <div className="flex flex-end top-padding ">
                <div style={{ backgroundColor: videoColor }} className="video-title-width flex column flex-end sand-gradient">
                    <h2 style={{ color: textColor }} className="transcription txt-al-center">VIDEO</h2>
                </div>
                <div style={{ backgroundColor: videoColor }} className="video">
                    <iframe className="iframe" title="vimeo-player" src={ startTime } frameborder="0" allowfullscreen></iframe>
                </div>
            </div>
            <div className="flex column al-center mobile-width">
                <div className="essay-width flex column space-btwn">
                    <div style={{ color: textColor }}>
                        <p className="transcription"><b>Reports, Meeting #4:</b></p>
                        <p className="transcription-details">November 16, 2019
                        <br></br>
                        Dance Center of Columbia College Chicago</p>
                        <p className="transcription-details"><b>Participants:</b> Julia Antonick, Bonnie Brooks, Ellen Chenoweth, Margi Cole, Jenai Cutcher, Ginger Farley, J'sun Howard, Lila Hurwitz, Jane Jerardi, Darrell Jones, Erin Kilmurray, Jonathan Meyer, Bebe Miller, Diana Muhammad</p>                
                    </div>
                </div>
            </div>
        </div>
    </>
  );
}

export default ChicagoReports;