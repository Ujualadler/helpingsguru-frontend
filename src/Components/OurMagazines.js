import { Box, Button, Grid, IconButton, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { keyframes } from "@emotion/react";
import { magazineService } from "../Services/magazineService";
import { API_URL } from "../Services/url";
import PdfShowing from "./PdfShowing";




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

  const [ourMagazine, setOurMagazine] = useState([]);
  const [pdf, setPdf] = useState(false);
  const [url, setUrl] = useState('');
  useEffect(() => {
    const getMagazine = async () => {
      try {
        const result = await magazineService.getMagazine();
        console.log(result.data);
        if (result.data.success === true) {
          console.log(result.data.data);
          setOurMagazine(result.data.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getMagazine();
  }, []);


  const handlePdf =(data)=>{
    console.log(data)
    setUrl(data)
    setPdf(true)
  }

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
      {pdf&& url!=='' &&<PdfShowing show={setPdf} open={pdf} url={url}/>}
      <Typography
        textAlign={"center"}
        fontWeight={800}
        fontSize={{ xs: "1.5rem", md: "2rem" }}
        color={"#100854"}
        mb={3}
      >
        Our Magazines
      </Typography>
      <Grid container borderRadius={3}>
        {/* <Title title={"Experiential Learning"} /> */}

        <Box
          position="relative"
          width={"100%"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={'center'}
          flexDirection={'column'}
        >
          <Box
            display={"flex"}
            justifyContent={{xs: "start", sm:"center"}}
            overflow={"auto"}
            width={{
              xs: "90%",
              md:'70%'
            }}
            sx={{ scrollbarWidth: "none" }}
            ref={scrollRef}
          >
            {ourMagazine.length>0 && ourMagazine.map((data, index) => (
              <Box
                key={index}
                data-card
                sx={{
                  flex: "0 0 auto",
                  justifyContent:'center',
                  display:'flex',
                  width: { xs: "100%", sm: "50%", md: "25%" },
                  animation: `${fadeInAnimation} ease 0.8s`,
              
                }}
                className="fade-in"
              >
                <Box  display={'flex'} justifyContent={'center'} width={'80%'} flexDirection={'column'} alignItems={'center'}>
                 <Box borderRadius={4} width={'100%'} position={"relative"} overflow={"hidden"}>
                <img
                  src={`${API_URL}api/v1/image/${data.img}`}
                  style={{
                    width: "100%",
                    height: "35vh",
                    borderRadius: "8px",
                    filter: "brightness(80%)",
                  }}
                />
                <Typography
                  position={"absolute"}
                  bottom={0}
                  color={"white"}
                  sx={{
                    background:
                      "linear-gradient(145deg, rgba(0, 0, 128, 0.8), rgba(0, 0, 255, 0.6))", // Gradient from navy to transparent blue
                    width: "100%",
                    textAlign: "center",
                    py: 1,
                  }}
                >
                  {data?.name}
                </Typography>
              </Box>
              <Box display={"flex"} width={'100%'} justifyContent={'center'} alignItems={"center"} mt={1} gap={"4px"}>
                <Button
                // onClick={() => window.open(`${API_URL}api/v1/image/${data?.pdf}`, '_blank')}
                variant="contained"
                onClick={()=>handlePdf(data)}
                  sx={{
                    textTransform: "none",
                    borderRadius: 2,
                    width: "90%",
                    background: "#FF8126",
                    color: "white",
                    
                  }}
                >
                  Read More
                </Button>
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

export default OurSpeakers;
