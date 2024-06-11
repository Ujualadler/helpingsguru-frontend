import React from "react";
import { Box, Typography, Modal, IconButton } from "@mui/material";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { API_URL } from "../Services/url";
import Close from "@mui/icons-material/Close";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { lg: "60vw", md: "75vw", xs: "80vw" },
  height: { xs: "450px" },
  bgcolor: "background.paper",
  boxShadow: 24,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  borderRadius:3
};

export default function GallerySlider({
  show,
  open,
  data,
  currentIndex,
  setCurrentIndex,
}) {
  const handleClose = () => show(false);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : data.length - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="image-preview-modal"
      aria-describedby="image-preview-slide"
    >
      <Box sx={style}>
        {/* <Box position={'relative'} width={'100%'}> */}
          <IconButton onClick={()=>show(false)} sx={{position:'absolute',top:0,right:0}}>
            <Close />
          </IconButton>
        {/* </Box> */}
        <IconButton
          onClick={handlePrev}
          sx={{
            position: "absolute",
            left: 16,
            top: "50%",
            transform: "translateY(-50%)",
            color: "#FF8126",
          }}
        >
          <ArrowLeftIcon fontSize="large" />
        </IconButton>
        <img
          src={`${API_URL}api/v1/image/${data[currentIndex]}`}
          style={{ width: "100%", height: "100%" }}
        />
        <IconButton
          onClick={handleNext}
          sx={{
            position: "absolute",
            right: 16,
            top: "50%",
            transform: "translateY(-50%)",
            color: "#FF8126",
          }}
        >
          <ArrowRightIcon fontSize="large" />
        </IconButton>
      </Box>
    </Modal>
  );
}
