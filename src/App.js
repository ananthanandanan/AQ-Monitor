import { useState } from "react";
import { ColorSchemeProvider, MantineProvider } from "@mantine/core";
import "./App.css";

import BasicLayout from "./pages/BasicLayout";
import ComparativeView from "./pages/ComparativeView";

function App() {
  const [colorScheme, setColorScheme] = useState("dark");
  const toggleColorScheme = (value) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  return (
    <div className="App">
      <ColorSchemeProvider
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}
      >
        <MantineProvider theme={{ colorScheme }}>
          <BasicLayout>
            <ComparativeView />
          </BasicLayout>
        </MantineProvider>
      </ColorSchemeProvider>
    </div>
  );
}

export default App;
