import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";

function AboutUs() {
  const videoId = "dQw4w9WgXcQ"; // Example YouTube video ID
  const url = `https://www.youtube.com/embed/${videoId}`;
  const aboutusData = [
    {
      title: "No of Schools",
      img: "https://img.freepik.com/free-vector/high-school-concept-illustration_114360-8499.jpg?t=st=1717833954~exp=1717837554~hmac=5e641d9e3369c00e3c584a2709a235c7124746f016ee04ab49847fae76405b7c&w=740",
      count: "15",
    },
    {
      title: "No of Events",
      img: "https://img.freepik.com/free-vector/rock-band-concept-illustration_114360-2815.jpg?t=st=1717834065~exp=1717837665~hmac=beb858cc70b1976c32fc3be87bd70008fcd540b4c471886a311b2068544050b3&w=996",
      count: "200",
    },
    {
      title: "No of Conference",
      img: "https://img.freepik.com/free-vector/seminar-concept-illustration_114360-7660.jpg?t=st=1717834186~exp=1717837786~hmac=79b8b8a2af27741203bdca1820994e76347352a2e9e833ddb8a6241da2d9f6a0&w=996",
      count: "27",
    },
  ];
  return (
    <Box>
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
        <Typography color={"white"} fontWeight={700} fontSize={"30px"}>
          About Us
        </Typography>
      </Box>
      <Box
        // height={"150px"}
        pt={{ md: 10, xs: 0 }}
        pb={6}
      >
        <Box
          // py={20}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          width={"100%"}
          flexDirection={{ xs: "column", md: "row" }}
          gap={3}
        >
          <Box
            sx={{
              width: { md: "180px", xs: "0px" },
              height: { md: "200px", xs: "0px" },
            }}
          >
            <img
              style={{
                width: "100%",
                height: "100%",
                background: "white",
                objectFit: "contain",
              }}
              loading="lazy"
              src="/images/dotblue.webp"
            />
          </Box>
          <Box
            sx={{
              position: "relative",
              width: { xs: "98%", md: "70%" },
              //   m: 4,
              paddingBottom: { md: "30%", xs: "70%" }, // 16:9 aspect ratio
              height: 0,
              overflow: "hidden",
              borderRadius: { md: "20px", xs: "0" },
            }}
          >
            <iframe
              src={url}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Embedded YouTube Video"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
              }}
            ></iframe>
          </Box>
        </Box>
      </Box>
      <Grid container width={"100%"} mt={""}>
        <Grid
          item
          xs={12}
          md={6}
          py={{ md: 4, xs: 0 }}
          display={"flex"}
          justifyContent={{ md: "end", xs: "center" }}
          alignItems={"center"}
        >
          <Box
            sx={{
              width: { md: "70%", xs: "90%" },
              height: { md: "400px", xs: "300px" },
            }}
          >
            <img
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "10px",
                background: "linear-gradient(to right, #6D7BFE, #3034BB)",
              }}
              loading="lazy"
              src="https://c1.wallpaperflare.com/preview/623/487/747/technology-code-coding-computer.jpg"
            />
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          mt={{ md: 5, xs: 0 }}
          p={{ md: 4, xs: 3 }}
          pl={{ md: 8, xs: 4 }}
        >
          <Typography fontWeight={600} fontSize={"18px"}>
            About Us
          </Typography>
          <Typography
            fontWeight={600}
            fontSize={{ md: "50px", xs: "30px" }}
            my={1}
            maxWidth={{ md: "70%", xs: "100%" }}
          >
            We Are Experts In Elearning
          </Typography>
          <Typography
            fontWeight={400}
            fontSize={"15px"}
            my={1}
            maxWidth={{ md: "70%", xs: "100%" }}
            color={"#100854"}
          >
            "At Helping Gurus, we leverage an extensive network of CBSE, ICSE,
            IB, State Board schools & Universities to help Edtech partners
            establish their presence across India. By showcasing your brand
            through our comprehensive connections, we facilitate seamless entry
            into educational institutions nationwide."
          </Typography>
          <Button
            variant="contained"
            sx={{
              textTransform: "none",
              borderRadius: 2,
              width: { md: "70%", xs: "100%" },
              mt: 2,
              background: "#FF8126",
              color: "white",
            }}
          >
            Read More
          </Button>
        </Grid>
      </Grid>
      <Box
        display={"flex"}
        justifyContent={"center"}
        width={"100%"}
        alignItems={"center"}
      >
        <Grid
          container
          m={3}
          gap={{ xs: 4, md: 0 }}
          py={3}
          bgcolor={"#3034BB"}
          borderRadius={3}
          width={{ md: "70%", xs: "90%" }}
        >
          {aboutusData.map((data) => (
            <Grid
              item
              xs={12}
              md={4}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Box
                display={"flex"}
                flexDirection={"column"}
                alignItems={"center"}
                gap={"4px"}
              >
                <img
                  style={{
                    borderRadius: "50%",
                    height: "100px",
                    width: "100px",
                    objectFit: "cover",
                    background: "linear-gradient(to right, #6D7BFE, #3034BB)",
                  }}
                  src={data.img}
                />
                <Typography
                  color={"#FF8126"}
                  fontWeight={700}
                  fontSize={"25px"}
                >
                  {data.count} +
                </Typography>
                <Typography color={"#fff"} fontWeight={600} fontSize={"15px"}>
                  {data.title}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}

export default AboutUs;
