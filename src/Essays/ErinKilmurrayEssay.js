// ====== COMPONENTS ======
import { useLocation } from "react-router-dom";

const ErinKilmurrayEssay = (props) => {
    
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
                        <h2 className="subtitle essay-author">Erin Kilmurray</h2>
                    </div>
                </div>
            </div>
            <section className="flex column al-center mobile-padding">
                <div className="essay-width">
                    <p className="no-top-padding"><b>What strategies and experiences can you share related to digital or analog archiving and your current practice?</b></p>
                    <ul>
                        <li className="bullets">As of now, the availability of my work, or perhaps the accessibility of it, by way of social media / virtual content sharing has been proven to be a greater currency than that of reviews or local press. My work has not historically been supported by local dance / performance writers (until somewhat recently)—so peer/follower review + feedback + championing has been the active ingredient in pushing it forward.</li>
                        <li className="bullets">Media sharing has allowed for my work + communities to build followings, with space for commenting / resharing / connecting / supporting in more than one form, in addition to being active audience members or resource/financial donors.</li>
                        <li className="bullets">I have gained so much learning through these platforms—most valuable as a space for me to listen to feedback and understanding of where this work exists in the Chicago performance scene, possibly beyond it. It helps keep the work publicly visible, and therefore less prone to exist inside of its own social / political bubble—I like to believe!</li>
                        <li className="bullets">My own dance-making has bloomed to me over time, due to the wide availability of artists’ work beyond my own city limits. Having this access has been deeply encouraging, most especially in this moment of my growth and making when I have felt as though my work has no place in the greater Chicago dance scenes. While a fairly adolescent feeling, it has allowed me to feel like less of an outsider.</li>
                        <li className="bullets">I am not certain that I understand if my making has been affected in any negative way—perhaps some is in "danger" of being poached / copied / etc…. However this seems inevitable, if you are able to gain any kind of visibility for your work—no matter where you may be in your career.</li>
                    </ul>
                    <p><b>What do you assume (in the best sense of the word) about audience and your practice?</b></p>
                    <ul>
                        <li className="bullets">My choreographies and practice directly connected to ideas of environment building, audience experience, space-making, pop-referencing and acknowledgement that dance/arts/performance places are social, political centers.</li>
                        <li className="bullets">I care to assume that if the audience and the artists truly accept their responsibility to one another—which is that the artists need the audience to be their witness, and in return, the art itself has to be respected and supported through its witnessing, the exchange will be all the more effective.</li>
                        <li className="bullets">I assume that my audience is intelligent, that they may not have all of the tools to dissect and analyze contemporary performance work. I assume that they do not want to attend performance work / events that alienate them, so in the ways that I can control, my practice works to be approachable in nature, offering identifiable content as an access point into making room for more challenging questions and conversations.</li>
                        <li className="bullets">I assume that the audience chose to attend this performance rather than seeing a concert / going to a bar / staying home and watching videos on the internet. That if I want them there, it is a part of my responsibility to give them to find a way in, to be ready for listening and understanding of the piece.</li>
                        <li className="bullets">I assume that my work is not for everyone and all audience, and that is okay—though I do want it to be seen, and only then for an opinion to be formed from there. Maybe there is room to shift the perspective, if you can just get people into the room? Also, maybe not.</li>
                    </ul>
                    <p><b>What are some changes imaginable regarding company/independent artist strategies, audiences, funding and presenting structures?</b></p>
                    <p>This is a very difficult question, given that my experience is limited to Chicago’s performance scene, only. With that, below are some thoughts:</p>
                    <ul>
                        <li className="bullets">More approachable programming as a means of expanding audiences—a greater consideration for WHERE your work is shown, and WHAT that place/venue/institution/neighborhood communicate to your current and potential future audiences.</li>
                        <li className="bullets">More shared bills as a means of resource sharing—especially with the idea of programming established artists with emerging artists. The audiences are generationally separate, and both groups only gain from the shared exposure to each others’ specific cultures by way of this alliance.</li>
                        <li className="bullets">I am still new to this in ways of grant / direct financial support initiatives—however I do understand that funders and funding in general is not something that can be counted on, consistent, or enough. Build a good name. Make the work and create ways for your audience to show up for you and you for them. Allow this to be your currency.</li>
                    </ul>
                </div>
            </section>
        </div>
    </>
  );
}

export default ErinKilmurrayEssay;