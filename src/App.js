import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { ColorSchemeProvider, MantineProvider } from "@mantine/core";
import "./App.css";

import BasicLayout from "./pages/BasicLayout";
import ComparativeView from "./pages/ComparativeView";
import OverlayView from "./pages/OverlayView";
import WindView from "./pages/WindView";
import TableView from "./pages/TableView";
import { getPraanData } from "./store/praan-actions";
import { praanActions } from "./store/praan-slice";

function App() {
  const dispatch = useDispatch();
  const [colorScheme, setColorScheme] = useState("dark");
  const [dataset, setDataset] = useState("praan-1");
  const [isActive, setIsActive] = useState("Comparative"); // ["Comparative", "Overlay", "Wind", "Table"]
  const toggleColorScheme = (value) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));
  const toggleViewHandler = (view) => {
    setIsActive(view);
    dispatch(praanActions.clearFilter());
  };

  useEffect(() => {
    dispatch(getPraanData(dataset));
  }, [dispatch, dataset]);

  const toggleDataset = () => {
    if (dataset === "praan-1") {
      setDataset("praan-2");
    } else {
      setDataset("praan-1");
    }
  };

  return (
    <div className="App">
      <ColorSchemeProvider
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}
      >
        <MantineProvider theme={{ colorScheme }}>
          <BasicLayout
            toggleView={toggleViewHandler}
            toggleDataset={toggleDataset}
            isActive={isActive}
          >
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
