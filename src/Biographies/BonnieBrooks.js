// ====== COMPONENTS ======

const BonnieBrooksBio = (props) => {

    return (
    <>
        <div className="essay-padding one-hundred-vh flex mobile-al-center mobile-column top-padding mint-green">
            <div className="vault-padding mobile-flex mobile-jc-center mobile-width">
                <div className="flex space-btwn essay-title-height">
                    <div>
                        <h2 className="subtitle ">BIOGRAPHY</h2>
                        <h2 className="subtitle neuzit">Bonnie Brooks</h2>
                    </div>
                    <img className="bio-slash" src="/Images/Slash.svg" />
                    <div className="flex column flex-end">
                    </div>
                </div>
            </div>
            <section className="flex column al-center no-top-padding mobile-padding">
                <p className="no-top-padding">Bonnie Brooks is associate professor emerita in Dance at Columbia College Chicago. Her work as a dance administrator, curator and writer includes service at the National Endowment for the Arts, David Gordon/Pick Up Company, Minnesota Dance Alliance, and Dance/USA. After several years' service as a visiting professor in the World Arts and Cultures Department at UCLA, she chaired the Dance Department at Columbia College Chicago for 12 years and directed, for three years, the department's Dance Presenting Series. Now retired from academia, she continues to think and write about dance from her outpost on Tryon Farm in northwest Indiana.</p>
            </section>
        </div>
    </>
  );
}

export default BonnieBrooksBio;