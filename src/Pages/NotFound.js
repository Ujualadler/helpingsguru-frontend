import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

function NotFound() {
  const navigate = useNavigate();
  return (
    <Box
    display={"flex"}
    justifyContent={"center"}
    alignItems={"center"}
    flexDirection={"column"}
    width={"100%"}
    height={"100vh"}
    >
      <Typography fontSize={"25px"} mb={2} fontWeight={"bolder"}>
        Whoops Something Went Wrong.
      </Typography>
    <Button endIcon={<ArrowForwardIcon/>}  onClick={()=>navigate('/')} sx={{textTransform:'none'}} variant='contained'>Back to the home</Button>
      <Box sx={{ width: "40%"}}>
        <img src="/images/404.jpg" style={{height:'100%',width:'100%',background:'linear-gradient(to right, #6D7BFE, #3034BB)'}} />
      </Box>
    </Box>
  );
}

export default NotFound;
