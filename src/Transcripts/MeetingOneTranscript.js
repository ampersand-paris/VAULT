// ====== COMPONENTS ======
import { useLocation } from "react-router-dom";

const MeetingOne = (props) => {

    const location = useLocation()
    let background = 'var(--mint-green)';
    let textColor = 'black';
    let slash = '/Images/Slash.svg'

    if (location.state) {
        background = location.state.background
        textColor = location.state.textColor
        slash = location.state.slash
    } 

    return (
    <>
        <div style={{ backgroundColor: background, color: textColor }} className="top-padding flex column al-center">
            <div className="essay-width flex space-btwn">
                <div className="column">
                    <h2 className="transcription">Transcription</h2>
                    <p className="transcription"><b>Vault Meeting #1</b></p>
                    <p className="transcription-details">March 10, 2017
                    <br></br>
                    Cafe Orlin, NYC</p>
                    <p className="transcription-details">Participants: Ann Carlson, Ishmael Houston-Jones, Judy Hussie-Taylor, Jaamil Olawale Kosoko, Bebe Miller</p>
                </div>
                <img className="transcript-slash" src={ slash } />
            </div>
            <section className="flex column al-center">
                <div className="essay-width">
                    <p><b>Jaamil:</b> Key points Bebe brought up, some questions. Clearly interest in contemporary, virtual ways in which we document the work, those who are engaged with sexy internet-based ways…how that affects the creative process as a whole. #Negrophobia, very much a kind of living archive with a digital archive embedded in the work—audience members take photos, create a part of the archive as they view the work. I keep various ephemera (programs, etc.) that becomes part of the show…. I can talk about how artist archive ideas went into the actual conception and creative process, allowing that to be a shared process among viewers and spectators.</p>
                    <p>Some questions I have: what would be a successful event? What are the major take-aways? Key questions at the core?</p>
                    <p><b>Bebe:</b> Getting people to show up is as far as I’ve gotten!</p>
                    <p>To those in my/our generation, ¾” video: hold it and keep it and refer to it, while not even being sure who we think is going to actually look at it 30 years from now. <a id="excerpt-one"></a>There’s now a very different horizontal platform in the idea of archiving. It seems like the “#” phenomenon, that says “look at this now,” not saying “keep on looking at this one moment in time for the next 30 years.” The immediacy of the archive now, broadcast it, be done with it, let it be absorbed into the artistic mindset of the culture, even at the beginning of conceiving of the idea/event/artwork. In that difference between the vertical and horizontal, on a fascial/body level, is there a difference in the work we make, do we need to support both axes or yet a new direction? By support it sounds like I mean the funders but it’s not that. it’s more like what are we as artists able to conceive of in this three-dimensional model? The live documenting, the archiving being a part of it.</p>
                    <p><b>Jaamil:</b> The traditional is still deeply important. Though there’s a younger generation using these alternative forms of documentation, there are also funders and presenters that very much want you to send them a quality video. That hasn’t gone away. You don’t send a Snapchat with your MAC grant application.</p> 
                    <p><b>Bebe:</b> That’s why the funders need to come to Vault.</p>
                    <p><b>Jaamil:</b> A both/and situation. Being aware of the more traditional forms and also being able to speak to contemporary archiving.</p>
                    <p><b>Bebe:</b> The take-away: more than tools and practices we can share…a paper?</p>
                    <p><b>Ishmael:</b> With The DeFrantz curatorial project, I wasn’t satisfied with the document afterwards. Curating for a Black Audience, two summers in a row. I wasn’t sure what the outcome was.</p>
                    <p>Did it ever get printed? (Judy: yes). After all of that juicy discussion it came down to quotes and bios.</p>
                    <p><b>Judy:</b> There’s also a video, too, of that convening. <a href="https://sites.duke.edu/configurationsinmotion/files/2015/12/Duke-Configurations-Booklet.pdf" target="_blank">Configurations in Motion</a>. There are multiple ways… easiest to send via a link dispersed throughout the field to whoever wants it, but how do you make it more valid for those who did participate? I agree it was very short: we got there and got back on the plane,, but it conjured up some important topics. It was an opportunity to voice specific questions and concerns in the community that I’m rarely able to talk about in my everyday life.</p> 
                    <p><b>Ann:</b> That would be good to have that happen.</p>
                    <p><b>Ishmael:</b> The meeting itself was the important thing. The document…didn’t get what that was about. But having this incredible group of people brought together to focus on A Topic was really important. Topic was really clear. With Vault, what is the IS?</p>
                    <p><b>Ann:</b> Because the topic was really clear, was that a safe way to really go at it? Deeply? And then it bore more opportunity to talk. </p>
                    <p><b>Ishmael:</b> Good to hear a multiplicity of voices and ideas. A very broad group aesthetically, from universities, funders, artists, Moira (Creative Capital).</p>
                    <p><b>Jaamil:</b> I think it did spawn a kind of attention/cultural shift in a way. I noticed with Moira, the way she has reconsidered the MAP Fund, and how it’s been positioned, I credit that shift to this convening. Maybe not entirely but there certainly was a shift in the way that program was articulated before and after the meeting.</p>
                    <p><b>Ishmael:</b> And Ben Pryor, with American Realness, that shift.</p>
                    <p><b>Jaamil:</b> It’s doing something that’s really special. It created a deeper sensitivity and complexity to curatorial practice, specifically how various kinds of individuals participate in that conversation. I thought it did what it needed to do.</p>
                    <p><b>Bebe:</b> I wonder… it was real important to both of you, here we are now, the document wasn’t as productive as it could have been, but there has been a catalytic effect in the field. So maybe what we’re talking about is a series of steps, that, without knowing it, end up being related. Thinking forward to whatever the next one might be, keeping some attention towards this. This idea of the documentation of the two axes, is one way of visualizing this, to steer the conversation. What’s most valuable to me is just having the conversation. Bonfire, food…. some way of gathering where the outcome is not fully known but the vector of attention—and of the invitation—is the important thing.</p>
                    <p><b>Ann:</b> What if each person took up as a responsibility of their participation that they were going to write? Not intensely pressured, but you’re going to write, have an unofficial document that is everybody’s voice, and we’re given time to do that. Couple of hours.</p> 
                    <p><b>Judy:</b> With the curatorial convening, we all came with papers. In the actual convening the position papers were represented, and then refined during the actual convening for publication afterwards.</p>
                    <p><b>Bebe:</b> Ann, you were learning all of your dances as part of your own archive process. That is one variation on these things. Moving forward with what are our needs, how do you articulate and visualize, what is it that you do, what you’re holding on to, how is that, for you, an archive? The Platforms that Ishmael has done (Parallels, Lost and Found), position back then and now as part of the reference. What’s great is that these are all forms that move archiving way beyond the “thing” that actually happened. It’s already building in the change, the shift, the learning.</p>
                    <p><b>Judy:</b> This work, in terms of design, not scale, is about feedback loops. You’re building in multiple points of entry and return.</p>
                    <p><b>Ann:</b> Spirals.</p>
                    <p><b>Judy:</b> All kinds of versions of this. There are the concrete versions you decide and create a structure for inside the convening/platform; these openings and portals (onto process); and then there are the witnesses who then come back and respond. So that there’s not just one kind of documentation (that’s worked with in DSP partnership with Ishmael). I saw a symposium at the New Museum by Johanna Barton and Julia Bryce (?) art historian. Structure: artist and writer did “duets,” each got to present and then be in conversation. Trajal’s The Adventure: core group of younger curators writers and artists who began the convening and ended it. Everyone’s in it together though there are different kinds of roles. It’s not one white paper event, some of it disappears. You could decide in advance what part you want to play. Like a camp chore chart: somebody does this, others do that. Not a single format.</p>
                    <p><b>Judy:</b> There’s a way artists talk about their work. There’s a way they talk together about their work. When you’re wearing a curatorial/documenting hat, there’s another way of responding. Call and response modality. What has seemed so rich is watching how that can function. It’s actually really complicated to organize, but really fruitful.</p>
                    <p><b>Bebe:</b> What makes it complicated?</p>
                    <p><b>Judy:</b> So many moving parts. Charlie Atlas said it’s like needlepoint, in the details. Back to Jaamil’s question: what is the main/2/3 question?</p>
                    <p><b>Bebe:</b> I wonder, on a personal level, what am I not seeing and attending to that’s not on my plane? We all have that but it feels like there’s a shift of mindset that I’m reading it’s affecting what I’ve thought of what I’ve made over time. I spent $2,000 digitizing old rehearsals and performances but then I couldn’t even throw away the VHSs! Ridiculous. Something about where the art lives is at a really interesting flux/change/development. Attachment to the object which is somehow attached to the archiving of the dance.</p>
                    <p><b>Ann:</b> Archiving methods become the attachment, in temporal form.</p>
                    <p><b>Ishmael:</b> In going through Fred [Holland]’s stuff, what happens when we pass? Making decisions about stuff, a certain thought process enters into the mix as part of it.</p>
                    <p><b>Ann:</b> Convening: how important to remember is just that the people coming together is such a large part of it. Like CCR. The coming together is so rare, exciting, important not to forget it whether it’s hard to get them there or not. Whoever is there will be overjoyed to be in the same room together.</p>
                    <p><b>Bebe:</b> CCR, lived for 8-10 years, 11 choreographers. We spend the first three years wondering what we wanted to do, then realized that the proximity was the driver. I feel I’m still working with that. The connection, the generative process of a community over time for those of us there, it did something. A lot has to do with proximity factor, allowing for it.</p>
                    <p><b>Ann:</b> Remember that’s a thing. It’s a binding force, it’s a community that gets built and then extends.</p>
                    <p><b>Bebe:</b> We’ve gotten some NEA $, we’re also going for discretionary funding. Sam said funders will support this because they then don’t have to support the artists, cynically said. Who would want to be there to witness just what might generate out of Vault.</p>
                    <p><b>Ann:</b> Hoping for 10-12 artists we can fund, inviting academics, presenters, funders, maybe 30-40 people plus a local population of artists. Not huge.</p>
                    <p><b>Bebe & Ishmael:</b> That’s big!</p>
                    <p><b>Judy:</b> Annually or one-off?</p>
                    <p><b>Bebe:</b> Maybe the beginning of some kind of repeating gathering. Don’t know how to do that but open to it.</p>
                    <p><b>Judy:</b> I think it’s important that it’s a repetitive action. One of the things about Configuration convening is two years in a row, new players come into it, new info. The gathering over five years, you see a community being cultivated, every year new stories, new communications. Making a plea for more than one event.</p>
                    <p><b>Bebe:</b> Biannual is feasible, but also connecting things to other things that are going on. Not having known about Configuration before, shows how hard it is to make these things visible.</p>
                    <p><b>Jaamil:</b> Sounds like a perfect Dance USA convening. I’m on their programming committee…. I could see a number of motherships in support of this conversation.</p>
                    <p><b>Ann:</b> We could do another meeting online? This is working well.</p>
                    <p><b>Judy:</b> I hear what you’re saying about a repeat event, but let’s see what happens first. Maybe the first gathering is a working group!!! Maybe smaller, then plan.</p>
                    <p><b>Ann:</b> Look at other convenings. CCR—successful but also confusing. In Minneapolis for one, one last night at Duke. Not meant to go beyond a couple hours but interesting.</p>
                    <p><b>Judy:</b> Wesleyan ICPP convening was mixed. Not enough time to build any trust, talked around issues. That building of trust is critical to what people can create. It was two days, an invited group who gave presentations, then students were invited in later…some things rich, some things awkward.</p>
                    <p><b>Jaamil:</b> Jawole [Willa Jo Zollar] is a master of building these places of radical inclusion. You build intimacy really quick. All of the ones I’ve been to have been transformational. Not only has Jawole figured out how to do this but she’s also been teaching the next generation. There are co-conspirators that are really special at her institute.</p>
                    <p><b>Bebe:</b> These things about which we don’t know what it is until we leave… we need to add in down time together, some way of including the fuzzy bits of exchange.</p>
                    <p><b>Ann:</b> They will happen, important to know they will. Bonfires on beach, cooking together…!</p>
                    <p><b>Bebe:</b> Lila [Hurwitz] is our project manager. Let’s talk together again.</p>
                    <p><b>Ann:</b> What about a convening to plan the convening, or do you want to get 30-40 people together?</p>
                    <p><b>Bebe:</b> To get to this first as a working group, we need another/two planning meetings. Part of this is supporting the two more needed to get to August.</p>
                    <p>Call Ella. Doris Duke. What about Surdna? With those requests, you can say we’re looking to build a 3–5 year plan. Less scary in a way.</p>
                    <p>We started talking about this before the election. It’s now in the room, not just Trump but the NEA, support for the arts, how is that shown. How does that affect the vertical/horizontal?</p>
                    <p><b>Judy:</b> For me it’s about, what do we value? When I hear you talk about your work by trying to dig underneath it (with e-book etc.). With that, there’s something that you value more than the final work. At the same time we don’t want to throw out the final work. When Ralph did his series on Value (at MOMA, small invited groups of 25). Kevin Beasley with Fred Moten. Very Ralph, always mysterious, you didn’t know where you were going…but the central question he gave each was about value. Some took it literally—Rauschenberg’s Canyon in which he affixed a bald eagle on it, so it can never be sold. So highly valued but never sold. <a id="excerpt-two"></a>Intersection between what are we doing, what are we saving, what are we collecting, what are we not doing—always at play in our work at least on the curatorial side. We’re making interventions, we’re making choices. What we all feel every day: whatever it is we value is under attack, in so many ways. A war on certain kinds of value systems. Maybe this is different than how/what we archive but these choices point to what we value.</p>
                    <p><b>Bebe:</b> The current situation is beyond a thematic consideration, it’s a fascial, systemic consideration. How has the work we’re making shifted?</p>
                    <p><b>Ann:</b> <a id="excerpt-three"></a>The search for the right word that you’re doing right now is interesting. “Archiving is really not quite right….” What I hear in the search for the word, and also in the fascia, is value; trapping, mapping understanding value. You’re also immediately saying “the lifetime of this effort that I’m putting out in the world, what is its resonance?” I love the looking for the word that is the thing, the embodied connection…what is fascia? It changes, responds differently between body and bone, it’s self-supporting… Something about the word resonant, resonant meaning perhaps—what we are, what we do… I love the reach for the word. The horizontal and vertical thing, it’s the present-moment awareness that the song will keep going.</p>
                    <p><b>Bebe:</b> “The Song Remains the Same.” (The Who?)</p>
                    <p><b>Judy:</b> <a id="excerpt-four"></a>Which brings up the “who,” who do you want to reach? During Lost & Found organizing meetings, we all felt such urgency. For me that platform was about that 17-year old who found their way to one event and thought, “oh, there’s a community of like minds?” I was at the Walker, a mini-convening, showing Eiko’s work & Ishmael’s L&F, someone asked about audiences and I said “this 17-year old…” Olga Visu said at the White House (for Ralph’s medal), Ralph had never met Philip Glass. Glass said “I was at the Walker in the 70’s and there were only five people in the room, and I thought I’d never be invited back. And Ralph said “I was a 17-year old in that room.” So, it got me thinking about audience on the seventh generation level.</p>
                    <p><b>Ann:</b> And the numbers don’t matter.</p>
                    <p><b>Judy:</b> And it’s not transactional. It’s not performance = response = transformation. It’s something else. So, in each artist’s heart and mind, who is she… If nothing has universal value, it only has value in relation to what?</p>
                    <p><b>Jaamil:</b> Nothing to add. Bebe, heart-storm a bit about players you want in the room. Love the conversations about language, new forms of language development as thinkers, practitioners, movement developers. This first meeting as a working group sounds good.</p>
                    <p><b>Judy:</b> I’ve been working very closely with Simone Forti on MOMA collection. I always learn something from her. The thing is: here she is in the 1960s, never actually performed with Judson. Gallery in LA, Mara McCarthy, Simone just performed w/Yvonne.</p>
                    <p><b>Ann:</b> I was there. I videotaped it. Yvonne starts teaching Trio A to Simone.</p>
                    <p><b>Judy:</b> She started videotaping herself teaching her dances, as her archive. She wanted Danspace involved. It’s political, it’s a community where the work lived, it has to do with access in an elite institution once something is acquired, who has access? Anna y-nevsky curator at MOMA.</p>
                    <p>Found second Rubins Gallery where she and Yvonne had first performed it. I brought Simone there, recorded her in the space, then proposed …. She had thought the whole thing through: around transmission, who has ownership, what is community, I (Simone) want you to acknowledge that these things emerge out of a community. In order to facilitate this with MOMA, made a research residency where Simone would be in a room with younger artists, invited others in for $5. Private moments as well as public, MOMA will do show about Judson in 2018, will invite Simone again. Simone might be someone to invite to Vault. Simone, Jawole, Darrell. Simone has done the work in the body and through time.</p>
                    <p><b>Bebe:</b> What’s the ideal critical mass? I need help in figuring this out.</p>
                    <p><b>Judy:</b> Lost & Found dossiers, Ishmael and Will Rawls chose four artists who had died of AIDS. A scholar created dossiers on each of them. They chose four younger artists, gave them the dossier with the instruction: a 15-minute response. Mariana Valencia presented Asato Saint. Feather Raja Kelly did Ethyl Eichelberger. Ended with Darrell. He created a piece for this day, the most profound art experience I’ve ever had, he brought it into the room, led us in an experience of shared grief and joy, ended on our knees weeping together, 40-50 people. The subtle shifts in register in his work were even more refined. Grief came out in the room. Darrell: contains Ralph, Bebe, himself.</p>
                    <p><b>Bebe:</b> <a id="excerpt-five"></a>As said by Michael Morris, you’re always dancing with your ancestors, you’re never alone. Butoh score of dancing with ancestors behind you, shepherding future generations in front of you. Darrell is extraordinary because he embraces that, brings out something about the whole Vault project for me. The presence that he brings in the room, which is beyond the piece itself, all reasons for making the work are from some other… vessel. The work itself only serves one aspect of it. The sense of the form, what the form is for, which has a lot to do with how we then document it and receive it.</p>
                </div>
            </section>
        </div>
    </>
  );
}

export default MeetingOne;