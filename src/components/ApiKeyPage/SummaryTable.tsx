import { Alert, Button, Paper, Stack } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import QueryStatsSharpIcon from '@mui/icons-material/QueryStatsSharp';
import { useRouter } from 'next/navigation';
import React from 'react';
interface PropsSummaryTable {
  tableData: {
    name: string,
    key: string,
    createdAt: string,
    maxQuotaPerDay: number,
    remainingQuota: number
  }[] | []
}

export default function SummaryTable(props: PropsSummaryTable) {
  const { tableData } = props;
  const router = useRouter();

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Create&nbsp;on</TableCell>
            <TableCell>Roles</TableCell>
            <TableCell>Used</TableCell>
            <TableCell align="center" style={{ width: 120 }}>&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.length === 0
            ? <TableRow>
              <TableCell colSpan={5}>
                <Stack sx={{ width: '100%' }} justifyContent="center">
                  <Alert severity="info" sx={{ py: 4, justifyContent: 'center', alignItems: 'center', fontSize: '16px' }}>Data not found!</Alert>
                </Stack>
              </TableCell>
            </TableRow>
            : tableData.map((
              row: {
                name: string,
                key: string,
                createdAt: string,
                maxQuotaPerDay: number,
                remainingQuota: number
              }) => {
              const d = new Date(row?.createdAt)
              const createOn = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
              const used = row?.maxQuotaPerDay - row?.remainingQuota;
              return (
                <TableRow
                  key={row.name}
                >
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{createOn}</TableCell>
                  <TableCell>OWNER</TableCell>
                  <TableCell>{used}</TableCell>
                  <TableCell align="center" style={{ width: 160 }}>
                    <Button
                      variant="text"
                      endIcon={<QueryStatsSharpIcon />}
                      onClick={() => router.push(`/key-details/${row?.key}`)}
                    >
                      View&nbsp;Stats
                    </Button>
                  </TableCell>
                </TableRow>
              )
            })
          }
        </TableBody>
      </Table>
    </TableContainer>
  );
}
