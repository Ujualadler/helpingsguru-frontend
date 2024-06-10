import { Box, Button, Grid, IconButton, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import { useLocation, useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const menuItems = [
  { name: "Home", url: "/" },
  { name: "Our Services", url: "/our-service" },
  { name: "Events", url: "/events" },
  { name: "About Us", url: "/about-us" },
  { name: "Contact Us", url: "/contact-us" },
];

function Navbar() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();

  const getActiveItem = () => {
    const currentItem = menuItems.find(item => item.url === location.pathname);
    return currentItem ? currentItem.name : "Home";
  }

  const [active, setActive] = useState(getActiveItem);

  useEffect(() => {
    setActive(getActiveItem());
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 30;
      setScrolled(isScrolled);
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Box position={"relative"}>
        {<MobileMenu show={setShowMenu} open={showMenu} />}
        <Box
          height={{ md: "80px", xs: "60px" }}
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          position={"fixed"}
          width={"100%"}
          zIndex={10000}
          sx={{
            transition: "background-color .5s ease-in-out",
            background: scrolled
              ? "white"
              : "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.0))",
          }}
        >
          <Box
            bgcolor={"white"}
            px={2}
            py={1}
            ml={2}
            borderRadius={3}
            width={{ md: "100px", xs: "60px" }}
          >
            <img
              src="/images/logo1.png"
              style={{
                // borderRadius: "50%",
                // height: "200px",
                width: "100%",
                objectFit: "contain",
              }}
            />
          </Box>

          <Box
            display={{ md: "flex", xs: "none" }}
            alignItems={"center"}
            gap={1}
          >
            {menuItems.map((data, index) => (
              <Box
                key={index}
                onClick={() => {
                  setActive(data.name);
                  navigate(data.url);
                }}
                display={"flex"}
                sx={{ cursor: "pointer" }}
                alignItems={"center"}
                gap={1}
              >
                <Typography
                  fontSize={"21px"}
                  color={
                    active === data.name
                      ? "#FF8126"
                      : scrolled
                      ? "#100854"
                      : "white"
                  }
                >
                  {data.name}
                </Typography>
                {data.name !== "Contact Us" && (
                  <span style={{ color: "#FF8126" }}>/</span>
                )}
              </Box>
            ))}
          </Box>
          <Button
            variant="contained"
            startIcon={<LocalPhoneIcon />}
            disableElevation
            sx={{
              textTransform: "none",
              border: "3px solid #FF8126",
              borderRadius: 3,
              background: "transparent",
              color: scrolled ? "#100854" : "white",
              fontSize: "16px",
              mr: 3,
              display: { md: "flex", xs: "none" },
            }}
          >
            Enquire Now
          </Button>
          <IconButton
            onClick={() => setShowMenu(!showMenu)}
            size="small"
            sx={{
              mr: 1,
              display: { md: "none", xs: "flex" },
              border: "2px solid #FF8126",
              borderRadius: 3,
              background: "transparent",
              color: scrolled ? "#100854" : "white",
            }}
          >
            {showMenu ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
        </Box>
      </Box>
    </>
  );
}

export default Navbar;

function MobileMenu({ show, open }) {
  const location = useLocation();
  const getActiveItem = () => {
    const currentItem = menuItems.find(item => item.url === location.pathname);
    return currentItem ? currentItem.name : "Home";
  }

  const [active, setActive] = useState(getActiveItem);

  useEffect(() => {
    setActive(getActiveItem());
  }, [location]);
  const navigate = useNavigate();
  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      width="100vw"
      height="100vh"
      bgcolor="#3034BB" // Use theme color for background
      zIndex="10000"
      // Use modal z-index level to ensure it's above other content
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        transform: open ? "translateX(0)" : "translateX(-100%)",
        transition: "transform .5s ease-in-out",
      }}
    >
      {menuItems.map((data, index) => (
        <Button
          key={index}
          onClick={() => {
            setActive(data.name);
            navigate(data.url);
            show(false);
          }}
          sx={{
            my: 1,
            color: active ? "#FF8126" : "white",
            fontSize: "20px",
            fontWeight: 600,
          }}
        >
          {data.name}
        </Button>
      ))}
    </Box>
  );
}
