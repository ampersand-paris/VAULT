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

// === ESSAYS ===
import MarjiColeEssay from "./Essays/MarjiCole";

// === ESSAYS ===
import MeetingOne from "./Transcripts/MeetingOne";

function App() {

    const [index, setIndex] = useState('none')
    const [themes, setThemes] = useState('flex')
    const [indexClosed, setIndexClosed] = useState('flex');
    const [themesClosed, setThemesClosed] = useState('none');

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
            <Route path="/marji-cole-essay" element={<MarjiColeEssay />} />
            <Route path="/meeting-one" element={<MeetingOne />} />
        </Routes>
    </Router>
  );
}

export default App;