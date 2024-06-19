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

function EdtechB2B() {
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
          fontSize={{md:"30px",xs:'20px'}}
        >
          Edtech B2B Lead Generation
        </Typography>
      </Box>
      <Box px={{ lg: 30, md: 8, sm: 5, xs: 2 }} py={{ md: 10, xs: 5 }}>
        <Box>
          <Typography
            fontWeight={700}
            fontSize={{ sm: "25px", xs: "20px" }}
            color={"#FF8126"}
          >
            Helping Gurus: Connecting Edtech Partners with Educational
            Institutions
          </Typography>
          <Typography
            fontWeight={400}
            fontSize={{ md: "16px", xs: "14px" }}
            mt={2}
          >
            Welcome to Helping Gurus! We specialize in assisting Edtech
            corporate partners to infiltrate educational institutions and
            elevate their brand visibility across India.
          </Typography>
          <Typography
            fontWeight={700}
            fontSize={{ md: "18px", xs: "16px" }}
            mt={4}
          >
            About Us
          </Typography>
          <Typography
            fontWeight={400}
            fontSize={{ md: "16px", xs: "14px" }}
            mt={2}
          >
            At Helping Gurus, we leverage an extensive network of CBSE, ICSE,
            IB, State Board schools & Universities to help Edtech partners
            establish their presence across India. By showcasing your brand
            through our comprehensive connections, we facilitate seamless entry
            into educational institutions nationwide.
          </Typography>
          <Typography
            fontWeight={700}
            fontSize={{ md: "18px", xs: "16px" }}
            mt={4}
          >
            Our Services
          </Typography>
          <Typography
            fontWeight={700}
            fontSize={{ md: "16px", xs: "14px" }}
            mt={2}
            color={"#FF8126"}
          >
            Network Expansion
          </Typography>
          <Typography
            fontWeight={400}
            fontSize={{ md: "16px", xs: "14px" }}
            mt={1}
          >
            Utilize our broad network to introduce your brand to multiple
            educational boards in India.
          </Typography>
          <Typography
            fontWeight={700}
            fontSize={{ md: "16px", xs: "14px" }}
            mt={2}
            color={"#FF8126"}
          >
            Lead Generation
          </Typography>
          <Typography
            fontWeight={400}
            fontSize={{ md: "16px", xs: "14px" }}
            mt={1}
          >
            Receive direct leads from schools and colleges seeking innovative
            solutions.
          </Typography>
          <Typography
            fontWeight={700}
            fontSize={{ md: "16px", xs: "14px" }}
            mt={2}
            color={"#FF8126"}
          >
            Priority Support
          </Typography>
          <Typography
            fontWeight={400}
            fontSize={{ md: "16px", xs: "14px" }}
            mt={1}
          >
            Our partners always remain our top priority, ensuring you receive
            the best possible assistance.
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
                Become a Partner
              </Typography>
              <Box display={"flex"} alignItems={"center"} mt={3} gap={2}>
                <Typography
                  fontWeight={600}
                  color={"#FF8126"}
                  fontSize={"16px"}
                >
                  Interested in partnering with us and presenting your services
                  to educational institutions? Please fill out your details
                  below.
                </Typography>
              </Box>
              <Box display={"flex"} alignItems={"center"} mt={3} gap={2}>
                <ServiceForm type={"Edtech B2B Lead Generation"} />
              </Box>
              <Box display={"flex"} alignItems={"center"} mt={3} gap={2}>
                <Typography
                  fontWeight={600}
                  color={"#FF8126"}
                  fontSize={"16px"}
                >
                  At Helping Gurus, we are committed to the success of our
                  partners. Join us and let’s revolutionize the educational
                  landscape together.
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default EdtechB2B;
