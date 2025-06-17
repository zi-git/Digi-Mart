import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Category from "./components/category";
import Product from "./components/product";
import NotFound from "./components/notFound";
import CartPage from "./components/cart";
import WishlistPage from "./components/wishlist";
import AuthPage from "./components/Authentication/authLayout";
import Login from "./components/Authentication/login";
import Signup from "./components/Authentication/signup";
import UserPage from "./components/userPage";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function App() {
  const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, [pathname]);

    return null;
  };

  return (
    <div className="min-h-[120vh] flex flex-col justify-between">
      {/* Navbar */}
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/category/:id" element={<Category />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/wishlist" element={<WishlistPage />} />
       <Route path="/auth" element={<AuthPage />}>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} /> 
        </Route> 
        <Route path='/user' element={<UserPage/>}/>
        
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
