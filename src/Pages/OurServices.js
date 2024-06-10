import { Box, Grid, Typography } from "@mui/material";
import React from "react";

function OurServices() {
  const ourservicesData = [
    {
      name: "Educational Events & Roundtables",
      img: "https://img.freepik.com/free-photo/group-cheerful-happy-students-sitting-lecture-hall-before-lesson_155003-12212.jpg?t=st=1717785721~exp=1717789321~hmac=502d422eccb4a5007ab457bc8bcbe0150e39d554554a38c17c8d36ea892da12a&w=996",
      description:` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
      do eiusmod tempor incididunt ut labore et dolore magna
      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
      ullamco laboris nisi ut aliquip ex ea commodo consequat.
      Duis aute irure dolor in reprehenderit in voluptate velit
      esse`
    },
    {
      name: "Staff Recruitment Solutions",
      img: "https://img.freepik.com/free-photo/friendly-partners-handshaking-group-meeting-thanking-successful-teamwork_1163-4691.jpg?t=st=1717786752~exp=1717790352~hmac=ffb57840283988d9d056977a7e6f6106cdefbc11ecb3cf3177b0c69def5b0e9c&w=996",
      description:` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
      do eiusmod tempor incididunt ut labore et dolore magna
      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
      ullamco laboris nisi ut aliquip ex ea commodo consequat.
      Duis aute irure dolor in reprehenderit in voluptate velit
      esse`
    },
    {
      name: "Inspiring Speakers for Educational Institutions ",
      img: "https://img.freepik.com/free-photo/person-holding-speech-official-event_23-2151054194.jpg?t=st=1717786850~exp=1717790450~hmac=4e90dc650606c5bf777d39fae456b932faae6fb28edc0122541644af85ba5fa7&w=1060",
      description:` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
      do eiusmod tempor incididunt ut labore et dolore magna
      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
      ullamco laboris nisi ut aliquip ex ea commodo consequat.
      Duis`
    },
    {
      name: "Educational Magazine Hub",
      img:'https://img.freepik.com/free-photo/students-library_144627-20123.jpg?t=st=1717787257~exp=1717790857~hmac=2658d39b8db0b9b62e05752df8763161385cb9f85bb52fc2d8ca22fc9c847428&w=996',
      description:` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
      do eiusmod tempor incididunt ut labore et dolore magna
      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
      ullamco laboris nisi ut aliquip ex ea commodo consequat.
      Duis aute irure dolor in reprehenderit in voluptate velit
      esse`
    },
    {
      name: "Edtech B2B Lead Generation",
      img:'https://img.freepik.com/free-photo/b2b-business-business-corporate-connection-partnership-concept_53876-120382.jpg?t=st=1717787327~exp=1717790927~hmac=c7a614d518eb19e05c8b5cf6fcf2bf330ad54bf1f274c8c8d91e8e1064f68c73&w=826',
      description:` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
      do eiusmod tempor incididunt ut labore et dolore magna
      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
      ullamco laboris nisi ut aliquip ex ea commodo consequat.
      Duis aute irure dolor in reprehenderit in voluptate velit
      esse`
    },
    {
      name: "Innovative IFP Panels",
      img:'https://img.freepik.com/free-photo/businessman-interacting-with-futuristic-graphics_23-2151003719.jpg?t=st=1717787445~exp=1717791045~hmac=51ac4272ab0becde5f964dcdeb0dd225bd3c2d1ef67c52962fee573cf7a41f40&w=996',
      description:` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
      do eiusmod tempor incididunt ut labore et dolore magna
      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
      ullamco laboris nisi ut aliquip ex ea commodo consequat.
      Duis aute irure dolor in reprehenderit in voluptate velit
      esse`
    },
    {
      name: "Teacher Training Certification Programme",
      img:'https://img.freepik.com/free-photo/people-taking-part-high-protocol-event_23-2150951361.jpg?t=st=1717787574~exp=1717791174~hmac=2ca8a5bf7d72beb43add3ccf191a345eb7cbd9acfe814544be951f00651665bd&w=996',
      description:` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
      do eiusmod tempor incididunt ut labore et dolore magna
      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
      ullamco laboris nisi ut aliquip ex ea commodo consequat.
      Duis`
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
        <Grid container width={"80%"}>
          {ourservicesData.map((data, index) => (
            <Grid
              item
              md={4}
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
                maxHeight={'430px'}
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
