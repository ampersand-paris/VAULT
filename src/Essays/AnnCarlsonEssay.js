// ====== COMPONENTS ======
import { useLocation } from "react-router-dom";


const AnnCarlsonEssay = (props) => {

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
                        <a href="/ann-carlson-bio" class="cursor no-underline" style={{ color: textColor}}><h2 className="subtitle essay-author">Ann Carlson</h2></a>
                    </div>
                </div>
            </div>
            <section className="flex column al-center mobile-padding">
                <div className="essay-width">
                    <p className="no-top-padding"><b>How has your dance-making been affected (or not) by the virtual/digital availability of your work, in terms of both process and product?</b></p>
                    <p>My process of making work has not been deeply impacted by the presence of the digital medium. I have been impacted by making work inside the digital media discipline, however. I have had to be encouraged to participate, use and work with the digital representations of my work for marketing purposes. I admit I have on-going resentment about the conflation of live performance and the mediated copy.</p>
                    <p><b>What strategies and experiences can you share related to digital or analog archiving and your current practice?</b></p>
                    <p>I do have most of my work digitized, and am in the process of digitizing other collaborative projects for the purposes of making them available online . . . I consider this online availability as a resource and an archiving, and yet it is a separate practice from making live work. I have been thinking a lot about the archiving of inspiration; building live performance events from the work that gave rise to my practice, this is performative “archiving” of sorts . . . maybe also an archival homage but in the present with artifacts of memory and/or occurring with and in the bodies (that have moved through time) that originally performed the work.</p>
                    <p><b>What do you assume about audience in this regard?</b></p>
                    <p>Great question. <a id="excerpt-one"></a>I assume that there is a much larger audience/spectatorship for works that are mediated for viewing on a personal computer. I think of mediated versions of live works (works that appear online) as a sub par/lazy way to experience performance. However, you can’t be everywhere, and it is a great gift to get a sense of what was happening in a work. I have “used” mediated works myself for inspiration . . . I am also an audience member for this form of experiencing dance and performance. But usually I have already seen the work live. I’ll have to think more about this...</p>
                    <p><b>Considering the spectrum from independent artist to supporting institutions, what are the directional shifts you’d like to see? Examples: funding for archiving; educational/training support; advocacy; networking between artists; a collective clearinghouse/library; public access; etc.</b></p>
                    <p>Ha! All of the above. I had early access to artifacts and video documentation of historical and contemporary dance when I was in my 20’s. I worked in the Dance Collection of the NY Public Library of Performing Arts when I first moved to NYC. I would wait until everyone left for the day, and go in the back to touch, and hold sometimes wear objects from dance pioneers that came before me. I found, because I had access to these things, a relationship to what gets saved, held onto, and kept and how these elements and objects continue to bear meaning into the present/future. I would look at the money register of Denishawn and see how they kept their books, or put some of Isadora’s headdresses on for a moment or two. (I know, bad, I was careful.)</p>
                    <p>I’d like to see opportunity, education, funding support for this interaction with the historical as well as contemporary objects, representations, notes. I think libraries and particularly special collections need to have an artist residency program. It would be powerful to be able to be near an archive for an extended period. Most of us don’t have access to the potential in these collections; the breadth and depth of what and how these materials could inspire us in SO many directions.</p>
                </div>
            </section>
        </div>
    </>
  );
}

export default AnnCarlsonEssay;