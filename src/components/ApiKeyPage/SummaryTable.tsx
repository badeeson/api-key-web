import { Button, Paper } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import QueryStatsSharpIcon from '@mui/icons-material/QueryStatsSharp';
import { useRouter } from 'next/navigation';

function createData(
  name: string,
  createOn: string,
  role: string,
  used: number,
) {
  return { name, createOn, role, used };
}

const rows = [
  createData('Moand', '2023-12-06', 'OWNER', 12),
  createData('Roger', '2023-12-07', 'OWNER', 0),
];

export default function SummaryTable() {
  const router = useRouter()
  const keyValue = "111-222-333-444"

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
          {rows.map((row) => (
            <TableRow
              key={row.name}
            >
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.createOn}</TableCell>
              <TableCell>{row.role}</TableCell>
              <TableCell>{row.used}</TableCell>
              <TableCell align="center" style={{ width: 160 }}>
                <Button
                  variant="text"
                  endIcon={<QueryStatsSharpIcon />}
                  onClick={() => router.push(`/key-details/${keyValue}`)}
                >
                  View&nbsp;Stats
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}