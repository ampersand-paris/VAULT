// ====== COMPONENTS ======
import { useLocation } from "react-router-dom";

const MeetingThreeSmallGroupFive = (props) => {

    const location = useLocation()
    let background = 'var(--mint-green';
    let startTime = 'https://player.vimeo.com/video/738666979?h=de936851e2'
    let textColor = 'black';

    if (location.state) {
        background = location.state.background
        textColor = location.state.textColor
        startTime = location.state.startTime
    } 

    return (
    <>
        <div style={{ backgroundColor: background }} className="mobile-one-hundred-vh one-hundred-vh mobile-flex mobile-column mobile-al-center">
            <div className="flex flex-end top-padding sand">
                <div style={{ color: textColor }} className="video-title-width flex column flex-end cobalt-gradient">
                    <h2 className="transcription txt-al-center sand-txt">VIDEO</h2>
                </div>
                <div style={{ color: textColor }} className="video">
                <iframe title="vimeo-player" src="https://player.vimeo.com/video/738666979?h=de936851e2" width="640" height="360" frameborder="0" allowfullscreen></iframe>
                    <iframe title="vimeo-player" src={ startTime } frameborder="0" allowfullscreen></iframe>
                </div>
            </div>
            <div className="flex column al-center mobile-width sand">
                <div className="essay-width flex column space-btwn evergreen-txt">
                    <div  style={{ color: textColor }}>
                        <p className="transcription cobalt-txt"><b>Opening Introductions, Meeting #3 (More detail), Jacob’s Pillow:</b></p>
                        <p className="transcription-details cobalt-txt">May 6–7, 2018
                        <br></br>
                        Jacob’s Pillow, Becket, MA</p>
                        <p className="cobalt-txt transcription-details"><b>Participants:</b> ???? Rachel Boggia (RB); mayfield brooks (mb); Nena Couch (NC); Angie Hauser (AH); Ishmael Houston Jones (IHJ); Jaamil Olawale Kosoko (JOK); Sarah Lass (SL),  documenter (notes); Ellen Maynard (EM), documenter (video); Bebe Miller (BM); Lauren Slone (LS); Dana Whitco (DW); Reggie Wilson (RW)</p>                
                    </div>
                </div>
            </div>
        </div>
    </>
  );
}

export default MeetingThreeSmallGroupFive;