import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import ApiKeyPage from '@/components/ApiKeyPage';

export default function Home() {
  return (
    <React.Fragment>
      <CssBaseline />
      <ApiKeyPage />
    </React.Fragment>
  );
}
