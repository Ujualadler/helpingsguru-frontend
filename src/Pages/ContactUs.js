import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import { contactUsService } from "../Services/ContactUsService";

function ContactUs() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [message, setMessage] = React.useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = {
        name,
        email,
        phone,
        message
      };

      const result = await contactUsService.postContactUs(formData);
      console.log(result);

      // Handle successful submission
      // e.g., show a success message, close the modal, etc.
      handleClose();
    } catch (error) {
      console.error(error);

      // Handle submission error
      // e.g., show an error message
    }
  };

  return (
    <Box>
      <form onSubmit={handleSubmit}>
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
            Contact Us
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
            width={{ lg: "80%", md: "90%", xs: "100%", sm: "95%" }}
          >
            <Grid
              item
              md={6}
              xs={12}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              py={3}
            >
              <Box
                sx={{ width: { xs: "90%", md: "80%", lg: "80%", xl: "80%" } }}
              >
                <img
                  src="https://img.freepik.com/free-photo/top-view-chat-bubbles-with-telephone-receiver_23-2148796076.jpg?t=st=1717918608~exp=1717922208~hmac=e2bdff0c6de235ba9612f23bd45323a28dbc03e176ffa622cafded2fc46da859&w=996"
                  style={{
                    width: "100%",
                    height: "400px",
                    borderRadius: "10px",
                  }}
                />
              </Box>
            </Grid>
            <Grid item container md={6} xs={12} p={4} spacing={2}>
              <Grid item md={6} xs={12}>
                <Box>
                  <TextField
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    fullWidth
                    type="text"
                    label="Full Name"
                    id="outlined-size-small"
                  />
                </Box>
              </Grid>
              <Grid item md={6} xs={12}>
                <Box>
                  <TextField
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    fullWidth
                    type="number"
                    label="Phone"
                    id="outlined-size-small"
                  />
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box>
                  <TextField
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    fullWidth
                    label="Email"
                    id="outlined-size-small"
                  />
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box>
                  <TextField
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    type="text"
                    fullWidth
                    sx={{
                      height: "150px",
                      ".MuiOutlinedInput-root": { height: "150px" },
                    }}
                    label="Message"
                    id="outlined-size-small"
                  />
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box>
                  <Button
                    type="submit"
                    variant="contained"
                    sx={{ width: "100%", bgcolor: "#FF8126", height: "45px" }}
                  >
                    SEND
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </form>
    </Box>
  );
}

export default ContactUs;
