import MainHome from "./Layouts/Mains/MainHome";
import MainStory from "./Layouts/Mains/MainStory";
import MainProcess from "./Layouts/Mains/MainProcess";
import MainFiles from "./Layouts/Mains/MainFiles";
import MainFindUs from "./Layouts/Mains/MainFindUs/MainFindUs";
import Shop from "./Layouts/Mains/MainShop";
import FAQ from "./Layouts/FAQ/FAQ";
import MyAccount from "./Layouts/MyAccount";
import Protection from "./Layouts/Protection";
import Blog from "./Layouts/Blog/Blog.jsx";
import ProductDetails from "./Layouts/ProductDetails/ProductDetails";
import Register from "./Layouts/Registration/Register";
import Cart from "./Layouts/Cart/CartMain";
import Terms from "./Layouts/TermsOfService";
import NotFound from "./Layouts/NotFound";
import Heading from "./Layouts/Heading/Heading";
import Footer from "./Layouts/Footers/index";
import { Routes, Route } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="wrapper">
      <Heading />
      <Routes>
        <Route path="/" element={<MainHome />} />
        <Route path="/our-story" element={<MainStory />} />
        <Route path="/our-process" element={<MainProcess />} />
        <Route path="/the-irv-files" element={<MainFiles />} />
        <Route path="/the-irv-files/:id" element={<Blog />}></Route>
        <Route path="/find-irvins-near-you" element={<MainFindUs />} />
        <Route path="/the-snack-shop" element={<Shop />} />
        <Route path="/frequently-asked-questions" element={<FAQ />} />
        <Route path="/login" element={<MyAccount />} />
        <Route path="/counterfeit-protection" element={<Protection />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/accounts/register" element={<Register />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/terms-of-service" element={<Terms />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
