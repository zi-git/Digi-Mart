import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Category from "./components/category";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path='/category/:id' element={<Category />} />
      </Routes>
    </>
  );
}

export default App;
