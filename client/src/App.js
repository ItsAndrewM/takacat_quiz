import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import ModelFinder from "./components/ModelFinder";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/model-finder" element={<ModelFinder />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
