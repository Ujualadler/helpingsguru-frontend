import { Box, Button, Grid, IconButton, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { keyframes } from "@emotion/react";
import { galleryService } from "../Services/galleryService";
import { API_URL } from "../Services/url";
import GallerySlider from "./GallerySlider";

function Gallery() {
  const [showGallery, setShowGallery] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollRef = useRef(null);
  const handleScroll = (direction) => {
    const container = scrollRef.current;
    if (container) {
      const cardWidth = container.querySelector("[data-card]").offsetWidth; // Assuming each card has a data-card attribute
      const scrollAmount = direction === "left" ? -cardWidth : cardWidth;
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const [galleryData, setGalleryData] = useState([]);
  useEffect(() => {
    const getGallery = async () => {
      try {
        const result = await galleryService.getGallery();
        console.log(result.data);
        if (result.data.success === true) {
          console.log(result.data.data);
          setGalleryData(result.data.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getGallery();
  }, []);

  const openGallery = (index) => {
    setShowGallery(true);
    setCurrentIndex(index);
  };

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
      {showGallery && (
        <GallerySlider
          show={setShowGallery}
          open={showGallery}
          data={galleryData}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
        />
      )}
      <Typography
        textAlign={"center"}
        fontWeight={800}
        fontSize={{ xs: "1.5rem", md: "2rem" }}
        color={"#100854"}
        mb={3}
      >
        Gallery
      </Typography>
      <Grid container>
        {/* <Title title={"Experiential Learning"} /> */}

        <Box
          position="relative"
          width={"100%"}
          display={"flex"}
          justifyContent={"center"}
          // alignItems={"center"}
        >
          <Box
            display={"flex"}
            justifyContent={{ xs: "start", sm: "start" }}
            overflow={"auto"}
            width={{
              xs: "90%",
              md: "80%",
            }}
            sx={{ scrollbarWidth: "none" }}
            ref={scrollRef}
          >
            {galleryData.length > 0 &&
              galleryData.map((data, index) => (
                <Box
                  key={index}
                  data-card
                  sx={{
                    flex: "0 0 auto",
                    justifyContent: "center",
                    display: "flex",
                    width: { xs: "100%", sm: "50%", md: "25%" },
                    animation: `${fadeInAnimation} ease 0.8s`,
                  }}
                  className="fade-in"
                >
                  <Box
                    display={"flex"}
                    justifyContent={"center"}
                    width={"80%"}
                    flexDirection={"column"}
                    alignItems={"center"}
                    sx={{
                      cursor: "pointer",
                      "&:hover": {
                        transform: "scale(1.05)",
                        transition: "all 0.5s ease-in-out",
                      },
                    }}
                    onClick={() => openGallery(index)}
                  >
                    <Box
                      width={"100%"}
                      position={"relative"}
                      overflow={"hidden"}
                    >
                      <img
                        src={`${API_URL}api/v1/image/${data}`}
                        style={{
                          width: "100%",
                          height: "35vh",
                          objectFit:'cover'
                        }}
                      />
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
          </IconButton>
        </Box>
      </Grid>
    </Box>
  );
}

export default Gallery;
