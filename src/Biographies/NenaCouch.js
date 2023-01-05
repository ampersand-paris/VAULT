// ====== COMPONENTS ======

const NenaCouchBio = (props) => {

    return (
    <>
        <div className="essay-padding one-hundred-vh flex mobile-al-center mobile-column top-padding mint-green">
            <div className="vault-padding mobile-flex mobile-jc-center mobile-width">
                <div className="flex space-btwn essay-title-height">
                    <div>
                        <h2 className="subtitle ">BIOGRAPHY</h2>
                        <h2 className="subtitle neuzit">Nena Couch</h2>
                    </div>
                    <img className="bio-slash" src="/Images/Slash.svg" />
                    <div className="flex column flex-end">
                    </div>
                </div>
            </div>
            <section className="flex column al-center no-top-padding mobile-padding">
                <p className="no-top-padding"><a href="https://library.osu.edu/people/couch.1" target="_blank">Nena Couch</a> is Head of Area Studies and Special Collections, The Ohio State University Libraries. She leads efforts that advance the development and use of rare books, manuscripts, primary sources, and international language, literature, and culture collections, connecting resources to students, faculty, researchers, and the community. Her research is in the performing arts with special interest in 16th–18th century Spanish dance, and Czech theatre scenography. She currently serves on the Board of Directors of the Bebe Miller Company.</p>
            </section>
        </div>
    </>
  );
}

export default NenaCouchBio;