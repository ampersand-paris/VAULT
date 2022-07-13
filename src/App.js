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
import RachelBoggiaBio from "./Biographies/RachelBoggia"

// === VIDEOS ===
import MeetingThree from "./Videos/MeetingThree"

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
            <Route path="/archival-thinking" element={<ArchivalThinking />} />
            <Route path="/marji-cole-essay" element={<MarjiColeEssay />} />
            {/* Biographies */}
                <Route path="/marji-cole-bio" element={<MarjiColeBio />} />
                <Route path="/julia-rae-antonick" element={<JuliaRaeAntonickBio />} />
                <Route path="/rachel-boggia" element={<RachelBoggiaBio />} />
            <Route path="/meeting-one" element={<MeetingOne />} />
            <Route path="/meeting-three" element={<MeetingThree />} />
            <Route path="/resources-mentioned" element={<ResourcesMentioned />} />
        </Routes>
    </Router>
  );
}

export default App;