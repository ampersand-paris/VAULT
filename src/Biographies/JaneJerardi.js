// ====== COMPONENTS ======

const JaneJerardiBio = (props) => {

    return (
    <>
        <div className="one-hundred-vh flex jc-center mobile-al-center mobile-column top-padding mint-green">
            <div className="vault-padding mobile-flex mobile-jc-center mobile-width">
                <div className="flex space-btwn essay-title-height">
                    <div>
                        <h2 className="subtitle ">BIOGRAPHY</h2>
                        <h2 className="subtitle neuzit">Jane Jerardi</h2>
                    </div>
                    <img className="bio-slash" src="/Images/Slash.svg" />
                    <div className="flex column flex-end">
                    </div>
                </div>
            </div>
            <section className="flex column al-center no-top-padding mobile-padding">
                <div className="bio-width ">
                    <p className="no-top-padding"><a href="https://www.janejerardi.com" target="_blank">Jane Jerardi</a> is an artist currently based in Chicago, IL. Her work spans the media of choreography, performance, video, installation, writing, and somatic practices. Her most recent work project, delicate hold, meditated on the erotic in everyday life. For this remote performance, she live-mixed the video of each of the four performers, who improvised from her own location, with existing video and images, streaming it online to audiences around the world. She serves as the lead archivist and video documentarian for the Dance Center at Columbia College, Chicago, where she also teaches, and also facilitates Fieldwork/Chicago.</p>
                </div>
            </section>
        </div>
    </>
  );
}

export default JaneJerardiBio;