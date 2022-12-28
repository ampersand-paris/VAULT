// ====== COMPONENTS ======

const ReggieWilsonBio = (props) => {

    return (
    <>
        <div className="one-hundred-vh flex jc-center mobile-al-center mobile-column top-padding mint-green">
            <div className="vault-padding mobile-flex mobile-jc-center mobile-width">
                <div className="flex space-btwn essay-title-height">
                    <div>
                        <h2 className="subtitle ">BIOGRAPHY</h2>
                        <h2 className="subtitle neuzit">Reggie Wilson</h2>
                    </div>
                    <img className="bio-slash" src="/Images/Slash.svg" />
                    <div className="flex column flex-end">
                    </div>
                </div>
            </div>
            <section className="flex column al-center no-top-padding mobile-padding">
                <div className="bio-width ">
                    <p className="no-top-padding"><a href="http://www.fistandheelperformancegroup.org/" target="_blank">Reggie Wilson</a> is Executive and Artistic Director, Choreographer and Performer of Fist and Heel Performance Group. His work draws from the cultures of Africans in the Americas and is combined with post-modern elements to create his own personal movement style. He has lectured, taught and conducted workshops and community projects and had his work presented nationally and internationally. Recently, Wilson curated Danspace Project’s Dancing Platform Praying Grounds: Blackness, Churches, and Downtown Dance (2018), created the commissioned work “…they stood shaking while others began to shout,” and curated Grounds That Shout (and others merely shaking) in Philadelphia. His newest work is titled POWER.</p>
                </div>
            </section>
        </div>
    </>
  );
}

export default ReggieWilsonBio;