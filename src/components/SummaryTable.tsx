import { Button, Paper } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

function createData(
  name: string,
  createAt: string,
  role: string,
  used: number,
) {
  return { name, createAt, role, used };
}

const rows = [
  createData('Moand', '2023-12-06', 'OWNER', 12),
  createData('Roger', '2023-12-07', 'OWNER', 0),
];

export default function SummaryTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Create&nbsp;at</TableCell>
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
              <TableCell>{row.createAt}</TableCell>
              <TableCell>{row.role}</TableCell>
              <TableCell>{row.used}</TableCell>
              <TableCell align="center" style={{ width: 160 }}>
                <Button variant="text">View&nbsp;Status</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
