import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import { Box, Grid } from "@mui/material";
import EventSubmitModal from "./EventSubmitForm";
import { API_URL, formatDate } from "../Services/url";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function EventDetails({ open, show, data }) {
  const [eventbook, setEventBook] = React.useState(false);

  const handleClose = () => {
    show(false);
  };

  return (
    <React.Fragment>
      {eventbook && <EventSubmitModal open={eventbook} show={setEventBook} />}
      <Dialog
        open={open}
        onClose={handleClose}
        fullScreen
        TransitionComponent={Transition}
        PaperProps={{
          style: {
            position: "absolute",
            bottom: 0, // Anchor the dialog to the bottom of the view
            height: "88vh", // Set the height of the dialog to 70% of the viewport height
            maxHeight: "90vh",
            width: "100vw", // Optionally set the width to fill the screen
          },
        }}
      >
        <AppBar sx={{ position: "relative" }}>
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
        </AppBar>
        <Box
          mt={10}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Grid
            container
            width={{ md: "80%", xs: "98%" }}
            pb={3}
            display={"flex"}
            justifyContent={"center"}
            // flexDirection={'column'}
            borderRadius={"40px"}
            sx={{ boxShadow: "0px 15px 25px 0px #0000001C" }}
          >
            <Grid container mt={2} p={4}>
              <Grid
                item
                xs={12}
                md={6}
                display={"flex"}
                justifyContent={"center"}
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
                    }}
                    src={`${API_URL}api/v1/image/${data.images[0]}`}
                  />
                </Box>
              </Grid>
              <Grid item xs={12} md={6} p={3}>
                <Typography
                  color={"#100854"}
                  fontSize={"25px"}
                  fontWeight={700}
                  mb={1}
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
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Dialog>
    </React.Fragment>
  );
}
