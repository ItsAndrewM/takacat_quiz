import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import ModelFinder from "./components/ModelFinder";
import GlobalStyles from "./GlobalStyles";

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/model-finder" element={<ModelFinder />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
