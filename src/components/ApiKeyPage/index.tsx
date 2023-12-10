"use client";

import Grid from '@mui/material/Unstable_Grid2';
import SummaryTable from '@/components/ApiKeyPage/SummaryTable';
import ApiKeyHeader from './ApiKeyHeader';
import { Box } from '@mui/material';
import CreateApiDialog from './CreateApiDialog';
import * as React from 'react';

export default function ApiKeyPage() {
  const [open, setOpen] = React.useState(false);
  const [tableData, setTableData] = React.useState([]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const fetchData = async () => {
    try {
      const res = await fetch('http://localhost:4000/api-key/all');
      const data = await res.json();
      const validData = data?.apiKeys || [];
      setTableData(validData);
      console.log('data table', data)
    } catch (err) {
      console.error(err);
    }
  }

  React.useEffect(() => {
    fetchData();
  }, [])

  return (
    <Box>
      <Grid container spacing={2}>
        <Grid xs={12} display="flex" justifyContent="space-between" alignItems="center">
          <ApiKeyHeader handleClickOpen={handleClickOpen} />
        </Grid>
        <Grid xs={12}>
          <SummaryTable
            tableData={tableData}
          />
        </Grid>
      </Grid>
      <CreateApiDialog
        open={open}
        setOpen={setOpen}
        fetchData={fetchData}
      />
    </Box>
  );
}
