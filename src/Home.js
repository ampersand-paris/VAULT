// ====== REACT ELEMENTS ======
import ReactAudioPlayer from "react-audio-player";
import audio from "./Audio/Introduction.mp3"

// ====== COMPONENTS ======

function Home() {
  return (
    <>
      <style>
        {`
        audio::-webkit-media-controls-panel {
          background-color: var(--mint-green);
          z-index: 10;
        }
        
        audio::-webkit-media-controls-play-button {
          background-color: rgba(255, 255, 255, 0);
        
        }
        
        audio::-webkit-media-controls-current-time-display {
          font-family: neuzeit-grotesk, sans-serif;
          font-weight: 400;
          font-style: normal;
          background-color: rgba(255, 255, 255, 0);
        
        }
        
        audio::-webkit-media-controls-time-remaining-display {
          font-family: neuzeit-grotesk, sans-serif;
          font-weight: 400;
          font-style: normal;
          background-color: rgba(255, 255, 255, 0);
        
        }
        
        audio::-webkit-media-controls-timeline {
          background-color: rgba(255, 255, 255, 0);
        
        }
        `}
      </style>
        <div className="home-height relative flex column al-center mint-green home-border">
          <h1 className="home-text">VAULT</h1>
          <ReactAudioPlayer
            src={audio}
            controls 
          />
          <img className="home-slash" src="/Images/BlackOutlineSlash.png" />
        </div>
        <section className="home-section-padding flex column al-center mint-green top-black-border">
          <div className="home-text-width">
            <p>Hello! And welcome to Vault. This project, organized by Bebe Miller Company, started with questions we had about dance artists, their creative practice, and the value of artist-driven archives. So, we decided to ask.</p>
            <p>Starting in the spring of 2017, in a café in New York City, we began a series of convenings of dance artists, presenters, curators, scholars and other interested folks to ask questions and to share our experiences in documenting, and sharing, in one form or another, the creative process. Over the next three years we met with 80+ people in dance communities in Seattle (August 2017), at Jacob’s Pillow (May 2018), in Chicago (November 2019) and Columbus, Ohio (February 2020). We found that the basic question of what matters, and what matters to whom, seemed to be the guiding principle in all of our discussions about artist-driven archives.</p>
            <p>Other questions soon surfaced:</p>
            <ul>
              <li className="bullets">How might such a gathering aid in sharing goals and methodologies of creative process and dissemination, as well as documentation?</li>
              <li className="bullets">Is this just an archival issue or does our inquiry address the responsiveness and inclusivity of all aspects of live performance?</li>
              <li className="bullets">Are we working under a premise of equal access, and if so, under what assumptions?</li>
              <li className="bullets">What activities would be most feasible (artists interviewing other artists; each participant submitting a one-page introduction to their immediate concern; etc.)?</li>
              <li className="bullets">How do we realize the potential for intergenerational artistic and strategic mentorship, as part of the overall Vault project?</li>
            </ul>
            <p>Subsequent gatherings further honed the needs and concerns that Vault addresses:</p>
            <ul>
              <li className="bullets">How do we contend with the third-person archive alongside the artist-driven archive?</li>
              <li className="bullets">How do we reveal the thinking, the system, the mind, the kinesthetic feel of the work in its documentation?</li>
              <li className="bullets">What can our expertise and practice in “co-presence” (everyone together, at one time, in one room) bring to the digital? What is unique about co-presence? What is unique about the digital?</li>
            </ul>
            <p>What we’ve gathered here is another archive of sorts. You’ll find videos of conversations, presentations, written texts and other materials gathered from the attendees. Rather than presenting our findings chronologically, we’ve organized the materials according to the main thematic areas that emerged. You’ll also find a selected index that may give you other points of entry for your review. We invite you to take a tour through the four themes: Archival Thinking, Context, Methods, and Why It Matters; browse through written materials and notes cross-referenced with convening videos; and explore a selected index of points of interest. However you experience it, we trust that the journey you take through the materials will be at your own pace, and led by your own interest.</p>
            <p>Thanks for coming. Enjoy!</p>
            <p className="transcription-details"><em>The Vault Project gatherings began in April 2017 and concluded in January 2020, just weeks before the global shutdown due to the COVID-19 pandemic. So much of our thinking and practice of artmaking changed dramatically. Which means that so much of what we consider to be vital to our field, whether practiced alone, virtually, within arm’s reach, with or without an audience, in our homes as well as in our studios, also changed. We have changed, and still we remain committed to our practice. We hope Vault serves as an invitation to continue the conversation and add to our incredible body of shared knowledge and experience. Our field is built on community and it deserves our attention.</em></p>
          </div>
        </section>
        <section className="home-section-padding flex column al-center mint-green top-black-border">
          <div className="home-text-width">
            <p>Vault was made possible in part by support from the Doris Duke Charitable Foundation and the National Endowment for the Arts. We're grateful for the support of our meeting hosts (Ann Hamilton and Michael Mercil; Dance Center of Columbia College Chicago; Jacob's Pillow; On the Boards; Wexner Center for the Arts). Our thanks to the 40+ Vault participants across the country for their collective and full-hearted voice in our regional meetings. Huge thanks to Lila Hurwitz/Doolittle+Bird for project management; Shannon Drake for website materials wrangling; Benjamin Van Buren for initial website. And a shout-out to Lane Czaplinski for picking up what Bebe was putting down.</p>
            <p className='txt-al-center'>Vault was designed and developed by <a href="www.failspacenyc.com/design-services" target="_blank">FAILSPACE Design Services</a>.</p>
          </div>
        </section>
    </>
  );
}

export default Home;
