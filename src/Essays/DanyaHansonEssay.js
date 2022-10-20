// ====== COMPONENTS ======
import { useLocation } from "react-router-dom";

const DanyaHansonEssay = (props) => {

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
                <div className="relative essay-title-height mobile-width  flex space-btwn ">
                    <div>
                        <h2 className="subtitle essay-heading">Essay</h2>
                    </div>
                    <img className="essay-slash" src={ slash }  />
                    <div className="flex column flex-end">
                        <a href="/dayna-hanson-bio" class="cursor no-underline" style={{ color: textColor}}><h2 className="subtitle essay-author">Danya Hanson</h2></a>
                    </div>
                </div>
            </div>
            <section className="flex column al-center mobile-padding">
                <div className="essay-width">
                    <p className="no-top-padding">Each piece I make follows its own creative process and sets its own terms. Similarly, the way in which I experience the impulse to document, archive, capture each work—and the act of making it—varies wildly. Over time, I’ve noticed that documentation has become more of an aesthetic pursuit for me, as the lines between the original work and its archival document have increasingly blurred.</p>
                    <p>When I created Gloria’s Cause in 2010, it was documented for On the Boards TV. Aside from the fact that the piece hadn’t undergone its final edit at the moment when it was so beautifully captured on video, it somehow felt less compelling than my impulse to adapt and fictionalize the making of the work into a feature film. That film, Improvement Club, illuminated the humor and pathos inherent in the creative process, as well as the economics and politics of contemporary performance, in a way that reflected my own interests more than it documented the work I’d made. In this case my desire to capture a creative process turned into a major adaptational project in itself.</p>
                    <p>My 2013 piece, The Clay Duke, could have a similar trajectory, at least hypothetically; I’ve outlined a limited series for television based on what happened after I made a piece based on a public shooting in Panama City, FL.</p>
                    <p>My current piece, 28 problems, is made of an extensive vocabulary of movement glyphs that correspond to mathematical symbols found in the work’s source material (a discarded sheet of calculus problems). Because I was working with Jim Fletcher, and Jim lives far away from me, I decided to make short repeating videos of the vocabulary to serve as learning tools—a little in the spirit of Anne Teresa de Keersmaeker’s open source Rosas Danst Rosas project.</p>
                    <p>Then I fell in love with the idea of a bank of animated GIFs of the movement glyphs, and put huge effort into producing GLYPH GIFs (<a href="https://28problems.daynahanson.com">28problems.daynahanson.com</a>). Although this happened as I made the work, not after the fact, it’s another example of a somewhat documentary impulse blurring into a creative one.</p>
                    <p>Whether narrative, civic-minded or abstract, my work over the last seven years hasn’t always fit neatly into an evening-length container—a sense that I think many of my peers share. I find great interest in whether and how that which spills beyond the edges of that agreed-upon form can have value in itself.</p>
                </div>
            </section>
        </div>
    </>
  );
}

export default DanyaHansonEssay;