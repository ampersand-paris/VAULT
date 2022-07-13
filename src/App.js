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

// === ESSAYS ===
import MarjiColeEssay from "./Essays/MarjiCole";

// === TRANSCRIPTS ===
import MeetingOne from "./Transcripts/MeetingOne";

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

// === VIDEOS ===
import MeetingThree from "./Videos/MeetingThree";

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
            {/* Essays */}
            <Route path="/marji-cole-essay" element={<MarjiColeEssay />} />
            {/* Biographies */}
                <Route path="/alice-gosti-bio" element={<AliceGostiBio />} />
                <Route path="/angie-hauser-bio" element={<AngieHauserBio />} />
                <Route path="/ann-carlson-bio" element={<AnnCarlsonBio />} />
                <Route path="/betsey-brock-bio" element={<BetseyBrockBio />} />
                <Route path="/bonnie-brooks-bio" element={<BonnieBrooksBio />} />
                <Route path="/claudia-la-rocco-bio" element={<ClaudiaLaRoccoBio />} />
                <Route path="/dayna-hanson-bio" element={<DaynaHansonBio />} />
                <Route path="/darrell-jones-bio" element={<DarrellJonesBio />} />
                <Route path="/ellen-chenoweth-bio" element={<EllenChenowethBio />} />
                <Route path="/ellen-maynard-bio" element={<EllenMaynardBio />} />
                <Route path="/erin-kilmurray-bio" element={<ErinKilmurrayBio />} />
                <Route path="/gesel-mason-bio" element={<GeselMasonBio />} />
                <Route path="/ginger-farley-bio" element={<GingerFarleyBio />} />
                <Route path="/ishmael-houston-jones-bio" element={<IshmaelHoustonJonesBio />} />
                <Route path="/jaamil-olawale-kosoko-bio" element={<JaamilOlawaleKosokoBio />} />
                <Route path="/jane-jerardi-bio" element={<JaneJerardiBio />} />
                <Route path="/jenai-cutcher-bio" element={<JenaiCutcherBio />} />
                <Route path="/jsun-howard-bio" element={<JsunHowardBio />} />
                <Route path="/judy-hussie-taylor-bio" element={<JudyHussieTaylorBio />} />
                <Route path="/julia-rae-antonick-bio" element={<JuliaRaeAntonickBio />} />
                <Route path="/lane-czaplinski-bio" element={<LaneCzaplinskiBio />} />
                <Route path="/lila-hurwitz-bio" element={<LilaHurwitzBio />} />
                <Route path="/mara-frazier-bio" element={<MaraFrazierBio />} />
                <Route path="/marji-cole-bio" element={<MarjiColeBio />} />
                <Route path="/mayfield-brooks-bio" element={<MayfieldBrooksBio />} />
                <Route path="/melanie-george-bio" element={<MelanieGeorgeBio />} />
                <Route path="/nena-couch-bio" element={<NenaCouchBio />} />
                <Route path="/pat-graney-bio" element={<PatGraneyBio />} />
                <Route path="/raja-feather-kelly-bio" element={<RajaFeatherKellyBio />} />
                <Route path="/russell-lepley-bio" element={<RussellLepleyBio />} />
                <Route path="/sarah-lass-bio" element={<SarahLassBio />} />
                <Route path="/shannon-drake-bio" element={<ShannonDrakeBio />} />
                <Route path="/rachel-boggia-bio" element={<RachelBoggiaBio />} />
                <Route path="/tonya-lockyer-bio" element={<TonyaLockyerBio />} />
            {/* Transcripts */}
            <Route path="/meeting-one" element={<MeetingOne />} />
            <Route path="/meeting-three" element={<MeetingThree />} />
            <Route path="/resources-mentioned" element={<ResourcesMentioned />} />
        </Routes>
    </Router>
  );
}

export default App;