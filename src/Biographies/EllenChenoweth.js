// ====== COMPONENTS ======

const EllenChenowethBio = (props) => {

    return (
    <>
        <div className="one-hundred-vh flex jc-center mobile-al-center mobile-column top-padding mint-green">
            <div className="vault-padding mobile-flex mobile-jc-center mobile-width">
                <div className="flex space-btwn essay-title-height">
                    <div>
                        <h2 className="subtitle ">BIOGRAPHY</h2>
                        <h2 className="subtitle neuzit">Ellen Chenoweth</h2>
                    </div>
                    <img className="bio-slash" src="/Images/Slash.svg" />
                    <div className="flex column flex-end">
                    </div>
                </div>
            </div>
            <section className="flex column al-center no-top-padding mobile-padding">
                <div className="essay-width ">
                    <p className="no-top-padding">Ellen Chenoweth is the Director of the Dance Presenting Series at the Dance Center of Columbia College Chicago and an Assistant Professor of Instruction. She is a writer and editor with the online dance journal thINKingDANCE and is on the board of directors for Links Hall. She holds degrees from Rice University and Texas Woman’s University and a Graduate Certificate from Wesleyan University’s Institute for Curatorial Practice in Performance.</p>
                </div>
            </section>
        </div>
    </>
  );
}

export default EllenChenowethBio;