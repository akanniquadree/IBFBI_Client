import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import { useState } from 'react';

export default function AutohideSnackbar({display,setDisplay}) {
  const handleClickDisplay = () => {
    setDisplay(true);
  };

  const handleCloseDsplay = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setDisplay(false);
  };

  return (
    <div>
      <Snackbar
        open={display}
        autoHideDuration={5000}
        onClose={handleCloseDsplay}
        message="This Snackbar will be dismissed in 5 seconds."
      />
    </div>
  );
}