import { Box, Grid, IconButton, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { keyframes } from "@emotion/react";

const partnersData = [
  "/images/partners/campuspro.jpeg",
  "/images/partners/brainwonders.jpeg",
  "/images/partners/brio.jpeg",
  "/images/partners/drammjamm.jpeg",
  "/images/partners/entab.jpeg",
  "/images/partners/livelife.jpeg",
  "/images/partners/nttdata.jpeg",
  "/images/partners/skolaro.jpeg",
  "/images/partners/sonet.jpeg",
  "/images/partners/sprouts.jpeg",
  "/images/partners/truscholar.jpeg",
  "/images/partners/learntech.jpeg",
  "/images/partners/ucmas.png",
  "/images/partners/Wisetime.png",
  "/images/partners/hitbullseye.jpeg",
  "/images/partners/campuspro.jpeg",
];

function OurPartners() {
  const scrollRef = useRef(null);
  const handleScroll = (direction) => {
    const container = scrollRef.current;
    if (container) {
      const cardWidth = container.querySelector("[data-card]").offsetWidth; // Assuming each card has a data-card attribute
      if (direction === "right") {
        const isEnd =
          container.scrollLeft + container.offsetWidth >=
          container.scrollWidth - cardWidth;
        if (isEnd) {
          // Quickly reset scroll to the beginning to simulate infinite scroll
          container.scrollTo({ left: 0, behavior: "auto" });
        } else {
          // Normal scrolling
          container.scrollBy({ left: cardWidth, behavior: "smooth" });
        }
      } else {
        const isStart = container.scrollLeft <= 0;
        if (isStart) {
          // Scroll to the end if attempting to scroll left at the start
          const endPosition = container.scrollWidth - container.offsetWidth;
          container.scrollTo({ left: endPosition, behavior: "auto" });
        } else {
          // Normal left scrolling
          container.scrollBy({ left: -cardWidth, behavior: "smooth" });
        }
      }
    }
  };

  // Set up automatic scrolling
  useEffect(() => {
    const interval = setInterval(() => {
      handleScroll("right");
    }, 2300);

    return () => clearInterval(interval);
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
    <Box mt={5}>
      <Typography
        textAlign={"center"}
        fontWeight={800}
        fontSize={{ xs: "1.5rem", md: "2rem" }}
        color={"#100854"}
        mb={3}
      >
        Our Partners
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
            {partnersData.length > 0 &&
              partnersData.map((data, index) => (
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
                        width: "150px",
                        height: "100%",
                        // background: "rgba(0, 0, 0, 0.5)",
                        // filter: "brightness(80%)",
                        objectFit: "contain",
                        // background:
                        //   "linear-gradient(to right, #6D7BFE, #3034BB)",
                      }}
                      src={data}
                      loading="lazy"
                    />
                  </Box>
                </Box>
              ))}
          </Box>

          {/* Navigation buttons overlay */}
          {/* <IconButton
            onClick={() => handleScroll("left")}
            size="small"
            sx={{
              position: "absolute",
              left: 10,
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 2,
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
              zIndex: 2,
              background: "#FF8126",
              color: "white",
              "&:hover": {
                background: "grey",
                color: "white",
              },
            }}
          >
            <ArrowRightIcon />
          </IconButton> */}
        </Box>
      </Grid>
    </Box>
  );
}

export default OurPartners;
