import { Button, Grid, TextField } from "@mui/material";
import React from "react";
import { serviceService } from "../Services/service";
import { toast } from "react-toastify";

function ServiceForm({ type,service }) {
  const [name, setName] = React.useState("");
  const [designation, setDesignation] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [organization, setOrganization] = React.useState("");
  const [location, setLocation] = React.useState("");
  const [topic, setTopic] = React.useState("");

  console.log(type)
  console.log(service)

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (
        !name.trim() ||
        !organization.trim() ||
        !phone.trim() ||
        !location.trim() ||
        !designation.trim()
      ) {
        toast.error("Please fill all the fields.");
        return;
      }

      if (type === "Teacher Training Certification Programme") {
        if (!topic.trim()) {
          toast.error("Fill ");
        }
      }

      if (phone.length < 10) {
        toast.error("Enter a valid number");
        return;
      }

      const formData = {
        name,
        organization,
        designation,
        phone,
        location,
        type,
        service,
        topic 
      };

      const result = await serviceService.postService(formData);
      console.log(result);
      if (result.data.success === true) {
        toast.success("Registration successful");
        setDesignation("");
        setLocation("");
        setName("");
        setOrganization("");
        setPhone("");
      } else {
        toast.error("Something went wrong");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            type="text"
            label="Full Name"
            id="outlined-size-small"
            value={name}
            sx={{
              color: "white",
              background: "transparent",
              "& input": {
                color: "white", // Text color
              },
            }}
            InputLabelProps={{
              sx: {
                color: "white",
                "&.Mui-focused": {
                  color: "#FF8126",
                },
              },
            }}
            InputProps={{
              sx: {
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#FF8126",
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#FF8126",
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#FF8126",
                },
              },
            }}
            onChange={(e) => setName(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            type="text"
            label="Designation"
            id="outlined-size-small"
            value={designation}
            onChange={(e) => setDesignation(e.target.value)}
            sx={{
              background: "transparent",
              color: "white",
              "& input": {
                color: "white", // Text color
              },
            }}
            InputLabelProps={{
              sx: {
                color: "white",
                "&.Mui-focused": {
                  color: "#FF8126",
                },
              },
            }}
            InputProps={{
              sx: {
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#FF8126",
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#FF8126",
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#FF8126",
                },
                "&.MuiInputBase-input": {
                  color: "white !important",
                },
              },
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            type="text"
            label="Organization"
            id="outlined-size-small"
            value={organization}
            onChange={(e) => setOrganization(e.target.value)}
            sx={{
              background: "transparent",
              "& input": {
                color: "white", // Text color
              },
            }}
            InputLabelProps={{
              sx: {
                color: "white",
                "&.Mui-focused": {
                  color: "#FF8126",
                },
              },
            }}
            InputProps={{
              sx: {
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#FF8126",
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#FF8126",
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#FF8126",
                },
              },
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            type="number"
            label="Contact Number"
            id="outlined-size-small"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            sx={{
              background: "transparent",
              "& input": {
                color: "white", // Text color
              },
            }}
            InputLabelProps={{
              sx: {
                color: "white",
                "&.Mui-focused": {
                  color: "#FF8126",
                },
              },
            }}
            InputProps={{
              sx: {
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#FF8126",
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#FF8126",
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#FF8126",
                },
              },
            }}
          />
        </Grid>
        {type === "Teacher Training Certification Programme" && (
          <Grid item xs={12}>
            <TextField
              fullWidth
              type="text"
              label="Topic"
              id="outlined-size-small"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              sx={{
                background: "transparent",
                "& input": {
                  color: "white",
                },
              }}
              InputLabelProps={{
                sx: {
                  color: "white",
                  "&.Mui-focused": {
                    color: "#FF8126",
                  },
                },
              }}
              InputProps={{
                sx: {
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#FF8126",
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#FF8126",
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#FF8126",
                  },
                },
              }}
            />
          </Grid>
        )}

        <Grid item xs={12}>
          <TextField
            fullWidth
            type="text"
            label="Location"
            id="outlined-size-small"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            sx={{
              background: "transparent",
              "& input": {
                color: "white",
              },
            }}
            InputLabelProps={{
              sx: {
                color: "white",
                "&.Mui-focused": {
                  color: "#FF8126",
                },
              },
            }}
            InputProps={{
              sx: {
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#FF8126",
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#FF8126",
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#FF8126",
                },
              },
            }}
          />
        </Grid>
        <Grid item xs={12} display={"flex"} justifyContent={"center"}>
          <Button
            variant="contained"
            type="submit"
            sx={{ background: "#FF8126", textTransform: "none" }}
          >
            Register today
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}

export default ServiceForm;
