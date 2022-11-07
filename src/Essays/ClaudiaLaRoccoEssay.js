// ====== COMPONENTS ======
import { useLocation } from "react-router-dom";


const ClaudiaLaRoccoEssay = (props) => {

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
                <div className="relative essay-title-height mobile-width  flex space-btwn ">
                    <div>
                        <h2 className="subtitle essay-heading">Essay</h2>
                    </div>
                    <img className="essay-slash" src={ slash } />
                    <div className="flex column flex-end">
                        <a href="/claudia-la-rocco-bio" class="cursor no-underline" style={{ color: textColor}}><h2 className="subtitle essay-author">Claudia La Rocco</h2></a>
                    </div>
                </div>
            </div>
            <section className="flex column al-center mobile-padding">
                <div className="essay-width">
                    <p className="no-top-padding"><b>How has your dance-making been affected (or not) by the virtual/digital availability of your work, in terms of both process and product?</b></p>
                    <p>It’s incredible to be able to see works that you wouldn’t otherwise, whether through Vimeo sharing of private links from friends and collaborators or channels like OtB.tv. At the same time, there is often anxiety around documentation: will it be “good,” will it accurately represent, where will it live, how to preserve it … all of these little concerns that add up. And I always think of something Adrienne Trustcott said to me for <a href="https://www.nytimes.com/2010/01/24/arts/dance/24boards.html">this NYT article</a>:</p>
                    <p>"Ms. Truscott said she still remembers the first time a video camera entered the rehearsal room, how much it changed the body-to-body nature of creating and remembering dance.”</p>
                    <p><b>What strategies and experiences can you share related to digital or analog archiving and your current practice?</b></p>
                    <p>My practice is writing, and performance that comes through writing, so it should come as no surprise that, whether I am editing for Open Space, creating context for OntheBoards.tv dance videos, or working on my own creative projects, I have a keen interest in the ways in which writing archives. These subjective, fragmented, maddeningly incomplete “records” are often where it’s at for me, both as maker and receiver. I mostly hate watching live work on a screen; it’s not the thing.</p>
                    <p><b>What do you assume about audience in this regard?</b></p>
                    <p><a id="excerpt-one"></a>I try to assume nothing about “audience.” It’s an abstraction I’ve never found particularly helpful.</p>
                    <p><b>Considering the spectrum from independent artist to supporting institutions, what are the directional shifts you’d like to see? Examples: funding for archiving; educational/training support; advocacy; networking between artists; a collective clearinghouse/library; public access; etc.</b></p>
                    <p>More collaboration between institutions, to figure out who best can do what sort of documentation, so that connective tissue can be prioritized (putting The Kitchen’s archive in conversation with MANCC’s archive in conversation with OtB.tv films, for example) and redundancies avoided.</p>
                    <p>I’d also like us to better consider how we archive, and whether we should. Many institutions and artists are burdened by archival materials that no one is looking at, no one has access to, and etc. In many cases these things simply eat up storage, whether digital or not. Why are we archiving, and for whom? Before any other questions, those should be answered.</p>
                </div>
            </section>
        </div>
    </>
  );
}

export default ClaudiaLaRoccoEssay;