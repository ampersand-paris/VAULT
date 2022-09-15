// ====== COMPONENTS ======
import { useLocation } from "react-router-dom";

const BonnieBrooksEssay = (props) => {

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
                        <h2 className="subtitle essay-author">Bonnie Brooks</h2>
                    </div>
                </div>
            </div>
            <section className="flex column al-center mobile-padding">
                <div className="essay-width">
                    <p className="no-top-padding">As a writer, scholar, occasional dramaturg, curator and producer my perspective on this subject is based on my observations and experiences with others in the field.</p>
                    <p>We know what conventional practice has assumed since the advent of affordable videotape recorders and digital resources: record the process, record the dance, save for the future, make available under controlled (or not controlled) platforms. Over time these platforms have become largely digital, though assets of various kinds continue to be accepted, maintained and archived in libraries and related public and private collections.</p>
                    <p>In the early 1980s, when video cameras became at least somewhat affordable, a shift occurred that increased the archival prospects for both rehearsal practice and the recording of a completed work. During this period I was a young manager working with David Gordon in New York City, and I remember well the value of our first “camcorder” which allowed us to record David’s work in progress, then usable for many different purposes, artistic and other.</p>
                    <p>In the 2000s, when YouTube, Vimeo etc became sustainable archival platforms, documentation of dance practice and production took another turn. This widened a general discussion about intellectual property in dance, and public access/use of such content. The advent of personal, digital phones opened yet a wider avenue to cost-free recording and documentation.</p>
                    <p>Two contrasting approaches to documentation and archiving come from the Merce Cunningham Trust (NY, NY) and Joe Goode Performance Group (San Francisco, CA).</p>
                    <p>As part of their overall Legacy Plan, the Merce Cunningham Dance Company took several steps prior to and immediately after Cunningham’s death to ensure that his dances and philosophy remained extant and available posthumously. Some years prior to his death, Cunningham created a Trust that would immediately own his choreographic rights and be responsible for his intellectual property and artistic assets after his death. As an element of establishing the Trust he appointed a former dancer in his company (Patricia Lent) to serve as his licensing director in order to oversee, in an orderly way, the distribution of his works to entities that would learn and dance them. He also appointed current and successor Trustees whose responsibility would be to oversee all of his artistic assets after his death. In addition to the creation of the Trust, Cunningham approved a Legacy Plan that included creation of “Dance Capsules” that would become digitalized resources for as many of his dances as possible. The Dance Capsules (there are presently over 80, of his over 175 works created) are digitally held on the Trust’s website, fully accessible to approved scholars, writers and re-constructors of Cunningham’s works and partially accessible to the general public. The Dance Capsules contain all available assets related to the given dance preserved.</p>
                    <p>In addition to the Capsules, the Cunningham Company, prior to closing, sold the visual art and costume elements held by the company to the Walker Art Center where it is, as a collection, maintained. They donated all papers, video and film and other physical assets from the company archive (apart from the personal documents and records belonging to company archivist David Vaughan) to the Dance Collection of the New York Public Library.</p>
                    <p>Contrast this large-scale approach with that of Joe Goode, who has declared no interest in preserving his own performance works for future performance but is very committed to a legacy focused on his choreographic methods, approaches to making work, and space for rehearsal and performance (the Joe Goode Annex in San Francisco’s Media Gulch). Goode has the space now established and continues to work incrementally towards documenting his methods and training others (mostly former dancers) in deploying his art-making practices through public and private workshops and choreographic mentoring conducted in the Bay Area and on tour.</p>
                    <p>Regarding “assumptions” about practice and audience, my general sense is that the spectrum of attitudes and approaches is wide among artists, and I look forward to hearing the discussion on this at the meeting. So much depends on what I’d describe as “orientation” to the work, what artists are really trying to “do” with dance and how this then informs the thinking about how it is used internally, how it is deployed in public, and what is of value for current and future generations. It also depends in so many ways on the degree of “control” a given artist wants in controlling their own current and posthumous narrative. David Gordon’s extensive Archiveography project is an example of an artist deploying their own resources to construct a legacy project that is at the same time a living and documented work of art and installation. I don’t think there are set answers to these questions.</p>
                    <p>Potential changes imaginable are contingent on the overall mission of particular artists and related dance entities. Presenting organizations, historically, record performances for their own records and archives (which are then sometimes used by scholars, writers and others as well as provide additional performance and other activity records for the artists). Is this “enough?” Is there further obligation or possibility for institutional participation in documentation and preservation? Can there be more “Jacob’s Pillow-style” archival approaches? So much depends on human and financial resources, and also on the sheer time required to customize, with participating artists, what is appropriate for documentation as well as who has access to it once documented.</p>
                    <p>I close this reflection pondering the prioritization, readiness, curiosity and “reflectivity” of any given artist in relation to devising a customized (and probably evolving) approach to creating and maintaining their own “vault.” Duke Ellington was asked what his favorite piece of music, from all he had written, was, and he replied, “the next one.” With digital recording now so available and affordable, the simple recording of a body of work is do-able from the beginning of a choreographer/dancer’s path. The larger questions of exactly “what?” and “for who?” and “why?” remain.</p>
                </div>
            </section>
        </div>
    </>
  );
}

export default BonnieBrooksEssay;