'use client';

import * as React from 'react';
import { Box } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import SummaryBarChart from './SummaryBarChart';
import { datasetMethods, datasetNetworks, datasetRequests } from './dataset';

export default function DashboardPage() {
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid xs={6}>
          <SummaryBarChart
            title="Network Request Volumes"
            hasFilter
            filterTitle="All networks"
            totalUsed="33,477"
            dataset={datasetNetworks}
            xAxis={[{ scaleType: 'band', dataKey: 'time' }]}
            series={[
              { dataKey: 'getBio', label: 'eth_getBio' },
              { dataKey: 'getLog', label: 'eth_getLog' },
              { dataKey: 'call', label: 'eth_call' },
              { dataKey: 'chain', label: 'eth_chain' },
              { dataKey: 'blockn', label: 'eth_blockn' },
            ]}
          />
        </Grid>
        <Grid xs={6}>
          <SummaryBarChart
            title="Method Request Volumes"
            hasFilter
            filterTitle="All methods"
            totalUsed="33,472"
            dataset={datasetMethods}
            xAxis={[{ scaleType: 'band', dataKey: 'time' }]}
            series={[
              { dataKey: 'mainnet', label: 'mainnet' },
              { dataKey: 'sepolia', label: 'sepolia' },
              { dataKey: 'optimismM', label: 'optimism-m' },
              { dataKey: 'arbitrumM', label: 'arbitrum-m' },
              { dataKey: 'celoMainnet', label: 'celo-mainnet' },
            ]}
          />
        </Grid>
        <Grid xs={12}>
          <SummaryBarChart
            title="Requests Volume"
            totalUsed="33,428"
            showMaximum
            dataset={datasetRequests}
            xAxis={[{ scaleType: 'band', dataKey: 'time', label: 'UTC' }]}
            series={[
              { dataKey: 'requests', label: 'Requests' },
            ]}
          />
        </Grid>
      </Grid>
    </Box>
  );
}