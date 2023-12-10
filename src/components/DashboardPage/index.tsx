'use client';

import * as React from 'react';
import { Box } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import SummaryBarChart from './SummaryBarChart';

export default function DashboardPage() {
  return (
    <Box>
      <Grid container spacing={2}>
        {/* <Grid xs={6}>
          <SummaryBarChart
            title="Network Request Volumes"
            hasFilter
            filterTitle="All networks"
          />
        </Grid>
        <Grid xs={6}>
          <SummaryBarChart
            title="Method Request Volumes"
            hasFilter
            filterTitle="All methods"
          />
        </Grid> */}
        <Grid xs={12}>
          <SummaryBarChart
            title="Requests Volume"
          />
        </Grid>
      </Grid>
    </Box>
  );
}