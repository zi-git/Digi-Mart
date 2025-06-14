import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Category from "./components/category";
import Product from "./components/product";
import NotFound from "./components/notFound";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {

  return (
    <div className="min-h-screen flex flex-col justify-between">
  {/* Navbar */}
  <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path='/category/:id' element={<Category />} />
        <Route path="/product/:id" element={<Product/>}></Route>
        <Route path='*' element={<NotFound/>}/>
        
      </Routes>
       <Footer />
</div>
  );
}

export default App;
