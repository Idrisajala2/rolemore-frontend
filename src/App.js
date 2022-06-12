import Header from "./comp/header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from "./comp/reg/Signin";
// import Signout from "./comp/reg/Signout";
import Signup from "./comp/reg/Signup";
import Landingpage from "./comp/landingpage/Landing";
import Home from "./comp/home/Home";
import About from "./comp/home/About";
import Seller from "./comp/home/Seller";
import Product from "./comp/home/Product";
import Detail from "./comp/home/Detail";
import Post from "./comp/home/Post";
// import Footer from "./comp/footer/Footer";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/signin" element={<Signin />} />
          {/* <Route path="/signout" element={<Signout />} /> */}
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Landingpage />} />
          <Route path="/product" element={<Product />} />
          <Route path="/contact" element={<Seller />} />
          <Route path="/about" element={<About />} />
          <Route path="/home" element={<Home />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/post" element={<Post />} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
