// ====== COMPONENTS ======
import { useLocation } from "react-router-dom";

const CoriOlinghousePresentation = (props) => {

    const location = useLocation()
    let background = 'var(--sand)';
    let startTime = 'https://player.vimeo.com/video/778223077?h=623e1db6fa'
    let textColor = 'black';
    let videoColor = 'var(--mint-green)';
    let videoHeaderColor = 'black';

    if (location.state) {
        background = location.state.background
        textColor =  location.state.textColor
        startTime = location.state.startTime
        videoColor = location.state.videoColor
    } 
    
    return (
    <>
        <div style={{ backgroundColor: background }} className="mobile-one-hundred-vh min-height-one-hundred-vh one-hundred-vh-true mobile-flex mobile-column mobile-al-center">
            <div className="flex flex-end top-padding sand">
                <div style={{ backgroundColor: videoColor }} className="video-title-width flex column flex-end sand-gradient">
                    <h2  style={{ color: videoHeaderColor }}className="transcription txt-al-center">VIDEO</h2>
                </div>
                <div style={{ backgroundColor: videoColor }}  className="video">
                    <iframe className="iframe" title="vimeo-player" src={ startTime } frameborder="0" allowfullscreen></iframe>
                </div>
            </div>
            <div className="flex column al-center mobile-width">
                <div  className="video-details-width flex column space-btwn">
                    <div style={{ color: textColor }}>
                        <p className="transcription"><b>Meeting #5:</b></p>
                        <p className="transcription-details">January 18-19, 2020
                        <br></br>
                        Ann Hamilton and Michael Mercil's Studio, Columbus, OH</p>
                        <p className="transcription-details"><b>Presenter:</b> Cori Olinghouse</p>                
                    </div>
                </div>
            </div>
        </div>
    </>
  );
}

export default CoriOlinghousePresentation;