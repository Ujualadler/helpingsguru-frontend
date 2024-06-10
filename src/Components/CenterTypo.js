import { Box, Typography } from "@mui/material";
import React from "react";

function CenterTypo() {
  return (
    <Box py={7}  px={5} sx={{background:"linear-gradient(to right, #6D7BFE, #3034BB)"}} display={'flex'} justifyContent={'center'} alignItems={'center'} flexDirection={'column'}  mt={5}>
      <Typography textAlign={'center'} color={'white'} fontWeight={800} fontSize={'30px'}>Why Helping Guru?</Typography>
      <Typography textAlign={'center'} color={'white'} width={'80%'} mt={2}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries,
      </Typography>
    </Box>
  );
}

export default CenterTypo;
