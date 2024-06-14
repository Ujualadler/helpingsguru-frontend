import * as React from "react";
import Dialog from "@mui/material/Dialog";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Slide from "@mui/material/Slide";
import { API_URL } from "../Services/url";
import { Box } from "@mui/material";
import Close from "@mui/icons-material/Close";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function PdfShowing({ show, open, url }) {
  const setVhProperty = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  };

  React.useEffect(() => {
    setVhProperty();
    window.addEventListener("resize", setVhProperty);
    return () => {
      window.removeEventListener("resize", setVhProperty);
    };
  }, []);

  const handleClose = () => {
    show(false);
  };

  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={handleClose}
        fullScreen
        TransitionComponent={Transition}
        transitionDuration={500}
        PaperProps={{
          sx: {
            position: "absolute",
            bottom: 0, // Anchor the dialog to the bottom of the view
            height: { xs: "calc(var(--vh, 1vh) * 88)" }, // Set the height of the dialog to 70% of the viewport height
            maxHeight: "90vh",
            width: "100vw",
            zIndex: 100000, // Optionally set the width to fill the screen
          },
        }}
      >
        <Box
          position={"sticky"}
          top={0}
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          sx={{ background: "#FF8126" }}
          //   p={1}
          overflow={"hidden"}
          color={"white"}
          width={"100%"}
          zIndex={10000000}
          mb={{ xs: 2, sm: 0 }}
        >
          <Typography
            m={1}
            p={1}
            id="modal-modal-title"
            fontSize={{ md: "16px", xs: "15px" }}
            fontWeight={600}
          >
            {url?.name}
          </Typography>
          <IconButton onClick={handleClose}>
            <Close sx={{ color: "white" }} />
          </IconButton>
        </Box>

        <iframe
          src={`https://docs.google.com/gview?url=${encodeURIComponent(
            `${API_URL}api/v1/image/${url?.pdf}`
          )}&embedded=true`}
          title="PDF Viewer"
          style={{ marginTop: "0px" }}
          width="100%"
          height="100%"
        ></iframe>
      </Dialog>
    </React.Fragment>
  );
}
