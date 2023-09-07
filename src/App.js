import "./App.css";

import BasicLayout from "./pages/BasicLayout";
import ComparativeView from "./pages/ComparativeView";

function App() {
  return (
    <div className="App">
      <BasicLayout>
        <ComparativeView />
      </BasicLayout>
    </div>
  );
}

export default App;
