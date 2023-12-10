"use client";

import Grid from '@mui/material/Unstable_Grid2';
import SummaryTable from '@/components/ApiKeyPage/SummaryTable';
import ApiKeyHeader from './ApiKeyHeader';
import { Box } from '@mui/material';
import CreateApiDialog from './CreateApiDialog';
import * as React from 'react';

export default function ApiKeyPage() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  return (
    <Box>
      <Grid container spacing={2}>
        <Grid xs={12} display="flex" justifyContent="space-between" alignItems="center">
          <ApiKeyHeader handleClickOpen={handleClickOpen} />
        </Grid>
        <Grid xs={12}>
          <SummaryTable />
        </Grid>
      </Grid>
      <CreateApiDialog
        open={open}
        setOpen={setOpen}
      />
    </Box>
  );
}
