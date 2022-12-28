// ====== COMPONENTS ======

const AnnCarlsonBio = (props) => {

    return (
    <>
        <div className="one-hundred-vh flex jc-center mobile-al-center mobile-column top-padding mint-green">
            <div className="vault-padding mobile-flex mobile-jc-center mobile-width">
                <div className="flex essay-title-height">
                    <div>
                        <h2 className="subtitle">BIOGRAPHY</h2>
                        <h2 className="subtitle neuzit">Ann Carlson</h2>
                    </div>
                    <img className="bio-slash" src="/Images/Slash.svg" />
                </div>
            </div>
            <section className="flex column al-center no-top-padding mobile-padding">
                <div className="bio-width">
                    <p className="no-top-padding"><a href="https://anncarlsondance.com/" target="_blank">Ann Carlson</a> is an interdisciplinary artist whose work borrows from the disciplines of dance and performance as well as visual, conceptual and social art practices. Carlson’s work takes the form of solo performance, large-scale site specific projects, ensemble stage-based dances and performance/video. Carlson is the recipient of numerous awards and over thirty commissions for her artistic work. A new work, These are the ones we fell among, in collaboration with Inkboat, will premiere at ODC Theater in San Francisco, November 2021. Ann is a contributing artist for Yellowstone Revealed, a series of public art projects designed to shift the tourist experience in Yellowstone National Park towards an indigenous narrative. Yellowstone Revealed will occur inside the park during the summer of 2022.</p>
                </div>
            </section>
        </div>
    </>
  );
}

export default AnnCarlsonBio;