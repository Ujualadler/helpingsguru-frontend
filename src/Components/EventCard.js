import { Box, Button, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import EventDetails from "./EventDetails";
import EventSubmitModal from "./EventSubmitForm";
import { API_URL, formatDate } from "../Services/url";

function EventCard({ data, type }) {
  const [eventDetails, setEventDetails] = useState(false);
  const [eventbook, setEventBook] = useState(false);

  return (
    <>
      {eventDetails && (
        <EventDetails
          data={data}
          open={eventDetails}
          type={type}
          show={setEventDetails}
        />
      )}
      {eventbook && (
        <EventSubmitModal data={data} open={eventbook} show={setEventBook} />
      )}
      <Box
        width={"100%"}
        onClick={() => setEventDetails(true)}
        sx={{
          cursor: "pointer",
          "&:hover": {
            transform: "scale(1.05)",
            transition: "all 0.5s ease-in-out",
          },
        }}
      >
        <Box borderRadius={2} position={"relative"} overflow={"hidden"}>
          <img
            src={`${API_URL}api/v1/image/${data.images[0]}`}
            style={{
              width: "100%",
              height: "35vh",
              borderRadius: "8px",
              filter: "brightness(80%)",
              objectFit: "cover",
              background:'linear-gradient(to right, #6D7BFE, #3034BB)'
            }}
            loading="lazy"
          />
          <Typography
            position={"absolute"}
            top={7}
            left={0}
            color={"white"}
            sx={{
              background:
                "linear-gradient(145deg, rgba(0, 0, 128, 0.9), rgba(0, 0, 255, 0.7))", // Gradient from navy to lighter blue
              borderRadius: 2,
              p: 1,
              mx: 1,
              fontSize: "13px",
              fontWeight: 600,
              //   width: "100%",
            }}
          >
            {data?.name.toUpperCase()}
          </Typography>
          <Typography
            position={"absolute"}
            bottom={0}
            width={"100%"}
            color={"white"}
            sx={{
              background:
                "linear-gradient(145deg, rgba(0, 0, 128, 0.8), rgba(0, 0, 255, 0.6))", // Gradient from navy to transparent blue
              width: "100%",
              textAlign: "center",
              fontSize: "13px",
              fontWeight: 600,
              p: 1,
            }}
          >
            {formatDate(data?.startDate)}
          </Typography>
        </Box>
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
          mt={1}
          gap={"4px"}
        >
          <Button
            onClick={() => setEventDetails(true)}
            sx={{
              textTransform: "none",
              borderRadius: 2,
              width: type !== "previous" ? "50%" : "100%",
              color: "black",
              fontSize: { xs: "12px", xl: "13px" },
            }}
          >
            Know More
          </Button>
          {type !== "previous" && (
            <Button
              variant="contained"
              onClick={(e) => {
                e.stopPropagation();
                setEventBook(true);
              }}
              sx={{
                textTransform: "none",
                borderRadius: 2,
                width: "50%",
                fontSize: { xs: "10px", xl: "12px" },
                background: "#FF8126",
                color: "white",
              }}
            >
              Book Now
            </Button>
          )}
        </Box>
      </Box>
    </>
  );
}

export default EventCard;
