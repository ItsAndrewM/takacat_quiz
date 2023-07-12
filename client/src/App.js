import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import ModelFinder from "./pages/ModelFinder";
import GlobalStyles from "./GlobalStyles";
import Input from "./pages/Input";
import Confirm from "./pages/Confirm";

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/model-finder" element={<ModelFinder />} />
        <Route path="/" element={<Input />} />
        <Route path="/confirmation" element={<Confirm />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
