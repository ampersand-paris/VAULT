// ====== COMPONENTS ======

const GeselMasonBio = (props) => {

    return (
    <>
        <div className="one-hundred-vh flex jc-center mobile-al-center mobile-column top-padding mint-green">
            <div className="vault-padding mobile-flex mobile-jc-center mobile-width">
                <div className="flex space-btwn essay-title-height">
                    <div>
                        <h2 className="subtitle ">BIOGRAPHY</h2>
                        <h2 className="subtitle neuzit">Gesel R. Mason</h2>
                    </div>
                    <img className="bio-slash" src="/Images/Slash.svg" />
                    <div className="flex column flex-end">
                    </div>
                </div>
            </div>
            <section className="flex column al-center no-top-padding mobile-padding">
                <div className="essay-width ">
                    <p className="no-top-padding"><a href="http://www.geselmason.com/" target="_blank">Gesel R. Mason</a> is Artistic Director for Gesel Mason Performance Projects and Associate Professor of Dance at University of Texas at Austin. She was a member of Liz Lerman Dance Exchange and Ralph Lemon/Cross Performance Projects. In 2020, Mason received a NEH Digital Humanities Advancement Grant, with co-director Rebecca Salzer of the University of Alabama, in support of Mason's digital archive project, NO BOUNDARIES: Dancing the Visions of Contemporary Black Choreographers. Recent awards include 2019 Rauschenberg Artist Residency, 2019 National Performance Network Creation Fund and 2020 New England Foundation for the Arts’ National Dance Project Production Grant for Yes, And.</p>
                </div>
            </section>
        </div>
    </>
  );
}

export default GeselMasonBio;