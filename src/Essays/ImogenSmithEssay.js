// ====== COMPONENTS ======
import { useLocation } from "react-router-dom";

const ImogenSmithEssay = (props) => {
    
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
                        <h2 className="subtitle essay-author">Imogen Smith</h2>
                    </div>
                </div>
            </div>
            <section className="flex column al-center mobile-padding">
                <div className="essay-width">
                    <p className="no-top-padding"><b>How has your dance-making been affected (or not) by the virtual/digital availability of your work, in terms of both process and product?</b></p>
                    <p>My observation as an archivist has been that artists often lack access to documentation they need to remount works, largely due to the prevalence of obsolete analog video formats. They expend excessive time trying to find materials they need for re-staging, marketing, and engagement. Particularly with the decline in dance criticism in newspapers, artists feel more responsible for educating audiences about their work, which requires mining legacy materials. I have also observed that artists can gain valuable new perspective on their works and the arc of their career through the archiving process. Lastly, educators urgently need more access to full-length recordings of dance works for teaching, and the dearth of such recordings affects the next generation of dance-makers and their dance literacy.</p>
                    <p><b>What strategies and experiences can you share related to digital or analog archiving and your current practice?</b></p>
                    <p>During my tenure with Dance Heritage Coalition and now with Dance/USA, I have participated in and observed a variety of successful strategies and resources for archiving. These include:</p>
                    <p>The Artist’s Legacy Toolkit, which consists of free online guides, tips, tools, and templates aimed at providing a reliable source of information and adaptable tools to help artists organize, preserve, and manage their analog and digital records.</p>
                    <p>Hands-on assistance to artists and companies, funded by grants or through contracts, including:</p>
                    <ul>
                        <li className="bullets">Archive assessments, in which an archival consultant completes and site visit and interviews artists and/or company staff, and creates a report giving a high-level description of the scope and condition of the archive along with prioritized recommendations for actions to improve security and accessibility of archives.</li>
                        <li className="bullets">Inventories: more detailed descriptions of collections, at the item level for AV materials and box/drawer level for paper materials. Inventories improve intellectual control of archives and enable prioritization of materials for digitization.</li>
                        <li className="bullets">Digitization projects: migration of obsolete video formats (including analog and digital magnetic media and optical media) to archival-quality digital file formats; scanning of paper and photo materials, including slides and oversize posters; development of long-term storage plans for digital assets.</li>
                        <li className="bullets">Creation of databases and digital asset management systems to allow organizations to efficiently find and access digital and analog materials.</li>
                    </ul>
                    <p><b>What do you assume about audience in this regard?</b></p>
                    <p>If I’m interpreting this question correctly: I would assume that the audience for dance archives includes artists, educators, students, and the general public, and that accessibility of archives affects the visibility and appreciation of dance, and as such affects the health of the field.</p>
                    <p><b>Considering the spectrum from independent artist to supporting institutions, what are the directional shifts you’d like to see? Examples: funding for archiving; educational/training support; advocacy; networking between artists; a collective clearinghouse/library; public access; etc.</b></p>
                    <p>All of the above! My top priorities are:</p>
                    <p>Support for digitizing at-risk AV materials and improving security of digital assets through partnerships with trusted institutions;</p>
                    <p>Community-based workshops to strengthen archiving and records management skills and build peer-to-peer support networks;</p>
                    <p>Hands-on help for artists and dance orgs from archival Fellows or consultants to provide assessments, set priorities, create feasible work-plans, and train staff</p>
                    <p>I would also like to see a commitment from artists to the value of broad access to their work, and an agreement on shared standards for describing dance collections;</p>
                    <p>Funding for all of the above!</p>
                </div>
            </section>
        </div>
    </>
  );
}

export default ImogenSmithEssay;