// ====== COMPONENTS ======

const MeetingThreeSmallGroup = (props) => {

    return (
    <>
        <div className="mobile-one-hundred-vh one-hundred-vh mobile-flex mobile-column mobile-al-center sand">
            <div className="flex flex-end top-padding sand">
                <div className="video-title-width flex column flex-end cobalt-gradient">
                    <h2 className="transcription txt-al-center sand-txt">VIDEO</h2>
                </div>
                <div className="video cobalt">
                    <iframe src="https://www.youtube.com/embed/_jKEqDKpJLw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>            
                </div>
            </div>
            <div className="flex column al-center mobile-width sand">
                <div className="essay-width flex column space-btwn evergreen-txt">
                    <div>
                        <p className="transcription cobalt-txt"><b>Small Group Conversation, Meeting #3, Jacob’s Pillow:</b></p>
                        <p className="transcription-details cobalt-txt">May 6–7, 2018
                        <br></br>
                        Jacob’s Pillow, Becket, MA</p>
                        <p className="cobalt-txt transcription-details"><b>Participants:</b> Rachel Boggia (RB); Nena Couch (NC); Ishmael Houston Jones (IHJ); Sarah Lass (SL),  documenter (notes); Ellen Maynard (EM), documenter (video); Bebe Miller (BM); Lauren Slone (LS); Dana Whitco (DW); Reggie Wilson (RW)</p>                
                    </div>
                </div>
                <section className="flex column al-center sand evergreen-txt">
                    
                </section>
            </div>
        </div>
    </>
  );
}

export default MeetingThreeSmallGroup;