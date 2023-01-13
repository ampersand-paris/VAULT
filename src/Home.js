// ====== REACT ELEMENTS ======
import ReactAudioPlayer from "react-audio-player";
import audio from "./Audio/Introduction.wav"

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
          <div className="intro-arrow-container">
            <h2 className="intro-arrow">&#x2193;</h2>
          </div>
          <div className="home-text-width">
            <p>Hello! And welcome to Vault. This project, organized by Bebe Miller Company, started with questions we had about dance artists, their creative practice, and the value of artist-driven archives. So, we decided to ask.</p>
            <p>Starting in the spring of 2017, in a café in New York City, we began a series of convenings of dance artists, presenters, and other interested folks to ask questions and to share our experiences in documenting, and sharing, the creative process. Over the next three years we met with over 80 people in dance communities in Seattle, at Jacob’s Pillow, in Chicago and Columbus, Ohio. We found that the basic question of what matters, and what matters to whom, seemed to be the guiding principle in all of our discussions.</p>
            <p>What we’ve gathered here is an archive built from those meetings. You’ll find videos of conversations, presentations, and other materials gathered from the attendees. Rather than presenting our findings chronologically, we’ve organized them according to the main thematic areas that emerged. Those are accessed by the menu button on the left side of the home page. On the right side you’ll find a selected index that will give you other points of entry.</p>
            <p>Other questions soon surfaced:</p>
            <ul>
              <li className="bullets">How might such a gathering aid in sharing goals and methodologies of creative process and dissemination, as well as documentation?</li>
              <li className="bullets">Is this just an archival issue or does our inquiry address the responsiveness and inclusivity of all aspects of live performance?</li>
              <li className="bullets">Are we working under a premise of equal access, and if so, under what assumptions?</li>
              <li className="bullets">How do we realize the potential for intergenerational artistic and strategic mentorship, as part of the overall Vault project?</li>
              <li className="bullets">How do we contend with the third-person archive alongside the artist-driven one?</li>
              <li className="bullets">How do we reveal the thinking, the system, the kinesthetic feel of the work in its documentation?</li>
              <li className="bullets">What can our expertise and practice in “co-presence” (everyone together, at one time, in one room) bring to the digital format?</li>
            </ul>
            <p>We invite you to take a tour through the four themes: Archival Thinking, Context, Methods, and Why It Matters. You can browse through written materials and notes cross-referenced with convening videos; and you can explore an index of selected points of interest. However you experience it, we trust that the journey you take through the Vault Project will be at your own pace, and led by your own interest.</p>
            <p>Enjoy!</p>
            <p className="transcription-details"><em>The Vault Project gatherings began in April 2017 and concluded in January 2020, just weeks before the global shutdown due to the COVID-19 pandemic. So much of our thinking and practice of artmaking changed dramatically. Which means that so much of what we consider to be vital to our field, whether practiced alone, virtually, within arm’s reach, with or without an audience, in our homes as well as in our studios, also changed. We have changed, and still we remain committed to our practice. We hope Vault serves as an invitation to continue the conversation and add to our incredible body of shared knowledge and experience. Our field is built on community and it deserves our attention.</em></p>
            <p className="transcription-details"><em>Thanks for coming.</em></p>
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
