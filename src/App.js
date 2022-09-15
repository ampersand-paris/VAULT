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

// === TRANSCRIPTS & NOTES ===
import MeetingOneTranscript from "./Transcripts/MeetingOneTranscript";
import MeetingTwoNotes from "./Transcripts/MeetingTwoNotes";
import MeetingThreeNotes from "./Transcripts/MeetingThreeNotes";
import MeetingFourNotes from "./Transcripts/MeetingFourNotes";
import MeetingFiveNotes from "./Transcripts/MeetingFiveNotes";

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
import MeetingThree from "./Videos/MeetingThree";
import JacobsPillowSmallGroup from "./Videos/MeetingThreeSmallGroupFive";
import Seattle from "./Videos/Seattle"
import MeetingThreeSmallGroupTwo from "./Videos/MeethingThreeSmallGroupTwo";
import MeetingThreeSmallGroupFive from "./Videos/MeetingThreeSmallGroupFive";
import ChicagoFunders from "./Videos/ChicagoFunders";
import MeetingThreeSmallGroupThree from "./Videos/MeetingThreeSmallGroupThree";
import MeetingThreeSmallGroupConclusion from "./Videos/MeetingThreeSmallGroupConclusion";

function App() {

    const [index, setIndex] = useState('none')
    const [themes, setThemes] = useState('none')
    const [indexClosed, setIndexClosed] = useState('flex');
    const [themesClosed, setThemesClosed] = useState('flex');

    const toggleLeftMenu = () => {
        if (themes === 'none') {
            setThemes('flex')
            setThemesClosed('none')
        } else {
            setThemes('none')
            setThemesClosed('flex')
        }
    }

    const toggleRightMenu = () => {
        if (index === 'none') {
            setIndex('flex')
            setIndexClosed('none')
        } else {
            setIndex('none')
            setIndexClosed('flex')
        }
    }
    
return (
    <Router>
        <ThemesMenu active={toggleLeftMenu} openDisplay={themes} closedDisplay={themesClosed}/>
        <Index active={toggleRightMenu} openDisplay={index} closedDisplay={indexClosed}/>
        <Routes>
            <Route path="/" element={<Home />} />
            {/* Themes */}
            <Route path="/archival-thinking" element={<ArchivalThinking />} />
            <Route path="/context" element={<Context />} />
            <Route path="/methods" element={<Methods />} />
            <Route path="/why-it-matters" element={<WhyItMatters />} />
            {/* Essays */}
                <Route path="/alex-springer-essay" element={<AlexSpringerEssay />} />
                <Route path="/angie-hauser-essay" element={<AngieHauserEssay />} />
                <Route path="/ann-carlson-essay" element={<AnnCarlsonEssay />} />                <Route path="/bonnie-brooks-essay" element={<BonnieBrooksEssay />} />
                <Route path="/claudia-la-rocco-essay" element={<ClaudiaLaRoccoEssay />} />
                <Route path="/cori-olinghouse-essay" element={<CoriOlinghouseEssay />} />
                <Route path="/danya-hanson-essay" element={<DanyaHansonEssay />} />
                <Route path="/darrell-jones-essay" element={<DarrellJonesEssay />} />
                <Route path="/diana-muhammad-essay" element={<DianaMuhammadEssay />} />
                <Route path="/ellen-chenoweth-essay" element={<EllenChenowethEssay />} />
                <Route path="/erin-kilmurray-essay" element={<ErinKilmurrayEssay />} />
                <Route path="/imogen-smith-essay" element={<ImogenSmithBio />} />
                <Route path="/ishmael-houston-jones-essay" element={<IshmaelHoustonJonesEssay />} />
                <Route path="/jane-jerardi-essay" element={<JaneJerardiEssay />} />
                <Route path="/jonathan-meyer-essay" element={<JonathanMeyerEssay />} />
                <Route path="/jsun-howard-essay" element={<JSunHowardEssay />} />
                <Route path="/lauren-slone-essay" element={<LaurenReeSloneEssay />} />
                <Route path="/mara-frazier-essay" element={<MaraFrazierEssay />} />
                <Route path="/marji-cole-essay" element={<MarjiColeEssay />} />
                <Route path="/russell-lepley-essay" element={<RussellLepleyEssay />} />
                <Route path="/tonya-lockyer-essay" element={<TonyaLockyerEssay />} />
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
                <Route path="/meething-four-notes" element={<MeetingFourNotes />} />
                <Route path="/meeting-five-notes" element={<MeetingFiveNotes />} />
            {/* Videos */}
                <Route path="/meeting-three" element={<MeetingThree />} />
                <Route path="/meeting-three-small-group-5" element={<MeetingThreeSmallGroupFive />} />
                <Route path="/seattle" element={<Seattle />} />
                <Route path="/meeting-three-small-group-two" element={<MeetingThreeSmallGroupTwo />} />
                <Route path="/meeting-three-small-group-three" element={<MeetingThreeSmallGroupThree />} />
                <Route path="/meeting-three-small-group-conclusion" element={<MeetingThreeSmallGroupConclusion />} />
                <Route path="/chicago-funders" element={<ChicagoFunders />} />
            {/* MISC */}   
                <Route path="/resources-mentioned" element={<ResourcesMentioned />} />
        </Routes>
    </Router>
  );
}

export default App;