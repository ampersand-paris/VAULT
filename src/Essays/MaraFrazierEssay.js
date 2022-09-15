// ====== COMPONENTS ======
import { useLocation } from "react-router-dom";

const MaraFrazierEssay = (props) => {
    
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
                        <h2 className="subtitle essay-author">Mara Frazier</h2>
                    </div>
                </div>
            </div>
            <section className="flex column al-center mobile-padding">
                <div className="essay-width">
                    <p className="no-top-padding"><b>How has your dance-making been affected (or not) by the virtual/digital availability of your work, in terms of both process and product?</b></p>
                    <p>I restage works from score and more recently am a curator in a special collections library. In the process of restaging, I am more likely nowadays to find video clips of works I'm interested in on YouTube or Vimeo early on in the process. I use them to help me decide whether I am interested in a piece or not. Video can be helpful too when a score is incorrect or unclear or when information such as the specific recording of music from the past is hard to find.</p>
                    <p>Digital availability has changed my rehearsal process. Video clips are easily generated and shared with the cast and consulted after breaks in the rehearsal process. "How instagrammable is this moment?" is a question that comes up in rehearsal. Though I believe that the fact that the possibility is always there changes the awareness; it makes you see things in terms of a square frame and a short clip. The ease of generating and sharing clips whether through text or Dropbox does make it easier to refer back to past information.</p>
                    <p>I have had the experience of the availability of video being seen as a problem by transmitters and coaches. For example in restaging Anna Sokolow’s Rooms, legacy holder Lorry May really didn’t want the dancers to see any video of other performances of the work or video of themselves doing the work. This felt strange, now that creation, access and sharing of video has become such a normal part of daily life. She really felt that video changes the product by inducing dancers to imitate performances rather than find their own authentic voice. I am curious about whether the availability of video really has this effect or not.</p>
                    <p><b>What strategies and experiences can you share related to digital or analog archiving and your current practice?</b></p>
                    <p>My current practice of restaging is integrated with my work as Curator of Dance and Movement collections at Ohio State. I have also worked archives in other environments in the past, including a cemetery and an educational publisher. I worked with the Dance Notation Bureau collection at TRI as a student and a fellow. One strategy that I have is to increase the number of wholly-owned or otherwise freely shareable items in an archive in order to optimize accessibility. I have consistently experienced frustration with copyright and restrictions on viewing and sharing dance-related materials. The experiences with archives that have been the most personally impactful to me are the ones where I have engaged in an open-ended way with the items themselves and see what emerges, whether it is questions, associations, feelings, or connections. Digital archiving is still somewhat new to me, I’ve been involved in some things but it feels difficult to "grasp."</p>
                    <p><b>What do you assume about audience in this regard?</b></p>
                    <p>I assume that audiences have viewed at least a sample of a choreographer’s work before they buy a ticket. I am aware that they have the ability to find endless playlists of dance videos online. So, if they come to a performance that I am a part of, it means that they have intentionally chosen that live experience for a reason. I am not assuming I know what the reason is, but some guesses would be that they are choosing to participate in a community, or that they trust the choreographer, director, or presenter to curate an experience for them better than they can do at home with the internet.</p>
                    <p><b>Considering the spectrum from independent artist to supporting institutions, what are the directional shifts you’d like to see? Examples: funding for archiving; educational/training support; advocacy; networking between artists; a collective clearinghouse/library; public access; etc.</b></p>
                    <p>I would like to see institutional support and increased funding for digitization of old audiovisual media. I am concerned about the risk of losing the content on old films and videos due to degradation. Not only do these old formats need to be preserved, but the digital collections they produced need to be housed (is that the word when it is digital we are talking about?), managed, and made accessible. I would like to see or to be part of developing projects that integrate oral histories with curated archival video that illustrates the movement in those histories. I would like training for myself and other archivists to learn better what the shift towards the digital means for archiving and creation. I would like artists to feel more welcomed into archives and provided with resources for their practice from the past. I am excited about the potential of digital platforms to give voice to dancers and to show how performers have played a role in the transmission of movement ideas. As a teacher, I have made use of tools like Dance Fort and Synchronous Objects that are freely available, and I would like to see more things like this.</p>
                </div>
            </section>
        </div>
    </>
  );
}

export default MaraFrazierEssay;