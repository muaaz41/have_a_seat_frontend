import { Route, Routes, useLocation } from "react-router-dom";

import Footer from "./components/common/Footer";
import Navbar from "./components/common/Navbar";
import AccountLinks from "./pages/AccountLinks";
import ForgetPassword from "./pages/ForgetPassword";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ResetPassword from "./pages/ResetPassword";
import Search from "./pages/Restraunts";
import Reservation from "./pages/Restraunts/Reservation";
import ReservationStatus from "./pages/Restraunts/Reservation/ReservationStatus";
import RestrauntDetail from "./pages/Restraunts/RestrauntDetailPage";
import Signup from "./pages/Signup";

function App() {
  const location = useLocation();
  const showFooter =
    location.pathname !== "/login" && location.pathname !== "/register";
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<h1>About</h1>} />
        <Route path="/register" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/resetpassword" element={<ResetPassword />} />
        <Route path="/forget" element={<ForgetPassword />} />
        <Route path="/restraunts" element={<Search />} />
        <Route path="/restaurant-detail" element={<RestrauntDetail />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/reservation-status" element={<ReservationStatus />} />
        <Route path="/account-links" element={<AccountLinks />} />
      </Routes>
      {showFooter && <Footer />}
    </>
  );
}

export default App;