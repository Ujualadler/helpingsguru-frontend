import { Box, Grid, Typography } from "@mui/material";
import React from "react";

function OurServices() {
  const ourservicesData = [
    {
      name: "Educational Events & Roundtables",
      img: "/images/educationalevents.avif",
      description: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
      do eiusmod tempor incididunt ut labore et dolore magna
      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
      ullamco laboris nisi ut aliquip ex ea commodo consequat.
      Duis aute irure dolor in reprehenderit in voluptate velit
      esse`,
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
      name: "Inspiring Speakers for Educational Institutions ",
      img: "/images/speakers.jpg",
      description: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
      do eiusmod tempor incididunt ut labore et dolore magna
      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
      ullamco laboris nisi ut aliquip ex ea commodo consequat.
      Duis`,
    },
    {
      name: "Educational Magazine Hub",
      img: "/images/educationalmagazine.jpg",
      description: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
      do eiusmod tempor incididunt ut labore et dolore magna
      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
      ullamco laboris nisi ut aliquip ex ea commodo consequat.
      Duis aute irure dolor in reprehenderit in voluptate velit
      esse`,
    },
    {
      name: "Edtech B2B Lead Generation",
      img: "/images/b2b.jpg",
      description: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
      do eiusmod tempor incididunt ut labore et dolore magna
      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
      ullamco laboris nisi ut aliquip ex ea commodo consequat.
      Duis aute irure dolor in reprehenderit in voluptate velit
      esse`,
    },
    {
      name: "Innovative IFP Panels",
      img: "/images/pannels.jpg",
      description: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
      do eiusmod tempor incididunt ut labore et dolore magna
      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
      ullamco laboris nisi ut aliquip ex ea commodo consequat.
      Duis aute irure dolor in reprehenderit in voluptate velit
      esse`,
    },
    {
      name: "Teacher Training Certification Programme",
      img: "/images/training.jpg",
      description: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
      do eiusmod tempor incididunt ut labore et dolore magna
      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
      ullamco laboris nisi ut aliquip ex ea commodo consequat.
      Duis`,
    },
  ];
  return (
    <Box>
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
                maxHeight={"430px"}
                pb={2}
                overflow={"hidden"}
                sx={{
                  boxShadow:
                    "0 4px 8px rgba(0, 0, 0, 0.1), 0 6px 20px rgba(0, 0, 0, 0.1)", // Adjust the values as needed for the desired shadow effect
                }}
              >
                <img width={"100%"} height={"200px"} src={data.img} />
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
                  >
                    {data.description}
                  </Typography>
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
