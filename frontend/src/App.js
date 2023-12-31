import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import CropRecommender from "./Components/CropRecommender/CropRecommender";
import FertilizerRecommender from "./Components/FertilizerRecommender/FertilizerRecommender";
import Menu from "./Components/Home/Menu";
import Footer from "./Components/Home/Footer";

function App() {
  return (
    <div>
      <Menu />
      <Routes>
        <Route path={`/`} element={<Home />} />
        <Route path={`/crop-recommender`} element={<CropRecommender />} />
        <Route
          path={`/fertilizer-recommender`}
          element={<FertilizerRecommender />}
        />
        <Route path={`/new-feature`} element={<FertilizerRecommender />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
