// ====== COMPONENTS ======

const ImogenSmithBio = (props) => {

    return (
    <>
        <div className="one-hundred-vh flex jc-center mobile-al-center mobile-column top-padding mint-green">
            <div className="vault-padding mobile-flex mobile-jc-center mobile-width">
                <div className="flex space-btwn essay-title-height">
                    <div>
                        <h2 className="subtitle ">BIOGRAPHY</h2>
                        <h2 className="subtitle neuzit">Imogen Smith</h2>
                    </div>
                    <img className="bio-slash" src="/Images/Slash.svg" />
                    <div className="flex column flex-end">
                    </div>
                </div>
            </div>
            <section className="flex column al-center no-top-padding mobile-padding">
                <div className="bio-width">
                    <p className="no-top-padding"><a href="https://www.danceusa.org/" target="_blank">Imogen Smith</a> is the Director of Archiving and Preservation at Dance/USA, where she oversees national programs that provide archiving services, education, and resources to the dance field. Previously, she served as Project Manager and Acting Executive Director for Dance Heritage Coalition (DHC), and she oversaw the integration of DHC’s archiving and preservation programs into Dance/USA in 2017. She has also worked on oral history projects and video archives in the Jerome Robbins Dance Division of the New York Public Library for the Performing Arts, and on visual arts collections at the Brooklyn Museum and the Morgan Library & Museum.</p>
                </div>
            </section>
        </div>
    </>
  );
}

export default ImogenSmithBio;