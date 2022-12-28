// ====== COMPONENTS ======

const CoriOlinghouseBio = (props) => {

    return (
    <>
        <div className="one-hundred-vh flex jc-center mobile-al-center mobile-column top-padding mint-green">
            <div className="vault-padding mobile-flex mobile-jc-center mobile-width">
                <div className="flex space-btwn essay-title-height">
                    <div>
                        <h2 className="subtitle ">BIOGRAPHY</h2>
                        <h2 className="subtitle neuzit">Cori Olinghouse</h2>
                    </div>
                    <img className="bio-slash" src="/Images/Slash.svg" />
                    <div className="flex column flex-end">
                    </div>
                </div>
            </div>
            <section className="flex column al-center no-top-padding mobile-padding">
                <div className="bio-width ">
                    <p className="no-top-padding"><a href="https://theportal.place/" target="_blank">Cori Olinghouse</a> is the founder of The Portal, an artist-driven project that cultivates archiving as a poetic and performative practice. Recently, she collaborated with Charles Atlas on an installation for Judson Dance Theater: The Work is Never Done at The Museum of Modern Art. In 2019, she collaborated with The Studio Museum in Harlem on the acquisition of Autumn Knight’s WALL. Formerly, she served as archive director for the Trisha Brown Dance Company. She holds an MA from the Institute for Curatorial Practice in Performance and serves as visiting faculty at the Center for Curatorial Studies at Bard College.</p>
                </div>
            </section>
        </div>
    </>
  );
}

export default CoriOlinghouseBio;