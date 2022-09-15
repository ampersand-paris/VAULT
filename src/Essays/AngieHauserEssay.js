// ====== COMPONENTS ======
import { useLocation } from "react-router-dom";

const AngieHauserEssay = (props) => {
    
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
                        <h2 className="subtitle essay-author">Angie Hauser</h2>
                    </div>
                </div>
            </div>
            <section className="flex column al-center mobile-padding">
                <div className="essay-width">
                    <p className="no-top-padding"><b>How has your dance-making been affected (or not) by the virtual/digital availability of your work, in terms of both process and product?</b></p>
                    <p>Through my collaborations with Bebe Miller Company I have worked on several innovative documentation projects that have impacted my creative process. These have had some impact on the product of my work, and probably most notably impact on the conversation(s) about our work. (By conversation(s) I mean how our dancemaking is understood, discussed, and shared with folks not involved in the making itself.)</p>
                    <p>These digital objects include Motion Bank's <a href="http://scores.motionbank.org/two/#/set/sets">TWO</a> and Bebe Miller Company's <a href="https://bebemillercompany.org/projects/dancefort/">Dance Fort</a> ebook, <a href="http://themakingroom.org/">The Making Room</a>, and <a href="https://bebemillercompany.org/projects/in-a-rhythm-e-book/">How Dancing is Built: The Making of In A Rhythm</a> ebook.</p>
                    <p>There is a mutually informing/impacting relationship between the digital objects and the creative process of the dance work they are capturing. In each instant the work is changed, and sometimes led by, the ideas of documenting or capturing (examples: video captures during the process of creating A History, early audio captures between AH and BM.) The most wide reaching example is the making of A History in which all aspects of capturing, remembering, archiving, excavating, and making sense of process artifacts was mutually informing the creation process.</p>
                    <p>The random phenomenon of the Necessary Beauty solo video that is online. It is not packaged in any particular way (simply lives on Youtube) yet it seems to be seen by a LOT of people. I have received more comments, request for work, and reference to this video than any of the other designed digital objects. Why?</p>
                    <p><b>What strategies and experiences can you share related to digital or analog archiving and your current practice?</b></p>
                    <ul>
                        <li className="bullets">TWO. Digital object that was attempting to capture particular parts of the BMC process through video, animation, contextual materials like blogs, photos, short writings. It was meant to work as a score initially but I think stands more as a document/archive. This was a well funded and multi-artist project.</li>
                        <li className="bullets">Academic dossier 2011–2016. The comprehensive collection of visible product, contextual explanation, and critical analysis of my creative work from 2011–2016 for the purpose of application for tenure and promotion at Smith College. Strategies that are useful from this experience are almost all things I would do differently. There are a few technical and organization methods I would use again. Biggest take away...legibility and navigation of container (ie. whatever form/format you chose to contain your materials) matters.</li>
                        <li className="bullets">Notebooks. 20 years of notebooks that capture (or try to capture) the thinking, the questions, and the starting point for what I am involved in making. The “original prompts” are central to what I think is important and worth "bringing forward" of my creative process and body of work.</li>
                        <li className="bullets">My body. At the end of the day the archive that seems to be the most compelling, complex, and rich is the one that is my thinking body. The strategies and practices that I have (and share with other dancers) for keeping taught the threads that run through a process are the most valuable?/informative?/important? How we hold information and experience over time, in the sea of ever coming new information and experience is at the heart of dance making. The object (ie. the thing you are preserving/archiving/documenting) shifts and changes but the effort by the dancer to keep it connected to the original experience(s) is central to how we understand and share dance.</li>
                    </ul>
                    <p><b>What do you assume (in the best sense of the word) about audience and your practice?</b></p>
                    <p>Audiences are pluralistic and my perception of audience depends on the context and the bodies in the room.</p>
                    <p><b>What are some changes imaginable regarding company/independent artist strategies, audiences, funding and presenting structures?</b></p>
                    <p>I am looking to a younger generation of artists to answer these questions about the above changes to the field. I currently feel more reflective than responsive.</p>
                    <p>I’ve been personally focusing on a research agenda with my own work and figuring out what place that has in teaching and performing. The performing relationship does not seem as clear and I am curious as to how “presenting structures” might be useful in the sharing of research materials. There are some clear examples of this I have seen in the virtual realm.</p>
                    <p>Currently I have four different formats we've been sharing the research around the work:</p>
                    <ol>
                        <li className="numbers">Writing Format:</li>
                        <ul>
                            <li className="bullets">platforms to categorize, search and associate the collection of materials I have amassed</li>
                            <li className="bullets">word based (notebooks, outlines, charts)</li>
                            <li className="bullets">videos (rehearsal, performance, technique, sources)</li>
                            <li className="bullets">sound elements (interviews, voguing beats, chants)</li>
                            <li className="bullets">movement materials (movement modalities, choreographies, improvisations)</li>
                        </ul>
                        <li className="numbers">Workshop Format:</li>
                        <ul>
                            <li className="bullets">a physical training regimen made up of codified movements, improvisational modalities</li>
                            <li className="bullets">and recuperative rituals</li>
                            <li className="bullets">MELT-Sissy Vop</li>
                            <li className="bullets">Sissy: …a timid man or boy considered childish or unassertive Vop: … a high-spirited kick tossed in the air Sissy Vop is a collection of (e)feminized training rituals aimed at releasing enculturated oppressions in the body. Going to the edge of our physical limits is important for this release, and we will enter through a combination of rigor, rhythm and recuperative practices. Through altered states, disorientation studies, solo forms and group provocations, we will address the body and performance space as a site for transgression, transcendence and transformation.</li>
                        </ul>
                        <li className="numbers">Salon Format:</li>
                        <ul>
                            <li className="bullets">(working with various Docents)</li>
                            <li className="bullets">This salon formatted presentation is the opportunity to experience examples of research translations and backstories. Their intention is to break the eye and ignite discussion and discovery.</li>
                        </ul>
                        <li className="numbers">Theatrical Formats:</li>
                        <ul>
                            <li className="bullets">Curated mixes of research materials</li>
                        </ul>
                    </ol>
                </div>
            </section>
        </div>
    </>
  );
}

export default AngieHauserEssay;