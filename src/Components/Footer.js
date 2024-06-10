import { Grid, MenuItem, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();
  return (
    <Box
      mt={5}
      bgcolor={"#3034BB"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      p={2}
    >
      <Grid container width={"82%"} mt={2}>
        <Grid item md={2.5} display={"flex"} justifyContent={"center"} p={3}>
          <Box
            display={"flex"}
            alignItems={"start"}
            flexDirection={"column"}
            gap={2}
          >
            <Box bgcolor={"white"} px={2} py={1} borderRadius={3}>
              <img
                src="/images/logo1.png"
                style={{
                  // borderRadius: "50%",
                  // height: "120px",
                  marginTop: "10px",
                  width: "120px",
                  objectFit: "contain",
                }}
              />
            </Box>
            <Typography fontSize={"13px"} color={"white"} textAlign={"left"}>
              Lorem Ipsum is simply dummy text of the and typesetting industry.
            </Typography>
          </Box>
        </Grid>
        <Grid item md={2.5} p={3}>
          <Box
            display={"flex"}
            alignItems={"start"}
            flexDirection={"column"}
            justifyContent={"center"}
            width={"100%"}
          >
            <MenuItem sx={{ color: "white", fontSize: "13px" }}>Home</MenuItem>
            <MenuItem
              onClick={() => navigate("/our-service")}
              sx={{ color: "white", fontSize: "13px" }}
            >
              Our Services
            </MenuItem>
            <MenuItem
              onClick={() => navigate("/events")}
              sx={{ color: "white", fontSize: "13px" }}
            >
              Events
            </MenuItem>
            <MenuItem
              onClick={() => navigate("/about-us")}
              sx={{ color: "white", fontSize: "13px" }}
            >
              About Us
            </MenuItem>
            <MenuItem
              onClick={() => navigate("/contact-us")}
              sx={{ color: "white", fontSize: "13px" }}
            >
              Contact Us
            </MenuItem>
          </Box>
        </Grid>
        <Grid item md={2.5} p={3}>
          <Box
            display={"flex"}
            alignItems={"start"}
            flexDirection={"column"}
            gap={1}
          >
            <Typography
              fontSize={"13px"}
              textAlign={"start"}
              color={"white"}
              mt={1}
            >
              Address
            </Typography>
            <Typography fontSize={"13px"} color={"white"}>
              Lorem Ipsum is simply dummy text of the and typesetting industry
            </Typography>
          </Box>
        </Grid>
        <Grid item md={4.5} p={3}>
          <iframe
            width="100%"
            height="250"
            // style="border:0"
            loading="lazy"
            allowfullscreen
            referrerpolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.458708337962!2d-73.97418738459392!3d40.78509136233808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258f685362b4b%3A0x4d0c64e5eb65baae!2sCentral%20Park!5e0!3m2!1sen!2sus!4v1640694339934!5m2!1sen!2sus"
          ></iframe>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Footer;
