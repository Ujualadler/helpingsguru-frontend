import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Box, Button, Typography, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

const menuItems = [
  { name: "Home", url: "/" },
  {
    name: "Our Services",
    url: "/our-service",
    services: [
      "Educational Events & Roundtables",
      "Staff Recruitment Solutions",
      "Inspiring Speakers for Educational Institutions",
      "Educational Magazine Hub",
      "Edtech B2B Lead Generation",
      "Innovative IFP Panels",
      "Teacher Training Certification Programme",
    ],
  },
  { name: "Events", url: "/events" },
  { name: "About Us", url: "/about-us" },
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
  const getActiveServiceItem = () => {
    const currentItem = menuItems[1].services.find(
      (item) =>
        item.replace(/ & /g, "-").replace(/ /g, "-") === location.pathname
    );
    return currentItem ? currentItem : "";
  };

  const [active, setActive] = useState(getActiveItem);
  const [activeService, setActiveService] = useState(getActiveServiceItem);

  useEffect(() => {
    setActive(getActiveItem());
    setActiveService(getActiveServiceItem());
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
          height={{ md: "80px", xs: "60px" }}
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
              style={{ width: "100%", objectFit: "contain" }}
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
                  navigate(data.url);
                }}
                display="flex"
                sx={{ cursor: "pointer" }}
                alignItems="center"
                gap={1}
              >
                <Typography
                  fontSize="21px"
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
                {data.name === "Our Services" && hovered === "Our Services" && (
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
                          service.replace(/ & /g, "-").replace(/ /g, "-")
                            ? "blue"
                            : "#FF8126"
                        }
                        fontSize="16px"
                        onClick={(event) => {
                          event.stopPropagation(); // Stop the event from bubbling up
                          const servicePath = service
                            .replace(/ & /g, "-")
                            .replace(/ /g, "-");
                          navigate(`/our-service/${servicePath}`);
                          setActiveService(service);
                        }}
                      >
                        {service}
                      </Typography>
                    ))}
                  </Box>
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
