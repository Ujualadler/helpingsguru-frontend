import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Box } from "@mui/material";

function Layout({ component }) {
  return (
    <>
      <Navbar />
      {component}

      <Footer />
    </>
  );
}

export default Layout;
