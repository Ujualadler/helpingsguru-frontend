import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import ServiceForm from './ServiceForm';
import { keyframes } from "@mui/system";
import { IconButton } from '@mui/material';
import Close from "@mui/icons-material/Close";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 'fit-content',
  borderRadius:2,
  bgcolor: 'background.paper',
  boxShadow: 24,
  width:{md:'70%',lg:'50%',xs:'95%'}
};

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-30px);
  }
  60% {
    transform: translateY(-15px);
  }
`;

export default function ServiceModal({open,show, type, service}) {

  const handleClose = () => show(false);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <Box
              sx={{ background: "#3034BB" }}
              color={"white"}
              position={"relative"}
              borderRadius={2}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"space-between"}
              py={2}
              pb={5}
              px={3}
            >
                <IconButton onClick={()=>handleClose()} sx={{position:'absolute',top:0,right:0,color:'#FF8126'}}><Close/></IconButton>
              <Box
                component="img"
                src="/images/dot-svg.png"
                sx={{
                  position: "absolute",
                  top: "15%",
                  right: "2%",
                  height: "120px",
                  opacity: "20%",
                  width: "150px",
                  animation: `${bounce} 2s infinite`,
                }}
              />
              <Box px={{ md: 4, xs: 0 }}>
                <Typography
                  fontWeight={700}
                  fontSize={{ md: "28px", xs: "20px" }}
                  color={"#FF8126"}
                  mt={4}
                >
                  Book Now
                </Typography>
                <Box display={"flex"} alignItems={"center"} mt={3} gap={2}>
                  <ServiceForm type={type} service={service} />
                </Box>

              </Box>
              </Box>
        </Box>
      </Modal>
    </div>
  );    
}
