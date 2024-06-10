import { Box, Button, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import EventDetails from "./EventDetails";
import EventSubmitModal from "./EventSubmitForm";
import { API_URL, formatDate } from "../Services/url";

function EventCard({ data }) {
  const [eventDetails, setEventDetails] = useState(false);
  const [eventbook, setEventBook] = useState(false);

  return (
    <>
      {eventDetails && (
        <EventDetails data={data} open={eventDetails} show={setEventDetails} />
      )}
      {eventbook && <EventSubmitModal data={data} open={eventbook} show={setEventBook} />}
      <Box width={"100%"}>
        <Box borderRadius={4} position={"relative"} overflow={"hidden"}>
          <img
            src={`${API_URL}api/v1/image/${data.images[0]}`}
            style={{
              width: "100%",
              height: "35vh",
              borderRadius: "8px",
              filter: "brightness(80%)",
            }}
          />
          <Typography
            position={"absolute"}
            top={7}
            left={7}
            color={"white"}
            sx={{
              background:
                "linear-gradient(145deg, rgba(0, 0, 128, 0.9), rgba(0, 0, 255, 0.7))", // Gradient from navy to lighter blue
              borderRadius: 2,
              px: 1,
            }}
          >
            {data?.name}
          </Typography>
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
            {formatDate(data?.startDate)}
          </Typography>
        </Box>
        <Box display={"flex"} alignItems={"center"} mt={1} gap={"4px"}>
          <Button
            onClick={() => setEventDetails(true)}
            sx={{
              textTransform: "none",
              borderRadius: 2,
              width: "50%",
              color: "black",
            }}
          >
            Know More
          </Button>
          <Button
            onClick={() => setEventBook(true)}
            sx={{
              textTransform: "none",
              borderRadius: 2,
              width: "45%",
              background: "#FF8126",
              color: "white",
            }}
          >
            Book Now
          </Button>
        </Box>
      </Box>
    </>
  );
}

export default EventCard;
