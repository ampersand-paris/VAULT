// ====== REACT ELEMENTS ======
import { useState } from "react";
import { BrowserRouter as Router,
    Routes,
    Route,
    Link } from "react-router-dom";

// ====== COMPONENTS ======
import Home from "./Home";
import Index from "./Menus/Index";
import ThemesMenu from "./Menus/ThemesMenu";
import ResourcesMentioned from "./ResourcesMentioned";

// === THEMES ===
import ArchivalThinking from "./Gathered Materials/ArchivalThinking";
import Methods from "./Gathered Materials/Methods"
import Context from "./Gathered Materials/Context";
import WhyItMatters from "./Gathered Materials/WhyItMatter";

// === ESSAYS ===
import AlexSpringerEssay from "./Essays/AlexSpringerEssay";
import MarjiColeEssay from "./Essays/MarjiColeEssay";
import IshmaelHoustonJonesEssay from "./Essays/IshmaelHoustonJonesEssay";
import DanyaHansonEssay from "./Essays/DanyaHansonEssay";
import BonnieBrooksEssay from "./Essays/BonnieBrooksEssay";
import JSunHowardEssay from "./Essays/JSunHowardEssay";
import CoriOlinghouseEssay from "./Essays/CoriOlinghouseEssay";
import ClaudiaLaRoccoEssay from "./Essays/ClaudiaLaRoccoEssay";
import TonyaLockyerEssay from "./Essays/TonyaLockyerEssay";
import JaneJerardiEssay from "./Essays/JaneJerardiEssay";
import DianaMuhammadEssay from "./Essays/DianaMuhammadEssay";
import LaurenReeSloneEssay from "./Essays/LaurenSloneEssay";
import ErinKilmurrayEssay from "./Essays/ErinKilmurrayEssay";
import DarrellJonesEssay from "./Essays/DarrellJonesEssay";
import AngieHauserEssay from "./Essays/AngieHauserEssay";
import JonathanMeyerEssay from "./Essays/JonathanMeyerEssay";
import AnnCarlsonEssay from "./Essays/AnnCarlsonEssay";
import MaraFrazierEssay from "./Essays/MaraFrazierEssay";
import RussellLepleyEssay from "./Essays/RussellLepleyEssay";
import EllenChenowethEssay from "./Essays/EllenChenowethEssay";
import ImogenSmithEssay from "./Essays/ImogenSmithEssay";
import BebeMillerWriting from "./Essays/BebeMiller";

// === TRANSCRIPTS & NOTES ===
import MeetingOneTranscript from "./Transcripts/MeetingOneTranscript";
import MeetingTwoNotes from "./Transcripts/MeetingTwoNotes";
import MeetingThreeNotes from "./Transcripts/MeetingThreeNotes";
import MeetingFourNotes from "./Transcripts/MeetingFourNotes";
import MeetingFiveNotes from "./Transcripts/MeetingFiveNotes";
import ImogenSmithPresentationNotes from "./Transcripts/ImogenSmithPresentationTranscript";
import GeselMasonPresentationNotes from "./Transcripts/GeselMasonPresentationNotes";
import CoriOlinghousePresentationNotes from "./Transcripts/CoriOlinghousePresentationNotes";
import ImogenSmithPresentation from "./Videos/ImogenSmithPresentation";
import BebeMillerPresentationNotes from "./Transcripts/BebeMillerPresentationTranscript";

// === BIOGRAPHIES ===
import MarjiColeBio from "./Biographies/MarjiCole";
import JuliaRaeAntonickBio from "./Biographies/JuliaRaeAntonick";
import RachelBoggiaBio from "./Biographies/RachelBoggia";
import BetseyBrockBio from "./Biographies/BetseyBrock";
import BonnieBrooksBio from "./Biographies/BonnieBrooks";
import MayfieldBrooksBio from "./Biographies/MayfieldBrooks";
import AnnCarlsonBio from "./Biographies/AnnCarlson";
import EllenChenowethBio from "./Biographies/EllenChenoweth";
import NenaCouchBio from "./Biographies/NenaCouch";
import JenaiCutcherBio from "./Biographies/JenaiCutcher";
import LaneCzaplinskiBio from "./Biographies/LaneCzaplinski";
import ShannonDrakeBio from "./Biographies/ShannonDrake";
import GingerFarleyBio from "./Biographies/GingerFarley";
import MaraFrazierBio from "./Biographies/MaraFrazier";
import MelanieGeorgeBio from "./Biographies/MelanieGeorge";
import AliceGostiBio from "./Biographies/AliceGosti";
import PatGraneyBio from "./Biographies/PatGraney";
import DaynaHansonBio from "./Biographies/DaynaHanson";
import AngieHauserBio from "./Biographies/AngieHauser";
import IshmaelHoustonJonesBio from "./Biographies/IshmaelHoustonJones";
import JsunHowardBio from "./Biographies/JsunHoward";
import LilaHurwitzBio from "./Biographies/LilaHurwitz";
import JudyHussieTaylorBio from "./Biographies/JudyHussieTaylor";
import JaneJerardiBio from "./Biographies/JaneJerardi";
import DarrellJonesBio from "./Biographies/DarrellJones";
import RajaFeatherKellyBio from "./Biographies/RajaFeatherKelly";
import ErinKilmurrayBio from "./Biographies/ErinKilmurray";
import JaamilOlawaleKosokoBio from "./Biographies/JaamilOlawaleKosoko";
import SarahLassBio from "./Biographies/SarahLass";
import ClaudiaLaRoccoBio from "./Biographies/ClaudiaLaRocco";
import RussellLepleyBio from "./Biographies/RussellLepley";
import TonyaLockyerBio from "./Biographies/TonyaLockyer";
import GeselMasonBio from "./Biographies/GeselMason";
import EllenMaynardBio from "./Biographies/EllenMaynard";
import JonathanMeyerBio from "./Biographies/JonathanMeyer";
import BebeMillerBio from "./Biographies/BebeMiller";
import DianaMuhammadBio from "./Biographies/DianaMuhammad";
import CoriOlinghouseBio from "./Biographies/CoriOlinghouse";
import LaurenReeSloneBio from "./Biographies/LaurenReeSlone";
import ImogenSmithBio from "./Biographies/ImogenSmith";
import AlexSpringerBio from "./Biographies/AlexSpringer";
import DanaWhitcoBio from "./Biographies/DanaWhitco";
import NijaWhitsonBio from "./Biographies/NijaWhitson";
import ReggieWilsonBio from "./Biographies/ReggieWilson";
import FailspaceBio from "./Biographies/Failspace";

// === VIDEOS ===
import ChicagoFunders from "./Videos/ChicagoFunders";
import ChicagoIntro from "./Videos/ChicagoIntro";
import ChicagoConversations from "./Videos/ChicagoConversations"
import ChicagoValues from "./Videos/ChicagoValues"
import ChicagoReports from "./Videos/ChicagoReports"
import Columbus from "./Videos/Columbus";
import ColumbusLunch from "./Videos/ColumbusLunch";
import Seattle from "./Videos/Seattle"
import SeattlePart2 from "./Videos/SeattlePart2"
import MeetingThreeIntroductions from "./Videos/MeethingThreeIntros";
import MeetingThreeSmallGroupTwo from "./Videos/MeethingThreeSmallGroupTwo";
import MeetingThreeSmallGroupThree from "./Videos/MeetingThreeSmallGroupThree";
import MeetingThreeSmallGroupConclusion from "./Videos/MeetingThreeSmallGroupConclusion";
import ScrollToTop from "./ScrollToTop";
import BebeMillerPresentation from "./Videos/BebeMillerPresentation"
import CoriOlinghousePresentation from "./Videos/CoriOlinghousePresentation"
import GeselMasonPresentation from "./Videos/GeselMasonPresentation"

function App() {

    const [index, setIndex] = useState('none')
    const [themes, setThemes] = useState('none')
    const [indexClosed, setIndexClosed] = useState('flex');
    const [themesClosed, setThemesClosed] = useState('flex');

    // const toggleLeftMenu = () => {
    //     if (themes === 'none') {
    //         setThemes('flex')
    //         setThemesClosed('none')
    //     } else {
    //         setThemes('none')
    //         setThemesClosed('flex')
    //     }
    // }

    // const toggleRightMenu = () => {
    //     if (index === 'none') {
    //         setIndex('flex')
    //         setIndexClosed('none')
    //     } else {
    //         setIndex('none')
    //         setIndexClosed('flex')
    //     }
    // }

    const toggleThemesMenu = () => {
        const themesMenuOpen = document.getElementById('themes-menu-open');
        const themesMenuClosed = document.getElementById('themes-menu-closed');
        const indexMenuOpen = document.getElementById('index-menu-open');
        const indexMenuClosed = document.getElementById('index-menu-closed');
    
        if (window.innerWidth < 600){

            // MOBILE LOGIC
          if(indexMenuOpen.classList.contains('open-right-menu')){
            indexMenuOpen.classList.remove('open-right-menu');
            indexMenuOpen.classList.add('close-right-menu');
            indexMenuClosed.classList.add('open-index-menu-closed');
            indexMenuClosed.classList.remove('close-index-menu-closed');
          }
    
          if(themesMenuOpen.classList.contains('open-left-menu')){
            themesMenuOpen.classList.remove('open-left-menu');
            themesMenuOpen.classList.add('close-left-menu');
            themesMenuClosed.classList.add('open-themes-menu-closed');
            themesMenuClosed.classList.remove('close-themes-menu-closed');
          } else if (themesMenuOpen.classList.contains('close-left-menu')) {
            themesMenuOpen.classList.remove('close-left-menu');
            themesMenuOpen.classList.add('open-left-menu');
            themesMenuClosed.classList.remove('open-themes-menu-closed');
            themesMenuClosed.classList.add('close-themes-menu-closed');
          } else {
            themesMenuOpen.classList.add('open-left-menu');
            themesMenuClosed.classList.add('close-themes-menu-closed');
          }

           // DESKTOP LOGIC
        } else {
          if(themesMenuOpen.classList.contains('open-left-menu')){
            themesMenuOpen.classList.remove('open-left-menu');
            themesMenuOpen.classList.add('close-left-menu');
            themesMenuClosed.classList.add('open-themes-menu-closed');
            themesMenuClosed.classList.remove('close-themes-menu-closed');
          } else if (themesMenuOpen.classList.contains('close-left-menu')) {
            themesMenuOpen.classList.remove('close-left-menu');
            themesMenuOpen.classList.add('open-left-menu');
            themesMenuClosed.classList.remove('open-themes-menu-closed');
            themesMenuClosed.classList.add('close-themes-menu-closed');
          } else {
            themesMenuOpen.classList.add('open-left-menu');
            themesMenuClosed.classList.add('close-themes-menu-closed');
          }
        }  
      }
    
      const toggleIndexMenu = () => {
        const themesMenuOpen = document.getElementById('themes-menu-open');
        const themesMenuClosed = document.getElementById('themes-menu-closed');
        const indexMenuOpen = document.getElementById('index-menu-open');
        const indexMenuClosed = document.getElementById('index-menu-closed');
    
        if (window.innerWidth < 600){
            // MOBILE LOGIC
          if(themesMenuOpen.classList.contains('open-left-menu')){
            themesMenuOpen.classList.remove('open-left-menu');
            themesMenuOpen.classList.add('close-left-menu');
            themesMenuClosed.classList.add('open-themes-menu-closed');
            themesMenuClosed.classList.remove('close-themes-menu-closed');
          }
    
          if(indexMenuOpen.classList.contains('open-right-menu')){
            indexMenuOpen.classList.remove('open-right-menu');
            indexMenuOpen.classList.add('close-right-menu');
            indexMenuClosed.classList.add('open-index-menu-closed');
            indexMenuClosed.classList.remove('close-index-menu-closed');
          } else if (indexMenuOpen.classList.contains('close-right-menu')) {
            indexMenuOpen.classList.remove('close-right-menu');
            indexMenuOpen.classList.add('open-right-menu');
            indexMenuClosed.classList.remove('open-index-menu-closed');
            indexMenuClosed.classList.add('close-index-menu-closed');
          } else {
            indexMenuOpen.classList.add('open-right-menu');
            indexMenuClosed.classList.add('close-index-menu-closed');
          }

          // DESKTOP LOGIC
        } else {
          if(indexMenuOpen.classList.contains('open-right-menu')){
            indexMenuOpen.classList.remove('open-right-menu');
            indexMenuOpen.classList.add('close-right-menu');
            indexMenuClosed.classList.add('open-index-menu-closed');
            indexMenuClosed.classList.remove('close-index-menu-closed');
          } else if (indexMenuOpen.classList.contains('close-right-menu')) {
            indexMenuOpen.classList.remove('close-right-menu');
            indexMenuOpen.classList.add('open-right-menu');
            indexMenuClosed.classList.remove('open-index-menu-closed');
            indexMenuClosed.classList.add('close-index-menu-closed');
          } else {
            indexMenuOpen.classList.add('open-right-menu');
            indexMenuClosed.classList.add('close-index-menu-closed');
          }
        }  
      }
    
    //   openDisplay={themes} closedDisplay={themesClosed}
    //   openDisplay={index} closedDisplay={indexClosed}

return (
    <Router>
        <ThemesMenu active={toggleThemesMenu} />
        <Index active={toggleIndexMenu} />
        <ScrollToTop>
          <Routes>
              <Route path="/" element={<Home />} />
              {/* Themes */}
              <Route path="/archival-thinking" element={<ArchivalThinking />} />
              <Route path="/context" element={<Context />} />
              <Route path="/methods" element={<Methods />} />
              <Route path="/why-it-matters" element={<WhyItMatters />} />
              {/* Writings */}
                  <Route path="/alex-springer-writing" element={<AlexSpringerEssay />} />
                  <Route path="/angie-hauser-writing" element={<AngieHauserEssay />} />
                  <Route path="/ann-carlson-writing" element={<AnnCarlsonEssay />} />                
                  <Route path="/bebe-miller-writing" element={<BebeMillerWriting />} />
                  <Route path="/bonnie-brooks-writing" element={<BonnieBrooksEssay />} />
                  <Route path="/claudia-la-rocco-writing" element={<ClaudiaLaRoccoEssay />} />
                  <Route path="/cori-olinghouse-writing" element={<CoriOlinghouseEssay />} />
                  <Route path="/dayna-hanson-writing" element={<DanyaHansonEssay />} />
                  <Route path="/darrell-jones-writing" element={<DarrellJonesEssay />} />
                  <Route path="/diana-muhammad-writing" element={<DianaMuhammadEssay />} />
                  <Route path="/ellen-chenoweth-writing" element={<EllenChenowethEssay />} />
                  <Route path="/erin-kilmurray-writing" element={<ErinKilmurrayEssay />} />
                  <Route path="/imogen-smith-writing" element={<ImogenSmithEssay />} />
                  <Route path="/ishmael-houston-jones-writing" element={<IshmaelHoustonJonesEssay />} />
                  <Route path="/jane-jerardi-writing" element={<JaneJerardiEssay />} />
                  <Route path="/jonathan-meyer-writing" element={<JonathanMeyerEssay />} />
                  <Route path="/jsun-howard-writing" element={<JSunHowardEssay />} />
                  <Route path="/lauren-slone-writing" element={<LaurenReeSloneEssay />} />
                  <Route path="/mara-frazier-writing" element={<MaraFrazierEssay />} />
                  <Route path="/marji-cole-writing" element={<MarjiColeEssay />} />
                  <Route path="/russell-lepley-writing" element={<RussellLepleyEssay />} />
                  <Route path="/tonya-lockyer-writing" element={<TonyaLockyerEssay />} />
              {/* Biographies */}
                  <Route path="/alice-gosti-bio" element={<AliceGostiBio />} />
                  <Route path="/alex-springer-bio" element={<AlexSpringerBio />} />
                  <Route path="/angie-hauser-bio" element={<AngieHauserBio />} />
                  <Route path="/ann-carlson-bio" element={<AnnCarlsonBio />} />
                  <Route path="/bebe-miller-bio" element={<BebeMillerBio />} />
                  <Route path="/betsey-brock-bio" element={<BetseyBrockBio />} />
                  <Route path="/bonnie-brooks-bio" element={<BonnieBrooksBio />} />
                  <Route path="/claudia-la-rocco-bio" element={<ClaudiaLaRoccoBio />} />
                  <Route path="/cori-olinghouse-bio" element={<CoriOlinghouseBio />} />
                  <Route path="/dana-whitco-bio" element={<DanaWhitcoBio />} />
                  <Route path="/darrell-jones-bio" element={<DarrellJonesBio />} />
                  <Route path="/dayna-hanson-bio" element={<DaynaHansonBio />} />
                  <Route path="/diana-muhammad-bio" element={<DianaMuhammadBio />} />
                  <Route path="/ellen-chenoweth-bio" element={<EllenChenowethBio />} />
                  <Route path="/ellen-maynard-bio" element={<EllenMaynardBio />} />
                  <Route path="/erin-kilmurray-bio" element={<ErinKilmurrayBio />} />
                  <Route path="/gesel-mason-bio" element={<GeselMasonBio />} />
                  <Route path="/failspace" element={<FailspaceBio />} />
                  <Route path="/ginger-farley-bio" element={<GingerFarleyBio />} />
                  <Route path="/imogen-smith-bio" element={<ImogenSmithBio />} />
                  <Route path="/ishmael-houston-jones-bio" element={<IshmaelHoustonJonesBio />} />
                  <Route path="/jaamil-olawale-kosoko-bio" element={<JaamilOlawaleKosokoBio />} />
                  <Route path="/jane-jerardi-bio" element={<JaneJerardiBio />} />
                  <Route path="/jenai-cutcher-bio" element={<JenaiCutcherBio />} />
                  <Route path="/jonathan-meyer-bio" element={<JonathanMeyerBio />} />
                  <Route path="/jsun-howard-bio" element={<JsunHowardBio />} />
                  <Route path="/judy-hussie-taylor-bio" element={<JudyHussieTaylorBio />} />
                  <Route path="/julia-rae-antonick-bio" element={<JuliaRaeAntonickBio />} />
                  <Route path="/lane-czaplinski-bio" element={<LaneCzaplinskiBio />} />
                  <Route path="/lauren-ree-slone-bio" element={<LaurenReeSloneBio />} />
                  <Route path="/lila-hurwitz-bio" element={<LilaHurwitzBio />} />
                  <Route path="/mara-frazier-bio" element={<MaraFrazierBio />} />
                  <Route path="/marji-cole-bio" element={<MarjiColeBio />} />
                  <Route path="/mayfield-brooks-bio" element={<MayfieldBrooksBio />} />
                  <Route path="/melanie-george-bio" element={<MelanieGeorgeBio />} />
                  <Route path="/nena-couch-bio" element={<NenaCouchBio />} />
                  <Route path="/nija-whitson-bio" element={<NijaWhitsonBio />} />
                  <Route path="/pat-graney-bio" element={<PatGraneyBio />} />
                  <Route path="/raja-feather-kelly-bio" element={<RajaFeatherKellyBio />} />
                  <Route path="/russell-lepley-bio" element={<RussellLepleyBio />} />
                  <Route path="/sarah-lass-bio" element={<SarahLassBio />} />
                  <Route path="/shannon-drake-bio" element={<ShannonDrakeBio />} />
                  <Route path="/rachel-boggia-bio" element={<RachelBoggiaBio />} />
                  <Route path="/reggie-wilson-bio" element={<ReggieWilsonBio />} />
                  <Route path="/tonya-lockyer-bio" element={<TonyaLockyerBio />} />
              {/* Transcripts */}
                  <Route path="/meeting-one-transcript" element={<MeetingOneTranscript />} />
                  <Route path="/meeting-two-notes" element={<MeetingTwoNotes />} />
                  <Route path="/meeting-three-notes" element={<MeetingThreeNotes />} />
                  <Route path="/meeting-four-notes" element={<MeetingFourNotes />} />
                  <Route path="/meeting-five-notes" element={<MeetingFiveNotes />} />
                  <Route path="/cori-olinghouse-presentation-notes" element={<CoriOlinghousePresentationNotes />} />
                  <Route path="/imogen-smith-presentation-notes" element={<ImogenSmithPresentationNotes />} />
                  <Route path="/gesel-mason-presentation-notes" element={<GeselMasonPresentationNotes />} />
                  <Route path="/bebe-miller-presentation-notes" element={<BebeMillerPresentationNotes />} />
              {/* Videos */}
                  <Route path="/seattle" element={<Seattle />} />
                  <Route path="/seattle-part-two" element={<SeattlePart2 />} />
                  <Route path="/meeting-three-introductions" element={<MeetingThreeIntroductions />} />
                  <Route path="/meeting-three-conversation-one" element={<MeetingThreeSmallGroupTwo />} />
                  <Route path="/meeting-three-conversation-two" element={<MeetingThreeSmallGroupThree />} />
                  <Route path="/meeting-three-conclusion" element={<MeetingThreeSmallGroupConclusion />} />
                  <Route path="/chicago-funders" element={<ChicagoFunders />} />
                  <Route path="/chicago-intro" element={<ChicagoIntro />} />
                  <Route path="/chicago-conversations" element={<ChicagoConversations />} />
                  <Route path="/chicago-values" element={<ChicagoValues />} />
                  <Route path="/chicago-reports" element={<ChicagoReports />} />
                  <Route path="columbus" element={<Columbus />} />
                  <Route path="columbus-lunch-conversation" element={<ColumbusLunch />} />               
                  <Route path="columbus" element={<Columbus />} />
                  <Route path="imogen-smith-presentation" element={<ImogenSmithPresentation />} />
                  <Route path="bebe-miller-presentation" element={<BebeMillerPresentation />} />
                  <Route path="cori-olinghouse-presentation" element={<CoriOlinghousePresentation />} />                  
                  <Route path="/gesel-mason-presentation" element={<GeselMasonPresentation />} />
              {/* MISC */}   
                  <Route path="/resources-mentioned" element={<ResourcesMentioned />} />
          </Routes>
        </ScrollToTop>
    </Router>
  );
}

export default App;