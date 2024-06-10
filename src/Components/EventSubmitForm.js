import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Grid, IconButton, TextField } from "@mui/material";
import Close from "@mui/icons-material/Close";
import { BookingService } from "../Services/BookingService";
import { toast } from "react-toastify";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "60vw",
  bgcolor: "background.paper",
  borderRadius: 3,
  boxShadow: 24,
  p: 4,
};

export default function EventSubmitModal({ open, show, data }) {
  const handleClose = () => show(false);



  // State variables to manage form input values
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [address, setAddress] = React.useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!name.trim() || !email.trim() || !phone || address.trim()) {
        toast.error("Fill all the fields");
        return;
      }
      const formData = {
        name,
        email,
        phone,
        address,
        eventId: data?._id,
        eventName: data?.name,
      };

      const result = await BookingService.postBooking(formData);
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
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form onSubmit={handleSubmit}>
            <Box
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Book Now
              </Typography>
              <IconButton onClick={handleClose}>
                <Close />
              </IconButton>
            </Box>
            <Grid container p={3} spacing={2}>
              <Grid item md={6} xs={12}>
                <TextField
                  fullWidth
                  type="text"
                  label="Full Name"
                  id="outlined-size-small"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  fullWidth
                  type="number"
                  label="Phone"
                  id="outlined-size-small"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  type="email"
                  fullWidth
                  label="Email"
                  id="outlined-size-small"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  type="text"
                  fullWidth
                  sx={{
                    height: "150px",
                    ".MuiOutlinedInput-root": { height: "150px" },
                  }}
                  label="Address"
                  id="outlined-size-small"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <Box>
                  <Button
                    type="submit"
                    variant="contained"
                    sx={{ width: "100%", bgcolor: "#FF8126", height: "45px" }}
                  >
                    SUBMIT
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
