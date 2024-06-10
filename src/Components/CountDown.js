import { Box, Button, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import EventSubmitModal from "./EventSubmitForm";
import { eventService } from "../Services/EventService";
import { API_URL, formatDate } from "../Services/url";

function CountDown() {
  const [days, setDays] = useState("00");
  const [hours, setHours] = useState("00");
  const [minutes, setMinutes] = useState("00");
  const [seconds, setSeconds] = useState("00");
  const [eventbook, setEventBook] = React.useState(false);
  const [eventsData, setEventsData] = useState([]);

  useEffect(() => {
    const getEvents = async () => {
      try {
        const result = await eventService.getUpcomingEvents();
        console.log(result.data);
        if (result.data.success === true) {
          console.log(result.data.data);
          setEventsData(result.data.data.slice(0, 1));
        }
      } catch (error) {
        console.log(error);
      }
    };
    getEvents();
  }, []);

  useEffect(() => {
    if (eventsData.length > 0) {
      console.log(eventsData[0]?.endDate);
      const targetDate = new Date(eventsData[0]?.endDate);

      const timer = setInterval(() => {
        const now = new Date();
        const distance = targetDate - now;

        if (distance < 0) {
          clearInterval(timer);
          setDays("00");
          setHours("00");
          setMinutes("00");
          setSeconds("00");
          return;
        }

        setDays(
          Math.floor(distance / (1000 * 60 * 60 * 24))
            .toString()
            .padStart(2, "0")
        );
        setHours(
          Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
            .toString()
            .padStart(2, "0")
        );
        setMinutes(
          Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
            .toString()
            .padStart(2, "0")
        );
        setSeconds(
          Math.floor((distance % (1000 * 60)) / 1000)
            .toString()
            .padStart(2, "0")
        );
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [eventsData]);

  return (
    <>
      {eventbook && (
        <EventSubmitModal
          data={eventsData.length > 0 && eventsData[0]}
          open={eventbook}
          show={setEventBook}
        />
      )}
      <Box
        mt={10}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        {eventsData.length > 0 &&
          eventsData.map((data) => (
            <Grid
              container
              width={{ md: "75%", xs: "98%" }}
              pb={3}
              display={"flex"}
              justifyContent={"center"}
              borderRadius={"40px"}
              sx={{ boxShadow: "0px 15px 25px 0px #0000001C" }}
            >
              <Box
                container
                display={"flex"}
                alignItems={"center"}
                justifyContent={"space-around"}
                sx={{
                  background: "linear-gradient(to right, #6D7BFE, #3034BB)",
                }}
                width={{ md: "70%", xs: "95%" }}
                height={"110px"}
                borderRadius={"30px"}
              >
                <Typography
                  px={2}
                  color={"white"}
                  fontWeight={700}
                  fontSize={{ xs: "1.2rem", md: "2rem" }}
                >
                  Count Down
                </Typography>
                {[
                  { value: days, label: "Days" },
                  { value: hours, label: "Hours" },
                  { value: minutes, label: "Minutes" },
                  { value: seconds, label: "Seconds" },
                ].map((time, index) => (
                  <Box
                    key={index}
                    display={"flex"}
                    flexDirection={"column"}
                    alignItems={"center"}
                  >
                    <Typography
                      fontWeight={700}
                      fontSize={{ md: "1.7rem", xs: "1.1rem" }}
                      color={"white"}
                    >
                      {time.value}
                    </Typography>
                    <Typography
                      fontWeight={400}
                      fontSize={{ md: "1.1rem", xs: "0.7rem" }}
                      color={"white"}
                    >
                      {time.label}
                    </Typography>
                  </Box>
                ))}
              </Box>
              <Grid container mt={2} p={4}>
                <Grid
                  item
                  xs={12}
                  md={6}
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <Box
                    sx={{
                      width: { xs: "100%", md: "80%" },
                      height: "300px",
                      borderRadius: "20px",
                    }}
                  >
                    <img
                      style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: "20px",
                      }}
                      src={`${API_URL}api/v1/image/${data.images[0]}`}
                    />
                  </Box>
                </Grid>
                <Grid item xs={12} md={6} p={2}>
                  <Typography
                    color={"#100854"}
                    fontSize={"25px"}
                    fontWeight={700}
                  >
                    {data?.name}
                  </Typography>
                  <Typography
                    color={"#515151"}
                    fontSize={"17px"}
                    fontWeight={400}
                  >
                    {data?.description}
                  </Typography>
                  <Box display={"flex"} alignItems={"center"} gap={1} my={1}>
                    <Typography
                      fontSize={"17px"}
                      fontWeight={700}
                      color={"#100854"}
                    >
                      Location
                    </Typography>
                    <Typography
                      color={"#515151"}
                      fontSize={"17px"}
                      fontWeight={400}
                    >
                      {data?.location}
                    </Typography>
                  </Box>
                  <Box display={"flex"} alignItems={"center"} gap={1} my={1}>
                    <Typography
                      fontSize={"17px"}
                      fontWeight={700}
                      color={"#100854"}
                    >
                      Time
                    </Typography>
                    <Typography
                      color={"#515151"}
                      fontSize={"17px"}
                      fontWeight={400}
                    >
                      {data?.startTime} - {data.endTime}
                    </Typography>
                  </Box>
                  <Box display={"flex"} alignItems={"center"} gap={1} my={1}>
                    <Typography
                      fontSize={"17px"}
                      fontWeight={700}
                      color={"#100854"}
                    >
                      Date
                    </Typography>
                    <Typography
                      color={"#515151"}
                      fontSize={"17px"}
                      fontWeight={400}
                    >
                      {formatDate(data?.startDate)} -{" "}
                      {formatDate(data?.endDate)}
                    </Typography>
                  </Box>
                  <Button
                    variant="contained"
                    onClick={() => setEventBook(true)}
                    sx={{
                      textTransform: "none",
                      borderRadius: 2,
                      mt: 2,
                      px: 2,
                      background: "#FF8126",
                      color: "white",
                    }}
                  >
                    Book Now
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          ))}
      </Box>
    </>
  );
}

export default CountDown;
