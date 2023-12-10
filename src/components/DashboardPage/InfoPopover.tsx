import * as React from 'react';
import Popover from '@mui/material/Popover';
import { Typography } from '@mui/material';

export default function InfoPopover({
  open,
  anchorEl,
  handlePopoverClose,
  message
}: {
  open: boolean,
  anchorEl: HTMLElement | null,
  handlePopoverClose: () => void,
  message: string
}) {
  return (
    <Popover
      id="mouse-over-popover"
      sx={{
        pointerEvents: 'none',
      }}
      open={open}
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}
      onClose={handlePopoverClose}
      disableRestoreFocus
    >
      <Typography sx={{ p: 1 }}>
        {message}
      </Typography>
    </Popover>
  );
}