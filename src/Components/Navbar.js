import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Box, Button, Typography, IconButton, Divider } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import ArrowDropDownCircleIcon from "@mui/icons-material/ArrowDropDownCircle";

const menuItems = [
  { name: "Home", url: "/" },
  { name: "About Us", url: "/about-us" },

  {
    name: "Our Services",
    url: "/our-service",
    services: [
      "Educational Events & Roundtables",
      "Staff Recruitment Solutions",
      "Inspiring Speakers for Educational Institutions",
      "Educational Magazine Hub",
      "Teacher Training Certification Programme",
      "Talks With Gurus",
    ],
  },
  { name: "Edtech B2B Lead Generation", url: "/edtech-b2b-lead-generation" },
  { name: "Innovative IFP Panels", url: "/innovative-ifp-panels" },
  {
    name: "Gurus Help",
    url: "/gurus-help",
    services: [
      "School Erp",
      "College ERP",
      "LMS & NEP Aligned Digital Content ",
      "Vedic Maths",
      "Robotics",
      "Tours and Travels",
      "Furniture For Institutions",
      "K-12 Music Program for Institutions",
    ],
  },
  { name: "Events", url: "/events" },

  { name: "Career", url: "/career" },
  { name: "Contact Us", url: "/contact-us" },
];

function Navbar() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();
  const [hovered, setHovered] = useState("");

  const getActiveItem = () => {
    const currentItem = menuItems.find(
      (item) => item.url === location.pathname
    );
    return currentItem ? currentItem.name : "Home";
  };

  const [active, setActive] = useState(getActiveItem);
  const [activeService, setActiveService] = useState("");

  useEffect(() => {
    setActive(getActiveItem());
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Box position="relative">
        {<MobileMenu show={setShowMenu} open={showMenu} />}
        <Box
          height={{ md: "80px", xs: "10vh" }}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          position="fixed"
          width="100%"
          zIndex={10000}
          sx={{
            transition: "background-color .5s ease-in-out",
            background: scrolled
              ? "white"
              : "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.0))",
          }}
        >
          <Box
            bgcolor="white"
            px={2}
            py={1}
            ml={2}
            borderRadius={3}
            width={{ md: "100px", xs: "60px" }}
          >
            <img
              src="/images/logo1.png"
              style={{
                width: "100%",
                objectFit: "contain",
                background: "white",
              }}
            />
          </Box>
          <Box display={{ md: "flex", xs: "none" }} alignItems="center" gap={1}>
            {menuItems.map((data, index) => (
              <Box
                key={index}
                onMouseEnter={() => setHovered(data.name)}
                onMouseLeave={() => setHovered("")}
                onClick={() => {
                  setActive(data.name);
                  if (data.name !== "Gurus Help") {
                    navigate(data.url);
                  }
                }}
                display="flex"
                sx={{ cursor: "pointer" }}
                alignItems="center"
                gap={1}
              >
                <Typography
                  fontSize={{ lg: "17px", md: "15px" }}
                  sx={{'&:hover':{
                    color:
                    "#FF8126"
                  
                  }}}
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
                {(data.name === "Our Services" && hovered === "Our Services") ||
                (data.name === "Gurus Help" && hovered === "Gurus Help") ? (
                  <Box
                    position="absolute"
                    top={50}
                    bgcolor="white"
                    borderRadius={1}
                    p={1}
                    boxShadow={3}
                    onMouseEnter={() => setHovered(data.name)}
                    onMouseLeave={() => setHovered("")}
                  >
                    {data.services.map((service, idx) => (
                      <>
                        <Typography
                          key={idx}
                          p={1}
                          sx={{
                            "&:hover": {
                              transform: "scale(1.05)",
                              transition: "all 0.5s ease-in-out",
                            },
                          }}
                          color={
                            activeService ===
                            service.replace(/ & /g, "-").replace(/\s+/g, "")
                              ? "blue"
                              : "#FF8126"
                          }
                          fontSize="16px"
                          onClick={(event) => {
                            event.stopPropagation(); // Stop the event from bubbling up
                            const servicePath = service
                              .replace(/ & /g, "-")
                              .replace(/\s+/g, "-");

                            navigate(`${data.url}/${servicePath}`);

                            setActiveService(
                              service.replace(/ & /g, "-").replace(/\s+/g, "")
                            );
                          }}
                        >
                          {service}
                        </Typography>
                        <Divider sx={{ bgcolor: "lightgray" }} />
                      </>
                    ))}
                  </Box>
                ) : (
                  ""
                )}
                {data.name !== "Contact Us" && (
                  <span style={{ color: "#FF8126" }}>/</span>
                )}
              </Box>
            ))}
          </Box>
          <Button
            onClick={() => navigate("/contact-us")}
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
    const currentItem = menuItems.find(
      (item) => item.url === location.pathname
    );
    return currentItem ? currentItem.name : "Home";
  };

  const [active, setActive] = useState(getActiveItem);
  const [activeService, setActiveService] = useState("");
  const [showServices, setShowServices] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setActive(getActiveItem());
  }, [location]);

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      onClose={() => show(false)}
      width={{ xs: "100vw", sm: "60vw" }}
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
        <Box key={index} sx={{ width: "100%" }}>
          <Button
            onClick={() => {
              if (data.name === "Our Services" || data.name === "Gurus Help") {
                setShowServices(showServices === data.name ? null : data.name);
              } else {
                setActive(data.name);
                navigate(data.url);
                show(false);
              }
            }}
            endIcon={
              data.name === "Our Services" || data.name === "Gurus Help" ? (
                <ArrowDropDownCircleIcon
                  fontSize="large"
                  sx={{
                    fontSize: "20px",
                    transform:
                      showServices === data.name
                        ? "rotate(90deg)"
                        : "rotate(270deg)",
                    transition: "transform 0.3s ease",
                  }}
                />
              ) : null
            }
            sx={{
              my: 1,
              color: active === data.name ? "#FF8126" : "white",
              fontSize: { sm: "20px", xs: "16px" },
              fontWeight: 600,
              width: "100%",
              textAlign: "left",
            }}
          >
            {data.name}
          </Button>
          {data.name === "Our Services" && (
            <Box
              sx={{
                position: "absolute",
                zIndex: 10,
                background: "#FF8126",
                transform:
                  showServices === "Our Services"
                    ? "translateX(0)"
                    : "translateX(-100%)",
                transition: "transform .5s ease-in-out",
              }}
            >
              {data.services.map((service, idx) => (
                <Box key={idx} width={{ xs: "100vw", sm: "60vw" }}>
                  <Button
                    onClick={(e) => {
                      e.stopPropagation();
                      const servicePath = service
                        .replace(/ & /g, "-")
                        .replace(/\s+/g, "-");
                      navigate(`${data.url}/${servicePath}`);
                      setActiveService(
                        service.replace(/ & /g, "-").replace(/\s+/g, "-")
                      );
                      show(false);
                    }}
                    sx={{
                      my: "2px",
                      color:
                        activeService ===
                        service.replace(/ & /g, "-").replace(/\s+/g, "-")
                          ? "blue"
                          : "white",
                      fontSize: "14px",
                      fontWeight: 400,
                      width: "100%",
                      textAlign: "center",
                      textTransform: "none",
                    }}
                  >
                    {service}
                  </Button>
                  <Divider />
                </Box>
              ))}
            </Box>
          )}
          {data.name === "Gurus Help" && (
            <Box
              sx={{
                position: "absolute",
                zIndex: 10,
                background: "#FF8126",
                transform:
                  showServices === "Gurus Help"
                    ? "translateX(0)"
                    : "translateX(-100%)",
                transition: "transform .5s ease-in-out",
              }}
            >
              {data.services.map((service, idx) => (
                <Box key={idx} width={{ xs: "100vw", sm: "60vw" }}>
                  <Button
                    onClick={(e) => {
                      e.stopPropagation();
                      const servicePath = service
                        .replace(/ & /g, "-")
                        .replace(/\s+/g, "-");
                      navigate(`${data.url}/${servicePath}`);
                      setActiveService(
                        service.replace(/ & /g, "-").replace(/\s+/g, "-")
                      );
                      show(false);
                    }}
                    sx={{
                      my: "2px",
                      color:
                        activeService ===
                        service.replace(/ & /g, "-").replace(/\s+/g, "-")
                          ? "blue"
                          : "white",
                      fontSize: "14px",
                      fontWeight: 400,
                      width: "100%",
                      textAlign: "center",
                      textTransform: "none",
                    }}
                  >
                    {service}
                  </Button>
                  <Divider />
                </Box>
              ))}
            </Box>
          )}
        </Box>
      ))}
    </Box>
  );
}
