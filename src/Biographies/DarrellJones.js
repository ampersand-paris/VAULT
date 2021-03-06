// ====== COMPONENTS ======

const DarrellJonesBio = (props) => {

    return (
    <>
        <div className="one-hundred-vh flex jc-center mobile-al-center mobile-column top-padding mint-green">
            <div className="vault-padding mobile-flex mobile-jc-center mobile-width">
                <div className="flex space-btwn essay-title-height">
                    <div>
                        <h2 className="subtitle ">BIOGRAPHY</h2>
                        <h2 className="subtitle neuzit">Darrell Jones</h2>
                    </div>
                    <img className="bio-slash" src="/Images/Slash.svg" />
                    <div className="flex column flex-end">
                    </div>
                </div>
            </div>
            <section className="flex column al-center no-top-padding mobile-padding">
                <div className="essay-width ">
                    <p className="no-top-padding"><a href="https://mancc.org/artists/darrell-jones/">Darrell Jones</a> has performed in the United States and abroad with a variety of choreographers and dance companies such as Urban Bush Women, Ronald K. Brown and Min Tanaka. He continues to have long-term collaborative relationships with Bebe Miller Company and Ralph Lemon. Darrell is presently a tenured faculty member at The Dance Center of Columbia College in Chicago where he teaches classes in physical practice, performance and improvisational techniques.</p>
                </div>
            </section>
        </div>
    </>
  );
}

export default DarrellJonesBio;