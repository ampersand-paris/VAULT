// ====== COMPONENTS ======
import { useLocation } from "react-router-dom";

const TonyaLockyerEssay = (props) => {
    
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
                        <h2 className="subtitle essay-author">Tonya Lockyer</h2>
                    </div>
                </div>
            </div>
            <section className="flex column al-center mobile-padding">
                <div className="essay-width">
                    <p className="no-top-padding">In 1991, I worked in the Cage/Cunningham Foundation archives. It was a large room in Westbeth with four desks, rows of shelves full of thousands of reels of film, videotapes, books and boxes. Framed posters by Jasper Johns and Robert Rauschenberg hung on the walls; and there was a small area for copying VHS tapes and then shipping them to libraries around the globe. Merce was the first to have a filmmaker-in-residence. The archive was a small business operation selling VHS copies of Merce’s in-house film productions. One day I found a small blue plastic recipe box hidden on a shelf. On yellowed index cards John Cage had written the details of their earliest performances: title, date, location, names of the performers. It struck me how John had the foresight to know this would matter, that their work would matter. Or perhaps, by the very act of so meticulously recording it, he had helped manifest its importance.</p>
                    <p>Yesterday, I met with my friend the musician/composer Stuart Dempster to help archive our eleven-year collaboration in durational improvisation, a project called ROOM. The archive’s home will be the San Francisco Museum of Performance and Design. First we asked ourselves:</p>
                    <p>What did we think we were doing?</p>
                    <p>What’s the nature of what we’re archiving? What are the layers important to us? Then the curator and teacher of dance history in me zoomed out further: What are the politics of inclusion? Who and what might be missing?</p>
                    <p>Who do we want to be in conversation with, now and 100 years from now?</p>
                    <p>Stuart is adamant his archives remain in paper-form rather than rely on digital formats, “Digital archiving is dangerous. Maybe you’ll get ten years out of it. But you won’t get 100 years.” I agree. It’s convenient to easily find the entire archive of Trump’s twitter feed online, but there are other online archives I once relied on that have already fallen into oblivion. William Forsythe’s web project Synchronous Objects is on Adobe Flash Player, technology slated to become obsolete by 2020.</p>
                    <p>As a teacher of dance history I continually question who and what we include in our curriculums. Dance history courses have been shaped by the cultural and racial biases of the dance world yet the classroom may also be a space where we can most rapidly redress omissions. What archival materials should we create to address disappearance and erasure? Commonly taught dance artists like Merce, Alvin Ailey, Martha Graham, Yvonne Rainer, Bill T. Jones, DV8, Anna Teresa De Keersmaeker adapted their staged works for the mediums of television and cinema, in some cases modifying the work dramatically. Dance history teachers also rely on the secondary source of documentaries, as both representations and interpretations of the past. The Guardian calls this the golden age of documentaries. Documentary films have become more experimental, diverse and popular, yet dance documentaries are still rare.</p>
                    <p>Every year my students re-discover Mondays with Merce, the online series of mini-docs created during Merce’s final years. Each short film combines interviews with imagery from the archives in tidy thematic episodes. The artists who continually pop-up in dance history curriculum’s often also have clear, concise writing about their work: Cunningham’s short essay, “Four Events That Have Led to Large Discoveries,” Rainer’s “No Manifesto,” the many dramatic retellings of the opening night of The Rite of Spring.</p>
                    <p>Yes, archives need to collect all this important stuff. But archives also need to tell good stories.</p>
                    <p>Or, another way of putting it: archives are never objective. Just as a researcher’s race, gender or class influences their interpretation of an archive; how the archive is constructed, located and monitored influences the researcher. If you are creating an archive to resist disappearance and erasure, it helps to have strategies for manipulating the system.</p>
                    <p><b>II.</b></p>
                    <p>There are no naked ways of seeing. Even photographs are unreliable witnesses to history.</p>
                    <p>In 1998, just after the fall of Communism, I worked with a group of dancers in Russia. After the first session we took a lunch break. In the cafeteria, as we waited patiently for boiled dumplings, a dancer, Slava, told me matter-of-factly, “I do contact improvisation. In 1975 I did ‘underground dancing.’ If the Red government saw anything funny they would put you in the crazyhouse. Friends died in the crazy house. Poisoning of injection.” “For improvising?” I asked.</p>
                    <p>“Yes, anti-Soviet dancing. I had friends die.”</p>
                    <p>After lunch he asked me to practice contact improvisation with him. We make contact, and he freezes in form. I move, and he shifts to his next static shape, his head in contact with my shoulder. He shifts again, to a new shape and a new point of contact. It’s then I realize he has only seen photographs of contact improvisation. He could not imagine the motion between the images.</p>
                    <p>Can we ever fully understand or imagine what we have not experienced? Archives are spaces that can invite imagination, empathy and self-reflection. When the future looks back at us through photographs and video, it will be through a mirror that reflects its own image.</p>
                    <p>There are many archival traces of our Russian project. Composer Pauline Oliveros self released the music. Choreographer Paula Josa Jones published the scores used to develop the material. There is video documentation online, and a published book of photographs. But what captures the project most for me, as someone who lived it, are the stories, like this last one, written for Contact Quarterly.</p>
                    <p>Growing up in northern Canada, it was the writing of dance critic Deborah Jowitt that so enticingly captured for me the downtown New York dance scene of the 70s and 80s. Her vivid descriptions of artists and their experiments were the map that brought me to New York in the 90s, and the chart I used to navigate the world when I began to meet artists like Douglas Dunn, or Simone Forti, or Gus Solomons Jr. I worry about dance criticism as a diminishing practice, increasingly reliant on aesthetic opinions rather than an author’s powers of description or ability to contextualize a work, or a process, in its own time and place.</p>
                    <p>In the far corner of the Cage/Cunningham archive was the desk of David Vaughan. An extraordinary, lovely man, as anyone who knew him would tell you. David was an artist, critic, historian, and Merce’s archivist for more than fifty years. He was a living archive. I believe in living archives. Dancers are living archives, yet their perspectives are often sorely missing from the record. They live both deeply inside of, and outside of the work. I want dancers to tell me the secrets of the dance. What did they think they were doing? I want dancers to help re-write the stories.</p>
                    <p>I’m interested in archives of the work that was never made, the unrealized, the impossible, like Leonardo’s drawings of flying machines.</p>
                    <p>I’m also interested in archives containing the work that is often made invisible. We increasingly recognize that inquiry and dialogue are equal parts of an artist's labor and should be supported as such. But the labor of production is still often invisibilized. Artists are increasingly hybrids of curators/ dramaturges/creative producers/community organizers . . . their compositional strategies converging with entrepreneurial ones. How do we archive the traces of that labor?</p>
                    <p>As a teacher of dance history I invite students to interpret archival material through the lenses of identity, technology, and compositional strategies but the lens I often find most revealing is the lens I call “modes of labor and support.” What systems of labor produced these events? Were they collective, hierarchical, radical, practical; how were they privileged or entrepreneurial? How is the labor and influence of collaborators who don’t fit within our current definition of “artist’ acknowledged? Who was paid? How were they paid?</p>
                    <p>One of the archives I want to build draws on the Seattle Festival of Dance Improvisation, a festival celebrating radical intangibility. The scholar Ann Cooper Albright pointed out to me that if we collected all the faculty biographies and short class descriptions from the festival’s twenty-four year history we would have an extraordinary survey of the evolution of movement improvisation in this country. I want the archive to also tell the story of collective organizing, community co-creation, and resilient adaptability that made the festival possible.</p>
                    <p>About a year into my stint with the Cunningham studios, I spent an afternoon in The New York Public Library of the Performing Arts, and found a letter John had written to Merce advocating for the dismantling of the matriarchy of modern dance. Finding that letter changed the direction of my life, because it changed my narrative of Merce and John. I began to pull away from the Cunningham Studios because modern dance was one of the few matriarchies I knew, and I was committed to not undermine it.</p>
                    <p>Archives may provide evidence, explanation, and justification. But no matter how meticulously we may try to shape history, it will always be a story open to interpretation. To quote Oscar Wilde, “Our only obligation to history is to re-write it.”</p>
                </div>
            </section>
        </div>
    </>
  );
}

export default TonyaLockyerEssay;