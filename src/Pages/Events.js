import { Box, Button, Grid, IconButton, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import UpcomingEvents from "../Components/UpcomingEvents";
import { keyframes } from "@emotion/react";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import EventCard from "../Components/EventCard";
import { eventService } from "../Services/EventService";

const currentDate = new Date();

function Events() {
  const [selectedEvent, setSelectedEvent] = useState("upcoming");
  const [eventsData, setEventsData] = useState([]);
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [previousEvents, setPreviousEvents] = useState([]);
  const scrollRefs = useRef(new Map());

  const handleScroll = (direction, categoryId) => {
    console.log(categoryId);
    const container = scrollRefs.current.get(categoryId);
    if (container) {
      const cardWidth = container.querySelector("[data-card]").offsetWidth;
      const scrollAmount = direction === "left" ? -cardWidth : cardWidth;
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const assignRef = (element, category) => {
    if (element) {
      scrollRefs.current.set(category, element);
    }
  };

  useEffect(() => {
    const getEvents = async () => {
      try {
        const result = await eventService.getEvents();
        if (result.data.success === true) {
          const aggregatedData = result.data.data.reduce((acc, event) => {
            const categoryIndex = acc.findIndex(
              (item) => item.category === event.category
            );
            if (categoryIndex !== -1) {
              acc[categoryIndex].data.push(event);
            } else {
              acc.push({
                category: event.category,
                data: [event],
              });
            }
            return acc;
          }, []);

          const upcomingEvents = [];
          const previousEvents = [];

          aggregatedData.forEach((category) => {
            const upcoming = category.data.filter(
              (event) => new Date(event.startDate) >= currentDate
            );
            const previous = category.data.filter(
              (event) => new Date(event.startDate) < currentDate
            );

            if (upcoming.length) {
              upcomingEvents.push({
                category: category.category,
                data: upcoming,
              });
            }
            if (previous.length) {
              previousEvents.push({
                category: category.category,
                data: previous,
              });
            }
          });

          setUpcomingEvents(upcomingEvents);
          setPreviousEvents(previousEvents);

          if (selectedEvent === "upcoming") {
            setEventsData(upcomingEvents);
          } else {
            setEventsData(previousEvents);
          }
        }
      } catch (error) {
        console.error(error);
      }
    };

    getEvents();
  }, []);

  useEffect(() => {
    if (selectedEvent === "upcoming") {
      setEventsData(upcomingEvents);
    } else if (selectedEvent === "previous") {
      setEventsData(previousEvents);
    }
  }, [selectedEvent, upcomingEvents, previousEvents]);

  const fadeInAnimation = keyframes`
    0% {
      transform: scale(1.5);
    }
    100% {
      transform: scale(1);
    }
  `;

  return (
    <Box position={"relative"} minHeight={"100vh"}>
      <Box
        position="fixed"
        sx={{
          transform: "translateX(-50%)",
          borderRadius: 3,
          width: { md: "30%", sm: "60%", xs: "80%" },
          bgcolor: "#1976d2",
          bottom: 10,
          left: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: "400",
          p: 1,
          height: "40px",
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Box
          width="50%"
          p={0.5}
          bgcolor={selectedEvent === "upcoming" ? "#FFF" : "#1976d2"}
          borderRadius={1}
          onClick={() => setSelectedEvent("upcoming")}
        >
          <Typography
            textAlign="center"
            color={selectedEvent === "upcoming" ? "#1976d2" : "#FFF"}
            fontWeight={600}
            sx={{
              cursor: "pointer",
            }}
          >
            Upcoming Events
          </Typography>
        </Box>
        <Box
          width="50%"
          p={0.5}
          bgcolor={selectedEvent === "previous" ? "#FFF" : "#1976d2"}
          borderRadius={1}
          onClick={() => setSelectedEvent("previous")}
        >
          <Typography
            textAlign="center"
            color={selectedEvent === "previous" ? "#1976d2" : "#FFF"}
            fontWeight={600}
            sx={{
              cursor: "pointer",
            }}
          >
            Previous Events
          </Typography>
        </Box>
      </Box>

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
          mt={2}
          color={"white"}
          fontWeight={700}
          fontSize={{ md: "30px", xs: "20px" }}
        >
          Events
        </Typography>
      </Box>
      {eventsData.length > 0 &&
        eventsData.map((category, inde) => (
          <Grid key={inde} container borderRadius={3} mt={10}>
            <Box
              position="relative"
              width={"100%"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              flexDirection={"column"}
            >
              <Typography
                textAlign={"center"}
                fontWeight={800}
                fontSize={{ xs: "1.5rem", md: "1.5rem" }}
                color={"#100854"}
                mb={3}
              >
                {category.category}
              </Typography>
              <Box
                display={"flex"}
                justifyContent={{ xs: "start", sm: "start" }}
                overflow={"auto"}
                width={{
                  xs: "90%",
                  md: "70%",
                }}
                sx={{ scrollbarWidth: "none" }}
                ref={(el) => assignRef(el, category.category)}
              >
                {category.data.map((data, index) => (
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
                    <Box width={"80%"}>
                      <EventCard data={data} type={selectedEvent} />
                    </Box>
                  </Box>
                ))}
              </Box>

              <IconButton
                onClick={() => handleScroll("left", category.category)}
                size="small"
                sx={{
                  position: "absolute",
                  left: 10,
                  top: "50%",
                  transform: "translateY(-50%)",
                  zIndex: 1,
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
                onClick={() => handleScroll("right", category.category)}
                size="small"
                sx={{
                  position: "absolute",
                  right: 10,
                  top: "50%",
                  transform: "translateY(-50%)",
                  zIndex: 1,
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
        ))}
    </Box>
  );
}

export default Events;
