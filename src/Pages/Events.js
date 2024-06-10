import { Box, Button, Grid, IconButton, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import UpcomingEvents from "../Components/UpcomingEvents";
import { keyframes } from "@emotion/react";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import EventCard from "../Components/EventCard";
import { eventService } from "../Services/EventService";

const eventData = [
  {
    category: "Category One",
    data: [
      {
        name: "School Event",
        image:
          "https://s3-alpha-sig.figma.com/img/7a24/ebc8/d55ac8f594539fa041632fb6a3ae0441?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GtxbA3trlTeK~cLlGOS5sTo9l3kd3wpjy77~ljTwzC1RdbJQayb14SWCDLBNjPVJZMALpYlluXKVPayk5lcy2qrn8tNu-Wm1fY76Wei4BDo5trx0w8v2hEUdgZUNWS~QfFDQ995Ke2EMn-1hRjIir62k9jIkTJj0PJL5tdVh~La-8ZXnxASu~-NtHRS2ydCJg4IT-FXnj0PT5FIv3C6t6KCPSwNqgFZnBIXH4hdJRc0gQnnzdhmVKO-u2lKT3TIyy-rxfuR2iarM3yWs8cDidSvfmq3EwsHDZbjAcjANf4KkvSIwkRlOcNAjLnkb0GrpjQNegrzLr~nBCEAZKK24aQ__",
        date: "12/ 04/ 2015",
      },
      {
        name: "School Event",
        image:
          "https://s3-alpha-sig.figma.com/img/2172/54a8/d8fe46ece70e41ff2ca794620ed8c853?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=M7qsyTuZb4bKuHprW2SkEfyt2d9kxtkuVQSQjbNREjlA~HDxeGi8JLTarqkYW6GyNo8VOYD~HXuL41B8Qy6YIf9VCvD0aj6~bGeIBGLAPovjPWCKczR7zfpTesYUGGIcHfK43zhhzRjSvI-yAzHf1yJm6zTtCpahdr-0nXu5LI8gsITYgSS6~3Oi~L2WfjO7Bw5yRh4hqHoa1nB03cFlPIyM3z6eaaY2EobgbeltrrOSFEp9YJcAQuvuxVNqBIzmfPGJpxeN8DiTOBqFaxoOYYzmsai4vyDxUazyRNQH2hCxryDarJj4KYy98SKyG1vJZ1a5EM5V1RpI0OR78IdzKA__",
        date: "12/ 04/ 2015",
      },
      {
        name: "School Event",
        image:
          "https://s3-alpha-sig.figma.com/img/288a/30db/32b0aa2060404a1926084522255fc726?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VOTFo-0BtOHTblSp8RGndL-Vw2W57bwlkzRKlWD8OMnEVIXu5iXc46FXsSS3HQaHRpKcJTgQ404290YfrTytQgBGnt3pClYXjHxkCRFWU6n7LGLtIABLtvSJqT8pyxhbk80hedpGviF0DQSotEkprp2KFVKut0kADsxST4xX3JSmgXKwfcYMmFgYfq-afpYQX~c4mG2BCS2kOC4e5R39GRxKWF9sPKHFQavDBDycnuJZcH9w21vnOtu7oPUPNYTWc9P5ewDR2l2quSOJClheClqB1dizXf-MLAcBeBoLwYEmgfqlZ5Fcuu-ZWwa1sPzTbbr-d8yVfcMk0BllPBN5uA__",
        date: "12/ 04/ 2015",
      },
      {
        name: "School Event",
        image:
          "https://s3-alpha-sig.figma.com/img/7a24/ebc8/d55ac8f594539fa041632fb6a3ae0441?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GtxbA3trlTeK~cLlGOS5sTo9l3kd3wpjy77~ljTwzC1RdbJQayb14SWCDLBNjPVJZMALpYlluXKVPayk5lcy2qrn8tNu-Wm1fY76Wei4BDo5trx0w8v2hEUdgZUNWS~QfFDQ995Ke2EMn-1hRjIir62k9jIkTJj0PJL5tdVh~La-8ZXnxASu~-NtHRS2ydCJg4IT-FXnj0PT5FIv3C6t6KCPSwNqgFZnBIXH4hdJRc0gQnnzdhmVKO-u2lKT3TIyy-rxfuR2iarM3yWs8cDidSvfmq3EwsHDZbjAcjANf4KkvSIwkRlOcNAjLnkb0GrpjQNegrzLr~nBCEAZKK24aQ__",
        date: "12/ 04/ 2015",
      },
      {
        name: "School Event",
        image:
          "https://s3-alpha-sig.figma.com/img/7a24/ebc8/d55ac8f594539fa041632fb6a3ae0441?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GtxbA3trlTeK~cLlGOS5sTo9l3kd3wpjy77~ljTwzC1RdbJQayb14SWCDLBNjPVJZMALpYlluXKVPayk5lcy2qrn8tNu-Wm1fY76Wei4BDo5trx0w8v2hEUdgZUNWS~QfFDQ995Ke2EMn-1hRjIir62k9jIkTJj0PJL5tdVh~La-8ZXnxASu~-NtHRS2ydCJg4IT-FXnj0PT5FIv3C6t6KCPSwNqgFZnBIXH4hdJRc0gQnnzdhmVKO-u2lKT3TIyy-rxfuR2iarM3yWs8cDidSvfmq3EwsHDZbjAcjANf4KkvSIwkRlOcNAjLnkb0GrpjQNegrzLr~nBCEAZKK24aQ__",
        date: "12/ 04/ 2015",
      },
      {
        name: "School Event",
        image:
          "https://s3-alpha-sig.figma.com/img/2172/54a8/d8fe46ece70e41ff2ca794620ed8c853?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=M7qsyTuZb4bKuHprW2SkEfyt2d9kxtkuVQSQjbNREjlA~HDxeGi8JLTarqkYW6GyNo8VOYD~HXuL41B8Qy6YIf9VCvD0aj6~bGeIBGLAPovjPWCKczR7zfpTesYUGGIcHfK43zhhzRjSvI-yAzHf1yJm6zTtCpahdr-0nXu5LI8gsITYgSS6~3Oi~L2WfjO7Bw5yRh4hqHoa1nB03cFlPIyM3z6eaaY2EobgbeltrrOSFEp9YJcAQuvuxVNqBIzmfPGJpxeN8DiTOBqFaxoOYYzmsai4vyDxUazyRNQH2hCxryDarJj4KYy98SKyG1vJZ1a5EM5V1RpI0OR78IdzKA__",
        date: "12/ 04/ 2015",
      },
      {
        name: "School Event",
        image:
          "https://s3-alpha-sig.figma.com/img/288a/30db/32b0aa2060404a1926084522255fc726?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VOTFo-0BtOHTblSp8RGndL-Vw2W57bwlkzRKlWD8OMnEVIXu5iXc46FXsSS3HQaHRpKcJTgQ404290YfrTytQgBGnt3pClYXjHxkCRFWU6n7LGLtIABLtvSJqT8pyxhbk80hedpGviF0DQSotEkprp2KFVKut0kADsxST4xX3JSmgXKwfcYMmFgYfq-afpYQX~c4mG2BCS2kOC4e5R39GRxKWF9sPKHFQavDBDycnuJZcH9w21vnOtu7oPUPNYTWc9P5ewDR2l2quSOJClheClqB1dizXf-MLAcBeBoLwYEmgfqlZ5Fcuu-ZWwa1sPzTbbr-d8yVfcMk0BllPBN5uA__",
        date: "12/ 04/ 2015",
      },
      {
        name: "School Event",
        image:
          "https://s3-alpha-sig.figma.com/img/7a24/ebc8/d55ac8f594539fa041632fb6a3ae0441?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GtxbA3trlTeK~cLlGOS5sTo9l3kd3wpjy77~ljTwzC1RdbJQayb14SWCDLBNjPVJZMALpYlluXKVPayk5lcy2qrn8tNu-Wm1fY76Wei4BDo5trx0w8v2hEUdgZUNWS~QfFDQ995Ke2EMn-1hRjIir62k9jIkTJj0PJL5tdVh~La-8ZXnxASu~-NtHRS2ydCJg4IT-FXnj0PT5FIv3C6t6KCPSwNqgFZnBIXH4hdJRc0gQnnzdhmVKO-u2lKT3TIyy-rxfuR2iarM3yWs8cDidSvfmq3EwsHDZbjAcjANf4KkvSIwkRlOcNAjLnkb0GrpjQNegrzLr~nBCEAZKK24aQ__",
        date: "12/ 04/ 2015",
      },
    ],
  },
  {
    category: "Category Two",
    data: [
      {
        name: "School Event",
        image:
          "https://s3-alpha-sig.figma.com/img/7a24/ebc8/d55ac8f594539fa041632fb6a3ae0441?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GtxbA3trlTeK~cLlGOS5sTo9l3kd3wpjy77~ljTwzC1RdbJQayb14SWCDLBNjPVJZMALpYlluXKVPayk5lcy2qrn8tNu-Wm1fY76Wei4BDo5trx0w8v2hEUdgZUNWS~QfFDQ995Ke2EMn-1hRjIir62k9jIkTJj0PJL5tdVh~La-8ZXnxASu~-NtHRS2ydCJg4IT-FXnj0PT5FIv3C6t6KCPSwNqgFZnBIXH4hdJRc0gQnnzdhmVKO-u2lKT3TIyy-rxfuR2iarM3yWs8cDidSvfmq3EwsHDZbjAcjANf4KkvSIwkRlOcNAjLnkb0GrpjQNegrzLr~nBCEAZKK24aQ__",
        date: "12/ 04/ 2015",
      },
      {
        name: "School Event",
        image:
          "https://s3-alpha-sig.figma.com/img/2172/54a8/d8fe46ece70e41ff2ca794620ed8c853?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=M7qsyTuZb4bKuHprW2SkEfyt2d9kxtkuVQSQjbNREjlA~HDxeGi8JLTarqkYW6GyNo8VOYD~HXuL41B8Qy6YIf9VCvD0aj6~bGeIBGLAPovjPWCKczR7zfpTesYUGGIcHfK43zhhzRjSvI-yAzHf1yJm6zTtCpahdr-0nXu5LI8gsITYgSS6~3Oi~L2WfjO7Bw5yRh4hqHoa1nB03cFlPIyM3z6eaaY2EobgbeltrrOSFEp9YJcAQuvuxVNqBIzmfPGJpxeN8DiTOBqFaxoOYYzmsai4vyDxUazyRNQH2hCxryDarJj4KYy98SKyG1vJZ1a5EM5V1RpI0OR78IdzKA__",
        date: "12/ 04/ 2015",
      },
      {
        name: "School Event",
        image:
          "https://s3-alpha-sig.figma.com/img/288a/30db/32b0aa2060404a1926084522255fc726?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VOTFo-0BtOHTblSp8RGndL-Vw2W57bwlkzRKlWD8OMnEVIXu5iXc46FXsSS3HQaHRpKcJTgQ404290YfrTytQgBGnt3pClYXjHxkCRFWU6n7LGLtIABLtvSJqT8pyxhbk80hedpGviF0DQSotEkprp2KFVKut0kADsxST4xX3JSmgXKwfcYMmFgYfq-afpYQX~c4mG2BCS2kOC4e5R39GRxKWF9sPKHFQavDBDycnuJZcH9w21vnOtu7oPUPNYTWc9P5ewDR2l2quSOJClheClqB1dizXf-MLAcBeBoLwYEmgfqlZ5Fcuu-ZWwa1sPzTbbr-d8yVfcMk0BllPBN5uA__",
        date: "12/ 04/ 2015",
      },
      {
        name: "School Event",
        image:
          "https://s3-alpha-sig.figma.com/img/7a24/ebc8/d55ac8f594539fa041632fb6a3ae0441?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GtxbA3trlTeK~cLlGOS5sTo9l3kd3wpjy77~ljTwzC1RdbJQayb14SWCDLBNjPVJZMALpYlluXKVPayk5lcy2qrn8tNu-Wm1fY76Wei4BDo5trx0w8v2hEUdgZUNWS~QfFDQ995Ke2EMn-1hRjIir62k9jIkTJj0PJL5tdVh~La-8ZXnxASu~-NtHRS2ydCJg4IT-FXnj0PT5FIv3C6t6KCPSwNqgFZnBIXH4hdJRc0gQnnzdhmVKO-u2lKT3TIyy-rxfuR2iarM3yWs8cDidSvfmq3EwsHDZbjAcjANf4KkvSIwkRlOcNAjLnkb0GrpjQNegrzLr~nBCEAZKK24aQ__",
        date: "12/ 04/ 2015",
      },
      {
        name: "School Event",
        image:
          "https://s3-alpha-sig.figma.com/img/7a24/ebc8/d55ac8f594539fa041632fb6a3ae0441?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GtxbA3trlTeK~cLlGOS5sTo9l3kd3wpjy77~ljTwzC1RdbJQayb14SWCDLBNjPVJZMALpYlluXKVPayk5lcy2qrn8tNu-Wm1fY76Wei4BDo5trx0w8v2hEUdgZUNWS~QfFDQ995Ke2EMn-1hRjIir62k9jIkTJj0PJL5tdVh~La-8ZXnxASu~-NtHRS2ydCJg4IT-FXnj0PT5FIv3C6t6KCPSwNqgFZnBIXH4hdJRc0gQnnzdhmVKO-u2lKT3TIyy-rxfuR2iarM3yWs8cDidSvfmq3EwsHDZbjAcjANf4KkvSIwkRlOcNAjLnkb0GrpjQNegrzLr~nBCEAZKK24aQ__",
        date: "12/ 04/ 2015",
      },
      {
        name: "School Event",
        image:
          "https://s3-alpha-sig.figma.com/img/2172/54a8/d8fe46ece70e41ff2ca794620ed8c853?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=M7qsyTuZb4bKuHprW2SkEfyt2d9kxtkuVQSQjbNREjlA~HDxeGi8JLTarqkYW6GyNo8VOYD~HXuL41B8Qy6YIf9VCvD0aj6~bGeIBGLAPovjPWCKczR7zfpTesYUGGIcHfK43zhhzRjSvI-yAzHf1yJm6zTtCpahdr-0nXu5LI8gsITYgSS6~3Oi~L2WfjO7Bw5yRh4hqHoa1nB03cFlPIyM3z6eaaY2EobgbeltrrOSFEp9YJcAQuvuxVNqBIzmfPGJpxeN8DiTOBqFaxoOYYzmsai4vyDxUazyRNQH2hCxryDarJj4KYy98SKyG1vJZ1a5EM5V1RpI0OR78IdzKA__",
        date: "12/ 04/ 2015",
      },
      {
        name: "School Event",
        image:
          "https://s3-alpha-sig.figma.com/img/288a/30db/32b0aa2060404a1926084522255fc726?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VOTFo-0BtOHTblSp8RGndL-Vw2W57bwlkzRKlWD8OMnEVIXu5iXc46FXsSS3HQaHRpKcJTgQ404290YfrTytQgBGnt3pClYXjHxkCRFWU6n7LGLtIABLtvSJqT8pyxhbk80hedpGviF0DQSotEkprp2KFVKut0kADsxST4xX3JSmgXKwfcYMmFgYfq-afpYQX~c4mG2BCS2kOC4e5R39GRxKWF9sPKHFQavDBDycnuJZcH9w21vnOtu7oPUPNYTWc9P5ewDR2l2quSOJClheClqB1dizXf-MLAcBeBoLwYEmgfqlZ5Fcuu-ZWwa1sPzTbbr-d8yVfcMk0BllPBN5uA__",
        date: "12/ 04/ 2015",
      },
      {
        name: "School Event",
        image:
          "https://s3-alpha-sig.figma.com/img/7a24/ebc8/d55ac8f594539fa041632fb6a3ae0441?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GtxbA3trlTeK~cLlGOS5sTo9l3kd3wpjy77~ljTwzC1RdbJQayb14SWCDLBNjPVJZMALpYlluXKVPayk5lcy2qrn8tNu-Wm1fY76Wei4BDo5trx0w8v2hEUdgZUNWS~QfFDQ995Ke2EMn-1hRjIir62k9jIkTJj0PJL5tdVh~La-8ZXnxASu~-NtHRS2ydCJg4IT-FXnj0PT5FIv3C6t6KCPSwNqgFZnBIXH4hdJRc0gQnnzdhmVKO-u2lKT3TIyy-rxfuR2iarM3yWs8cDidSvfmq3EwsHDZbjAcjANf4KkvSIwkRlOcNAjLnkb0GrpjQNegrzLr~nBCEAZKK24aQ__",
        date: "12/ 04/ 2015",
      },
    ],
  },
];

function Events() {
  const [selectedEvent, setSelectedEvent] = useState("upcoming");
  const [eventsData, setEventsData] = useState([]);
  const scrollRefs = useRef(eventData.map(() => React.createRef()));
  const handleScroll = (direction, index) => {
    const container = scrollRefs.current[index].current;
    if (container) {
      const cardWidth = container.querySelector("[data-card]").offsetWidth;
      const scrollAmount = direction === "left" ? -cardWidth : cardWidth;
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const getEvents = async () => {
      try {
        const result = await eventService.getEvents();
        console.log(result.data);
        if (result.data.success === true) {
          console.log(result.data.data);
          setEventsData(result.data.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getEvents();
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
        }}
      >
        <Box
          width="50%"
          p={0.5}
          bgcolor={selectedEvent === "upcoming" ? "#FF8126" : "#1976d2"}
          borderRadius={1}
          onClick={() => setSelectedEvent("upcoming")}
        >
          <Typography
            textAlign="center"
            color={"white"}
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
          bgcolor={selectedEvent === "previous" ? "#FF8126" : "#1976d2"}
          borderRadius={1}
          onClick={() => setSelectedEvent("previous")}
        >
          <Typography
            textAlign="center"
            color={"white"}
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
        height={{ md: "250px" }}
        pt={5}
        sx={{
          background:
            "url(https://img.freepik.com/free-vector/gradient-blue-background_23-2149322706.jpg?size=626&ext=jpg&ga=GA1.1.563629714.1713778942&semt=ais_user)",
        }}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Typography color={"white"} fontWeight={700} fontSize={"30px"}>
          Events
        </Typography>
      </Box>
      {eventData.map((category, inde) => (
        <Grid key={inde} container borderRadius={3} mt={10}>
          {/* <Title title={"Experiential Learning"} /> */}

          <Box
            position="relative"
            maxWidth={"100%"}
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
              justifyContent={{ xs: "start", sm: "center" }}
              overflow={"auto"}
              width={{
                xs: "90%",
                md: "70%",
              }}
              sx={{ scrollbarWidth: "none" }}
              ref={scrollRefs.current[inde]}
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
                    <EventCard data={data} />
                  </Box>
                </Box>
              ))}
            </Box>

            {/* Navigation buttons overlay */}
            <IconButton
              onClick={() => handleScroll("left", inde)}
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
              onClick={() => handleScroll("right", inde)}
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
