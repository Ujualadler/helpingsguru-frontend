import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { API_URL } from '../Services/url';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function PdfShowing({ show, open, url }) {
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
        PaperProps={{
          style: {
            position: "absolute",
            bottom: 0,
            height: "90vh",
            maxHeight: "90vh",
            width: "100vw",
            zindex:10
          },
        }}
      >
        <AppBar sx={{ position: 'relative' }}>
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
              {url?.name}
            </Typography>
          </Toolbar>
        </AppBar>
        <iframe
          src={`${API_URL}api/v1/image/${url?.pdf}`}
          title="PDF Viewer"
          width="100%"
          height="100%"
        ></iframe>
      </Dialog>
    </React.Fragment>
  );
}
