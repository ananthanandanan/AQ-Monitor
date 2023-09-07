import { useState } from "react";
import { ColorSchemeProvider, MantineProvider } from "@mantine/core";
import "./App.css";

import BasicLayout from "./pages/BasicLayout";
import ComparativeView from "./pages/ComparativeView";
import OverlayView from "./pages/OverlayView";
import WindView from "./pages/WindView";
import TableView from "./pages/TableView";

function App() {
  const [colorScheme, setColorScheme] = useState("dark");
  const [isActive, setIsActive] = useState("Comparative"); // ["Comparative", "Overlay", "Wind", "Table"]
  const toggleColorScheme = (value) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));
  const toggleViewHandler = (view) => {
    setIsActive(view);
  };

  return (
    <div className="App">
      <ColorSchemeProvider
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}
      >
        <MantineProvider theme={{ colorScheme }}>
          <BasicLayout toggleView={toggleViewHandler} isActive={isActive}>
            {isActive === "Comparative" && <ComparativeView />}
            {isActive === "Overlay" && <OverlayView />}
            {isActive === "Wind" && <WindView />}
            {isActive === "Table" && <TableView />}
          </BasicLayout>
        </MantineProvider>
      </ColorSchemeProvider>
    </div>
  );
}

export default App;
