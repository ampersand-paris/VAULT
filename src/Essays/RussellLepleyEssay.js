// ====== COMPONENTS ======
import { useLocation } from "react-router-dom";

const RussellLepleyEssay = (props) => {
    
    const location = useLocation()
    let background = 'var(--mint-green';
    let textColor = 'black';
    let slash = '/Images/Slash.svg'

    if (location.state) {
        background = location.state.background
        slash = location.state.slash
        textColor = location.state.textColor
    } 

    return (
    <>
        <div style={{ backgroundColor: background, color: textColor }} className="top-padding flex jc-center mobile-column">
            <div className="vault-padding mobile-jc-center mobile-flex">
                <div className="relative essay-title-height mobile-width  flex  space-btwn ">
                    <div>
                        <h2 className="subtitle essay-heading">Essay</h2>
                    </div>
                    <img className="essay-slash" src={ slash }  />
                    <div className="flex column flex-end">
                        <h2 className="subtitle essay-author">Russell Lepley</h2>
                    </div>
                </div>
            </div>
            <section className="flex column al-center mobile-padding">
                <div className="essay-width">
                    <p className="no-top-padding"><b>1.</b></p>
                    <p>Product:</p>
                    <p>I am an early career dance-maker and have documentation of my complete works publicly available on streaming platforms Youtube and Vimeo. This documentation has been useful when applying for fellowships, awards and grants. Attention to how my work is documented affects how institutions perceive my product which influences my future work directly. Funding from a presenter or a grant/award allows me to dedicate my time to the process rather than strategizing a marketing and fundraising campaign. My work becomes more thoughtfully layered and more concise without those pressures. Further, documentation affects whether a work will be given opportunities to evolve through touring and develop in residencies.</p>
                    <p>Fragments of a process or performance on social media seem to be a new and evolving form of archiving. It connects choreographers not only with a local audience but an online dance community and has an impact on job opportunities and networking. Within the concert dance world, peers have been hired for full-length commissions on social media content alone and FluxFlow Dance Project has been contacted by performers interested in working with the company based on our media output.</p>
                    <p>Process:</p>
                    <p>Documenting process digitally has become habitual for me. It enables me to move an idea from a notecard to film. I structure my work as a string of scenes which in process are rarely created chronologically. The ability to shift my attention to a new idea without fear of losing work enables me to compartmentalize then organize later. This has helped me develop thematically related material that varies significantly in form or genre but which can be assembled later into a cohesive whole.</p>
                    <p><b>2.</b></p>
                    <p>The vast majority of my movement generation comes from transposing melodies or texts to corresponding movement. I rely on video documentation to ensure details are not lost. I did this initially to work towards whatever performance was at hand but I have since repurposed archived material in different contexts—a piece I made for six professional dancers in Germany 2016 was reimagined for 19 adult beginners in Columbus in 2019. I’m curious what possibilities that sort of movement time travel will offer me as a maker 10, 20, 30 years from now.</p>
                    <p><b>3.</b></p>
                    <p>As a maker, I’m focused on creating work with live performers engaging with a live audience.</p>
                    <p>As an archiver of that work I have of three audiences.</p>
                    <p>First, I am aiming to capture a work’s energy and essence for institution leaders and dance company directors in pursuit of job opportunities. I’m assuming they have seen a lot of dance film from well-funded organizations and my video needs to be a high quality to demonstrate professionalism and preparedness for their stages.</p>
                    <p>Another audience is our social media following. I’m assuming they need a more striking visual and have a smaller attention span given the nature of those platforms. Finally, I think of myself and my collaborators as material for analysis, organization, composition. We need clear and simply shot video and a system in place to conveniently access videos.</p>
                    <p><b>4.</b></p>
                    <p>Increased funding and particularly networking assistance would be useful for newer artists. FluxFlow Dance Project’s boon is that its space has a community full of artists. From that network, we found our videographers early on and that collaboration has been going strong for two years. When working on a limited budget and having many other life/work elements to juggle, a relationship of trust is invaluable. Finding more ways to build those relationships seems important.</p>
                </div>
            </section>
        </div>
    </>
  );
}

export default RussellLepleyEssay;