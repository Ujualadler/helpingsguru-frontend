import { Box, Button, Grid, Typography, keyframes  } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();
  const aboutData = [
    {
      img:'/images/stage.png',
      name: "Educational Events & Roundtables",
    },
    {
      img: "/images/recruitment.png",
      name: "Staff Recruitment Solutions",
    },
    {
      img: "/images/Certification.png",
      name: "Teacher Training Certification Programme",
    },
    {
      img: "/images/magazine.png",
      name: "Educational Magazine Hub",
    },
    {
      img: "/images/responsive-design.png",
      name: "Innovative IFP Panels",
    },
    {
      img: "/images/lead.png",
      name: "Edtech B2B Lead Generation",
    },
    {
      img: "/images/speech.png",
      name: "Inspiring Speakers for Educational Institutions",
    },
  ];

  const rotate = keyframes`
  0% {
    transform: scale(0.5);
  }
  100% {
    transform: scale(1.5); // Adjusted to scale up for demonstration
  }
`;



  const dimension = keyframes`
  from {
    transform: scale(1.1);
  }
  to {
    transform: scale(.8);
  }
`;


  return (
    <Grid container mb={3}>
      <Grid
        item
        xs={12}
        md={6}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        pt={{ xs: 10, md: 0 }}
        mb={3}
      >
        <Box
          width={"90%"}
          height={"80%"}
          justifyContent={"center"}
          display={"flex"}
          alignItems={"center"}
          position={"relative"}
          
          
        >
          <Box
            sx={{
              width: { md: "200px", xs: "150px" },
              height: { md: "200px", xs: "150px" },
              background: "#6D7BFE",
              borderRadius: 10,
              animation: `${rotate} 6s linear infinite`,
            }}
          />
          <Box
            sx={{
              width: { md: "35%", xs: "40%" },
              height: { md: "30%", xs: "100%" },
              borderRadius: "20px",
              position: "absolute",
              top: { md: "16%", xs: "-50%" },
              left: { md: "13%", xs: "10%" },
              animation: `${dimension} 6s linear infinite`,
              
              
            }}
          >
            <img
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "20px",
              }}
              src="/images/about1.jpg"
              
            />
          </Box>
          <Box
            sx={{
              width: { md: "25%", xs: "35%" },
              height: { md: "20%", xs: "100%" },
              borderRadius: "20px",
              position: "absolute",
              top: { md: "25%", xs: "-40%" },
              right: { md: "20%", xs: "10%" },
              animation: `${dimension} 6s linear infinite`,
            }}
          >
            <img
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "20px",
              }}
              src="/images/about2.jpg"
            />
          </Box>
          <Box
            sx={{
              width: { md: "30%", xs: "35%" },
              height: { md: "25%", xs: "100%" },
              borderRadius: "20px",
              position: "absolute",
              bottom: { md: "25%", xs: "-70%" },
              right: { md: "25%", xs: "20%" },
              animation: `${dimension} 6s linear infinite`,
            }}
          >
            <img
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "20px",
              }}
              src="/images/about3.jpg"
            />
          </Box>
        </Box>
      </Grid>

      <Grid item xs={12} md={6} mt={{ xs: 5, md: 0 }}>
        <Box
          p={3}
          display={"flex"}
          justifyContent={"center"}
          gap={1}
          flexDirection={"column"}
          mt={6}
        >
          <Typography
            fontWeight={700}
            fontSize={"18px"}
            mb={1}
            color={"#100854"}
          >
            About Us
          </Typography>
          <Typography
            maxWidth={{ md: "80%", xs: "100%" }}
            fontWeight={400}
            mb={2}
            fontSize={"15px"}
            color={"#100854"}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, 
          </Typography>

          <Button
            onClick={() => navigate("/about-us")}
            variant="contained"
            sx={{
              textTransform: "none",
              background: "#FF8126",
              width: { md: "30%", xs: "100%" },
              borderRadius: 2,
            }}
          >
            Read More
          </Button>
          <Box container mt={3}>
            <Typography
              fontWeight={700}
              fontSize={"18px"}
              mb={1}
              color={"#100854"}
            >
              Our Services
            </Typography>
            <Grid
              container
              mt={1}
              spacing={3}
              width={{ md: "90%", xs: "100%" }}
            >
              {aboutData.map((data, index) => (
                <Grid item xs={4} key={index}>
                  <Box
                    display={"flex"}
                    // width={"100px"}
                    flexDirection={"column"}
                    gap={1}
                  >
                    <img
                      style={{ height: "80px", width: "80px" }}
                      src={data.img}
                    />
                    <Typography
                      ml={2}
                      textAlign={"start"}
                      fontSize={{sm:"13px",xs:'11px'}}
                      fontWeight={600}
                    >
                      {data.name}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
            <Button
              onClick={() => navigate("/our-service")}
              variant="contained"
              sx={{
                textTransform: "none",
                background: "#FF8126",
                width: { md: "30%", xs: "100%" },
                height: "40px",
                borderRadius: 2,
                mt: 3,
              }}
            >
              Read More
            </Button>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}

export default About;
