// ====== COMPONENTS ======
import { useLocation } from "react-router-dom";

const DarrellJonesEssay = (props) => {
    
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
        <div style={{ backgroundColor: background, color: textColor }} className="top-padding flex jc-center mobile-column ">
            <div className="vault-padding mobile-jc-center mobile-flex">
                <div className="relative essay-title-height mobile-width  flex  space-btwn ">
                    <div>
                        <h2 className="subtitle essay-heading">Essay</h2>
                    </div>
                    <img className="essay-slash" src={ slash }  />
                    <div className="flex column flex-end">
                        <a href="/darrell-jones-bio" class="cursor no-underline" style={{ color: textColor}}><h2 className="subtitle essay-author">Darrell Jones</h2></a>
                    </div>
                </div>
            </div>
            <section className="flex column al-center mobile-padding">
                <div className="essay-width">
                    <p className="no-top-padding"><b>What strategies and experiences can you share related to digital or analog archiving and your current practice?</b></p>
                    <p>I have a collection of video materials, emails and notes related to my work with Bebe Miller Company and Ralph Lemon/Cross Performance. I’ve been particularly interested in the process aspects (scores, questions, conversations) around the making of the material in the room and what ideas continue to get passed on from project to project.</p>
                    <p>An additional current research agenda is the archiving the work of Dr. William R. Jones.</p>
                    <p>My late father, Dr. William R. Jones, was an internationally recognized and celebrated activist, scholar, philosopher, theologian, and educator. He dedicated his career to the analysis and methods of oppression and to working with others in their anti-oppression initiatives. A fundamental part of his work was the exploration of religious humanism and liberation theology.</p>
                    <p>I am embarking in the process of organizing his intellectual materials including the foundational work of sorting, cataloging and digitizing his collections—books, handouts, audio tapes, videos, and found objects.</p>
                    <p>An open source platform was something he was passionate about before his death and this catalog would hopefully serve as repository of his unique research and serve as a think tank for former students and colleagues to continue the conversation, advance the theoretical framework, and apply the framework to problems in real-world settings.</p>
                    <p><a id="excerpt-one"></a>I have a personal interest in cataloging his materials as a creative tool with applications in movement research and as a model in radical archival processes.</p>
                    <p>I am currently involved in several gatherings around "living" archives with Jawole Willa Jo Zollar (Urban Bush Women) and Bebe Miller (Bebe Miller Company). The process of archiving my father’s work with my own creative applications is concurrent with these conversations around choreographic archival materials.</p>
                    <p><b>How has (your) dance making been affected (or not) by the virtual/digital availability of your work?</b></p>
                    <p>My teaching work has been greatly affected by access to the collaborative work I have done with the Bebe Miller Company and the creative archives that have been implemented over the years.</p>
                    <p>They have served as CliffsNotes to the making conversations in the room and a jump start for my memory in the articulation of certain improvisation/choreographic processes. I haven’t found an effective way to work alongside the materials where students can research on their own although through conversation I realize that some of them have already accessed the materials without my introduction.</p>
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

export default DarrellJonesEssay;