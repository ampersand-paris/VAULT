// ====== COMPONENTS ======
import { useLocation } from "react-router-dom";

const MeetingThreeSmallGroupTwo = (props) => {

    const location = useLocation()
    let background = 'var(--sand)';
    let startTime = 'https://player.vimeo.com/video/738663854?h=83cfee6ba0'
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
        <div style={{ backgroundColor: background }} className="mobile-one-hundred-vh mobile-flex mobile-column mobile-al-center">
            <div className="flex flex-end top-padding ">
                <div style={{ backgroundColor: videoColor }} className="video-title-width flex column flex-end sand-gradient">
                    <h2 style={{ color : textColor }} className="transcription txt-al-center black-txt">VIDEO</h2>
                </div>
                <div style={{ backgroundColor: videoColor }} className="video">
                    <iframe className="iframe" title="vimeo-player" src={ startTime } frameborder="0" allowfullscreen></iframe>
                </div>
            </div>
            <div className="flex column al-center mobile-width">
                <div className="essay-width flex column space-btwn">
                    <div style={{ color: textColor }}>
                        <p className="transcription"><b>Small Group Conversation #2, Meeting #3, Jacob’s Pillow:</b></p>
                        <p className="transcription-details">May 6–7, 2018
                        <br></br>
                        Jacob’s Pillow, Becket, MA</p>
                        <p className="transcription-details"><b>Participants:</b> Dana Whitco, Angie Hauser and Jaamil Olawale Kosoko</p>                
                    </div>
                </div>
            </div>
        </div>
    </>
  );
}

export default MeetingThreeSmallGroupTwo;