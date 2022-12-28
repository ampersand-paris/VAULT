// ====== COMPONENTS ======

const RussellLepleyBio = (props) => {

    return (
    <>
        <div className="one-hundred-vh flex jc-center mobile-al-center mobile-column top-padding mint-green">
            <div className="vault-padding mobile-flex mobile-jc-center mobile-width">
                <div className="flex space-btwn essay-title-height">
                    <div>
                        <h2 className="subtitle ">BIOGRAPHY</h2>
                        <h2 className="subtitle neuzit">Russell Lepley</h2>
                    </div>
                    <img className="bio-slash" src="/Images/Slash.svg" />
                    <div className="flex column flex-end">
                    </div>
                </div>
            </div>
            <section className="flex column al-center no-top-padding mobile-padding">
                <div className="bio-width ">
                    <p className="no-top-padding"><a href="https://www.flux-flow.com/" target="_blank">Russell Lepley</a>, co-founder of FluxFlow Dance Project and Flux + Flow Dance and Movement Center, is a dance artist based in Columbus, OH. His work with collaborator Filippo Pelacchi has been awarded the Ann and Weston Hicks Choreography Fellowship at Jacob's Pillow, an Individual Excellence Award from the Ohio Arts Council and their work has been produced by the Wexner Center for the Arts. Russell’s interest lies in experimenting with narrative through interdisciplinary work as a means to explore the various shades of the meaning within a single idea. He also is passionate about empowering adult amateurs to create through dance.</p>
                </div>
            </section>
        </div>
    </>
  );
}

export default RussellLepleyBio;