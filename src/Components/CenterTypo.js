import { Box, Typography } from "@mui/material";
import React from "react";

function CenterTypo() {
  return (
    <Box
      position="relative"
      py={7}
      height={"400px"}
      px={5}
      mt={5}
      sx={{
        background: "url(/images/whyus.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      flexDirection={"column"}
    >
      {/* Overlay for black shade */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)", // Adjust the alpha value for transparency
          zIndex: 1,
        }}
      />
      <Typography
        textAlign={"center"}
        color={"white"}
        fontWeight={800}
        fontSize={"30px"}
        sx={{ position: "relative", zIndex: 2 }}
      >
        Why Helping Guru?
      </Typography>
      <Typography
        textAlign={"center"}
        color={"white"}
        width={"80%"}
        mt={2}
        sx={{ position: "relative", zIndex: 2 }}
      >
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries,
      </Typography>
    </Box>
  );
}

export default CenterTypo;
