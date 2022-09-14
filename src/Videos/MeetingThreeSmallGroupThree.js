// ====== COMPONENTS ======
import { useLocation } from "react-router-dom";

const MeetingThreeSmallGroupThree = (props) => {

    const location = useLocation()
    let background = 'var(--mint-green';
    let startTime = 'https://player.vimeo.com/video/738670370?h=ec662ab400'
    let textColor = 'black';

    if (location.state) {
        background = location.state.background
        startTime = location.state.startTime
        textColor = location.state.textColor
    } 
    
    return (
    <>
        <div style={{ backgroundColor: background }} className="mobile-one-hundred-vh one-hundred-vh mobile-flex mobile-column mobile-al-center">
            <div className="flex flex-end top-padding ">
                <div style={{ backgroundColor: textColor }} className="video-title-width flex column flex-end cobalt-gradient">
                    <h2 className="transcription txt-al-center sand-txt">VIDEO</h2>
                </div>
                <div style={{ backgroundColor: textColor }} className="video">
                    <iframe title="vimeo-player" src={ startTime } frameborder="0" allowfullscreen></iframe>
                </div>
            </div>
            <div className="flex column al-center mobile-width sand">
                <div className="essay-width flex column space-btwn evergreen-txt">
                    <div style={{ color: textColor }}>
                        <p className="transcription"><b>Small Group Conversation, Meeting #3, Jacob’s Pillow:</b></p>
                        <p className="transcription-details">May 6–7, 2018
                        <br></br>
                        Jacob’s Pillow, Becket, MA</p>
                        <p className="transcription-details"><b>Participants:</b> Rachel Boggia (RB); Nena Couch (NC); Ishmael Houston Jones (IHJ); Sarah Lass (SL),  documenter (notes); Ellen Maynard (EM), documenter (video); Bebe Miller (BM); Lauren Slone (LS); Dana Whitco (DW); Reggie Wilson (RW)</p>                
                    </div>
                </div>
            </div>
        </div>
    </>
  );
}

export default MeetingThreeSmallGroupThree;