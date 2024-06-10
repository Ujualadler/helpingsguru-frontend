import { Box, Button, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import EventCard from "./EventCard";
import EventSubmitModal from "./EventSubmitForm";
import { eventService } from "../Services/EventService";

function UpcomingEvents() {
  const [eventsData, setEventsData] = useState([]);

  useEffect(() => {
    const getEvents = async () => {
      try {
        const result = await eventService.getUpcomingEvents();
        console.log(result.data);
        if (result.data.success === true) {
          console.log(result.data.data);
          setEventsData(result.data.data.slice(0, 8));
        }
      } catch (error) {
        console.log(error);
      }
    };
    getEvents();
  }, []);

  return (
    <Box mt={5}>
      <Typography
        textAlign={"center"}
        fontWeight={800}
        fontSize={{ xs: "1.5rem", md: "2rem" }}
        color={"#100854"}
        mb={3}
      >
        Upcoming Events
      </Typography>

      <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
        <Grid container width={{ md: "70%", xs: "90%" }}>
          {eventsData.length > 0 &&
            eventsData.map((data, index) => (
              <Grid item md={4} lg={3} xs={12} sm={6} p={3}>
                <EventCard data={data} key={index} />
              </Grid>
            ))}
        </Grid>
      </Box>
    </Box>
  );
}

export default UpcomingEvents;
