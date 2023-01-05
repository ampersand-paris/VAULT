// ====== COMPONENTS ======
import { useLocation } from "react-router-dom";


const BebeMillerWriting = (props) => {
    
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
        <div style={{ backgroundColor: background, color: textColor }} className="essay-padding top-padding flex jc-center mobile-column">
            <div className="vault-padding mobile-jc-center mobile-flex">
                <div className="relative essay-title-height mobile-width  flex  space-btwn ">
                    <div>
                        <h2 className="subtitle essay-heading">Writing</h2>
                    </div>
                    <img className="essay-slash" src={ slash } />
                    <div className="flex column flex-end">
                        <a href="/alex-springer-bio" class="cursor no-underline" style={{ color: textColor}}><h2 className="subtitle essay-author">Bebe Miller</h2></a>
                    </div>
                </div>
            </div>
            <section className="flex column al-center mobile-padding">
                <div className="essay-width">
                    <p className="no-top-padding"><b>How has your dance-making been affected (or not) by the virtual/ digital availability of your work, in terms of both process and product? </b></p>
                    <p>Twelve years ago Talvin Wilks, who’d been our dramaturg for a decade of dance making, was musing on how the range of our research practice might be available. As he put it, why didn’t our research into the astrophysics of Dark Matter, which was part of our query in creating Necessary Beauty (2009), show up, somehow? When someone googled either Dark Matter or Necessary Beauty, how could our research be accessible in some way? That was the start of the process of archiving our creative practice in a way that gave access to the line of questions that we encountered over time, beyond the works themselves. And, since we, as a company of dance makers, were the ones who followed the train of thought from one piece to the next, it made sense for us rather than a reviewer or archivist to take on that job. And perhaps because we were taken with the idea of crafting an archive rather than a dance our next steps involved our own tracing of our history, corralling the parallel metaphors (like Dark Matter), talking with other dance artists, etc. Early on though, we figured we might as well make a dance—A History (2012)—in order to see for ourselves what this archive might contain.</p>
                    <p>The ebook <a href="https://bebemillercompany.org/projects/dancefort/" target="_blank">Dance Fort: A History</a> (2015) acts as a companion to the performance work. “We were wondering how (and if) audiences could locate the threads of related ideas and questions that were foundational to our creative practice but not so visible in the dances themselves. It was important to us that they might find them, if so inclined to look.” Once it was completed and launched we realized that the added benefit of an artifact that could be accessed independently—skimmed, pondered, offered for free—also gave us a chance to think about our own work in a different way. I’ve found that I’ve referred to it in a range of situations that have carried my own thinking forward. I’ve asked myself to look at the dancing in front of me from a differently objective angle, that of a virtual witness. The fact that we now have several virtual products that can act alongside the video capture of a single performance amplifies what I feel is the  “hidden” work of choreography: a record of practice on the way to an unknown conclusion.</p>
                    <p><b>What strategies and experiences can you share related to digital or  analog archiving and your current practice?</b></p>
                    <p>By now, after hours of recorded rehearsals and conversations, with many of those conversations referenced in the works themselves, I’m a bit full of data. Much is forgotten but every once in a while a snippet of a conversation reappears; I see the trace from there to now and I’m off again with more of a sense of what the drivers have been. Weirdly, it’s the analog body that (still!) contains the trace and, surprisingly, continues to translate it to whichever body is available. My own execution is no longer the point of the archived motion or thought. So my current strategy seems to rely on a continued refining of a lexicon, a syntax of action-in-time, shared with other artists at hand. Because I’ve had the good fortune to continue to collaborate with long time partners Angie Hauser and Darrell Jones, we are at a point of wonderful regard and curiosity about what is and isn’t a shared perspective on a creative moment. The echoes outward into our collective practices is deeply satisfying.</p>
                    <p><b>What do you assume about audience in this regard?</b></p>
                    <p>I continue to feel that some audience members enjoy (is that the right word? Not sure…) sharing in the discovery and follow-through of a train of thought. I work at shaping the passage of their encounter as best as I can so we are both in league with that discovery. Not all audience members enjoy the same thing; I do my best at paying attention to what may be there to find. The fact that audiences are there to take part in the work that is currently in front of them still leaves me the opportunity to follow whatever thread that has brought us both to that current moment. We are each drawing reference from our own perspective; perhaps assumption is not the best strategy for either of us.</p>
                    <p><b>Considering the spectrum from independent artist to supporting institutions, what are the directional shifts you’d like to see? Examples: funding for archiving; educational/training support; advocacy; networking between artists; a collective clearinghouse/library; public access; etc.</b></p>
                    <p>I am a big fan of convenings between artists. Vault itself is an example of artists gathering for one particular purpose and then being swept up in the potential experiential bank in sharing ideas, sharing food and, most basically, being in proximity. I would love to see this supported by regional groups of artists, friends, art and academic institutions, interdisciplinary thinkers and planners. I would love for funders to note the wealth of exchange possible on a local level, and how that might further the cultural and social exchange needed in these difficult times. I would particularly love to meet with artists of my own generation as we head toward a creative future that was not available to earlier generations. We are continuing, and we have much to share.</p>
                </div>
            </section>
        </div>
    </>
  );
}

export default BebeMillerWriting;