import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import ModelFinder from "./components/ModelFinder";
import GlobalStyles from "./GlobalStyles";
import Input from "./components/Input";
import Confirm from "./components/Confirm";

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/model-finder" element={<ModelFinder />} />
        <Route path="/test" element={<Input />} />
        <Route path="/confirmation" element={<Confirm />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
