// ====== COMPONENTS ======

const JonathanMeyerBio = (props) => {

    return (
    <>
        <div className="one-hundred-vh flex jc-center mobile-al-center mobile-column top-padding mint-green">
            <div className="vault-padding mobile-flex mobile-jc-center mobile-width">
                <div className="flex space-btwn essay-title-height">
                    <div>
                        <h2 className="subtitle ">BIOGRAPHY</h2>
                        <h2 className="subtitle neuzit">Jonathan Meyer</h2>
                    </div>
                    <img className="bio-slash" src="/Images/Slash.svg" />
                    <div className="flex column flex-end">
                    </div>
                </div>
            </div>
            <section className="flex column al-center no-top-padding mobile-padding">
                <div className="essay-width ">
                    <p className="no-top-padding">Somatically driven, <a href="https://www.khecari.org/jonathan-meyer">Jonathan Meyer</a> works to develop an idiosyncratic movement palette blurring grace and awkwardness, building strange lands that can delight, baffle, and open new possibilities. Meyer has danced for The High Risk Group, Pierre-Paul Savoie, Asimina Chremos, and The Seldoms. Meyer has also worked with at-risk youth in wilderness therapy programs in Utah teaching primitive skills, and is a Certified Practitioner of Body-Mind Centering®. In 2002 Meyer founded Khecari in Taos, NM. In 2006, Meyer moved Khecari to Chicago, and shortly thereafter he began his intensive collaboration and partnership with Julia Rae Antonick, with whom he runs the company.</p>
                </div>
            </section>
        </div>
    </>
  );
}

export default JonathanMeyerBio;