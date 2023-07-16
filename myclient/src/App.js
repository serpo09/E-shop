import "../src/index.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Topnavbar from "../src/components/Navbar/Topnavbar";
import Navbar from "../src/components/Navbar/Navbar";
import Home from "../src/Screens/Home";
import About from "../src/Screens/About";
import Blog from "../src/Screens/Blog";
import Contact from "../src/Screens/Contact";
import Footer from "../src/components/Footer/Footer";
import Login from "./Screens/Login";
import Register from "./Screens/Register";
import PageBanner from "./components/PageBanner/PageBanner";
import Productdetails from "./components/ProductDetail/Productdetails";
import Promotion from "./components/Homescreen/Promotion";
import Featuredproducts from "./components/Homescreen/Featuredproducts";
import Socialgallery from "./components/Homescreen/Socialgallery";
import Subcription from "./components/Homescreen/Subcription";
// import Swipercarousel from "./components/Swiper/Swipercarousel";
import Roughproduct from "./components/Homescreen/Roughproduct";
import Productdetailscreen from "./Screens/Productdetailscreen";
import Collectionproduct from "./Screens/Collectionproduct";
import Notfound from "./components/Notfound/Notfound";



function App() {
  // const location = useLocation();
  return (
    <>
      {/* {location.pathname === '/' ? null : <Login/>} */}
      <BrowserRouter>
        <Topnavbar />
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />}></Route>

          <Route path="/about" element={<About />}></Route>

          <Route path="/blog" element={<Blog />}></Route>

          <Route path="/contact" element={<Contact />}></Route>

      
          <Route path="/login" element={<Login />}></Route>

          <Route path="/register" element={<Register />}></Route>

          <Route path="/pagebanner" element={<PageBanner />}></Route>

          <Route path="/productdetailscreen" element={<Productdetailscreen />}></Route>

          <Route path="/productdetail" element={<Productdetails />}></Route>

          <Route path="/promotion" element={<Promotion />}></Route>

          <Route path="/Featuredproducts" element={<Featuredproducts />}></Route>

          <Route path="/socialproduct" element={<Socialgallery />}> </Route>

          <Route path="/subscription" element={<Subcription />}></Route>

          {/* <Route path="/swiper" element={<Swipercarousel />}></Route> */}

          <Route path="/rough" element={<Roughproduct />}></Route>

          <Route path="/blog" element={<Blog />}></Route>

          <Route path="/collection" element={<Collectionproduct />}></Route>

          <Route path="*" element={ <Notfound/> }></Route>

        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
