import Layout from "./Layout/Layout";
import AboutUs from "./Pages/AboutUs";
import Events from "./Pages/Events";
import Home from "./Pages/Home";
import { Route, Routes } from "react-router-dom";
import OurServices from "./Pages/OurServices";
import ContactUs from "./Pages/ContactUs";

export const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout component={<Home />} />} />
        <Route path="/about-us" element={<Layout component={<AboutUs />} />} />
        <Route path="/events" element={<Layout component={<Events />} />} />
        <Route path="/our-service" element={<Layout component={<OurServices/>} />} />
        <Route path="/contact-us" element={<Layout component={<ContactUs/>} />} />
      </Routes>
    </>
  );
};
