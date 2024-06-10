import Layout from "./Layout/Layout";
import AboutUs from "./Pages/AboutUs";
import Events from "./Pages/Events";
import Home from "./Pages/Home";
import { Route, Routes } from "react-router-dom";
import OurServices from "./Pages/OurServices";
import ContactUs from "./Pages/ContactUs";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NotFound from "./Pages/NotFound";

export const AppRoutes = () => {
  return (
    <>
      <ToastContainer
        position="bottom-center"
        autoClose={3000}
        // limit={1}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
        theme="colored"
      />
      <Routes>
        <Route path="/" element={<Layout component={<Home />} />} />
        <Route path="/about-us" element={<Layout component={<AboutUs />} />} />
        <Route path="/events" element={<Layout component={<Events />} />} />
        <Route
          path="/our-service"
          element={<Layout component={<OurServices />} />}
        />
        <Route
          path="/contact-us"
          element={<Layout component={<ContactUs />} />}
        />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  );
};
