// ====== COMPONENTS ======

const LaneCzaplinskiBio = (props) => {

    return (
    <>
        <div className="essay-padding one-hundred-vh flex mobile-al-center mobile-column top-padding mint-green">
            <div className="vault-padding mobile-flex mobile-jc-center mobile-width">
                <div className="flex space-btwn essay-title-height">
                    <div>
                        <h2 className="subtitle ">BIOGRAPHY</h2>
                        <h2 className="subtitle neuzit">Lane Czaplinski</h2>
                    </div>
                    <img className="bio-slash" src="/Images/Slash.svg" />
                    <div className="flex column flex-end">
                    </div>
                </div>
            </div>
            <section className="flex column al-center no-top-padding mobile-padding">
                <p className="no-top-padding"><a href="https://wexarts.org/about/lane-czaplinski" target="_blank">Lane Czaplinski</a> has been director of performing arts at the Wexner Center for the Arts since 2017. He served previously as the artistic director of the contemporary performing arts center, On the Boards, in Seattle for 15 years, commissioning and producing over 80 new multidisciplinary performance works and nurturing regional artists to make new works that garnered national opportunities. One of his signature initiatives, OntheBoards.tv, expanded the audience for On the Boards’ programming through HD-quality performance films, attracting an international subscriber base of universities and arts enthusiasts. Czaplinski received a Genius Award from Seattle’s The Stranger, and The New York Times declared On the Boards “one of America’s best theaters for contemporary performance.”</p>
            </section>
        </div>
    </>
  );
}

export default LaneCzaplinskiBio;