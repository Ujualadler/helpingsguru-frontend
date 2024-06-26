import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import { Box, Grid } from "@mui/material";
import EventSubmitModal from "./EventSubmitForm";
import { API_URL, formatDate } from "../Services/url";
import Close from "@mui/icons-material/Close";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function EventDetails({ open, show, data, type }) {
  const [eventbook, setEventBook] = React.useState(false);
  const [activeImage, setImage] = React.useState(data?.images[0]);

  const setVhProperty = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  };

  React.useEffect(() => {
    setVhProperty();
    window.addEventListener('resize', setVhProperty);
    return () => {
      window.removeEventListener('resize', setVhProperty);
    };
  }, []);

  const handleClose = () => {
    show(false);
  };

  return (
    <React.Fragment>
      {eventbook && (
        <EventSubmitModal data={data} open={eventbook} show={setEventBook} />
      )}
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
            height: { xs: "calc(var(--vh, 1vh) * 88)"}, // Set the height of the dialog to 70% of the viewport height
            maxHeight: "90vh",
            width: "100vw",
            zIndex: 100000, // Optionally set the width to fill the screen
          },
        }}
      >
        {/* <AppBar sx={{ position: "relative" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              {data.name}
            </Typography>
          </Toolbar>
        </AppBar> */}
        <Box
          //   mt={4}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          flexDirection={"column"}
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
              {data?.name}
            </Typography>
            <IconButton onClick={handleClose}>
              <Close sx={{ color: "white" }} />
            </IconButton>
          </Box>
          <Grid
            container
            width={{ md: "80%", xs: "100%" }}
            pb={3}
            mt={{ xs: 0, md: 5 }}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            // flexDirection={'column'}
            borderRadius={"40px"}
            sx={{ boxShadow: "0px 15px 25px 0px #0000001C" }}
          >
            <Grid container mt={2} p={{ sm: 4, xs: 2 }}>
              <Grid
                item
                xs={12}
                md={6}
                display={"flex"}
                justifyContent={"center"}
                flexDirection={"column"}
                alignItems={"center"}
              >
                <Box
                  sx={{
                    width: { xs: "100%", md: "80%" },
                    height: "300px",
                    borderRadius: "20px",
                  }}
                >
                  <img
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: "20px",
                      objectFit: "cover",
                      background: "linear-gradient(to right, #6D7BFE, #3034BB)",
                    }}
                    loading="lazy"
                    src={`${API_URL}api/v1/image/${activeImage}`}
                  />
                </Box>
                <Box
                  sx={{
                    width: { xs: "100%", md: "80%" },
                    height: "80px",
                    maxWidth: "100%",
                    overflowY: "hidden",
                    overflowX: "auto",
                    borderRadius: "10px",
                    display: "flex",
                    alignItems: "center",
                    p: 1,
                    gap: 1,
                    mt: 2,
                  }}
                >
                  {data?.images.map((img, indexImg) => (
                    <Box
                      key={indexImg}
                      height={"80px"}
                      sx={{
                        width: { xs: "100%", md: "33.3%" },
                        cursor: "pointer",
                      }}
                      onClick={() => setImage(img)}
                    >
                      <img
                        style={{
                          width: "100%",
                          height: "100%",
                          borderRadius: "8px",
                          objectFit: "cover",
                          background:
                            "linear-gradient(to right, #6D7BFE, #3034BB)",
                        }}
                        loading="lazy"
                        src={`${API_URL}api/v1/image/${img}`}
                      />
                    </Box>
                  ))}
                </Box>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                mt={{ xs: 4, md: 0 }}
                p={{ xs: 0, sm: 3 }}
              >
                <Typography
                  color={"#100854"}
                  fontSize={"25px"}
                  fontWeight={700}
                  mb={2}
                >
                  {data?.name}
                </Typography>
                <Typography
                  color={"#515151"}
                  fontSize={"17px"}
                  fontWeight={400}
                >
                  {data?.description}
                </Typography>
                <Box display={"flex"} alignItems={"center"} gap={1} my={1}>
                  <Typography
                    fontSize={"17px"}
                    fontWeight={700}
                    color={"#100854"}
                  >
                    Location
                  </Typography>
                  <Typography
                    color={"#515151"}
                    fontSize={"17px"}
                    fontWeight={400}
                  >
                    {data?.location}
                  </Typography>
                </Box>
                <Box display={"flex"} alignItems={"center"} gap={1} my={1}>
                  <Typography
                    fontSize={"17px"}
                    fontWeight={700}
                    color={"#100854"}
                  >
                    Time
                  </Typography>
                  <Typography
                    color={"#515151"}
                    fontSize={"17px"}
                    fontWeight={400}
                  >
                    {data?.startTime} - {data?.endTime}
                  </Typography>
                </Box>
                <Box display={"flex"} alignItems={"center"} gap={1} my={1}>
                  <Typography
                    fontSize={"17px"}
                    fontWeight={700}
                    color={"#100854"}
                  >
                    Date
                  </Typography>
                  <Typography
                    color={"#515151"}
                    fontSize={"17px"}
                    fontWeight={400}
                  >
                    {formatDate(data?.startDate)} - {formatDate(data?.endDate)}
                  </Typography>
                </Box>
                {type !== "previous" && (
                  <Button
                    variant="contained"
                    onClick={() => setEventBook(true)}
                    sx={{
                      textTransform: "none",
                      borderRadius: 2,
                      mt: 2,
                      px: 2,
                      background: "#FF8126",
                      color: "white",
                    }}
                  >
                    Book Now
                  </Button>
                )}
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Dialog>
    </React.Fragment>
  );
}
