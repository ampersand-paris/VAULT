// ====== COMPONENTS ======
import { useLocation } from "react-router-dom";

const JSunHowardEssay = (props) => {
    
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
        <div style={{ backgroundColor: background, color: textColor }} className="top-padding flex jc-center mobile-column sand-txt">
            <div className="vault-padding mobile-jc-center mobile-flex">
                <div className="relative essay-title-height mobile-width  flex  space-btwn ">
                    <div>
                        <h2 className="subtitle essay-heading">Essay</h2>
                    </div>
                    <img className="essay-slash" src={ slash }  />
                    <div className="flex column flex-end">
                        <a href="/jsun-howard-bio" class="cursor no-underline" style={{ color: textColor}}><h2 className="subtitle essay-author">J'Sun Howard</h2></a>
                    </div>
                </div>
            </div>
            <section className="flex column al-center mobile-padding">
                <div className="essay-width">
                    <p className="no-top-padding"><b>What strategies and experiences can you share related to digital or analog archiving and your current practice?</b></p>
                    <p>I’ve found that using visual art or documenting my work through a visual practice is interesting, and I’ve been figuring ways to make it a more prominent component to my practice. While I’m in Japan on my Asian Cultural Council Fellowship next year, I’ll experiment with this more.</p>
                    <p>Working with Darrell Jones, he would use the Coggle mind mapping software to document his research. I’ve been doing that for my projects and it has been helpful in finding an alternative way to document/archive my work.</p>
                    <p><b>How has (your) dance making been affected (or not) by the virtual/digital availability of your work?</b></p>
                    <p>I don’t think it has been affected by the virtual/digital availability. It definitely introduces more people to my work. When making, I don’t think I even think about the virtual/digital world and how it may work there. Virtual Reality/Augmented Reality is becoming a new trend in dance and I wouldn’t want to participate in something because it’s a trend, or even when it’s a norm. I think I’d be more interested in VR/AR when the right project arises. Or actually learning the right ways to use technology/integrated media to affect the virtual/digital availability of my work and discovering the best ways my work can be influenced by it.</p>
                    <p><b>What do you assume (in the best sense of the word) about audience and your practice?</b></p>
                    <p>For the current work, Black women have been literally crying in my arms about it. I don’t know if that’s a healing conceit inherent in the work or an acknowledgment of being seen, etc. But I’ve been thinking about my audience as a means of research. What are they seeing? What do they know? Who don’t they know? How are they affected by the work? What knowledge can they bring? I see many artists and organizations are so worried about building new audiences, but what are we doing to cultivate the audience already there? They're the ones that’ll bring new people to the work/venue. But digestion, feeling whole, giving hope, interrogation, provoking joy, and healing are some of the words I think about when I hear the word audience in relation to my work.</p>
                    <p><b>What are some changes imaginable regarding company/independent artist strategies, audiences, funding and presenting structures?</b></p>
                    <ul >
                        <li className="bullets">funding with multi-level, mutl-year of support</li>
                        <li className="bullets">more incubation residencies with full support of emerging artists or artists who aren’t nationally recognized</li>
                        <li className="bullets">companies providing commissions to emerging artists</li>
                        <li className="bullets">Chicago specific: more funding for dance, specfically for Black artists, Black queer/cis gendered dancemakers</li>
                        <li className="bullets">GRUNT Network</li>
                    </ul>
                </div>
            </section>
        </div>
    </>
  );
}

export default JSunHowardEssay;