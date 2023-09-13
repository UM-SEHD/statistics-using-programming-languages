import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { ColorModeContext,useMode } from "./Themes";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Home from "./scenes/home";
import QuantMeth from "./scenes/quantMeth";
import BarSide from "./scenes/global/BarSide";
import Topbar from "./scenes/global/Topbar";
import Week1 from "./scenes/quantMeth/week1";
import Week2 from "./scenes/quantMeth/week2";
import Week4 from "./scenes/quantMeth/week4";
import Week5 from "./scenes/quantMeth/week5";
import EPS700 from "./scenes/eps700";
import EPS703 from "./scenes/eps703";
import EPS704 from "./scenes/eps704";
import EPS708 from "./scenes/eps708";
import EPS710 from "./scenes/eps710";

function App() {
    const [theme, colorMode] = useMode();
    // eslint-disable-next-line
    const [isSidebar, setIsSidebar] = useState(true);

    return(
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline/>
          <div className="app">
          <BarSide isSidebar={isSidebar} />
            <main className="content">
              
            <Topbar setIsSidebar={setIsSidebar}/>
            <Routes>
              <Route path="*" element={<Home />} />
              <Route path="/quantMeth" element={<QuantMeth />} />
              <Route path="/eps700" element={<EPS700 />} />
              <Route path="/eps703" element={<EPS703 />} />
              <Route path="/eps704" element={<EPS704 />} />
              <Route path="/eps708" element={<EPS708 />} />
              <Route path="/eps710" element={<EPS710 />} />
              <Route path="/week1" element={<Week1 />} />
              <Route path="/week2" element={<Week2 />} />
              <Route path="/week4" element={<Week4 />} />
              <Route path="/week5" element={<Week5 />} />
            </Routes>
            </main>
          </div>
        </ThemeProvider>
      </ColorModeContext.Provider>
    );
}

export default App;