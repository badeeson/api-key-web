import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Button, TextField } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

function CopyButton() {
  return (
    <IconButton
      size="medium"
      aria-label="copy"
      sx={{
        borderRadius: 0,
        backgroundColor: 'rgb(25, 118, 210)',
        '&:hover': {
          backgroundColor: 'rgba(25, 118, 210, 0.54)'
        }
      }}
    >
      <ContentCopyIcon
        sx={{ fill: 'white' }}
      />
    </IconButton>
  );
}

export default function TextBox(props: { value: string, iconBeforeInput?: boolean }) {
  const { value, iconBeforeInput = false } = props;
  return (
    <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: '100%' }}
    >
      {iconBeforeInput && <CopyButton />}
      <TextField
        size="small"
        // color="primary"
        fullWidth
        sx={{ flex: 1 }}
        value={value}
      />
      {!iconBeforeInput && <CopyButton />}
    </Paper>
  );
}