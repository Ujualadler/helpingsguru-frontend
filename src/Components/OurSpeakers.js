import { Box, Grid, IconButton, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { keyframes } from "@emotion/react";
import { ourSpeakersService } from "../Services/OurSpeakersService";
import { API_URL } from "../Services/url";

function OurSpeakers() {
  const scrollRef = useRef(null);
  const handleScroll = (direction) => {
    const container = scrollRef.current;
    if (container) {
      const cardWidth = container.querySelector("[data-card]").offsetWidth; // Assuming each card has a data-card attribute
      const scrollAmount = direction === "left" ? -cardWidth : cardWidth;
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const [ourSpeakerData, setOurSpeakerData] = useState([]);
  useEffect(() => {
    const getOurSpeakers = async () => {
      try {
        const result = await ourSpeakersService.getOurSpeakers();
        console.log(result.data);
        if (result.data.success === true) {
          console.log(result.data.data);
          setOurSpeakerData(result.data.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getOurSpeakers();
  }, []);

  const fadeInAnimation = keyframes`
  0% {
    transform:scale(1.5)
  }
  100% {
    transform:scale(1)
  }
`;
  return (
    <Box>
      <Typography
        textAlign={"center"}
        fontWeight={800}
        fontSize={{ xs: "1.5rem", md: "2rem" }}
        color={"#100854"}
        mb={3}
      >
        Our Speakers
      </Typography>
      <Grid container borderRadius={3}>
        {/* <Title title={"Experiential Learning"} /> */}

        <Box
          position="relative"
          width={"100%"}
          display={"flex"}
          justifyContent={"center"}
        >
          <Box
            display={"flex"}
            overflow={"auto"}
            width={{
              xs: "100vw",
            }}
            sx={{ scrollbarWidth: "none" }}
            ref={scrollRef}
          >
            {ourSpeakerData.length > 0 &&
              ourSpeakerData.map((data, index) => (
                <Box
                  key={index}
                  data-card
                  sx={{
                    flex: "0 0 auto",
                    width: {
                      xs: "100%",
                      sm: "50%",
                      md: "33.333%",
                      lg: "25%",
                      xl: "20%",
                    },
                    animation: `${fadeInAnimation} ease 0.8s`,
                    // opacity: 0,
                  }}
                  className="fade-in"
                >
                  <Box
                    sx={{
                      border: `
                         "1px"
                       solid #cfd4dc`,
                      background: "yellow",
                      height: { lg: "40vh", md: "40vh", xs: "50vh" },
                      // borderRadius: 3,
                      position: "relative",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <img
                      style={{
                        width: "100%",
                        height: "100%",
                        background: "rgba(0, 0, 0, 0.5)",
                        filter: "brightness(80%)",
                        objectFit: "cover",
                        background:'linear-gradient(to right, #6D7BFE, #3034BB)'
                      }}
                      src={`${API_URL}api/v1/image/${data?.img}`}
                      loading="lazy"
                    />

                    <Box
                      sx={{
                        position: "absolute",
                        bottom: 20,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "start",
                        left: -1,
                        zIndex: 2,
                      }}
                    >
                      <Typography
                        fontSize={"30px"}
                        fontWeight={600}
                        px={1}
                        color={"white"}
                        sx={{
                          // background: "orange",
                          WebkitMaskImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' preserveAspectRatio='none'><path d='M0 0 H85 Q90 25 95 50 Q90 75 85 100 H0 V0 Z' fill='black'/></svg>")`,
                          WebkitMaskSize: "100% 100%",
                          maskImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' preserveAspectRatio='none'><path d='M0 0 H85 Q90 25 95 50 Q90 75 85 100 H0 V0 Z' fill='black'/></svg>")`,
                          maskSize: "100% 100%",
                          paddingRight: "15px",
                          paddingBlock: "3px",
                          textAlign: "left",
                          overflowWrap: "break-word",
                        }}
                      >
                        {data?.name}
                      </Typography>
                      <Typography px={1} color={"white"}>
                        {data?.designation}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              ))}
          </Box>

          {/* Navigation buttons overlay */}
          <IconButton
            onClick={() => handleScroll("left")}
            size="small"
            sx={{
              position: "absolute",
              left: 10,
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 1500,
              background: "#FF8126",
              color: "white",
              "&:hover": {
                background: "grey",
                color: "white",
              },
            }}
          >
            <ArrowLeftIcon />
          </IconButton>
          <IconButton
            onClick={() => handleScroll("right")}
            size="small"
            sx={{
              position: "absolute",
              right: 10,
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 1500,
              background: "#FF8126",
              color: "white",
              "&:hover": {
                background: "grey",
                color: "white",
              },
            }}
          >
            <ArrowRightIcon />
          </IconButton>
        </Box>
      </Grid>
    </Box>
  );
}

export default OurSpeakers;
