// ====== COMPONENTS ======

const MaraFrazierBio = (props) => {

    return (
    <>
        <div className="one-hundred-vh flex jc-center mobile-al-center mobile-column top-padding mint-green">
            <div className="vault-padding mobile-flex mobile-jc-center mobile-width">
                <div className="flex space-btwn essay-title-height">
                    <div>
                        <h2 className="subtitle ">BIOGRAPHY</h2>
                        <h2 className="subtitle neuzit">Mara Frazier</h2>
                    </div>
                    <img className="bio-slash" src="/Images/Slash.svg" />
                    <div className="flex column flex-end">
                    </div>
                </div>
            </div>
            <section className="flex column al-center no-top-padding mobile-padding">
                <div className="essay-width ">
                    <p className="no-top-padding"><a href="https://library.osu.edu/people/frazier.88" target="_blank">Mara Frazier</a> is Curator of Dance and Assistant Professor at the Lawrence and Lee Theatre Research Institute, Thompson Library Special Collections, Ohio State University Libraries. She works with students, faculty, staff, and community members to build, preserve, and share archives of dance and movement, and she regularly restages dance works from the Labanotation score. Mara is also a faculty member teaching children and adults at Flux+Flow Dance Center.</p>
                </div>
            </section>
        </div>
    </>
  );
}

export default MaraFrazierBio;