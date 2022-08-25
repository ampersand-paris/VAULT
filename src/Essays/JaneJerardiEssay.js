// ====== COMPONENTS ======
import { useLocation } from "react-router-dom";

const JaneJerardiEssay = (props) => {
    const background = useLocation().state.background

    return (
    <>
        <div style={{ backgroundColor: background }} className="top-padding flex jc-center mobile-column sand-txt">
            <div className="vault-padding mobile-jc-center mobile-flex">
                <div className="relative essay-title-height mobile-width  flex  space-btwn ">
                    <div>
                        <h2 className="subtitle essay-heading">Essay</h2>
                    </div>
                    <img className="essay-slash" src="/Images/CreamSlash.svg" />
                    <div className="flex column flex-end">
                        <h2 className="subtitle essay-author">Jane Jerardi</h2>
                    </div>
                </div>
            </div>
            <section className="flex column al-center mobile-padding">
                <div className="essay-width">
                    <p className="no-top-padding"><b>What strategies and experiences can you share related to digital or analog archiving and your current practice?</b></p>
                    <p>Back-up, back-up and back-up again.</p>
                    <p>I remember many years ago doing a residency at a charter school in which I created a dance-video project with fifth and sixth graders. Since this was another era, I was burning the final product to DVD (we were going to project the video on the outside of the school building in downtown DC and would run it on a DVD player on loop). Right when I burned the DVD, the hard-drive in my laptop crashed. Fortunately, the DVD was already burned. Not so fortunately, my hard-drive was toast. It was one month out of AppleCare. Hard-drives don’t last forever.</p>
                    <p>I have a plethora of hard-drives and not much of an organizational strategy for them. When in doubt, I buy another hard-drive. I have many portable drives and then I back these up to desktop drives. I sometimes wonder if my older drives will no longer power-up or what ancient version of Quicktime my projects are in from circa 2005. But, I have not dealt with all of this. I feel like the chef who doesn’t cook at home: I deal with video, media management, and archives all day, but I can’t say my own (older) archival digital files are in such great order.</p>
                    <p>I don’t have the money for this—but I definitely recommend (if you do) setting up Network Attached Storage (NAS) or some sort of RAID array that will automatically create redundancy for you.</p>
                    <p>It is interesting that the current piece I’m working on began with another earlier work from ten years ago. The composer I worked with for the musical score for the performance asked me for the video recently. I realized it was on some mini-DV tape somewhere… the video isn’t great but I recently digitized it. I think about now how easily I can access my current and recent work online and that it is now so easy to share and I am grateful for that. On the other hand, there’s something nice about the physicality of a tape. It’s solid—even if it degrades, it won’t crash.</p>
                    <p><b>How has (your) dance making been affected (or not) by the virtual/digital availability of your work?</b></p>
                    <p>I don’t know that it is exactly. But, I can say that the digital availability of my work has affected my professional practice—I know that curators, collaborators, and audiences look and see my work online. While I don’t think collaborations have originated through simply seeing my work online, it definitely has become a way for other artists to find out more about me and have a reference point for my work. Recently, I contacted a writer who has an online, curated archive of projects and he included my work in his project—an unexpected surprise. My work utilizes video—and so for me the space between live and video is somewhat seamless. That said, I think certain aspects of my work are inherently live—and I (like many performers/live artists) find it challenging to adequately represent my work on video. I think video is a separate medium and has its own qualities, strengths, and limitations.</p>
                    <p>I do often share rehearsal videos—this isn’t quite the same thing as "archival" work, but I can and do share rehearsal videos with performers. I work also with video and so video platforms like vimeo are a part of my every-day practice and work.</p>
                    <p>I often consider what and how I’m sharing from a work in-process and what documentation I share from a live work. I sometimes feel the desire to be selective about what I share with the world. Sometimes the process of making a work—the visual notes that might appear as Instagram posts, for example—becomes almost another piece in and of itself.</p>
                    <p><b>What do you assume (in the best sense of the word) about audience and your practice?</b></p>
                    <p>I assume:</p>
                    <p>that audiences want live experiences.</p>
                    <p>that video and writing will never supplant live experience.</p>
                    <p>that sometimes the video and writing and image is the end product and the "piece" that I am sharing with the audience.</p>
                    <p>that I must pay attention to the audience, consider the audience, understand my relationship to my audience (whether spatial, contextual, in the moment in terms of my choice making, energetic, unknowable, and sometimes political, powerful).</p>
                    <p>that our relationship to technology is shifting and changing all of the time.</p>
                    <p>that technology is just a set of tools and an expression of us.</p>
                    <p>that our culture tends to value language more highly than the body, but that doesn’t necessarily need to be the case.</p>
                    <p>What are some changes imaginable regarding company/independent artist strategies, audiences, funding and presenting structures?</p>
                    <p>I wish I could get paid as much to make art as I do to edit and document other artists’ work.</p>
                    <p>I think that most funding and presenting timelines don’t match the reality of artists’ creative cycles. Because there are so few resources, it takes me twice or maybe three times as long to make a new piece. I have very little time to be in the studio and even less time to be in the studio with my collaborators, so projects happen “in between” things until time can be carved out. So instead of a funding time-line of a year or a season, I’d like to see more two-year and three-year grants (with the funds to match).</p>
                    <p>I think it would be interesting to test out more networked structures. What would happen if curation became less hierarchical? What if there were more chain-curated projects? What if artists were funded to give their funds to peers? What if we stopped valuing single “star” artists or directors? I think the structures have not changed to match the way artists are viewing their creative process or practice. I’m not sure how easy it is to change existing structures though. What if there were a program that only funded co-ops of artists?</p>
                </div>
            </section>
        </div>
    </>
  );
}

export default JaneJerardiEssay;