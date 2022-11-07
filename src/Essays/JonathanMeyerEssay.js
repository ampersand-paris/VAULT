// ====== COMPONENTS ======
import { useLocation } from "react-router-dom";

const JonathanMeyerEssay = (props) => {
    
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
                        <a href="/jonathan-meyer-bio" class="cursor no-underline" style={{ color: textColor}}><h2 className="subtitle essay-author">Jonathan Meyer</h2></a>
                    </div>
                </div>
            </div>
            <section className="flex column al-center mobile-padding">
                <div className="essay-width">
                    <p className="no-top-padding"><b>What strategies and experiences can you share related to digital or analog archiving and your current practice?</b></p>
                    <p>I don’t have enough sense of comparison to say what are strengths. I do keep fairly well organized files by show of photo, video, and audio, and maintain a second back up of all archives. I’ve been fairly thorough about putting money into good video documentation of shows. I haven’t spent much time or money approaching non-traditional or creative approaches to archiving.</p>
                    <p><b>How has (your) dance making been affected (or not) by the virtual/digital availability of your work?</b></p>
                    <p>Primarily it has made grant application and other submissions significantly easier. It has also impacted (sometimes) how I make work.</p>
                    <p><b>What do you assume (in the best sense of the word) about audience and your practice?</b></p>
                    <p>Germane to this topic, <a id="excerpt-one"></a>I would say that the work fails when it’s not live. A bit of well placed video as a marketing tool might catch a potential audience member’s attention, but otherwise I feel that digital/virtual is a tool for my relationship with funders, not audience.</p>
                    <p><b>What are some changes imaginable regarding company/independent artist strategies, audiences, funding and presenting structures?</b></p>
                    <p>The onus is so often on artists rather than on the institutions that mean to support them. The initiative that is now DataArts (erstwhile Cultural Data Project), was of particular interest to me. Rather than have to continually remold our financials to fit two dozen different funders reporting formats, DataArts allowed an artist to enter their data only once, and then generate those reports how the institutions wanted to see them. It was a huge time saver. How much time do we spend crafting dozens of grant applications per year, time which could so better be spent in the studio? There’s often a 75% overlap between any given one and the next, yet they still have to be each individually written. There has to be a way that the DataArts model could be expanded to have what would essentially be a pre-existing, regularly updated grant application, which funders could tailor to suit their formatting desires. The main body of each grant application could then be instantly generated without extra time spent, and have perhaps only one or two questions particularly crafted by each funder for their applications.</p>
                </div>
            </section>
        </div>
    </>
  );
}

export default JonathanMeyerEssay;