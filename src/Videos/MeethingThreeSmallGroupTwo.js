// ====== COMPONENTS ======
import { useLocation } from "react-router-dom";

const MeetingThreeSmallGroupTwo = (props) => {

    const location = useLocation()
    let background = 'var(--sand)';
    let startTime = 'https://player.vimeo.com/video/738663854?h=83cfee6ba0'
    let textColor = 'black';
    let videoColor = 'var(--mint-green)';
    let videoHeaderColor = 'black';

    if (location.state) {
        background = location.state.background
        startTime = location.state.startTime
        textColor = location.state.textColor
        videoColor = location.state.videoColor
        videoHeaderColor = location.state.videoHeaderColor
    } 

    return (
    <>
        <div style={{ backgroundColor: background }} className="mobile-one-hundred-vh min-height-one-hundred-vh mobile-flex mobile-column mobile-al-center">
            <div className="flex flex-end top-padding ">
                <div style={{ backgroundColor: videoColor }} className="video-title-width flex column flex-end sand-gradient">
                    <h2 style={{ color : videoHeaderColor }} className="transcription txt-al-center black-txt">VIDEO</h2>
                </div>
                <div style={{ backgroundColor: videoColor }} className="video">
                    <iframe className="iframe" title="vimeo-player" src={ startTime } frameborder="0" allowfullscreen></iframe>
                </div>
            </div>
            <div className="flex column al-center mobile-width">
                <div className="video-details-width flex column space-btwn">
                    <div style={{ color: textColor }}>
                        <p className="transcription"><b>Conversation #1, Meeting #3:</b></p>
                        <p className="transcription-details">May 6–7, 2018
                        <br></br>
                        Jacob’s Pillow, Becket, MA</p>
                        <p className="transcription-details"><b>Conversation:</b> Dana Whitco, Angie Hauser and Jaamil Olawale Kosoko</p>                
                        <p className="transcription-details"><b>Meeting Participants:</b> Rachel Boggia; mayfield brooks; Nena Couch; Angie Hauser; Ishmael Houston-Jones; Jaamil Olawale Kosoko; Sarah Lass; Bebe Miller; Lauren Slone; Dana Whitco; Reggie Wilson</p>                
                    </div>
                </div>
            </div>
        </div>
    </>
  );
}

export default MeetingThreeSmallGroupTwo;