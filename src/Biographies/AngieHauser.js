// ====== COMPONENTS ======

const AngieHauserBio = (props) => {

    return (
    <>
        <div className="one-hundred-vh flex jc-center mobile-al-center mobile-column top-padding mint-green">
            <div className="vault-padding mobile-flex mobile-jc-center mobile-width">
                <div className="flex space-btwn essay-title-height">
                    <div>
                        <h2 className="subtitle ">BIOGRAPHY</h2>
                        <h2 className="subtitle neuzit">Angie Hauser</h2>
                    </div>
                    <img className="bio-slash" src="/Images/Slash.svg" />
                    <div className="flex column flex-end">
                    </div>
                </div>
            </div>
            <section className="flex column al-center no-top-padding mobile-padding">
                <div className="essay-width ">
                    <p className="no-top-padding"><a href="http://www.angiehauser.com/">Angie Hauser</a>’s work and research is grounded by the questions of improvisation, performance and collaboration. Since 2000, Angie has been a member of the Bebe Miller Company, and was awarded a 2006 New York Dance and Performance “Bessie” Award for Creation and Choreography for her work with the company. Her dancemaking projects include collaborations with many artists including Chris Aiken, Darrell Jones, Jennifer Nugent, Alex Springer/Xan Burley, and Kathleen Hermesdorf. She has taught dance, improvisation, and choreography throughout North America, Europe, Asia, and in Colombia and Peru. She received her MFA in dance from the Ohio State University. She is currently Associate Professor at Smith College in the Department of Dance.</p>
                </div>
            </section>
        </div>
    </>
  );
}

export default AngieHauserBio;