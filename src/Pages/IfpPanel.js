import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { keyframes } from "@mui/system";
import { useNavigate } from "react-router-dom";
import ServiceForm from "../Components/ServiceForm";

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-30px);
  }
  60% {
    transform: translateY(-15px);
  }
`;

function IfpPanel() {
  const navigate = useNavigate();
  return (
    <Box>
      <Box
        height={{ xs: "250px" }}
        pt={5}
        sx={{
          background:
            "url(https://img.freepik.com/free-vector/gradient-blue-background_23-2149322706.jpg?size=626&ext=jpg&ga=GA1.1.563629714.1713778942&semt=ais_user)",
        }}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Typography
          color={"white"}
          fontWeight={700}
          textAlign={"center"}
          fontSize={"30px"}
        >
          Innovative IFP Panels
        </Typography>
      </Box>
      <Box px={{ lg: 30, md: 8, sm: 5, xs: 2 }} py={{ md: 10, xs: 5 }}>
        <Box>
          <Typography
            fontWeight={700}
            fontSize={{ sm: "25px", xs: "20px" }}
            color={"#FF8126"}
          >
            Empowering Education with IFP Panels
          </Typography>
          <Typography
            fontWeight={700}
            fontSize={{ md: "18px", xs: "16px" }}
            mt={4}
          >
            About
          </Typography>
          <Typography
            fontWeight={400}
            fontSize={{ md: "16px", xs: "14px" }}
            mt={2}
          >
            HelpingGurus is all about making education exciting with Interactive
            Flat Panels (IFP) designed for schools and colleges. These panels
            come packed with cool K-12 digital stuff that helps teachers spice
            up their lessons and create a fun learning environment.
          </Typography>
          <Typography
            fontWeight={700}
            fontSize={{ md: "18px", xs: "16px" }}
            mt={4}
          >
            How We Help Education
          </Typography>
          <Typography
            fontWeight={"400"}
            fontSize={{ md: "16px", xs: "14px" }}
            mt={2}
          >
            As part of the HelpingGurus team, we team up with big brands to
            bring awesome technology to schools. Our partnerships with top
            Indian IFP companies mean schools get the best interactive tools.
            Our aim is to be the go-to support for schools and colleges, making
            learning more engaging and enjoyable.
          </Typography>
          <Typography
            fontWeight={700}
            fontSize={{ md: "18px", xs: "16px" }}
            mt={4}
          >
            Our Goal
          </Typography>
          <Typography
            fontWeight={"400"}
            fontSize={{ md: "16px", xs: "14px" }}
            mt={2}
          >
            We want to be the top service provider for educational institutions,
            offering top-notch support and expertise to enhance the learning
            experience. By working closely with leading IFP companies in India,
            we hope to create an interactive educational world that benefits
            everyone involved.
          </Typography>

          <Box
            sx={{ background: "#3034BB" }}
            color={"white"}
            position={"relative"}
            borderRadius={2}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-between"}
            mt={3}
            py={2}
            pb={5}
            px={3}
          >
            <Box
              component="img"
              src="/images/dot-svg.png"
              sx={{
                position: "absolute",
                top: "15%",
                right: "2%",
                height: "120px",
                opacity: "20%",
                width: "150px",
                animation: `${bounce} 2s infinite`,
              }}
            />
            <Box px={{ md: 4, xs: 0 }}>
              <Typography
                fontWeight={700}
                fontSize={{ md: "28px", xs: "18px" }}
                color={"white"}
                mt={4}
              >
                Get in Touch for a Demo
              </Typography>
              <Box display={"flex"} alignItems={"center"} mt={3} gap={2}>
                <Typography
                  fontWeight={600}
                  color={"#FF8126"}
                  fontSize={"16px"}
                >
                  To see the magic of IFP panels in action, contact us to
                  arrange a demo. We're here to help you unlock the exciting
                  possibilities of interactive technology in education
                </Typography>
              </Box>
              <Box display={"flex"} alignItems={"center"} mt={3} gap={2}>
                <ServiceForm type={"Innovative IFP Panels"} />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default IfpPanel;
