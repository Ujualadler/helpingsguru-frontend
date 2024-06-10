import { Box, Button, Grid, IconButton, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { keyframes } from "@emotion/react";
import { magazineService } from "../Services/magazineService";
import { API_URL } from "../Services/url";

const eventData = [
    {
      name: "School Event",
      image:
        "https://s3-alpha-sig.figma.com/img/7a24/ebc8/d55ac8f594539fa041632fb6a3ae0441?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GtxbA3trlTeK~cLlGOS5sTo9l3kd3wpjy77~ljTwzC1RdbJQayb14SWCDLBNjPVJZMALpYlluXKVPayk5lcy2qrn8tNu-Wm1fY76Wei4BDo5trx0w8v2hEUdgZUNWS~QfFDQ995Ke2EMn-1hRjIir62k9jIkTJj0PJL5tdVh~La-8ZXnxASu~-NtHRS2ydCJg4IT-FXnj0PT5FIv3C6t6KCPSwNqgFZnBIXH4hdJRc0gQnnzdhmVKO-u2lKT3TIyy-rxfuR2iarM3yWs8cDidSvfmq3EwsHDZbjAcjANf4KkvSIwkRlOcNAjLnkb0GrpjQNegrzLr~nBCEAZKK24aQ__",
    },
    {
      name: "School Event",
      image:
        "https://s3-alpha-sig.figma.com/img/2172/54a8/d8fe46ece70e41ff2ca794620ed8c853?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=M7qsyTuZb4bKuHprW2SkEfyt2d9kxtkuVQSQjbNREjlA~HDxeGi8JLTarqkYW6GyNo8VOYD~HXuL41B8Qy6YIf9VCvD0aj6~bGeIBGLAPovjPWCKczR7zfpTesYUGGIcHfK43zhhzRjSvI-yAzHf1yJm6zTtCpahdr-0nXu5LI8gsITYgSS6~3Oi~L2WfjO7Bw5yRh4hqHoa1nB03cFlPIyM3z6eaaY2EobgbeltrrOSFEp9YJcAQuvuxVNqBIzmfPGJpxeN8DiTOBqFaxoOYYzmsai4vyDxUazyRNQH2hCxryDarJj4KYy98SKyG1vJZ1a5EM5V1RpI0OR78IdzKA__",
    },
    {
      name: "School Event",
      image:
        'https://s3-alpha-sig.figma.com/img/288a/30db/32b0aa2060404a1926084522255fc726?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VOTFo-0BtOHTblSp8RGndL-Vw2W57bwlkzRKlWD8OMnEVIXu5iXc46FXsSS3HQaHRpKcJTgQ404290YfrTytQgBGnt3pClYXjHxkCRFWU6n7LGLtIABLtvSJqT8pyxhbk80hedpGviF0DQSotEkprp2KFVKut0kADsxST4xX3JSmgXKwfcYMmFgYfq-afpYQX~c4mG2BCS2kOC4e5R39GRxKWF9sPKHFQavDBDycnuJZcH9w21vnOtu7oPUPNYTWc9P5ewDR2l2quSOJClheClqB1dizXf-MLAcBeBoLwYEmgfqlZ5Fcuu-ZWwa1sPzTbbr-d8yVfcMk0BllPBN5uA__',
    },
    {
      name: "School Event",
      image:
        "https://s3-alpha-sig.figma.com/img/7a24/ebc8/d55ac8f594539fa041632fb6a3ae0441?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GtxbA3trlTeK~cLlGOS5sTo9l3kd3wpjy77~ljTwzC1RdbJQayb14SWCDLBNjPVJZMALpYlluXKVPayk5lcy2qrn8tNu-Wm1fY76Wei4BDo5trx0w8v2hEUdgZUNWS~QfFDQ995Ke2EMn-1hRjIir62k9jIkTJj0PJL5tdVh~La-8ZXnxASu~-NtHRS2ydCJg4IT-FXnj0PT5FIv3C6t6KCPSwNqgFZnBIXH4hdJRc0gQnnzdhmVKO-u2lKT3TIyy-rxfuR2iarM3yWs8cDidSvfmq3EwsHDZbjAcjANf4KkvSIwkRlOcNAjLnkb0GrpjQNegrzLr~nBCEAZKK24aQ__",
    },
    {
      name: "School Event",
      image:
        "https://s3-alpha-sig.figma.com/img/7a24/ebc8/d55ac8f594539fa041632fb6a3ae0441?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GtxbA3trlTeK~cLlGOS5sTo9l3kd3wpjy77~ljTwzC1RdbJQayb14SWCDLBNjPVJZMALpYlluXKVPayk5lcy2qrn8tNu-Wm1fY76Wei4BDo5trx0w8v2hEUdgZUNWS~QfFDQ995Ke2EMn-1hRjIir62k9jIkTJj0PJL5tdVh~La-8ZXnxASu~-NtHRS2ydCJg4IT-FXnj0PT5FIv3C6t6KCPSwNqgFZnBIXH4hdJRc0gQnnzdhmVKO-u2lKT3TIyy-rxfuR2iarM3yWs8cDidSvfmq3EwsHDZbjAcjANf4KkvSIwkRlOcNAjLnkb0GrpjQNegrzLr~nBCEAZKK24aQ__",
    },
    {
      name: "School Event",
      image:
        "https://s3-alpha-sig.figma.com/img/2172/54a8/d8fe46ece70e41ff2ca794620ed8c853?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=M7qsyTuZb4bKuHprW2SkEfyt2d9kxtkuVQSQjbNREjlA~HDxeGi8JLTarqkYW6GyNo8VOYD~HXuL41B8Qy6YIf9VCvD0aj6~bGeIBGLAPovjPWCKczR7zfpTesYUGGIcHfK43zhhzRjSvI-yAzHf1yJm6zTtCpahdr-0nXu5LI8gsITYgSS6~3Oi~L2WfjO7Bw5yRh4hqHoa1nB03cFlPIyM3z6eaaY2EobgbeltrrOSFEp9YJcAQuvuxVNqBIzmfPGJpxeN8DiTOBqFaxoOYYzmsai4vyDxUazyRNQH2hCxryDarJj4KYy98SKyG1vJZ1a5EM5V1RpI0OR78IdzKA__",
    },
    {
      name: "School Event",
      image:
        'https://s3-alpha-sig.figma.com/img/288a/30db/32b0aa2060404a1926084522255fc726?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VOTFo-0BtOHTblSp8RGndL-Vw2W57bwlkzRKlWD8OMnEVIXu5iXc46FXsSS3HQaHRpKcJTgQ404290YfrTytQgBGnt3pClYXjHxkCRFWU6n7LGLtIABLtvSJqT8pyxhbk80hedpGviF0DQSotEkprp2KFVKut0kADsxST4xX3JSmgXKwfcYMmFgYfq-afpYQX~c4mG2BCS2kOC4e5R39GRxKWF9sPKHFQavDBDycnuJZcH9w21vnOtu7oPUPNYTWc9P5ewDR2l2quSOJClheClqB1dizXf-MLAcBeBoLwYEmgfqlZ5Fcuu-ZWwa1sPzTbbr-d8yVfcMk0BllPBN5uA__',
    },
    {
      name: "School Event",
      image:
        "https://s3-alpha-sig.figma.com/img/7a24/ebc8/d55ac8f594539fa041632fb6a3ae0441?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GtxbA3trlTeK~cLlGOS5sTo9l3kd3wpjy77~ljTwzC1RdbJQayb14SWCDLBNjPVJZMALpYlluXKVPayk5lcy2qrn8tNu-Wm1fY76Wei4BDo5trx0w8v2hEUdgZUNWS~QfFDQ995Ke2EMn-1hRjIir62k9jIkTJj0PJL5tdVh~La-8ZXnxASu~-NtHRS2ydCJg4IT-FXnj0PT5FIv3C6t6KCPSwNqgFZnBIXH4hdJRc0gQnnzdhmVKO-u2lKT3TIyy-rxfuR2iarM3yWs8cDidSvfmq3EwsHDZbjAcjANf4KkvSIwkRlOcNAjLnkb0GrpjQNegrzLr~nBCEAZKK24aQ__",
    },

  ];

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
                onClick={() => window.open(`${API_URL}api/v1/image/${data?.pdf}`, '_blank')}
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
              zIndex: 1500,
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
              zIndex: 1500,
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
