// ====== COMPONENTS ======
import { useLocation } from "react-router-dom";

const MarjiColeEssay = (props) => {
    
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
        <div style={{ backgroundColor: background, color: textColor }} className="essay-padding top-padding flex jc-center mobile-column sand-txt">
            <div className="vault-padding mobile-jc-center mobile-flex">
                <div className="relative essay-title-height mobile-width  flex  space-btwn ">
                    <div>
                        <h2 className="subtitle essay-heading">Essay</h2>
                    </div>
                    <img className="essay-slash" src={ slash }  />
                    <div className="flex column flex-end">
                        <a href="/marji-cole-bio" class="cursor no-underline" style={{ color: textColor}}><h2 className="subtitle essay-author">Marji Cole</h2></a>
                    </div>
                </div>
            </div>
            <section className="flex column al-center mobile-padding">
                <div className="essay-width">
                    <p className="no-top-padding"><b>What matters, and what matters to whom? Could the question of what matters be a guiding principle in creating an archive?</b></p>
                    <p>The collective stuff and memory of it all matters to me. The evidence of my lifetime of work matters to me. It is tangible evidence of my curiosity, exploration and growth as an artist.</p>
                    <p>Having the archive allows me to reflect, to reconstruct, and to use the sources as a springboard for something new. To reimagine something in a new way.</p>
                    <p><b>How do we contend with the third-person archive alongside the artist-driven archive?</b></p>
                    <p>Just thinking through who a third party would be. A critic, audience member, dramaturg, collaborator, peer, funder? Mostly people who are not present for the duration of the creative process but only the final product. How do we contend…</p>
                    <p><b>How do we reveal the thinking, the system, the mind, the kinesthetic feel of the work in its documentation?</b></p>
                    <p>By having multiple sources of documentation and acting as a key translator?</p>
                    <p><b>What can our expertise and practice in “co-presence” (everyone together, at one time, in one room) bring to the digital? What is unique about co-presence? What is unique about the digital?</b></p>
                    <p>Digital is fixed. Fairly easy to access and use. I think co-presence is the archive itself. It is the dialogue that happens with the artists in that moment in the here and now. We can often bring back the essence of it but not that particular moment in time.</p>
                    <p><b>How can we support all kinds of art-making and art-making people when the making is not easily understood or misunderstood within existing institutions?</b></p>
                    <p>More sharing with potential audiences. More sharing with our peers that are not in our direct collaboration groups.</p>
                    <p><a id="excerpt-one"></a>Create a valid space to move away from product driven work. Who has to change in order for this to happen. Potential audience, funders and the artists themselves? Recalibrate a system of values and successes…</p>
                    <p><b>What strategies and experiences can you share related to digital or analog archiving and your current practice?</b></p>
                    <p>I am currently utilizing Vimeo to keep digital versions of my work. I also use it as a source for storage when I am making dances. Vimeo is also a landing place if I am trying to share my work with someone. Otherwise, I have Beta, VHS, other different sizes of video tape and DVDs that all hold rehearsal and performance footage…. I need to be more organized with it all but it is a bit overwhelming.</p>
                    <p><b>How has (your) dance making been affected (or not) by the virtual/digital availability of your work?</b></p>
                    <p>It is certainly a useful tool between rehearsals when I am not in the studio. It allows me a visual aid to think things through, edit and organize material. So it helps to expand my dancemaking beyond the studio setting. It has been a very useful for reconstructing work and also letting it simmer.</p>
                    <p><b>What do you assume (in the best sense of the word) about audience and your practice?</b></p>
                    <p>That people are interested/curious about dance and want to engage with it.</p>
                    <p><b>What are some changes imaginable regarding company/independent artist strategies, audiences, funding and presenting structures?</b></p>
                    <p>The way that funders acknowledge your worth by the number of performances you do, size of the venue and the audience. The importance, worth and value of 1 person (especially a mid-career artist) receiving support to do something and the perception that it will only impact that single person…</p>
                </div>
            </section>
        </div>
    </>
  );
}

export default MarjiColeEssay;