import { Box, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import ForwardIcon from "@mui/icons-material/Forward";
import { positions } from "@mui/system";
import CareerModal from "../Components/CareerModal";

function Career() {
    const[showForm,setShowForm] = useState(false)
    const[data,setData] = useState('')
  const careerData = [
    {
      department: "development",
      position: "developer",
      starting: "Immediate join",
    },
    {
      department: "design",
      position: "Brand Designer",
      starting: "Immediate join",
    },
    {
      department: "Strategy",
      position: "project manager",
      starting: "Immediate join",
    },
    {
      department: "development",
      position: "designer intern",
      starting: "Immediate join",
    },
    {
      department: "development",
      position: "Assistant manager",
      starting: "Immediate join",
    },
    {
      department: "design",
      position: "UI/UX designer",
      starting: "Immediate join",
    },
  ];

  return (
    <Box>
        {showForm && data!=='' && <CareerModal show={setShowForm} open={showForm} data={data}/>}
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
          Careers
        </Typography>
      </Box>
      <Box
        display={"flex"}
        justifyContent={"center"}
        mt={6}
        alignItems={"center"}
      >
        <Grid container width={{ md: "80%", lg: "70%", xs: "95%" }}>
          {careerData.map((data) => (
            <Grid item xs={12} md={6} lg={4} p={2}>
              <Box
              onClick={()=>{
                setShowForm(true);
                setData(data)
              }}
                bgcolor={"#FFF"}
                height={"210px"}
                display={"flex"}
                flexDirection={"column"}
                alignItems={"self-start"}
                position={"relative"}
                p={3}
                sx={{
                  boxShadow:
                    "0 4px 8px rgba(0, 0, 0, 0.1), 0 6px 20px rgba(0, 0, 0, 0.1)",
                  cursor: "pointer",
                  transition: "all 0.3s ease-in-out",
                  "&:hover": {
                    bgcolor: "#3034BB",
                    color: "white",
                    "& .icon-animate": {
                      // Use a class for the icon to select it
                      transform: "translateX(100%)", // Adjust distance for your design
                    },
                  },
                }}
              >
                <Typography
                  fontSize={"15px"}
                  fontWeight={600}
                  color={"rgb(177 181 187)"}
                >
                  {data.department.toUpperCase()}
                </Typography>
                <Typography fontSize={"25px"} fontWeight={900} mt={5}>
                  {data.position.toUpperCase()}
                </Typography>
                <Box
                  display={"flex"}
                  // justifyContent={"space-between"}
                  gap={2}
                  textAlign={"center"}
                  width={"80%"}
                  position={"absolute"}
                  bottom={10}
                >
                  <Box
                    display={"flex"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                    gap={1}
                  >
                    <Typography
                      fontSize={"14px"}
                      fontWeight={600}
                      color={"rgb(177 181 187)"}
                    >
                      Start:
                    </Typography>
                    <Typography fontSize={"14px"} fontWeight={600}>
                      {data.starting}
                    </Typography>
                  </Box>
                  <ForwardIcon
                    fontSize="large"
                    className="icon-animate"
                    sx={{ transition: "transform 0.3s ease-in-out" }}
                  />
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}

export default Career;
