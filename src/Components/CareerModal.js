import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Grid, IconButton, Input, TextField } from "@mui/material";
import Close from "@mui/icons-material/Close";
import { BookingService } from "../Services/BookingService";
import { toast } from "react-toastify";
import { height, maxHeight } from "@mui/system";
import { careerService } from "../Services/CareerService";

const style = {
  position: "absolute",
  top: "55%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { lg: "90vw", md: "80vw", xs: "90vw" },
  bgcolor: "background.paper",
  borderRadius: 3,
  boxShadow: 24,
  overflow: "hidden",
  maxHeight: { md: "80vh", xs: "85vh" },
};

export default function CareerModal({ open, show, data }) {
  const handleClose = () => show(false);

  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [resume, setResume] = React.useState("");
  const [fileError, setFileError] = React.useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.type === "application/pdf") {
        setResume(file);
        setFileError(""); // Clear any existing errors
      } else {
        setResume(null);
        setFileError("Please upload a PDF file.");
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !phone.trim() || !resume) {
      toast.error("Please fill all the fields.");
      return;
    }
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("resume", resume);
    formData.append("postId", data?._id);

    try {
      const result = await careerService.postCareer(formData);
      if (result.data.success === true) {
        toast.success(result.data.message);
        handleClose();
      } else {
        toast.error("Something went wrong");
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to submit application.");
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
              sx={{ background: "#FF8126" }}
              p={2}
              overflow={"hidden"}
              color={"white"}
              mb={{ xs: 2, sm: 0 }}
            >
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Apply Now
              </Typography>
              <IconButton onClick={handleClose}>
                <Close sx={{ color: "white" }} />
              </IconButton>
            </Box>
            <Grid
              container
              px={{ md: 6, xs: 2 }}
              py={{ md: 5, xs: 3 }}
              spacing={2}
              maxHeight={{ md: "100%", xs: "71vh", md: "" }}
              overflow={"auto"}
            >
              <Grid item xs={12}>
                <Typography
                  fontWeight={600}
                  fontSize={"20px"}
                  color={"#FF8126"}
                >
                  {data?.role.toUpperCase()}
                </Typography>
              </Grid>
              <Grid
                item
                container
                xs={12}
                p={{ md: 4, xs: 2 }}
                md={6}
                maxHeight={{ md: "60vh", xs: "100%" }}
                overflow={"auto"}
              >
                <Typography
                  fontWeight={600}
                  fontSize={"16px"}
                  color={"#FF8126"}
                >
                  Description
                </Typography>
                <Typography fontWeight={"14px"}>{data?.description}</Typography>
              </Grid>

              <Grid
                item
                container
                xs={12}
                alignContent={"start"}
                md={6}
                spacing={1}
              >
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
                  <Typography fontSize={"14px"} mb={"8px"} color={"#FF8126"}>
                    UPLOAD RESUME
                  </Typography>
                  <TextField
                    type="file"
                    fullWidth
                    onChange={handleFileChange}
                    helperText={fileError}
                    error={!!fileError}
                    inputProps={{
                      accept: "application/pdf", // This will restrict users to select only PDF files
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Box>
                    <Button
                      type="submit"
                      variant="contained"
                      sx={{ width: "100%", bgcolor: "#FF8126", height: "45px" }}
                    >
                      Apply
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
