// ====== COMPONENTS ======

const PatGraneyBio = (props) => {

    return (
    <>
        <div className="one-hundred-vh flex jc-center mobile-al-center mobile-column top-padding mint-green">
            <div className="vault-padding mobile-flex mobile-jc-center mobile-width">
                <div className="flex space-btwn essay-title-height">
                    <div>
                        <h2 className="subtitle ">BIOGRAPHY</h2>
                        <h2 className="subtitle neuzit">Pat Graney</h2>
                    </div>
                    <img className="bio-slash" src="/Images/Slash.svg" />
                    <div className="flex column flex-end">
                    </div>
                </div>
            </div>
            <section className="flex column al-center no-top-padding mobile-padding">
                <div className="bio-width ">
                    <p className="no-top-padding">Seattle-based choreographer <a href="https://www.patgraney.org/" target="_blank">Pat Graney</a> has received Choreography Fellowships from the National Endowment for the Arts, as well as from Artist Trust, the Washington State Arts Commission, the NEA International Program, National Corporate Fund for Dance and the John Simon Guggenheim Memorial Foundation. In 2008, Graney was awarded both the Alpert Award and a US Artists Award in Dance. In 2011, Graney was the recipient of the Arts Innovator Award from Artist Trust and the Dale Chihuly Foundation, and in 2013 was honored as one of 20 Americans to receive the Doris Duke Performing Artist Award. The Company premiered Girl Gods in 2015, which won two “Bessies” (New York Dance and Performance Awards) in 2016.</p>
                </div>
            </section>
        </div>
    </>
  );
}

export default PatGraneyBio;