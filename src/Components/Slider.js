import { Box, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useTheme } from "@mui/material/styles";
import { eventService } from "../Services/EventService";
import { API_URL, formatDate } from "../Services/url";
import EventSubmitModal from "./EventSubmitForm";

function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [fade, setFade] = useState(true);
  const themes = useTheme();
  const [eventsData, setEventsData] = useState([]);
  const [eventbook, setEventBook] = useState(false);

  useEffect(() => {
    const getEvents = async () => {
      try {
        const result = await eventService.getUpcomingEvents();
        if (result.data.success) {
          setEventsData(result.data.data.slice(0, 4));
        }
      } catch (error) {
        console.log(error);
      }
    };
    getEvents();
  }, []);

  const handleSelectSlide = (index) => {
    setFade(false);
    setTimeout(() => {
      setCurrentSlide(index);
      setFade(true);
    }, 300); // Short delay to allow fade out before updating content
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + eventsData.length) % eventsData.length);
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % eventsData.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % eventsData.length);
    }, 4000); // Change slide every 4 seconds
    return () => clearInterval(timer); // Clear the interval on component unmount
  }, [eventsData.length]);

  if (eventsData.length === 0) {
    return <div>Loading...</div>;
  }

  const data = eventsData[currentSlide];

  const scrollingTextStyles = `
  @keyframes scroll-left {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(-100%);
    }
  }
  `;

  return (
    <>
    {eventbook && <EventSubmitModal open={eventbook} show={setEventBook} />}
      <Box
        height={{ md: "95vh", sm: "90vh", xs: "85vh" }}
        sx={{
          transition: "background-image 1s ease-in-out",
          background: `linear-gradient(rgba(0, 0, 255, 0.5), rgba(0, 0, 255, 0.5)), url(${`${API_URL}api/v1/image/${data.images[0]}`})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          position: "relative",
          opacity: fade ? 1 : 0, // Fade effect
          transition: "opacity 0.5s ease-in-out",
        }}
      >
        <Typography
          fontWeight={800}
          width={"70%"}
          fontSize={{ md: "7vw", xs: "10vw" }}
          color={"white"}
        >
          {data?.name?.split(" ")[0]}
          <br />
          <Typography
            ml={{ md: "30%", xs: "10%" }}
            fontWeight={800}
            fontSize={{ md: "7vw", xs: "10vw" }}
            color={"white"}
          >
            {data?.name?.split(" ")[1]}
          </Typography>
        </Typography>
        <Box
          display={"flex"}
          gap={2}
          sx={{ position: "absolute", top: "50%", left: "14%" }}
        >
          <Box
            sx={{
              [themes.breakpoints.down("sm")]: {
                display: { xs: "none", sm: "block" }, // Background color on small screens
              },
              width: "20vw",
              height: { lg: "30vh", sm: "18vh", md: "20vh", xl: "32vh" },
            }}
          >
            <img
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "15px",
              }}
              src={`${API_URL}api/v1/image/${data.images[0]}`}
            />
          </Box>
          <Box ml={1} display={"flex"} alignItems={"center"} gap={2} mt={"22%"}>
            <Box display={"flex"} flexDirection={"column"} gap={"5px"}>
              <Box display={"flex"} alignItems={"center"} gap={"5px"}>
                <CalendarMonthIcon sx={{ color: "white" }} fontSize="small" />
                <Typography
                  fontSize={{ md: "17px", xs: "15px" }}
                  fontWeight={700}
                  color={"white"}
                >
                  {formatDate(data?.startDate)} at
                </Typography>
                <Typography
                  color={"white"}
                  fontSize={{ xs: "12px", sm: "14px", md: "16px" }}
                  fontWeight={400}
                >
                  {data?.startTime}
                </Typography>
              </Box>
              <Box display={"flex"} justifyContent={"start"} gap={"5px"}>
                <LocationOnIcon fontSize="small" sx={{ color: "white" }} />
                <Typography color={"white"}>{data?.location}</Typography>
              </Box>
            </Box>
            <Button
             onClick={() => setEventBook(true)}
              variant="contained"
              endIcon={
                <KeyboardDoubleArrowRightIcon
                  sx={{ background: "#FF8126", borderRadius: "50%", p: "2px" }}
                />
              }
              disableElevation
              sx={{
                textTransform: "none",
                border: "3px solid #FF8126",
                borderRadius: 3,
                background: "transparent",
                color: "white",
                fontSize: { sm: "16px", xs: "12px" },
                height: { xs: "50px" },
                mr: 3,
              }}
            >
              Book Now
            </Button>
          </Box>
        </Box>
        <Box
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          gap={"5px"}
          left={{ md: 25, sm: 20, xs: 0 }}
          position={"absolute"}
        >
          {eventsData.map((item, index) => (
            <Button
              key={index}
              onClick={() => handleSelectSlide(index)}
              sx={{
                width: "10px",
                height: "10px",
              }}
            >
              <Box
                sx={{
                  width: { md: "10px", xs: "5px" },
                  height: { md: "10px", xs: "5px" },
                  borderRadius: "30%",
                  backgroundColor:
                    currentSlide === index ? "#FF8126" : "#ffffff",
                }}
              />
            </Button>
          ))}
        </Box>
        <Box
          sx={{
            background: "transparent",
            position: "absolute",
            bottom: 0,
            overflow: "hidden", // Hides anything outside the box
            whiteSpace: "nowrap", // Ensures the text is in a single line
            width: "100%",
            height: "30px",
          }}
        >
          <Typography
            component="div"
            sx={{
              // display: "inline-block",
              animation: "scroll-left 30s linear infinite",
              color: "white",
            }}
          >
            Latest News: Example of a moving news ticker running smoothly across
            the screen. Check out more updates! Latest News: Example of a moving
            news ticker running smoothly across the screen. Check out more
            updates! Latest News: Example of a moving news ticker running
            smoothly across the screen. Check out more updates! Latest News:
            Example of a moving news ticker running smoothly across the screen.
            Check out more updates! Latest News: Example of a moving news ticker
            running smoothly across the screen. Check out more updates! Latest
            News: Example of a moving news ticker running smoothly across the
            screen. Check out more updates! Latest News: Example of a moving
            news ticker running smoothly across the screen. Check out more
            updates! Latest News: Example of a moving news ticker running
            smoothly across the screen. Check out more updates! Latest News:
            Example of a moving news ticker running smoothly across the screen.
            Check out more updates! Latest News: Example of a moving news ticker
            running smoothly across the screen. Check out more updates! Latest
            News: Example of a moving news ticker running smoothly across the
            screen. Check out more updates! Latest News: Example of a moving
            news ticker running smoothly across the screen. Check out more
            updates! Latest News: Example of a moving news ticker running
            smoothly across the screen. Check out more updates! Latest News:
            Example of a moving news ticker running smoothly across the screen.
            Check out more updates! Latest News: Example of a moving news ticker
            running smoothly across the screen. Check out more updates!
            {/* Repeat the text enough times to ensure it covers the gap */}
          </Typography>
        </Box>
        <style>{scrollingTextStyles}</style>
      </Box>
    </>
  );
}

export default Slider;
