// ====== COMPONENTS ======
import { useLocation } from "react-router-dom";


const AlexSpringerEssay = (props) => {
    
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
                <div className="relative essay-title-height mobile-width flex">
                    <div>
                        <h2 className="subtitle essay-heading">Essay</h2>
                    </div>
                    <img className="essay-slash" src={ slash } />
                    <div className="flex column flex-end">
                        <a href="/alex-springer-bio" class="cursor no-underline" style={{ color: textColor}}><h2 className="subtitle essay-author">Alex Springer</h2></a>
                    </div>
                </div>
            </div>
            <section className="flex column al-center mobile-padding">
                <div className="essay-width">
                    <p className="no-top-padding"><b>How has your dance-making been affected (or not) by the virtual/digital availability of your work, in terms of both process and product?</b></p>
                    <p>I see video as a vital tool in the creative practice for viewing, reviewing, and holding the ephemeral nature of choreography. However, thoughtful consideration and care are required when making one’s work digitally available. Within the current virtual landscape, we all participate in the curation of our own digital presence and the consumption of others’. My persona as an artist, teacher, performer, and maker is connected to what is available online—what I elect to make available and what is bracketed of my work by supporting organizations (Movement Research at Judson Church’s 4-minute clips come to mind). The use of social media further complicates my online profile by reducing it to small bytes. On one hand, I am able to reach a broader audience and perhaps gain exposure. Eye-catching video clips and poignant imagery can lure an audience (an imperative for our dwindling box offices). And these platforms also create opportunities for viewing dance outside the walls of the theater, participating in a global market of the consumption of live art. However, where dance is concerned, when overexposed, this content can drain vitality from the work. <a id="excerpt-one"></a>We lose the radical “now” of live performance when we hyper-edit content, direct the eye, and present it on repeat in social media zones. We lose the potential appetite of the individual who comes to see live work and creates their experience with the performers/artist. Where is the unknown? Where is there space for risk if we are always asking ourselves to be ‘camera-ready?’ How are we developing, encouraging, and demanding viewership? The virtual audience is being cultivated differently than the live audience.</p>   
                    <p>A recent hiatus from social media has been liberating for my process with Xan Burley. The nag to be notable and liked through such a small frame can be debilitating, creatively and emotionally. Constantly generating content draws energy and focus away from the work of making performance. If I am making portions of our work available, it is drawn from selected performances or dance films and edited specifically for that digital window. The intersection of media and dance excites me, but only in ways that do not distract from fully embodied research.</p>
                    <p>As Doug Varone’s archivist, I worked specifically to design content for the company that drew from its history. In 2012, for the company’s 25th anniversary season, I created an online mini-documentary series entitled Uncovering the Archives. The series comprised 25 documentary shorts based on 25 of Varone’s seminal dances. Each video cataloged, in a narrative flow, archival performance and studio footage, interviews with original cast members and collaborators as well as commentary from Doug. This type of content, which helps to illuminate the choreographic process, has certainly impacted Varone’s virtual and IRL audience. This series remains available online and to this day has collectively gained 40,000+ views and reached audiences around the globe. In addition, it helped to sustain for Varone a relevant online presence and therefore a marketable image.</p>
                    <p>Beyond the audience-building and marketing aspects of digital content, my interest extends to the digital composition of the archive. As a composite, what is it? How is it taking shape with and around an ever-evolving creative process?</p>
                    <p><b>What strategies and experiences can you share related to digital or analog archiving and your current practice?</b></p>
                    <p>Since the introduction of the Flip camera in 2009, video has been a fundamental tool in my creative practice with Xan Burley. There is a trail of our creative work which has mostly arrived from the necessity to see, or be outside the work that we are making and performing in. It has become imperative to have a video camera’s lens to give us an outside view of ourselves. We currently have an iPad mini that is used only for our creative work and holds all the content in the same place. It is then transferred to a hard drive for long-term storage. Content is dumped into a trough without any order beyond the timestamp and file number. As I scroll through this folder, I see material manifest and transform over the course of time. Yet I am left with only a glimpse of the process and many questions and gaps in how the work unfolded.</p>
                    <p>Recently, we actively put aside the tool of video, instead evaluating our work through self-reflection and embodied development. With too much focus on the flattened form, self-analysis and critique can overpower an otherwise fluid creative moment, those moments that still need workshopping. Now, we sometimes film simply to have a record but resist the urge to look at it afterwards. Does filming it create a proof of it happening? Do I crave validation of my making just by having a video?</p>
                    <p>There is also a narrowing that can occur through this self-reflexive use of video. Are we spiraling in on ourselves by only looking back in on ourselves? Is the camera closing off certain possibilities and filling-in essential unknowns? Also, I am curious about my relationship to the camera in the studio. Does it give me a reason to show what I am making/doing more clearly? Does my body put forth more effort when I know a version will become the enduring record? Is a reliance on video removing the analog memory of the dancer? Are we so reliant on digital records that we can no longer physically hold onto the memory of choreography?</p>
                    <p>For Doug Varone’s archive, I have made efforts to digitize as much content as possible and over time have uploaded the majority of content to the company’s Vimeo page. There is a Google spreadsheet that holds all the links and other information about each of his 90+ dances. When I was dancing for the company, I caught as much content as I could in any process and organized it on a hard drive as time went on. My archival practices really arose from the necessities of the dance making process and not from a formal request or need to archive. Being a performer in the work felt important to the ways in which I organized, gathered, and interacted with archival material. I knew that this content would serve as the conduit for future versions of the work and help to carry it forward to future dancers or répétiteurs.</p>
                    <p><b>What do you assume about audience in this regard?</b></p>
                    <p>For now, I assume the audience for this content will be myself and my close collaborators. These videos are remnants from the creative process and unlike a performance, I do not intend for them to be seen. In a way, however, I am replicating an audience with the camera. Video archives give me the seat of witness in this case, however damning that may be in the long run.</p>
                    <p>As the archivist for Doug Varone—the audience will mostly be company members and dancers who are familiar with the work and Doug. The archive is currently internally focused for the preservation and reconstruction of dances. It is not something made publicly available, but I am curious about how and when these resources are made more openly available. The Uncovering the Archives project opened his archive to the public and I am curious about other such methods for sharing the work.</p>
                    <p><b>Considering the spectrum from independent artist to supporting institutions, what are the directional shifts you’d like to see? Examples: funding for archiving; educational/training support; advocacy; networking between artists; a collective clearinghouse/library; public access; etc.</b></p>
                    <p>It seems to me that archiving often comes as an afterthought in the choreographic process. The lack of resources for dance artists in general does not create conditions for thorough documentation or preservation. Support and education for artists about preservation practices could help stretch our work beyond the immediate. Sharing systems that artists are already using for archiving could motivate new practices to take shape. Software or online platforms that offer templates for cataloging could be extremely helpful in creating a foundation for artists to build upon.</p>
                    <p>I hope to see more digitally available platforms like Motion Bank, where the depth of creative work can be explored and dissected. This also inspires because of its interactivity—the audience must still actively engage with its content to uncover the archive. Another artist’s process can be used to motivate and transform the work of future artists. Perhaps this type of availability would assist in education about the choreographic forms as well and invite a broader audience for viewership.</p>
                </div>
            </section>
        </div>
    </>
  );
}

export default AlexSpringerEssay;