import MainHome from "./Layouts/Mains/MainHome";
import MainStory from "./Layouts/Mains/MainStory";
import MainProcess from "./Layouts/Mains/MainProcess";
import MainFiles from "./Layouts/Mains/MainFiles";
import MainFindUs from "./Layouts/Mains/MainFindUs/MainFindUs";
import Shop from "./Layouts/Mains/MainShop";
import FAQ from "./Layouts/FAQ/FAQ";
import Protection from "./Layouts/Protection";
import Blog from "./Layouts/Blog/Blog.jsx";
import ProductDetails from "./Layouts/ProductDetails/ProductDetails";
import Login from "./Layouts/User/Login/Login";
import Register from "./Layouts/User/Register/Register";
import Account from "./Layouts/User/AccountDetails/AccountDetails";
import Cart from "./Layouts/Cart/CartMain";
import Terms from "./Layouts/TermsOfService";
import NotFound from "./Layouts/NotFound";
import Heading from "./Layouts/Heading/Heading";
import Footer from "./Layouts/Footers/index";
import AdminOnlyRoute from "./components/AdminOnlyRoute/AdminOnlyRoute";
import Admin from "./Layouts/Admin/index";
import CheckOut from "./Layouts/CheckOut/CheckoutStripe/CheckoutStripe";
import { Routes, Route } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import ResetPassword from "./Layouts/User/ResetPassword/ResetPassword";
import CheckoutDetails from "./Layouts/CheckOut/CheckoutDetail/CheckoutDetails";

function App() {
  return (
    <div className="wrapper">
      <ToastContainer
        position="bottom-left"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
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
        <Route path="/products-details/:id" element={<ProductDetails />} />
        <Route path="/accounts/login" element={<Login />} />
        <Route path="/accounts/register" element={<Register />} />
        <Route path="/accounts/reset-password" element={<ResetPassword />} />
        <Route path="/accounts/profile" element={<Account />} />

        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout-details" element={<CheckoutDetails />} />
        <Route path="/checkout" element={<CheckOut />} />

        <Route
          path="/admin/*"
          element={
            <AdminOnlyRoute>
              <Admin />
            </AdminOnlyRoute>
          }
        ></Route>

        <Route path="/terms-of-service" element={<Terms />} />
        <Route path="/counterfeit-protection" element={<Protection />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
