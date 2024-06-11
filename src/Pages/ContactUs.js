import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import { contactUsService } from "../Services/ContactUsService";
import { toast } from "react-toastify";

function ContactUs() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [message, setMessage] = React.useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!name.trim() || !email.trim() || !phone.trim() || !message.trim()) {
        toast.error("Please fill all the fields.");
        return;
      }
      const formData = {
        name,
        email,
        phone,
        message,
      };

      const result = await contactUsService.postContactUs(formData);

      if (result.data.success === true) {
        toast.success(result.data.message);
      } else {
        toast.error("Something went wrong");
      }

      
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
            alignItems={"center"}
            justifyContent={"center"}
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
                  src="/images/contact.jpg"
                  style={{
                    width: "100%",
                    height: "100%",
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
