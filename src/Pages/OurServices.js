import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

function OurServices() {
  const navigate = useNavigate();
  const ourservicesData = [
    {
      name: "Educational Events & Roundtables",
      img: "/images/educationalevents.avif",
      description: `At Helping Gurus, we specialize in organizing large-scale educational events for schools and colleges. With a track record of 15 successful RoundTable Sessions and 5 Summits, we bring together top educational authorities from our extensive network of over 10,000 schools and 100 universities.`,
    },
    {
      name: "Staff Recruitment Solutions",
      img: "/images/recruitmentstaff.jpg",
      description: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
      do eiusmod tempor incididunt ut labore et dolore magna
      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
      ullamco laboris nisi ut aliquip ex ea commodo consequat.
      Duis aute irure dolor in reprehenderit in voluptate velit
      esse`,
    },
    {
      name: "Inspiring Speakers for Educational Institutions",
      img: "/images/speakers.jpg",
      description: `At HelpingGurus, we specialize in providing renowned personalities
      from the education sector to schools and colleges. Our vast
      network includes motivational speakers, spiritual leaders, content
      creators, business coaches, IAS officers, government officials, as
      well as authorities from NCERT, CBSE, NITI Ayog and KVS Sangathan`,
    },
    {
      name: "Educational Magazine Hub",
      img: "/images/educationalmagazine.jpg",
      description: `Step into a world where knowledge meets community, where ideas flow freely, and connections are nurtured. Helping Gurus Magazine invites you to join a vibrant platform that bridges the gap between educators, students, and parents.`,
    },
    {
      name: "Teacher Training Certification Programme",
      img: "/images/training.jpg",
      description: `At Helping Gurus, we provide Teacher Training Certification Programs on many topics. Our experts have 25 to 30 years of experience in their fields.`,
    },
    {
      name: "Talks With Gurus",
      img: "/images/talkwithmaster.jpg",
      description: `At Helping Gurus, we provide Teacher Training Certification Programs on many topics. Our experts have 25 to 30 years of experience in their fields.`,
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
        <Typography mt={2}  color={"white"} fontWeight={700} fontSize={{md:"30px",xs:'20px'}}>
          Our Services
        </Typography>
      </Box>
      <Box
        display={"flex"}
        justifyContent={"center"}
        mt={5}
        alignItems={"center"}
      >
        <Grid
          container
          width={{ xl: "65%", lg: "75%", md: "90%", sm: "80%", xs: "95%" }}
        >
          {ourservicesData.map((data, index) => (
            <Grid
              item
              md={6}
              lg={4}
              xs={12}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              p={3}
            >
              <Box
                key={index}
                display={"flex"}
                flexDirection={"column"}
                borderRadius={2}
                overflow={"hidden"}
                sx={{
                  boxShadow:
                    "0 4px 8px rgba(0, 0, 0, 0.1), 0 6px 20px rgba(0, 0, 0, 0.1)", // Adjust the values as needed for the desired shadow effect
                }}
              >
                <img
                  width={"100%"}
                  style={{
                    objectFit: "cover",
                    background: "linear-gradient(to right, #6D7BFE, #3034BB)",
                  }}
                  loading="lazy"
                  height={"200px"}
                  src={data.img}
                />
                <Box p={3}>
                  <Typography
                    fontWeight={600}
                    fontSize={"18px"}
                    my={1}
                    textAlign={"left"}
                    color={"#FF8126"}
                  >
                    {data.name}
                  </Typography>
                  <Typography
                    fontWeight={400}
                    fontSize={"15px"}
                    my={1}
                    textAlign={"left"}
                    sx={{
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      display: "-webkit-box",
                      WebkitBoxOrient: "vertical",
                      WebkitLineClamp: 6, // Set the number of lines before ellipsis
                    }}
                  >
                    {data.description}
                  </Typography>
                  <Button
                    onClick={(event) => {
                      event.stopPropagation(); // Stop the event from bubbling up
                      const servicePath = data.name
                        .replace(/ & /g, "-")
                        .replace(/ /g, "-");
                      navigate(`/our-service/${servicePath}`);
                    }}
                    type="submit"
                    variant="contained"
                    sx={{ width: "100%", bgcolor: "#FF8126" }}
                  >
                    Read more
                  </Button>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}

export default OurServices;
