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
import ServiceSinglePage from "./Pages/ServiceSinglePage";
import Career from "./Pages/Career";
import EdtechB2B from "./Pages/EdtechB2B";
import IfpPanel from "./Pages/IfpPanel";

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
        theme="dark"
      />
      <Routes>
        <Route path="/" element={<Layout component={<Home />} />} />
        <Route path="/about-us" element={<Layout component={<AboutUs />} />} />
        <Route path="/events" element={<Layout component={<Events />} />} />
        <Route path="/career" element={<Layout component={<Career />} />} />
        <Route
          path="/our-service"
          element={<Layout component={<OurServices />} />}
        />
        <Route
          path="/our-service/:serviceName"
          element={<Layout component={<ServiceSinglePage />} />}
        />
        <Route
          path="/contact-us"
          element={<Layout component={<ContactUs />} />}
        />
        <Route
          path="/edtech-b2b-lead-generation"
          element={<Layout component={<EdtechB2B />} />}
        />
        <Route
          path="/innovative-ifp-panels"
          element={<Layout component={<IfpPanel />} />}
        />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  );
};
